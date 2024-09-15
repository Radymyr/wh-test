'use strict';

import { bot, fastify } from './initialized.js';

fastify.get('/', async (req, reply) => {
  reply.status(200).send('Webhook is working');
});

fastify.post('/webhook', async (req, replay) => {
  console.log(req.body);
  await bot.handleUpdate(req.body);
  bot.on('message', async (ctx) =>
    ctx.reply(`||${ctx.message.text}||`, { parse_mode: 'Markdown' })
  );
  replay.status(200).send('success');
});

const startServer = async (request, replay) => {
  await fastify.ready();
  fastify.server.emit('request', request, replay);
};

export default startServer;
