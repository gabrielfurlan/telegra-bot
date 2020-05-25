const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1199915960:AAFc_QdqxjcSWUE3ZSbLELxq1K9qGca10hQ';
 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, msg.text);
  });
  

  bot.sendMessage(chatId, resp);
  // send back the matched "whatever" to the chat
});


bot.on('new_chat_members', (msg) => {
  console.log('entro', msg);
});

bot.on('left_chat_member', (msg) => {
  console.log('saiu', msg);
});

bot.on('group_chat_created', (msg) => {
  console.log('/n/n/n/ncriou um chat sinistro', msg);
});

