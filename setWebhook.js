import { bot } from './initialized.js';

const setWebhookToTelegram = async () => {
  return await bot.telegram.setWebhook(
    'https://wh-test-wheat.vercel.app/webhook'
  );
};

setWebhookToTelegram();
bot.telegram.getWebhookInfo().then((info) => console.log(info));
