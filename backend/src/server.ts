import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'

const app = fastify({
  logger: true
});

// app.get('/products', async function handler(request, reply) {
//   try {
//     const products = await knex('products').insert({
//       id: crypto.randomUUID(),
//       title: 'Vela de Baunilha',
//       description: 'Vela aromática de Baunilha 100g',
//       price: 10,
//       stock_quantity: 5,
//     }).returning('*')

//     return reply.send(products);
//   } catch (error) {
//     reply.status(500).send({ error: 'Failed to fetch products' });
//   }
// });

app.get('/products', async function handler(request, reply) {
  try {
    const products = await knex('products').select('*')

    return reply.send(products)
  } catch (error) {
    reply.status(500).send({ error: 'Failed to fetch products' });
  }
});

// app.get('/orders', async function handler(request, reply) {
//   try {
//     const orders = await knex('orders').select('*');

//     return reply.send(orders);
//   } catch (error) {
//     reply.status(500).send({ error: 'Failed to fetch orders' });
//   }
// });

(async () => {
  try {
    await app.listen({ port: env.PORT });
    console.log('HTTP Server Running');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
