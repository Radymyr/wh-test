import { bot } from './initialized.js';

const setWebhookToTelegram = async () => {
  return await bot.telegram.setWebhook(
    'https://3ef3-46-185-25-131.ngrok-free.app/webhook'
  );
};

setWebhookToTelegram();
bot.telegram.getWebhookInfo().then((info) => console.log(info));
