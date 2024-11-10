import fastify from 'fastify'
import fastifyJwt from 'fastify-jwt'
import cookie from '@fastify/cookie'
import { fastifyCors } from '@fastify/cors'

import { env } from './env'

import { productsRoutes } from './routes/products'
import { usersRoutes } from './routes/users'
import { cartRoutes } from './routes/cart'
import { categoriesRoutes } from './routes/categories'
import { productCategoriesRoutes } from './routes/productCategories'

const app = fastify({
  logger: true
});

// Register de configuração de qual domínio tem acesso as requisições no backend
app.register(fastifyCors, {
  origin: "http://localhost:3000",
  credentials: true,
})

app.register(cookie)

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
app.register(cartRoutes, {
  prefix: 'cart'
});
app.register(categoriesRoutes, {
  prefix: 'categories'
})
app.register(productCategoriesRoutes, {
  prefix: 'product-categories'
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
