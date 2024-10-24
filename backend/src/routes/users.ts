import { FastifyInstance } from "fastify"
import { z } from "zod"
import crypto from 'node:crypto'
import { knex } from "../database"
import { hash } from 'bcrypt'

export async function usersRoutes(app: FastifyInstance) {
    // Criar Usuário
    app.post('/', async function handler(request, reply) {
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
}
