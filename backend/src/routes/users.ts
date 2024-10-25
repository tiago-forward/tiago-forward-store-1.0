import { FastifyInstance } from "fastify"
import { z } from "zod"
import crypto from 'node:crypto'
import { knex } from "../database/database"
import { hash, compare } from "bcrypt"
import { authenticate } from "../middlewares/auth"

export async function usersRoutes(app: FastifyInstance) {
    // Criar Usuário
    app.post('/register', async function handler(request, reply) {
        const createUserBodySchema = z.object({
            name: z.string(),
            email: z.string().email(),
            password_hash: z.string().min(6).regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/), // Password deve conter letras maiúsculas, dígitos e caracteres especiais
        })

        try {
            const { name, email, password_hash } = createUserBodySchema.parse(request.body)

            const existingUser = await knex('users').where('email', email).first()

            if (existingUser) {
                return reply.status(400).send({ error: 'Email already exists' })
            }

            const passwordHash = await hash(password_hash, 10)

            const newUser = await knex('users').insert({
                id: crypto.randomUUID(),
                name,
                email,
                password_hash: passwordHash,
            }).returning(['id', 'name', 'email'])

            return reply.status(201).send({
                message: 'User created successfully',
                newUser
            })

        } catch (error) {
            if (error instanceof z.ZodError) {
                return reply.status(400).send({ error: 'Invalid input data', details: error.errors })
            }

            return reply.status(500).send({ error: 'Failed to create user' })
        }
    })

    // Autenticando Usuário
    app.post('/login', async function handler(request, reply) {
        const loginBodySchema = z.object({
            email: z.string().email(),
            password_hash: z.string().min(6).regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/),
        })

        try {
            const { email, password_hash } = loginBodySchema.parse(request.body)

            const user = await knex('users').where('email', email).first()

            if (!user) {
                return reply.status(400).send({ error: 'Invalid email or password' })
            }

            const validPassword = await compare(password_hash, user.password_hash)

            if (!validPassword) {
                return reply.status(400).send({ error: 'Invalid email or password' })
            }

            const token = app.jwt.sign(
                { id: user.id, name: user.name, email: user.email },
                { expiresIn: '30d' }
            )

            return reply.status(200).send({
                message: 'Login successful',
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            })

        } catch (error) {
            if (error instanceof z.ZodError) {
                return reply.status(400).send({ error: 'Invalid input data', details: error.errors })
            }

            return reply.status(500).send({ error: 'Failed to authenticate user' })
        }
    })

    // Middleware de Autenticação
    // app.addHook('onRequest', async (request, reply) => {
    //     try {
    //         await request.jwtVerify()
    //     } catch (err) {
    //         return reply.status(401).send({ error: 'Unauthorized' })
    //     }
    // })

    // Rota Protegida - Detalhes do Usuário
    app.get('/profile', { preHandler: [authenticate] }, async function handler(request, reply) {
        // Aqui o JWT já foi validado pelo middleware
        return reply.status(200).send({
            message: 'Welcome to your profile',
            user: request.user // O request.user contém os dados do utilizador extraídos do JWT
        })
    })
}
