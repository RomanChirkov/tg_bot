const  { Telegraf, Input } = require('telegraf');
const { message } = require('telegraf/filters')

const fs = require('fs');
const token = fs.readFileSync('realpassword.txt', 'utf8');

const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply('Бот работает, ура!'));
//bot.help((ctx) => ctx.reply('Отправь мне стикер'));
//bot.on(message('sticker'), (ctx) => ctx.reply('Классный стикер!'));
//bot.hears('Лох', (ctx) => ctx.reply('Сам лох!'))
bot.hears('Гифка', async (ctx) => {
    ctx.replyWithAnimation(Input.fromURLStream('https://cataas.com/cat/gif'));
   console.log(ctx.message.from.username)
   console.log(ctx.message.text)
   
});
bot.hears('Рандом', async (ctx) => {
    ctx.replyWithPhoto(Input.fromURLStream('https://cataas.com/cat'));
   console.log(ctx.message.from.username)
   console.log(ctx.message.text)
   
});
bot.hears(message, async (ctx) => {

    ctx.replyWithPhoto(Input.fromURLStream('https://cataas.com/cat/says/' + ctx.message.text));
   console.log(ctx.message.from.username)
   console.log(ctx.message.text)
   
});



bot.startPolling();

//xdd