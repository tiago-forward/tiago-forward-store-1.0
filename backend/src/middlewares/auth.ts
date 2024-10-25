import { FastifyRequest, FastifyReply } from 'fastify'

// Middleware de Autenticação
export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    try {
        await request.jwtVerify() // Verifica o token JWT
    } catch (err) {
        return reply.status(401).send({ error: 'Unauthorized' }) // Responde com 401 se o token for inválido ou ausente
    }
}
