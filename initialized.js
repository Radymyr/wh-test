'use strict';

import { Telegraf } from 'telegraf';
import Fastify from 'fastify';
import 'dotenv/config';

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;

export const fastify = Fastify({ logger: true });
export const bot = new Telegraf(telegramBotToken);
