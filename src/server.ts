import express from 'express';
import {env} from './env';
import {routes} from './routes';
import { sequelize } from './db/database';

const app = express();

app.use(express.json());
app.use(routes);

async function startServer() {
  try {
    await sequelize.sync({alter: true});
    console.log(`✅ DATABASE Connected: ${env.DB_NAME}`);

    app.listen({port: env.PORT}, () => {
      console.log(`🚀 HTTP Server started on PORT:${env.PORT}`);
    });
  }catch (error) {
    console.error('❌Falha Critica na Inicialização:', error);
    process.exit(1);
  }
}

startServer();
// sequelize.sync({alter: true})
// app.listen({ port: env.PORT }, () => {
//   console.log(`HTTP Server started on PORT:${env.PORT}`)
// })