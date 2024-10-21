import fastify from 'fastify';
import { knex } from './database';

const app = fastify({
  logger: true
});

app.get('/products', async function handler(request, reply) {
  try {
    const products = await knex('products').select('*');

    return reply.send(products);
  } catch (error) {
    reply.status(500).send({ error: 'Failed to fetch products' });
  }
});

(async () => {
  try {
    await app.listen({ port: 3333 });
    console.log('HTTP Server Running');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
