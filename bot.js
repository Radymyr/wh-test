'use strict';

import { bot, fastify } from './initialized.js';

fastify.get('/', async (req, reply) => {
  reply.status(200).send('Webhook is working');
});

fastify.post('/webhook', async (req, replay) => {
  console.log(req.body);
  await bot.handleUpdate(req.body);

  replay.status(200).send('success');
});

const startServer = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

export default startServer;
