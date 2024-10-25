import fastify from 'fastify'
import { env } from './env'
import { productsRoutes } from './routes/products'
import { usersRoutes } from './routes/users'
import fastifyJwt from 'fastify-jwt'

const app = fastify({
  logger: true
});

// Registar o plugin fastify-jwt
app.register(fastifyJwt, {
  secret: 'supersecretkey'
});

// Registar rotas
app.register(usersRoutes, {
  prefix: 'account'
});
app.register(productsRoutes, {
  prefix: 'products'
});

// Inicializar servidor
(async () => {
  try {
    await app.listen({ port: env.PORT });
    console.log('HTTP Server Running');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
