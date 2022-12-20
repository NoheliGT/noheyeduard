const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");
var request = require("request");
var requestPromise = require("request-promise");
var cheerio = require("cheerio");
const SpamWatch = require("spamwatch");
var axios = require("axios").default;
//const reverseImageSearch = require("node-reverse-image-search");
const raejs = require("@jodacame/raejs");
var toUnicode = require("to-unicode");
var telefile = require("telefile");
const AnimeScraper = require("exa-anime-scraper");
const anime = new AnimeScraper.Animefenix();
const randomanime = require("random-anime");
const { Character } = require("mailist");
const translate = require("@vitalets/google-translate-api");
const googleTTS = require("google-tts-api");
const { AnimeWallpaper } = require("anime-wallpaper");
const wall = new AnimeWallpaper();
const { MongoClient } = require("mongodb");
var express = require("express");
const aniquote = require("aniquotes-npm");
const { randomQuote, getQuotesByAnime } = require("aniquotes-npm");
const quotes = require("aniquotes-npm/quotes");
const imgur = require("imgur");
var gis = require("g-i-s");
//const pokemoninfo = require("pokemoninfo"); uu
var convertapi = require("convertapi")("RGaQlTBWCjkfw889");
var tcpp = require('tcp-ping');


const google = require("googlethis");

var app = express();

const port =  process.env.PORT || 4000;
app.listen(port);
app
  .get("/", (request, response) => {
    var result = "Bot listo!";
    response.send(result);
  })

//mongodb+srv://noheAdmin:nohepass21@cluster0.ujzdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoose = require("mongoose");
const path = require("path");
const uri = `mongodb+srv://noheAdmin:nohepass21@cluster0.ujzdq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
/*const uri =
  "mongodb://noheAdmin:nohepass21@localhost/nohebot?retryWrites=true&w=majority";*/
let clientMongo = new MongoClient(uri);
/*mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });*/
/*BETA = 1989987277:AAGGsN0BaY159lesiRy8ZRMoAtFi0vlp2UU*/
/*ORIGINAL = 1785797976:AAG96u7KAB4Ee6pUUBPE7FmdXyYKCYGqXHE*/
const bot = new TelegramBot("1785797976:AAG96u7KAB4Ee6pUUBPE7FmdXyYKCYGqXHE", {
  polling: true,
});

const client = new SpamWatch.Client(
  "BfIfgL9JHEcMouxYYDrvkeA8lIQo5zwjjICiObGqn1fx_8hTKdDXGhGMftQgYwXJ"
);

/**************************************************COMANDO START**************************************************/
var bannedPeople = getBanned();
bot.onText(/^\/start/, (msg) => {
  if (msg.chat.type == "supergroup") {
    bot.sendAnimation(
      msg.chat.id,
      "https://c.tenor.com/UwcXterWU84AAAAC/gawr-gura-hololive.gif",
      {
        caption:
          "🦈_¡Gawr Gura presente en el grupito!, ¡Considera hacerme administradora para acceder a todos mis comandos!_",
        parse_mode: "Markdown",
      }
    );
  }
  if (msg.chat.type == "private") console.log(msg);
  {
    bot.sendPhoto(
      msg.from.id,
      "https://images6.alphacoders.com/112/1123926.jpg",
      {
        caption: `*Hi, ¡Hi🦈!* [${msg.from.first_name}](tg://user?id=${msg.from.id}) \n\n_¡Has comenzado una nueva aventura conmigo Gawr Gura!, Ahora dejame mostrarte lo que puedo hacer por ti._  \n\n*¡Vamos!* dale a /help.`,
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "➕Añadir a un grupo",
                url: "http://t.me/gawrgurahelperbot?startgroup=true",
              },
              {
                text: "⛑Soporte",
                url: "http://t.me/GawrGuraSoporte",
              },
            ],
          ],
        },
      }
    );
  }
});

/**************************************************ID USUARIOS**************************************************/
bot.onText(/^\/myid/, (msg) => {
  const chatId = msg.chat.id;
  const myId = msg.from.id;
  bot.sendMessage(chatId, `<b>🔐Tú ID es:</b> <code>${myId}</code>`, {
    parse_mode: "HTML",
  });
});

bot.onText(/^\/id/, (msg) => {
  const chatId = msg.chat.id;
  const myId = msg.from.id;
  bot.sendMessage(chatId, `<b>🔐Tú ID es:</b> <code>${myId}</code>`, {
    parse_mode: "HTML",
  });
});

bot.onText(/^\/usuariosgban/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendDocument(chatId, "UsuariosGban.txt")

});



bot.onText(/^\/chatid/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `<b>🔏ID del chat:</b> <code>${chatId}</code>`, {
    parse_mode: "HTML",
  });
});

bot.onText(/^\/userid/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.reply_to_message.from.id;

  bot.sendMessage(chatId, `<b>🔓ID del usuario:</b> <code>${userId}</code>`, {
    parse_mode: "HTML",
  }),
    { parse_mode: "Markdown" };
});

/**************************************************REACCIONES**************************************************/
bot.onText(/^\/besar|^\/kiss/, (msg) => {
  var chatid = msg.chat.id;
  var messageId = msg.reply_to_message.from.first_name;
  const usuario = msg.from.first_name;
  const usersId = msg.reply_to_message.from.first_name;
  var admins = [
    "https://i.pinimg.com/originals/49/7a/55/497a5523d9b1ca23db84ecc3f5d8b1b3.gif",
    "https://acegif.com/wp-content/uploads/anime-kissin-5.gif",
    "https://i.pinimg.com/originals/6e/4f/fe/6e4ffe54a38656cda96ba3eec67c84b4.gif",
    "https://pa1.narvii.com/6173/714eeee74086a0adc1bdb93dd4a08ae4220bbec2_hq.gif",
    "https://i.pinimg.com/originals/ed/32/69/ed32698a1bb485b468cc99ddee945262.gif",
    "http://24.media.tumblr.com/tumblr_mb8trrExBk1ri3gxjo1_500.gif",
    "https://i.pinimg.com/originals/51/ee/1d/51ee1d94c47ac1174faf0d96d235e230.gif",
    "https://pa1.narvii.com/6115/78610e720cfec15460c020944b82fa28039d7ccc_hq.gif",
    "http://media.tumblr.com/57bd69c651a73ebe9cc340a46c706071/tumblr_inline_msdi2rHe7K1qz4rgp.gif",
    "https://i.pinimg.com/originals/68/a3/7a/68a37a5a1b86f227b8e1169f33a6a6bb.gif",
    "https://pa1.narvii.com/6529/558f56a06e539d3a9a14129a8525146b7ec411de_hq.gif",
    "https://33.media.tumblr.com/e5765dd579dc350a7990fe4cf164dc03/tumblr_nov5rzKtlq1qcsnnso1_r1_500.gif",
    "https://i.pinimg.com/originals/1a/28/fc/1a28fcd6dd85f4ed3e1ed7f5a434be1a.gif",
    "https://i.pinimg.com/originals/b3/4e/9a/b34e9ad3669ba1fa5245bcf6df83d381.gif",
    "https://i.pinimg.com/originals/b4/5c/16/b45c168535287ee83608afddff5a5d4a.gif",
    "https://i2.wp.com/pa1.narvii.com/6161/a30a112603de88b1bc10225e64fa90335b37c60a_hq.gif",
    "https://acegif.com/wp-content/uploads/anime-kissin-2.gif",
    "https://i.pinimg.com/originals/84/77/59/84775946c793c41c1f873b3bc442a21a.gif",
    "https://64.media.tumblr.com/eff1418550734e09a8691f70e60b53d5/tumblr_ptrig5k7YM1yr7bp2o1_500.gif",
    "https://pa1.narvii.com/6384/3da5de57dfa30c037359a70a4b978aba113b50ac_hq.gif",
    "https://cutewallpaper.org/21/wallpapers-anime-besos/5-Personajes-del-Anime-que-tuvieron-sus-peores-besos-A-.gif",
    "https://64.media.tumblr.com/081c59db42ca7a95b07d54120bcccb1f/fdb324f2f23a9e00-07/s500x750/64ba0f54531721dcf0096ebd51321f4126d8d7f2.gif",
    "https://giffiles.alphacoders.com/172/172283.gif",
    "https://thumbs.gfycat.com/SoreUnitedAfricanmolesnake-max-1mb.gif",
    "https://i.pinimg.com/originals/86/d4/a0/86d4a046c8a32a28341353fc95bedc82.gif",
    "https://pa1.narvii.com/6173/d3da59e3ac5fd46d87b5f818cf171f48edc7560a_hq.gif",
    "https://d.wattpad.com/story_parts/464139748/images/14e03fe32d86cef5351472269315.gif",
    "https://pa1.narvii.com/6301/4d0f88089b1647834d6c508f7aee854417f8df98_hq.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-10.gif",
    "https://c.tenor.com/ali-zPMJvRsAAAAC/kiss-anime.gif",
    "https://c.tenor.com/dJU8aKmPKAgAAAAd/anime-kiss.gif",
    "https://pa1.narvii.com/6185/596ee732de1e5492dad5e241768d63a540965013_hq.gif",
    "https://c.tenor.com/hc2ZCXLcH5AAAAAC/hakuoki-hakuouki.gif",
  ];
  var ma = Math.random();
  var margarita = Math.floor(ma * admins.length);

  var frases = [
    `_Aw_ [${usuario}](tg://user?id=${msg.from.id}) _le ha dado un beso a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}).`,
    `[${usuario}](tg://user?id=${msg.from.id}) _le ha lanzado un beso a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}), _¡Qué tierno!_`,
    `[${usuario}](tg://user?id=${msg.from.id}) _le ha dado un beso a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}), _¿Que esperas?, ¡Corresponde!._`,
    `¡[${usuario}](tg://user?id=${msg.from.id}) _te ha dado un beso!_ \n_Me dió diabetes de tanta dulzura 🥺🍫._`,
  ];
  var ma = Math.random();
  var flor = Math.floor(ma * frases.length);
  bot.sendAnimation(chatid, admins[margarita], {
    caption: frases[flor],
    parse_mode: "Markdown",
  });

});

bot.onText(/^\/abrazar|^\/hug/, (msg) => {
  var chatid = msg.chat.id;
  var messageId = msg.reply_to_message.from.first_name;
  const usuario = msg.from.first_name;
  const usersId = msg.reply_to_message.from.first_name;
  var admins = [
    "https://pa1.narvii.com/6736/f96e469b50b5d2fe42e984428ed52f3ba52c1049_hq.gif",
    "https://i.pinimg.com/originals/b5/1d/f1/b51df18c3a0ebe6ddff723cf3103e174.gif",
    "https://i.pinimg.com/originals/a4/13/4f/a4134f06e210a7540ca20ae165dc457f.gif",
    "https://pa1.narvii.com/6218/15e0de4c19e4c435cb4b006db90c589d49d3e85b_hq.gif",
    "https://acegif.com/wp-content/gif/anime-hug-25.gif",
    "https://acegif.com/wp-content/gif/anime-hug-6.gif",
    "https://www.animesk.net/wp-content/uploads/2021/02/1464713222_tumblr_nzcjk5Wv0t1u9ia8fo1_500.gif",
    "https://pa1.narvii.com/6187/4470c2d3a9b3b188d1ef78618a4e1d441a97b2dd_hq.gif",
    "https://pa1.narvii.com/6341/c5468efca250c5f539513e127acf1c44b6b3f95a_hq.gif",
    "https://gifimage.net/wp-content/uploads/2017/10/cuddle-anime-gif-8.gif",
    "https://acegif.com/wp-content/gif/anime-hug-43.gif",
    "https://acegif.com/wp-content/gif/anime-hug-68.gif",
    "https://i.gifer.com/8Hox.gif",
    "https://pa1.narvii.com/6567/2bc345f9d4cd3201a7369325b59dca951dcec28f_hq.gif",
    "https://64.media.tumblr.com/14f5e0c6ef88280f75017987302a7dad/tumblr_o0kiehTtWq1tlmyzco1_500.gif",
    "https://media1.tenor.com/images/3b1453b46de9c6eee1af9247f750a695/tenor.gif",
    "https://acegif.com/wp-content/gif/anime-hug-65.gif",
    "https://i.pinimg.com/originals/42/92/2e/42922e87b3ec288b11f59ba7f3cc6393.gif",
    "https://i.pinimg.com/originals/51/2a/f3/512af31e377153959dbad5b888d22af1.gif",
    "https://c.tenor.com/By2107f9T-sAAAAC/anime-hearts.gif",
    "https://64.media.tumblr.com/81efe5844e27093f80e1cd687f8ee6d0/tumblr_prpcsjl5iw1x82plio1_500.gif",
    "https://c.tenor.com/N2stzDlUrxAAAAAM/loli-hug.gif",
    "https://i.pinimg.com/originals/93/2c/2f/932c2f0c043797342f40c6892ffc93eb.gif",
    "https://i.pinimg.com/originals/31/d2/3c/31d23cb7e7f199a0524eb2a95eeb6397.gif",
    "http://pa1.narvii.com/6692/c98bb1cdbf23892b06fab54fb22c54ddcffb5e4e_00.gif",
    "http://pa1.narvii.com/6730/f762bcac2bec625ef27e6f88547a6c960bce34c2_00.gif",
    "https://i.pinimg.com/originals/3b/b6/f7/3bb6f7a7e8562391c1bbe068c6923d1b.gif",
    "https://c.tenor.com/MroXMbycbZwAAAAC/violet-evergarden-evergarden.gif",
    "https://c.tenor.com/WMJBDcjhvU4AAAAC/anime-hug.gif",
    "http://24.media.tumblr.com/e4f64bd03f3dc50b8ac8bb10a9280b04/tumblr_mqdzqi7HBG1rhls6ro7_500.gif",
    "https://c.tenor.com/2VVGNLi-EV4AAAAC/anime-cute.gif",
    "https://c.tenor.com/gowinK__PvAAAAAC/anime-cuddle.gif",
    "https://c.tenor.com/ZkVri7cjx9IAAAAC/anime-cuddle.gif",
    "https://c.tenor.com/wwd7R-pi7DIAAAAC/anime-cuddle.gif",
    "https://c.tenor.com/OaSQqWO4-YUAAAAC/snuggle-anime.gif",
    "https://c.tenor.com/qr-CxJEClOAAAAAd/anime-anime-hug.gif",
    "https://c.tenor.com/kzNBbQZZfkAAAAAC/anime-girl-hug.gif",
    "https://c.tenor.com/cFhjNVecNGcAAAAC/anime-hug.gif",
    "https://c.tenor.com/SIw6C9wrgPUAAAAC/anime-hug.gif",
    "https://c.tenor.com/1GDpumaCq_4AAAAC/anime-hug.gif",
    "https://data.whicdn.com/images/209340466/original.gif",
    "https://64.media.tumblr.com/f5d8a821d7f22d988067858aa3dd8723/8835470572022f29-d9/s640x960/5277fd92c9c575b590cb1fcf3f84259c25a9cc5b.gif",
    "https://c.tenor.com/owaI_7iiqLMAAAAC/anime-cuddle.gif",
    "https://i.gifer.com/9mvj.gif",
    "https://c.tenor.com/IQSTvUuYTNIAAAAC/anime-hug.gif",
    "https://c.tenor.com/qmdvnU8_D6EAAAAC/anime-yuri-yuri.gif",
  ];
  var ma = Math.random();
  var margarita = Math.floor(ma * admins.length);

  var frases = [
    `[${usuario}](tg://user?id=${msg.from.id}) _ha abrazado a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) _¡Ay que lindo es el amor! :3_`,
    `_Un abrazo es un poema escrito en la piel._ \n[${usuario}](tg://user?id=${msg.from.id}) _te ha dado un abrazo.🥺_`,
    `[${usersId}](tg://user?id=${msg.reply_to_message.from.id}) _por estas razones y por muchas más..._ \n_Hoy te envío mi más cálido abrazo._\n\n*Atte:* [${usuario}](tg://user?id=${msg.from.id})`,
    `[${usuario}](tg://user?id=${msg.from.id}) _abrazó a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}), _Tierno abrazo de enamorados OwO✨_`,
    `¡[${usuario}](tg://user?id=${msg.from.id}) _ha envuelto en el viento..._ _y ha hecho tocar las nubes a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) _con un abrazo_🥺.`,
    `[${usuario}](tg://user?id=${msg.from.id}) _ha tomado por sorpresa a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) _para darle un abrazo_😳 _¡Abraza y déjate abrazar!_😘`,
    `[${usuario}](tg://user?id=${msg.from.id}) _guardó su abrazo en una caja, la ha regalado a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) _y encontró un tierno abrazó_🥰, _Aw_💞`,
    `_🙇🏻‍♀Siente la presencia de mi afecto envuelta en este abrazo_👊 [${usersId}](tg://user?id=${msg.reply_to_message.from.id})🤍`,
    `[${usuario}](tg://user?id=${msg.from.id}) _Ha depositado un abrazo_👩‍❤️‍👨 _en Fedex_🚍 _con destino a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id})... \n\n✈️_En Camino..._ \n\n_...Recibido_💌\n\n🧸_Abrazo recibido a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id})📩`,
  ];
  var ma = Math.random();
  var flor = Math.floor(ma * frases.length);
  bot.sendAnimation(chatid, admins[margarita], {
    caption: frases[flor],
    parse_mode: "Markdown",
  });
});

bot.onText(/^\/golpear|^\/kill/, (msg) => {
  var chatid = msg.chat.id;
  var messageId = msg.reply_to_message.from.first_name;
  const usuario = msg.from.first_name;
  const usersId = msg.reply_to_message.from.first_name;
  var admins = [
    "https://i.pinimg.com/originals/5d/66/53/5d6653cbc35353cc21029f147315e515.gif",
    "https://i.pinimg.com/originals/1b/82/04/1b82042e3aa9aba909fbe21a4d23fa1e.gif",
    "https://pa1.narvii.com/6524/da106b569d1721e3e16dad0b33ed774864c5e695_hq.gif",
    "https://media.gentokyo.moe/2016/07/patada-anime.gif",
    "https://pa1.narvii.com/6443/3d6f906a805cdc9d9b8999b98f018ede96a2fceb_hq.gif",
    "http://static.fjcdn.com/gifs/MM_966fc2_1916375.gif",
    "https://64.media.tumblr.com/58a631cfafc2f9961cf506a2d7a8d09a/0ec4c54ebef5d375-2f/s500x750/757e0f8646e2a9e77f15a49e4fd22beae851beff.gif",
    "https://i.pinimg.com/originals/fa/ee/13/faee1354927024de8d21c784ac48042d.gif",
    "https://pa1.narvii.com/6883/4e59bec2e68b3ffcad3cd58d12876ef15316421er1-540-220_hq.gif",
    "https://i.pinimg.com/originals/0a/31/aa/0a31aac25ca540a2370baac5371e7dda.gif",
    "http://pa1.narvii.com/6180/89fe3ef452fe1e1d04916e1cb43af24aa492fc89_00.gif",
    "https://i.pinimg.com/originals/92/16/cc/9216cc9ca468c6b2482054e45edac32c.gif",
    "https://media1.tenor.com/images/a78d54cea15f59bdba220ba032881381/tenor.gif",
    "https://i.gifer.com/QVlJ.gif",
    "https://i.pinimg.com/originals/5c/c9/94/5cc9941cf038d73d40c72d35aabfd4be.gif",
    "https://pa1.narvii.com/6063/5b31121b4d3ff886a860ffd0218a8d098d86f5a8_hq.gif",
    "https://media.tumblr.com/tumblr_m3c3phvHrE1qcy7dd.gif",
    "https://media1.tenor.com/images/427a88a4156db1f6ab11b3e38b0ca7d4/tenor.gif?itemid=13583613",
    "http://pa1.narvii.com/6064/eefb956da831e99d37e961d834635e4497549ef0_00.gif",
  ];
  var ma = Math.random();
  var margarita = Math.floor(ma * admins.length);

  var frases = [
    `[${usuario}](tg://user?id=${msg.from.id}) _ha golpeado a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}).`,
    `[${usuario}](tg://user?id=${msg.from.id}) _reventó su furia contra_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}).`,
    `[${usersId}](tg://user?id=${msg.reply_to_message.from.id}) _hizó explotar la furia de_ [${usuario}](tg://user?id=${msg.from.id}) _y le dió ¡tremendo golpe!_👊`,
    `[${usuario}](tg://user?id=${msg.from.id}) _humilló a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) _enfrente de todo el grupo con una bofetada, ¡Qué verguenza!_🐿`,
    `[${usuario}](tg://user?id=${msg.from.id}) _acaba de abofetear a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) _porfavor deja el cringe._`,
    `[${usuario}](tg://user?id=${msg.from.id}) _terminó dandole su merecido a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) _¡Denle ban!_🐍`,
  ];
  var ma = Math.random();
  var flor = Math.floor(ma * frases.length);
  bot.sendAnimation(chatid, admins[margarita], {
    caption: frases[flor],
    parse_mode: "Markdown",
  });
});

bot.onText(/^\/spank|^\/nalguear/, (msg) => {
  var chatid = msg.chat.id;
  var messageId = msg.reply_to_message.from.first_name;
  const usuario = msg.from.first_name;
  const usersId = msg.reply_to_message.from.first_name;
  var admins = [
    "http://78.media.tumblr.com/3e7570c4c0a26319ea775c7f00868af5/tumblr_nr6b8bu2EL1uphzezo6_1280.gif",
    "https://i.pinimg.com/originals/3a/dc/a4/3adca43b113b59bf8e614e8a3e752600.gif",
    "https://pa1.narvii.com/6336/3020c54eacc8e34ef625f81704c0c1fe38c1b3dc_hq.gif",
    "http://25.media.tumblr.com/b771c224be34704f6de4ff83c5af63d2/tumblr_mggwiyDVwq1r1vlnro2_500.gif",
    "https://thumbs.gfycat.com/AggressiveWellwornAsianpiedstarling-max-1mb.gif",
    "https://media.giphy.com/media/zkn7frya243hm/giphy.gif",
    "http://pa1.narvii.com/6163/da0cbdd716ff04ad0e56895aaf6b8d90baa11111_00.gif",
    "https://static.hentai-gif-anime.com/upload/20200809/79/160434/detail.gif",
    "https://static.hentai-gif-anime.com/upload/20200809/79/160432/detail.gif",
    "https://images.uncyc.org/commons/b/b6/1230464402072.gif",
    "https://gifimage.net/wp-content/uploads/2018/10/anime-girl-spank-gif-4.gif",
    "https://pa1.narvii.com/6408/7a8ce10f96e7aba53e8132f8e3874e99e21dc77f_hq.gif",
  ];
  var ma = Math.random();
  var margarita = Math.floor(ma * admins.length);

  var frases = [
    `[${usuario}](tg://user?id=${msg.from.id}) _ha nalgueado a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}), _es por tú bien._🍑`,
    `🍑_Nalgadita para_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}).`,
    `[${usersId}](tg://user?id=${msg.reply_to_message.from.id}) _recibió una nalgadita de_ [${usuario}](tg://user?id=${msg.from.id}).🍑`,
  ];
  var ma = Math.random();
  var flor = Math.floor(ma * frases.length);
  bot.sendAnimation(chatid, admins[margarita], {
    caption: frases[flor],
    parse_mode: "Markdown",
  });
});

bot.onText(/^\/pat|^\/cariciar/, (msg) => {
  var chatid = msg.chat.id;
  var messageId = msg.reply_to_message.from.first_name;
  const usuario = msg.from.first_name;
  const usersId = msg.reply_to_message.from.first_name;
  var admins = [
    "https://i.pinimg.com/originals/8b/42/6c/8b426c9bedc37054cd7e73925fa10da5.gif",
    "https://media1.tenor.com/images/8b5711095b0ba786c43b617bf9c675dd/tenor.gif?",
    "http://pa1.narvii.com/6116/bf46ce79cc54f88b17ccc79d8f5c40a07c158986_00.gif",
    "https://pa1.narvii.com/6136/ddfd684f829b9a6a03f40c04b4f2dbc54affa0d6_hq.gif",
    "http://pa1.narvii.com/6078/e81d2cb8d0b80d7055d135575cbc895e6dcb54fc_00.gif",
    "https://pa1.narvii.com/6051/3bc01dc8e0cd0d3c1d837421fa4471c6150fcf83_hq.gif",
    "https://pa1.narvii.com/6300/027ccb63dc7d2d3dd6a7cedf280853360310ebf5_hq.gif",
    "https://pa1.narvii.com/6300/8e9f29a3e8d56c8bb4edab7ec0e70af9d2ccc871_hq.gif",
  ];
  var ma = Math.random();
  var margarita = Math.floor(ma * admins.length);

  var frases = [
    `[${usuario}](tg://user?id=${msg.from.id}) le ha dado una palmadita a [${usersId}](tg://user?id=${msg.reply_to_message.from.id}), _Aw, que tierno._💚`,
    `_Pat, Pat para_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}).💘`,
    `owo [${usuario}](tg://user?id=${msg.from.id}) _acaba de dar una tierna caricia_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}). -Ya, ya.💜`,
    `[${usuario}](tg://user?id=${msg.from.id}) _a acariciado_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}).🤍`,
  ];
  var ma = Math.random();
  var flor = Math.floor(ma * frases.length);
  bot.sendAnimation(chatid, admins[margarita], {
    caption: frases[flor],
    parse_mode: "Markdown",
  });
});

/**************************************************REACCIONES PERSONALIZADAS**************************************************/

bot.onText(/\/rbesar (.+)/, (msg, match) => {
  var chatid = msg.chat.id;
  const razon = match[1];
  var messageId = msg.reply_to_message.from.first_name;
  const usuario = msg.from.first_name;
  const usersId = msg.reply_to_message.from.first_name;
  var admins = [
    "https://i.pinimg.com/originals/49/7a/55/497a5523d9b1ca23db84ecc3f5d8b1b3.gif",
    "https://pa1.narvii.com/6098/65c9515218349a760663e31056fb030d9bd75015_hq.gif",
    "https://i.gifer.com/Jr4.gif",
    "https://i.pinimg.com/originals/63/25/8f/63258f26e4500bab94c5f15665daa48b.gif",
    "https://pa1.narvii.com/6120/2d5a229df8e3efa93096ce438cd8477e163c475f_hq.gif",
    "https://acegif.com/wp-content/uploads/anime-kiss-29.gif",
    "https://i.pinimg.com/originals/97/2c/2e/972c2eb564b9936ab05ffa960c1c632e.gif",
    "https://media1.tenor.com/images/ea51c3a083c73bf81a3c5ee6d4165115/tenor.gif",
    "https://i.pinimg.com/originals/9a/a8/7e/9aa87eb823b8c571fa14c75fc2576241.gif",
  ];
  var ma = Math.random();
  var margarita = Math.floor(ma * admins.length);

  bot.sendAnimation(chatid, admins[margarita], {
    caption: `[${usuario}](tg://user?id=${msg.from.id}) _le ha dado un beso a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) ❤️ \n\n*💋Motivo del beso:* ${razon}`,
    parse_mode: "Markdown",
  });
});

bot.onText(/\/rabrazar (.+)/, (msg, match) => {
  var chatid = msg.chat.id;
  const razon = match[1];
  var messageId = msg.reply_to_message.from.first_name;
  const usuario = msg.from.first_name;
  const usersId = msg.reply_to_message.from.first_name;
  var admins = [
    "https://i.pinimg.com/originals/49/7a/55/497a5523d9b1ca23db84ecc3f5d8b1b3.gif",
    "https://thumbs.gfycat.com/ImmaterialHappygoluckyHoneybadger-max-1mb.gif",
    "https://acegif.com/wp-content/gif/anime-hug-1.gif",
    "https://i.pinimg.com/originals/c6/3a/48/c63a48856edab67f2e5c9b9c8a10d21e.gif",
    "https://i.pinimg.com/originals/c8/76/3e/c8763ecc23bca88447a90c1313b847de.gif",
    "https://acegif.com/wp-content/gif/anime-hug-35.gif",
  ];
  var ma = Math.random();
  var margarita = Math.floor(ma * admins.length);

  bot.sendAnimation(chatid, admins[margarita], {
    caption: `Aw [${usuario}](tg://user?id=${msg.from.id}) _le ha dado un abrazo a_ [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) 💌 \n\n*🙈Motivo del abrazo:* ${razon}`,
    parse_mode: "Markdown",
  });
});

/**************************************************INFORMACION COMPLETA USUARIO**************************************************/

bot.onText(/^\.info|^\/info/, function onMessage(msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  const myId = msg.from.id;
  const myname = msg.from.first_name;
  var last_name = msg.from.last_name;
  const userName = msg.from.username;
  const ae = msg.from.is_bot;
  var lang = msg.from.language_code;
  const nose = msg.chat.title;
  var calificacion = [
    `1⭐️`,
    `2⭐️`,
    `3⭐️`,
    `4⭐️⭐️`,
    `5⭐️⭐️`,
    `6⭐️⭐️⭐️`,
    `7⭐️⭐️⭐️`,
    `8⭐️⭐️⭐️`,
    `9⭐️⭐️⭐️⭐️`,
    `10⭐️⭐️⭐️⭐️⭐️`,
    `-1`,
    `-2`,
    `-3`,
    `-4`,
    `-5`,
  ];
  var ma = Math.random();
  var puntaje = Math.floor(ma * calificacion.length);

  if (msg.from.last_name == undefined) {
    (last_name = "No establecido:("), { parse_mode: "Markdown" };
  }
  if (msg.from.username == undefined) {
    (userName = "No establecido:("), { parse_mode: "Markdown" };
  }
  if (msg.from.language_code == undefined) {
    lang = "No establecido:(";
  }
  if (msg.from.language_code == "es") {
    lang = "Español.";
  }
  if (msg.from.language_code == "en") {
    lang = "Inglés.";
  }
  if (msg.from.is_bot == "false") {
    is_bot = "Falso, Tenemos un humano.";
  }

  bot.getUserProfilePhotos(userId, 0, 1).then(function (data) {
    bot.sendPhoto(chatId, data.photos[0][0].file_id, {
      caption: `╒═══「 <code>Información:</code> 」\n\n➜<b><i>Nombre:</i></b> ${myname}\n\n➜<b><i>Apellido:</i></b> ${last_name}\n\n➜<b><i>Alias:</i></b> @${userName}\n\n➜<b><i>ID:</i></b> <code>${myId}</code>\n\n➜<b><i>Perfil:</i></b> <a href="tg://user?id=${myId}">Link del Usuario</a>\n\n➜<b><i>Lenguaje:</i></b> ${lang}\n\n➜<b><i>Calificación de Gura:</i></b> <code>${calificacion[puntaje]}</code>`,
      parse_mode: "HTML",
    });
  });
});
bot.onText(/^\.uinfo|^\/uinfo/, function onMessage(msg) {
  const chatId = msg.chat.id;
  const usuario = msg.reply_to_message.from.username;
  const userId = msg.reply_to_message.from.id;
  const name = msg.reply_to_message.from.first_name;
  const apellido = msg.reply_to_message.from.last_name;
  const bots = msg.reply_to_message.from.is_bot;
  const lenguaje = msg.reply_to_message.from.language_code;
  var calificacion = [
    `1⭐️`,
    `2⭐️`,
    `3⭐️`,
    `4⭐️⭐️`,
    `5⭐️⭐️`,
    `6⭐️⭐️⭐️`,
    `7⭐️⭐️⭐️`,
    `8⭐️⭐️⭐️`,
    `9⭐️⭐️⭐️⭐️`,
    `10⭐️⭐️⭐️⭐️⭐️`,
    `-1`,
    `-2`,
    `-3`,
    `-4`,
    `-5`,
  ];
  var ma = Math.random();
  var puntaje = Math.floor(ma * calificacion.length);

  if (msg.reply_to_message.from.last_name == undefined) {
    (msg.reply_to_message.from.last_name = "No establecido:("),
      { parse_mode: "Markdown" };
  }
  if (msg.reply_to_message.from.username == undefined) {
    (userName = "No establecido:("), { parse_mode: "Markdown" };
  }
  if (msg.reply_to_message.from.language_code == undefined) {
    lang = "No establecido:(";
  }
  if (msg.reply_to_message.from.language_code == "es") {
    lang = "Español.";
  }
  if (msg.reply_to_message.from.language_code == "en") {
    lang = "Inglés.";
  }

  bot.getUserProfilePhotos(userId, 0, 1).then(function (data) {
    bot.sendPhoto(chatId, data.photos[0][0].file_id, {
      caption: `╒═══「 <code>Información:</code> 」\n\n➜<b><i>Nombre:</i></b> ${name}\n\n➜<b><i>Apellido:</i></b> ${apellido}\n\n➜<b><i>Alias:</i></b> @${usuario}\n\n➜<b><i>ID:</i></b> <code>${userId}</code>\n\n➜<b><i>Perfil:</i></b> <a href="tg://user?id=${userId}">Link del Usuario</a>\n\n➜<b><i>Lenguaje:</i></b> ${lenguaje}\n\n➜<b><i>Calificación de Gura:</i></b> <code>${calificacion[puntaje]}</code>`,
      parse_mode: "HTML",
    });
  });
});

/**************************************************LINK DE UN GRUPO**************************************************/
bot.onText(/^\/chatlink/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var messageId = msg.message_id;
  var chatTitle = msg.chat.title;

  bot.getChatMember(chatId, userId).then(function (user) {
    if (user.status == "creator" || user.status == "administrator") {
      bot.exportChatInviteLink(chatId).then(function (enlace) {
        bot.sendMessage(
          chatId,
          "🐬_Enlace del grupo:_ " + chatTitle + "\n" + enlace,
          { parse_mode: "Markdown" }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});
/**************************************************BORRADO DE UN GRUPO**************************************************/
bot.onText(/^\/delchatfoto/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var chatTitle = msg.chat.title;

  bot.getChatMember(chatId, userId).then(function (user) {
    if (user.status == "creator" || user.status == "administrator") {
      bot.deleteChatPhoto(chatId).then(function (foto) {
        bot.sendMessage(chatId, `🐬Foto del grupo: ${chatTitle} eliminada.`);
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/delchatsticker/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var messageId = msg.message_id;
  var chatTitle = msg.chat.title;

  bot.getChatMember(chatId, userId).then(function (user) {
    if (user.status == "creator" || user.status == "administrator") {
      bot.deleteChatStickerSet(chatId).then(function (foto) {
        bot.sendMessage(
          chatId,
          "🐬Pack de stickers del grupo " +
            chatTitle +
            "eliminado." +
            "\n" +
            foto
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});
/**************************************************LINK DE UN GRUPO**************************************************/

bot.onText(/^\/salirbot/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var messageId = msg.message_id;
  var chatTitle = msg.chat.title;

  bot.getChatMember(chatId, userId).then(function (user) {
    if (user.status == "creator" || user.status == "administrator") {
      bot.leaveChat(chatId).then(function (foto) {
        bot.sendMessage(chatId, "🐬Mi momento ha llegado..." + "\n" + foto);
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\.staff|^\/staff/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var grupo = msg.chat.title;
  var chatype = msg.chat.type;

  bot.getChatAdministrators(chatId).then(function (users) {
    console.log(users);
    if (chatype == "supergroup") {
      string = "";
      idadmin = "";
      var creador = "";
      var titlecr = "";
      var idcreador = "";
      users.forEach((data) => {
        if (data.status == "creator") {
          creador += data.user.first_name;
          titlecr += data.custom_title;
          idcreador += data.user.id;
          if (titlecr == "undefined") {
            titlecr = "No establecido:(";
          }
        } else {
          idadmin = data.user.id;
          string +=
            `<a href="tg://user?id=${idadmin}">🤴🏻${data.user.first_name}</a>` +
            "\n";
        }
      });
      bot.sendMessage(
        chatId,
        `🐬<i>Team Staff del grupito:</i>\n\n👑<i>Creador:</i> \n └<a href="tg://user?id=${idcreador}">${creador}</a> \n\n🐬<i>Administradores:</i> \n${string}`,
        { parse_mode: "HTML" }
      );
    }
  });
});

/**************************************************BORRADO DE MENSAJES**************************************************/

bot.onText(/^\/del/, (msg) => {
  var chatId = msg.chat.id;
  var messageId = msg.message_id;
  var replyMessage = msg.reply_to_message.message_id;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.deleteMessage(chatId, messageId);
  bot.deleteMessage(chatId, replyMessage);
});
/**************************************************OCIO EMOJIS JUEGO**************************************************/

bot.onText(/^\.dardo|^\/dardo/, (msg) => {
  const opts = {
    emoji: "🎯",
  };
  bot.sendDice(msg.chat.id, opts);
});

bot.onText(/^\/dado/, (msg) => {
  bot.sendDice(msg.chat.id);
});

bot.onText(/^\/boliche/, (msg) => {
  const opts = {
    emoji: "🎳",
  };
  bot.sendDice(msg.chat.id, opts);
});

bot.onText(/^\/tragaperra/, (msg) => {
  const opts = {
    emoji: "🎰",
  };
  bot.sendDice(msg.chat.id, opts);
});

bot.onText(/^\/basket/, (msg) => {
  const opts = {
    emoji: "🏀",
  };
  bot.sendDice(msg.chat.id, opts);
});

bot.onText(/^\/futbolito/, (msg) => {
  const opts = {
    emoji: "⚽",
  };
  bot.sendDice(msg.chat.id, opts);
});

/**************************************************CODIGOS QR**************************************************/

bot.onText(/^\/qr/, function (msg) {
  console.log(msg);
  var userId = msg.from.first_name;
  var data = msg.text.substring(3).trim();
  var imageqr =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + data;
  bot.sendMessage(
    msg.chat.id,
    "[🐬](" + imageqr + `)${userId} aqui tienes tu codigo QR de la URL:` + data,
    { parse_mode: "Markdown" }
  );
});

/**************************************************PIN Y UNPIN**************************************************/

bot.onText(/^\/pin/, function (msg) {
  if (msg.reply_to_message == undefined) {
    return;
  }

  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var messageId = msg.message_id;
  var chatype = msg.chat.type;
  var replyFrom = msg.reply_to_message.message_id;
  var fromName = msg.from.first_name;

  const opts = {};
  opts.disable_notification = false;

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      if (chatype == "supergroup") {
        bot.pinChatMessage(chatId, replyFrom);
        bot.deleteMessage(chatId, messageId);
      } else if (chatype == "private") {
        bot.sendMessage(chatId, "Comando solo disponible en supergrupos");
      } else if (chatype == "group") {
        bot.sendMessage(chatId, "Comando solo disponible en supergrupos.");
      }
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/unpin/, function (msg) {
  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var messageId = msg.message_id;
  var fromName = msg.from.first_name;

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.deleteMessage(chatId, messageId);
      bot.unpinChatMessage(chatId);
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/unallpin/, function (msg) {
  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var messageId = msg.message_id;
  var fromName = msg.from.first_name;

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.deleteMessage(chatId, messageId);
      bot.unpinAllChatMessages(chatId);
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

/**************************************************COMANDO BAN Y UNBAN**************************************************/
bot.onText(/^\/kick/, function (msg) {
  var chatId = msg.chat.id;
  var replyId = msg.reply_to_message.from.id;
  var userId = msg.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.kickChatMember(chatId, replyId).then(function (result) {
        bot.unbanChatMember(chatId, replyId);
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          `🌊<i>El usuario</i> ${replyName} <i>ha sido expulsado</i> (<code>${replyId}</code>) del grupito:(`,
          {
            parse_mode: "HTML",
          }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/ban/, function (msg) {
  var chatId = msg.chat.id;
  var replyId = msg.reply_to_message.from.id;
  var userId = msg.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.kickChatMember(chatId, replyId).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          `🔪<i>El usuario</i> <a href="tg://user?id=${replyId}">${replyName}</a> <i>ha sido eliminado del grupo, ¡Hasta la proxima!</i> \n\n🐬<b>ID:</b> (<code>${replyId}</code>)`,
          { parse_mode: "HTML" }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/\/rban (.+)/, (msg, match) => {
  var chatId = msg.chat.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;
  let tipValue = match[1];
  bot.getChatMember(chatId, replyId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.kickChatMember(chatId, replyId).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "📍El usuario " + replyName + " ha sido baneado por: " + tipValue
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});
bot.onText(/^\/tban (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;
  var text = match[1];
  const ms = require("ms");

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot
        .kickChatMember(chatId, replyId, {
          until_date: Math.round((Date.now() + ms(text + " days")) / 1000),
        })
        .then(function (result) {
          bot.deleteMessage(chatId, messageId);
          bot.sendMessage(
            chatId,
            `🌊<i>El usuario</i> ${replyName} (<code>${replyId}</code>) <i>ha sido eliminado del grupito, nos vemos en</i> <b>${text}</b> <i>días:(</i>`,
            { parse_mode: "HTML" }
          );
        });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/unban/, function (msg) {
  var chatId = msg.chat.id;
  var replyId = msg.reply_to_message.from.id;
  var userId = msg.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.unbanChatMember(chatId, replyId).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          `🐬<i>El usuario</i> <a href="tg://user?id=${replyId}">${replyName}</a> <i>ahora puede regresar al grupito, ¡Bang desbaneado!</i> \n\n🐬<b>ID:</b> (<code>${replyId}</code>)`,
          { parse_mode: "HTML" }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

/**************************************************COMANDO MUTE Y UNMUTE**************************************************/

bot.onText(/^\/tmute (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;

  var tiempo = match[1];

  var ms = require("ms");

  const perms = {};
  perms.can_send_message = false;
  perms.can_send_media_messages = false;
  perms.can_send_other_messages = false;
  perms.can_can_add_web_page_previews = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot
        .restrictChatMember(
          chatId,
          replyId,
          { until_date: Math.round(Date.now() + ms(tiempo + "days") / 1000) },
          perms
        )
        .then(function (result) {
          bot.deleteMessage(chatId, messageId);
          bot.sendMessage(
            chatId,
            `🌊<i>El usuario</i> ${replyName} (<code>${replyId}</code>) <i>ha sido silenciado del grupito, nos vemos en</i> <b>${tiempo}</b> <i>días:(</i>`,
            { parse_mode: "HTML" }
          );
        });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/unmute/, function (msg) {
  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var fromName = msg.from.first_name;
  var replyName = msg.reply_to_message.from.first_name;
  var replyId = msg.reply_to_message.from.id;
  var messageId = msg.message_id;
  const perms = {};

  perms.can_send_message = true;
  perms.can_send_media_messages = true;
  perms.can_send_other_messages = true;
  perms.can_can_add_web_page_previews = true;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.restrictChatMember(chatId, replyId, perms).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          `🌊<i>Abracadabra te concedo el poder de escribir de nuevo en el chat</i> ${replyName} (<code>${replyId}</code>), <i>entra y habla.</i>`,
          { parse_mode: "HTML" }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/mute/, function (msg) {
  var chatId = msg.chat.id;
  var fromId = msg.from.id;
  var fromName = msg.from.first_name;
  var replyName = msg.reply_to_message.from.first_name;
  var replyId = msg.reply_to_message.from.id;
  var messageId = msg.message_id;
  const perms = {};

  perms.can_send_message = false;
  perms.can_send_media_messages = false;
  perms.can_send_other_messages = false;
  perms.can_can_add_web_page_previews = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, fromId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.restrictChatMember(chatId, replyId, perms).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          `🌊<i>El usuario</i> ${replyName} (<code>${replyId}</code>) <i>ha sido silenciado del grupito, Que pena:(, observa desde las gradas.</i>`,
          { parse_mode: "HTML" }
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

/**************************************************PROMOVER Y DESCENDER ADMIN**************************************************/

bot.onText(/^\/promoteadm/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var userName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_delete_message = true;
  prop.can_change_info = false;
  prop.can_invite_users = true;
  prop.can_pin_messages = true;
  prop.can_restrict_members = true;
  prop.can_promote_members = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "🌊El poder de " +
            replyName +
            " ha aumentado. Ahora este usuario es un administador."
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/demoteadm/, function (msg) {
  var chatId = msg.chat.id;
  var replyName = msg.reply_to_message.from.first_name;
  var replyId = msg.reply_to_message.from.id;
  var userId = msg.from.id;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_change_info = false;
  prop.can_delete_message = false;
  prop.can_invite_users = false;
  prop.can_pin_messages = false;
  prop.can_restrict_members = false;
  prop.can_promote_members = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          replyName +
            " ha perdido sus privilegios como administrador, ¡Vaya vergüenza! 🐿"
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

/**************************************************PROMOVER Y DESCENDER MOD**************************************************/

bot.onText(/^\/promotemod/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var userName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_delete_message = false;
  prop.can_change_info = false;
  prop.can_invite_users = false;
  prop.can_pin_messages = false;
  prop.can_restrict_members = true;
  prop.can_promote_members = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "!" +
            replyName +
            " ha adquirido una nueva habilidad 🐬!. Ahora este usuario es un moderador."
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/^\/demotemod/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var userName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_delete_message = false;
  prop.can_change_info = false;
  prop.can_invite_users = false;
  prop.can_pin_messages = false;
  prop.can_restrict_members = false;
  prop.can_promote_members = false;
  prop.can_manage_voice_chats = true;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "🌬Realizado. " + replyName + ", ya no es moderador, que pena:/."
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

/**************************************************PROMOVER Y DESCENDER GERENTE**************************************************/
bot.onText(/^\/promoteger/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var userName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_delete_message = true;
  prop.can_change_info = false;
  prop.can_invite_users = false;
  prop.can_pin_messages = false;
  prop.can_restrict_members = false;
  prop.can_promote_members = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "🐟Ahora " + replyName + "será parte del team, es gerente."
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});
bot.onText(/^\/demoteger/, function (msg) {
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var replyId = msg.reply_to_message.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var userName = msg.from.first_name;
  var messageId = msg.message_id;

  const prop = {};

  prop.can_delete_message = false;
  prop.can_change_info = false;
  prop.can_invite_users = false;
  prop.can_pin_messages = false;
  prop.can_restrict_members = false;
  prop.can_promote_members = false;

  if (msg.reply_to_message == undefined) {
    return;
  }

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.promoteChatMember(chatId, replyId, prop).then(function (result) {
        bot.deleteMessage(chatId, messageId);
        bot.sendMessage(
          chatId,
          "Uy desterraron" +
            replyName +
            "al profundo del oceano🌊, ya no es gerente."
        );
      });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

/**************************************************MODOS SPAM**************************************************/
bot.onText(/\/spam (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "kick") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        bot.sendMessage(
          chatid,
          `🐬De acuerdo apartir de ahora, <b>expulsaré</b> a los usuarios que envien spam.`,
          { parse_mode: "HTML" }
        ).then;
        bot.on("message", (msg) => {
          if (msg.text) {
            var what = "t.me";
            if (msg.text.includes(what, link)) {
              bot.deleteMessage(msg.chat.id, msg.message_id);
              bot.kickChatMember(msg.chat.id, msg.from.id);
              bot.unbanChatMember(msg.chat.id, msg.from.id);
              bot.sendMessage(
                msg.chat.id,
                `🚧¡Oh no!, he detectado un enlace <b>spam</b> del usuario <a href="tg://user?id=${msg.from.id}">${msg.from.first_name}</a>. \n<b>▪ID:</b> <code>${msg.from.id}</code> \n\n<b>🚦Acción:</b> Expulsado del grupito.`,
                { parse_mode: "HTML" }
              );
            }
          }
        });
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }

  if (modo === "mute") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        bot.sendMessage(
          chatid,
          "🐬De acuerdo apartir de ahora, <b>mutearé</b> a los usuarios que envien spam.",
          { parse_mode: "HTML" }
        ).then;
        bot.on("message", (msg) => {
          const permis = {};
          permis.can_send_message = false;
          permis.can_send_media_messages = false;
          permis.can_send_other_messages = false;
          permis.can_can_add_web_page_previews = false;
          if (msg.text) {
            var what = "t.me";
            if (msg.text.includes(what)) {
              bot.deleteMessage(msg.chat.id, msg.message_id);
              bot.restrictChatMember(msg.chat.id, msg.from.id, permis).then;
              bot.sendMessage(
                chatid,
                `🚧¡Oh no!, he detectado un enlace <b>spam</b> del usuario <a href="tg://user?id=${msg.from.id}">${msg.from.first_name}</a>. \n<b>▪ID:</b> <code>${msg.from.id}</code> \n\n<b>🚦Acción:</b> Silenciado en el grupito.`,
                { parse_mode: "HTML" }
              );
            }
          }
        });
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }
  if (modo === "ban") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        bot.sendMessage(
          chatid,
          `🐬De acuerdo apartir de ahora, <b>banearé</b> a los usuarios que envien spam.`,
          { parse_mode: "HTML" }
        ).then;
        bot.on("message", (msg) => {
          if (msg.text) {
            var what = "t.me";
            if (msg.text.includes(what)) {
              bot.deleteMessage(msg.chat.id, msg.message_id);
              bot.kickChatMember(msg.chat.id, msg.from.id);
              bot.sendMessage(
                msg.chat.id,
                `🚧¡Oh no!, he detectado un enlace <b>spam</b> del usuario <a href="tg://user?id=${msg.from.id}">${msg.from.first_name}</a>. \n<b>▪ID:</b> <code>${msg.from.id}</code> \n\n<b>🚦Acción:</b> Baneado del grupito.`,
                { parse_mode: "HTML" }
              );
            }
          }
        });
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }
});
/**************************************************COMANDO PING**************************************************/

let inicio = new Date();
setTimeout(function () {
  realizartarea(inicio);
}, 1000);

function realizartarea(fechainicial) {
  let fin = new Date();
  let diferencia = fin.getTime() - inicio.getTime();
  console.log(diferencia);
  diferencia / (10 * 60);
  return diferencia;
}
/**************************************************COMANDO REPITE MENSAJES**************************************************/

bot.onText(/\/msg (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const usuario = msg.from.id;
  const resp = match[1];
  var messageId = msg.message_id;
  bot.getChatMember(chatId, usuario).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.deleteMessage(chatId, messageId);
      bot.sendMessage(chatId, resp);
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

/**************************************************BOT SALUDA A MSG HOLA**************************************************/

/*bot.on("message", msg => {
  if (msg.text) {
    const chatId = msg.chat.id;
    if (msg.text == "Hola") {
      bot.sendAnimation(
        chatId,
        "https://thumbs.gfycat.com/CapitalGreenFlea-size_restricted.gif",
        {
          caption: `-Hola, Hola ${msg.from.first_name}❤`,
        }
      );
    }
  }
});*/
/**************************************************COMANDO COPIAR A UN MSG**************************************************/

bot.onText(/^\!copiar/, (msg) => {
  var chat_id = msg.chat.id;
  var from_chat_id = msg.chat.id;
  var message_id = msg.reply_to_message.message_id;
  bot.copyMessage(chat_id, from_chat_id, message_id);
});

/**************************************************COMANDO REENVIAR UN MSG**************************************************/

bot.onText(/^\!reenviar/, (msg) => {
  var chat_id = msg.chat.id;
  var from_chat_id = msg.chat.id;
  var message_id = msg.reply_to_message.message_id;
  bot.forwardMessage(chat_id, from_chat_id, message_id);
});

/**************************************************ID MEDIANTE REENVIADO**************************************************/
/*bot.on("message", function (msg) {
    var text = msg.text;
    var chatId = msg.chat.id;
    var forwardid = msg.forward_from.id;
    var forwarduser = msg.forward_from.username;
    var forward = msg.forward_from;
    
    if(forward){
        bot.sendMessage(chatId, "ID del usuarioo: " + forwardid + "\nAlias: @" + forwarduser);
    }
    });*/

/*bot.on ("message", function(msg) {
    var chatid = msg.chat.id;
    var text = msg.text;

    if (text) {
        bot.sendMessage (chatid, text,{
            'parse_mode' : 'markdown'
        });

    }
});*/

/*******************************************************************************/

bot.onText(/^\.aquiz|^\/aquiz/, (msg) => {
  var quises = [
    [
      "¿Cuál es el apellido de Edward en Fullmetal Alchemist?",
      ["Elmac", "Elnon", "Elric", "Edmond"],
      {
        type: "quiz",
        correct_option_id: 3,
        open_period: 20,
        explanation:
          "Comúnmente llamado Ed, es un personaje y protagonista del manga y anime Fullmetal Alchemist creado por Hiromu Arakawa.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Quien es el Creador de One Piece? ",
      [" EichiroOda", " HayaoMiyasaki", " MasashiKishimoto", "Akiratoriyama"],
      {
        type: "quiz",
        correct_option_id: 0,
        open_period: 1,
        explanation:
          " Eichiro Oda es el creador del famoso manga Shonen One Piece Que gracias a su popularidad se convirtió en unos de los mangas Mas mencionados de los últimos tiempos.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Cuantos usuarios han tenido el One For All?",
      [" 11", " 6", " 4", " 9"],
      {
        type: "quiz",
        correct_option_id: 3,
        open_period: 1,
        explanation:
          "Se Conoce que han sido 9 portadores Del One For All Incluyendo el Hermano de All For One.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Como se llama El estudio de Animación que Creo Neo Génesis Evangelion?",
      [" Bones", " Pierrot", " Gainax", " Toei"],
      {
        type: "quiz",
        correct_option_id: 2,
        open_period: 1,
        explanation:
          "también conocida simplemente como Evangelion, o Eva, es una serie de anime creada por el estudió Gainax y dirigida por Hideaki Anno.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Como se cataloga el género De Romance en el Anime?",
      [" Shonen", " Shoujo", " Ecchi", "Gore "],
      {
        type: "quiz",
        correct_option_id: 1,
        open_period: 1,
        explanation:
          "El Género de Romance es catálogado como (Shoujo) Que va dirijido a Un público Femenino.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Cual es la fuente de energía de los ninjas en Naruto?",
      [" Ki", " Cosmos", " Bankai", " Chakra"],
      {
        type: "quiz",
        correct_option_id: 3,
        open_period: 1,
        explanation:
          "Chakra (チャクラ chakura) es la fuente de energía básica necesaria para que un ninja genere un jutsu en Naruto.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Como se llama la aldea donde se criaron Asta y Yuno en Black Clover?",
      [" Aldea Henge", " Aldea Hage", " Aldea Sosshy", " Aldea Ega"],
      {
        type: "quiz",
        correct_option_id: 1,
        open_period: 1,
        explanation:
          "Asta Y Yuno Fueron Criados juntos desde su nacimiento después de ser abandonados en un orfanato de la iglesia en la aldea de Hage.",
        is_anonymous: "false",
      },
    ],
    [
      "¿En que era Japonesa Tiene lugar la Historia de Demon Slayer?",
      [" Período Taisho", " Período Edo", " Período Meiji", " Período Showa"],
      {
        type: "quiz",
        correct_option_id: 0,
        open_period: 1,
        explanation:
          "La serie se desarrolla en un Japón de comienzos del siglo XX en plenitud de la era Taishō.",
        is_anonymous: "false",
      },
    ],
    [
      "En Naruto, el personaje principal Naruto Uzumaki, es el anfitrión de los poderosos Nine-Tales. ¿Qué criatura es el Nueve Colas?",
      ["Lobo", "Zorro", "Perro", "Gato"],
      {
        type: "quiz",
        correct_option_id: 1,
        open_period: 1,
        explanation:
          "Kurama, también conocido como el Nueve Colas (九尾, Kyūbi) fue una Bestia con Cola que se encontraba sellada dentro de Naruto Uzumaki.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Qué poder tiene desde su nacimiento Izuku Midoriya en My Hero Academia?",
      ["One for all", "All for one", "Invisibilidad", "Ninguna"],
      {
        type: "quiz",
        correct_option_id: 3,
        open_period: 20,
        explanation:
          "El joven estudió tanto los poderes de los héroes profesionales como las habilidades de los villanos que podría enfrentar algún día.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Cuántos distritos podemos encontrar en total en Shingeki no kyojin?",
      ["25", "8", "13", "17"],
      {
        type: "quiz",
        correct_option_id: 3,
        open_period: 20,
        explanation:
          "Aquí se reúnen todos los distritos alrededor de las Murallas de los humanos.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Quién es lider y fundador de SSS Shinda Sekai Sensen en Angel Beats?",
      ["Yuri Nakamura", "Eri Shiina", "Miyuki Irie", "Ninguna"],
      {
        type: "quiz",
        correct_option_id: 0,
        open_period: 20,
        explanation:
          "Ella dirige la campaña de un número de estudiantes que luchan contra Dios, a quienes culpan de sus destinos crueles.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Cómo se llaman los ojos de un Ghoul, en Tokyo Ghoul?",
      ["Kakugan", "Bakugan", "Bokugan", "Shokugan"],
      {
        type: "quiz",
        correct_option_id: 0,
        open_period: 20,
        explanation:
          "Es la denominación que se le da a los ojos de un ghoul, cuando las pupilas y el iris de estos se tornan rojas y la esclerótica negra.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Cuál de estos personajes fue el primero en conseguir una victoria en el torneo de Fairy Tail?",
      ["Elfam Strauss", "Erza Scarlet", "Zeref Dragneel", "Todos"],
      {
        type: "quiz",
        correct_option_id: 0,
        open_period: 20,
        explanation:
          "Los Grandes Juegos Mágicos es un concurso realizado para determinar cual es el mayor gremio de Fiore.",
        is_anonymous: "false",
      },
    ],
    [
      "En Sailor Moon, ¿Quién es el Guardián de los Sueños?",
      ["Serena Tsukino", "Pegasus", "Seiya Kou", "Aya Hisakawa"],
      {
        type: "quiz",
        correct_option_id: 1,
        open_period: 20,
        explanation:
          "Es la forma que Helios tomó cuando él se desprendió de su cuerpo humano al ver el resplandor del hermoso sueño de Chibiusa.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Dónde vive Naruto?",
      ["Konoha", "Alabasta", "Namek", "Aldea Oculta del Ghoul"],
      {
        type: "quiz",
        correct_option_id: 0,
        open_period: 20,
        explanation:
          "Se encuentra en el País del Fuego, y su líder es Naruto Uzumaki, el séptimo Hokage.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Cuál es el nombre de la espada de Meliodas en The Seven Deadly Sins?",
      [
        "Espada rota",
        "Espada de dragón verde",
        "Espada de luz",
        "Espada de del guerrero dragón",
      ],
      {
        type: "quiz",
        correct_option_id: 0,
        open_period: 20,
        explanation:
          "Fue su arma principal hasta que le fue arrebatada por Helbram.",
        is_anonymous: "false",
      },
    ],
    [
      "En Haikyuu, ¿de quién es el apodo: El rey de la pista?",
      ["Hinata Shoyo", "Toro Aikawa", "Tobio Kageyama", "Hinata Shikamaru"],
      {
        type: "quiz",
        correct_option_id: 2,
        open_period: 20,
        explanation:
          "Es considerado como un prodigio y ser conocido por el apodo de « El Rey de la pista ».",
        is_anonymous: "false",
      },
    ],
    [
      "En Dansu Wizu Debirusu ¿qué raza es el personaje de Shiki Natsumezaka?",
      ["Demonio", "Ángel", "Un semi dios", "Un vampiro"],
      {
        type: "quiz",
        correct_option_id: 1,
        open_period: 20,
        explanation: "Tiene cuatro alas en total, dos en cada lado.",
        is_anonymous: "false",
      },
    ],
    [
      "¿A quién pertenece esta frase?: ¡Quiero ser más fuerte! ¡Y más fuerte! ¡Y luego más fuerte que eso! Entonces podré proteger todo… Y nunca más tendré que perder nada.",
      ["Itachi Uchiha", "Edward Elric", "Monkey D. Luffy", "Levi Ackerman"],
      {
        type: "quiz",
        correct_option_id: 2,
        open_period: 20,
        explanation:
          "Es el alquimista estatal más joven en la historia del país ficticio Amestris.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Qué significa la palabra Shinigami?",
      [
        "Devorador de almas",
        "Protector del death note",
        "Dios de la death note",
        "Dios de la muerte",
      ],
      {
        type: "quiz",
        correct_option_id: 3,
        open_period: 20,
        explanation:
          "Son dioses o seres sobrenaturales que invitan a los seres humanos hacia la muerte.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Cuál ha sido la única película de animación japonesa en ganar un Oscar?",
      [
        "El viaje de Chihiro",
        "Your name",
        "El amor esta en el agua",
        "El bosque de las luciernagas",
      ],
      {
        type: "quiz",
        correct_option_id: 0,
        open_period: 20,
        explanation:
          "Hasta la fecha, es la primera y única película de animación japonesa que ha ganado este premio.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Cuál es el anime más largo a día de hoy?",
      ["Black Clover", "Sazae-san", "Ranma 1/2", "One piece"],
      {
        type: "quiz",
        correct_option_id: 1,
        open_period: 20,
        explanation:
          "Un anime creado por Machiko Hasegawa, y que actualmente cuenta con más de 7 mil 500 episodios.",
        is_anonymous: "false",
      },
    ],
    [
      "Hoy en día el término Otaku se utiliza para hacer referencia a las personas que son muy fans del anime. ¿Tiene esta palabra el mismo significado aquí que en Japón?",
      [
        "Sí, tiene el mismo significado",
        "No, allí Otaku no se utiliza",
        "No, en japon se utiliza para referirise a personas que se quedan en casa y no tienen vida social.",
        "Ninguna de las anteriores.",
      ],
      {
        type: "quiz",
        correct_option_id: 1,
        open_period: 20,
        explanation:
          "El término otaku se refiere a un fan de cualquier tema en particular.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Quién fue el creador de Dragon Ball?", //PREGUNTA
      [
        "Hayao Miyasaki", //OPCION 0
        "Takeshi Kitano", //OPCION 1
        "Akira Toriyama.", //OPCION 2
        "Naoko Takeuchi.", //OPCION 3
      ],
      {
        type: "quiz",
        correct_option_id: 2,
        open_period: 1, //LA RESPUESTA CORRECTA
        explanation:
          "Es un mangaka y diseñador de personajes japonés. Es conocido por sus obras Dr. Slump y Dragon Ball", //PISTA
        is_anonymous: "false",
      },
    ],
    [
      "¿Cuantas temporadas tiene no game no life?",
      ["1", "2", "3", "10"],
      {
        type: "quiz",
        correct_option_id: 1,
        open_period: 1,
        explanation: "Falta de segunda temporada.",
        is_anonymous: "false",
      },
    ],
    [
      "¿En que serie de anime es Ash Ketchum el personaje principal?",
      ["Escudo de ojos 21", "Pokémon", "Cowboy Bebop", "Macross"],
      {
        type: "quiz",
        correct_option_id: 1,
        open_period: 2,
        explanation:
          "Es un entrenador originario de la región Kanto. Tiene un carácter perseverante, distraído, y su máxima ambición es llegar a ser el mejor Maestro.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Dragón Ball fué creado por quién en 1984?",
      ["Akira Toriyama", "Satoshi Tajiri", "Hirohiko Araki", "Hayao Miyasaki"],
      {
        type: "quiz",
        correct_option_id: 0,
        open_period: 1,
        explanation: "Fue el creador de series como Dragon Ball y Dr. Slump.",
        is_anonymous: "false",
      },
    ],
    [
      "¿Como se llama la famosa mascota de Studio Ghibli?",
      ["Kiki", "Bakura", "Ponyo", "Totoro"],
      {
        type: "quiz",
        correct_option_id: 3,
        open_period: 1,
        explanation:
          "Un personaje de Mi vecino Totoro, es la mascota del estudio",
        is_anonymous: "false",
      },
    ],
    [
      "¿Cuál es la primera película de Studio Ghibli?",
      [
        "El bosque de las luciernagas",
        "Your Name",
        "Nausicaä del valle del viento",
        "Totoro",
      ],
      {
        type: "quiz",
        correct_option_id: 2,
        open_period: 1,
        explanation:
          "Es considerada la primera película del Studio Ghibli. Supuso su primer gran éxito en Japón y la creación de dicho estudio.",
        is_anonymous: "false",
      },
    ],
    [
      "En Sailor Moon, el personaje de anime Makoto Kino se transforma en: ",
      [
        "Marinero Mercurio",
        "Marinero Venus",
        "Marinero Jupiter",
        "Marinero Marte",
      ],
      {
        type: "quiz",
        correct_option_id: 2,
        open_period: 2,
        explanation:
          "Es presentada como una adolescente fuerte y sentimental que puede transformarse en una justiciera con el poder de manipular el trueno y el relámpago.",
        is_anonymous: "false",
      },
    ],
    [
      "En Sailor Moon, el personaje de anime Makoto Kino se transforma en: ",
      [
        "Marinero Mercurio",
        "Marinero Venus",
        "Marinero Jupiter",
        "Marinero Marte",
      ],
      {
        type: "quiz",
        correct_option_id: 2,
        open_period: 2,
        explanation:
          "Es presentada como una adolescente fuerte y sentimental que puede transformarse en una justiciera con el poder de manipular el trueno y el relámpago.",
        is_anonymous: "false",
      },
    ],
  ];
  var ma = Math.random();
  var rosa = Math.floor(ma * quises.length);
  bot.sendPoll(msg.chat.id, quises[rosa][0], quises[rosa][1], quises[rosa][2]);
});

//LISTA NEGRA
//const black_list = [-1001476318529];
/*const black_list = [-1001476318529];

bot.on("message", async (msg) => {
  const chatID = msg.chat.id;
  const userID = msg.from.id;
  const username = msg.from.first_name;
  for (let i = 0; i < black_list.length; i++) {
    if (black_list[parseInt(i)] === chatID)
      await bot.leaveChat(chatID);
  }

});*/

/*******************************PERMISOS DE USUARIOS******************************************/

bot.onText(/\/setpoll (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "off") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: false,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "🐟<i>Un ser poderoso en este grupo ha bloqueado la entrada de <b>encuestas</b> para los usuarios.</i> \n\n❌<b>Encuestas</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }

  if (modo === "on") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "<i>🐟A partir de este momento los usuarios pueden enviar <b>encuestas</b> nuevamente.</i>\n\n✅<b>Encuestas</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }
});

bot.onText(/\/setmedia (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "off") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: false,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: false,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "🐟<i>Un ser poderoso en este grupo ha bloqueado la entrada de contenido <b>multimedia</b> para los usuarios.</i>\n\n❌<b>Stickers</b> \n❌<b>Gif</b> \n❌<b>Juegos</b> \n❌<b>Bots inline</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }

  if (modo === "on") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "<i>🐟A partir de este momento los usuarios pueden enviar contenido <b>multimedia</b> nuevamente.</i>\n\n✅<b>Stickers</b> \n✅<b>Gif</b> \n✅<b>Juegos</b> \n✅<b>Bots inline</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }
});

bot.onText(/\/setmsg (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "off") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: false,
          can_send_media_messages: false,
          can_send_polls: false,
          can_send_other_messages: false,
          can_add_web_page_previews: false,
          can_change_info: false,
          can_invite_users: false,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "🐟<i>Un ser poderoso en este grupo ha bloqueado la entrada de <b>mensajes</b> para los usuarios.</i>\n\n❌<b>Enviar mensajes</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }

  if (modo === "on") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "<i>🐟A partir de este momento los usuarios pueden enviar <b>mensajes</b> nuevamente al grupito.</i>\n\n✅<b>Enviar mensajes</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }
});

bot.onText(/\/setinviteuser (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "off") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: false,
          can_pin_messages: false,
        };
        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "🐟<i>Un ser poderoso en este grupo ha bloqueado la entrada de <b>agregar miembros</b> para los usuarios.</i>\n\n❌<b>Añadir usuarios</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }

  if (modo === "on") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "<i>🐟A partir de este momento los usuarios pueden <b>agregar miembros</b> nuevamente al grupito.</i>\n\n✅<b>Añadir usuarios</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }
});

bot.onText(/\/setpin (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.id;
  const modo = match[1];
  if (modo === "off") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: false,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "🐟<i>Un ser poderoso en este grupo ha bloqueado la entrada de <b>fijar mensajes</b> para los usuarios.</i>\n\n❌<b>Fijar mensajes</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }

  if (modo === "on") {
    bot.getChatMember(chatid, usuario).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        var ChatPermissions = {
          can_send_messages: true,
          can_send_media_messages: true,
          can_send_polls: true,
          can_send_other_messages: true,
          can_add_web_page_previews: true,
          can_change_info: false,
          can_invite_users: true,
          can_pin_messages: true,
        };

        bot.setChatPermissions(chatid, ChatPermissions);
        bot.sendMessage(
          chatid,
          "<i>🐟Woah, ¡el admin ha otorgado un gran poder en este grupo!, a partir de este momento los usuarios pueden <b>fijar mensajes</b> en el grupito.</i>\n\n✅<b>Fijar mensajes</b>",
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatid,
          "Solo el creador y administradores pueden usar este comando:("
        );
      }
    });
  }
});

/*******************************ENCUESTAS************************************************/

bot.onText(/\/siono (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  var messageId = msg.message_id;
  const text = match[1];
  bot.sendPoll(chatId, text, ["Si", "No", "Talvez"], {
    is_anonymous: "false",
  });
  bot.deleteMessage(chatId, messageId);
});
/*******************************CAMBIOS************************************************/

bot.onText(/\/settitledef/, (msg) => {
  let chatId = msg.chat.id;
  var userId = msg.reply_to_message.from.id;
  let usuario = msg.from.id;
  if (msg.chat.type == "private") {
    bot.sendMessage(msg.from.id, "Este comando funciona en grupos.");
  }
  bot.getChatMember(chatId, usuario).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.setChatAdministratorCustomTitle(chatId, userId, "GuraADMON");
      bot.sendMessage(chatId, "<i>Titulo establecido del administrador.</i>");
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});
bot.onText(/\/settitle (.+)/, (msg, match) => {
  let chatId = msg.chat.id;
  let usuario = msg.from.id;
  let tipValue = match[1];
  if (msg.chat.type == "private") {
    bot.sendMessage(msg.from.id, "Este comando funciona en grupos.");
  }
  bot.getChatMember(chatId, usuario).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.setChatAdministratorCustomTitle(chatId, userId, tipValue);
      bot.sendMessage(
        chatId,
        "<i>🐬Titulo establecido del administrador:</i>" + tipValue,
        { parse_mode: "HTML" }
      );
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/\/setgtitle (.+)/, (msg, match) => {
  let chatId = msg.chat.id;
  let usuario = msg.from.id;
  let tipValue = match[1];
  if (msg.chat.type == "private") {
    bot.sendMessage(msg.from.id, "Este comando funciona en grupos.");
  }
  bot.getChatMember(chatId, usuario).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.setChatTitle(chatId, tipValue);
      bot.sendMessage(
        chatId,
        "<i>🐬Titulo establecido del grupo:</i>" + tipValue,
        { parse_mode: "HTML" }
      );
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

bot.onText(/\/setdescrip (.+)/, (msg, match) => {
  let chatId = msg.chat.id;
  let usuario = msg.from.id;
  let tipValue = match[1];
  if (msg.chat.type == "private") {
    bot.sendMessage(msg.from.id, "Este comando funciona en grupos.");
  }
  bot.getChatMember(chatId, usuario).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot.setChatDescription(chatId, tipValue);
      bot.sendMessage(
        chatId,
        "<i>🐬Descripcion establecida del grupo:</i>" + tipValue,
        { parse_mode: "HTML" }
      );
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});

/**************************************************BUSQUEDA VTUBERS*******************************************************/

bot.onText(/^\.mori|^\/mori/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=mori_calliope&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.korone|^\/korone/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=inugami_korone&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.marine|^\/marine/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=houshou_marine&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});
bot.onText(/^\.gura|^\/gura/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=gawr_gura&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.usada|^\/usada/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=usada_pekora&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.kizuna|^\/kizuna/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=kizuna_ai&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.fubuki|^\/fubuki/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=shirakami_fubuki&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.minato|^\/minato/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=minato_aqua&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.uruha|^\/uruha/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=uruha_rushia&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.mio|^\/mio/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=ookami_mio&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.watame|^\/watame/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=tsunomaki_watame&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});
bot.onText(/^\.luna|^\/luna/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?tags=himemori_luna&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.nene|^\/nene/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?momosuzu_nene&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.flare|^\/flare/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?shiranui_flare&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

bot.onText(/^\.sora|^\/sora/, function onLoveText(msg) {
  const chatId = msg.chat.id;
  request(
    "https://konachan.com/post.json?shiranui_flare&limit=500",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body) || [];
        const index = parseInt(Math.random() * result.length);
        bot
          .sendPhoto(chatId, result[index].file_url, {
            caption: `📸<i><b>Imagen encontrada</b></i>... \n\n➕<code>Información:</code>\n\n👤<code>Autor:</code> ${result[index].author} \n\n⭐️<code>Ranking:</code> ${result[index].score}
            \n↔️<i><b>Dimensiones:</b></i> \n\n🟣<code>Altura:</code> ${result[index].jpeg_height} Px \n🟢<code>Ancho:</code> ${result[index].jpeg_width} Px `,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Sauce original→",
                    url: result[index].source,
                    callback_data: "any",
                  },
                ],
                [
                  {
                    text: "Vista previa→",
                    url: result[index].jpeg_url,
                    callback_data: "any",
                  },
                ],
              ],
            },
          })
          .catch((err) => {
            bot.sendMessage(
              chatId,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } else {
        bot.sendMessage(chatId, "Intenta de nuevo");
      }
    }
  );
});

/*******************************************************************************/
const menuOpts = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🐳→ Información del bot↓",
          callback_data: "1",
        },
      ],
      [
        {
          text: "👩‍✈️→Información admin↓",
          callback_data: "2",
        },
      ],
      [
        {
          text: "👑Nivel",
          callback_data: "3",
        },
        {
          text: "🚫Spam",
          callback_data: "4",
        },
        {
          text: "⚔Gban",
          callback_data: "5",
        },
      ],
      [
        {
          text: "🚫Bans",
          callback_data: "6",
        },
        {
          text: "🔇Mute",
          callback_data: "7",
        },
        {
          text: "🔔Pin",
          callback_data: "8",
        },
      ],
      [
        {
          text: "🔋Pases",
          callback_data: "9",
        },
        {
          text: "🔄Canje",
          callback_data: "10",
        },
        {
          text: "🗑Del",
          callback_data: "11",
        },
      ],
      [
        {
          text: "🔐ID",
          callback_data: "14",
        },
        {
          text: "🤴🏻Bio",
          callback_data: "15",
        },
        {
          text: "🚥HChat",
          callback_data: "12",
        },
      ],
      [
        {
          text: "🎳→Información Diversión↓",
          callback_data: "16",
        },
      ],
      [
        {
          text: "♥Reacción",
          callback_data: "20",
        },
        {
          text: "🍾Ocio",
          callback_data: "21",
        },
        {
          text: "🎈Extras",
          callback_data: "23",
        },
      ],
      [
        {
          text: "⚙→Información utilidades↓",
          callback_data: "24",
        },
      ],
      [
        {
          text: "📸Sauce",
          callback_data: "25",
        },
        {
          text: "🇪🇸Traductor",
          callback_data: "29",
        },
        {
          text: "🎥YT",
          callback_data: "30",
        },
      ],
      [
        {
          text: "✏️Unicode",
          callback_data: "36",
        },
        {
          text: "🔗Telegraph",
          callback_data: "37",
        },
        {
          text: "🎁Extras",
          callback_data: "38",
        },
      ],
      [
        {
          text: "➕→Información Extras↓",
          callback_data: "39",
        },
      ],
      [
        {
          text: "🐋Hololive",
          callback_data: "40",
        },
        {
          text: "🈴Anime",
          callback_data: "41",
        },
        {
          text: "▪Stickers",
          callback_data: "42",
        },
      ],
      [
        {
          text: "➕Añadir al grupo",
          url: "http://t.me/gawrgurahelperbot?startgroup=true",
        },
      ],
    ],
  },
};

function menu(msg) {
  if (msg.chat.type == "supergroup") {
    bot.sendAnimation(
      msg.chat.id,
      "https://c.tenor.com/QEIm04zTBeEAAAAd/gawr-gura.gif",
      {
        caption: `Wow, ¿A que quieres conocer todas mis habilidades [${msg.from.first_name}](tg://user?id=${msg.from.id})?`,

        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Vamos al privado→",
                url: "http://t.me/gawrgurahelperbot?start",
              },
            ],
          ],
        },
        parse_mode: "Markdown",
      }
    );
  }

  const opts = menuOpts;
  if (msg.chat.type == "private") {
    bot.sendMessage(
      msg.from.id,
      `➕Revisa a continuación todas mis habilidades Kamisama, en cada botón encontrarás la información necesaria para el uso de cada uno de los comandos. \n\n/donar: Un granito de arena para tener despierta a Gawr Gura siempre. \n\n🐳Para sugerencias, opiniones, comentar bugs y/o errores del bot visita (@GawrGuraSoporte).`,
      opts
    );
  }
}

bot.onText(/\/help/, function onEditableText(msg) {
  menu(msg);
});

bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  let opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "←Regresar",
            callback_data: "menu",
          },
        ],
      ],
    },
  };
  let text;

  if (action === "1") {
    bot.answerCallbackQuery({
      callback_query_id: callbackQuery.id,
      text: "Este es el menú de ayuda del bot, si tienes dudas recuerda nuestro grupo de soporte, tambien aceptamos sugerencias y reportes de este mismo, ¡Disfruta nuestro esfuerzo!",
      show_alert: true,
    });
  }
  if (action === "2") {
    bot.answerCallbackQuery({
      callback_query_id: callbackQuery.id,
      text: "A continuación encontraras la ayuda para la admistracíon de tú grupito.",
      show_alert: true,
    });
  }
  if (action === "3") {
    text =
      "Los niveles de administración otorgaran permisos a un usuario especifico sin ningun cargo en el grupo, los comandos disponibles se encuentran a continuación: \n\n/promoteadm: Promueve a un usuario con permisos de administrador del grupo. \n/demoteadm: Quita a un usuario los permisos de administrador del grupo.\n\n/promotemod: Promueve a un usuario como moderador. \n/demotemod: Quita de moderador a un usuario. \n\n/promoteger: Promueve a un usuario como gerente del grupo. \n/demoteger: Quita permisos de gerente a un usuario.";
  }

  if (action === "4") {
    text =
      "Gawr Gura tambien protege tus grupos de los enlaces maliciosos o no autorizados, los comandos disponibles: \n\n/spam <ban/kick/mute>: El administrador del grupo puede elegir el tipo de castigo para el usuario teniendo entre 3 opciones(ban, kick, mute) para su eleccion, Ejemplo: /spam ban, /spam kick, /spam mute. \n\n/spamwcheck <ID de usuario>: Verifica con la ID de un usuario si se encuentra baneado o no por la federación de @SpamWatch. \n\nNota: Por defecto los grupos serán protegidos por la federación de Spam Watch (@SpamWatch) dedicada a banear usuarios spammers, árabes, trolls, globalmente, el bot baneará a estos usuarios si ingresan al grupo. (El bot debe ser administrador del grupo).";
  }
  if (action === "5") {
    text =
      "El gban prohibirá a usuarios trolls, en los grupos donde tenga poder administrativo Gura, el comando estará restringido para uso de administadores del bot: \n\n/gban <ID/Respuesta a un mensaje>: Banea el administador del bot de manera global a un usuario. \n\n/ungban <ID>: Desbanea el administador del bot de manera global a un usuario. \n\n/listgban: Consulta el administrador del bot la lista de usuarios baneados globalmente. \n\nNota: Los usuarios pueden realizar reportes de usuarios en el grupo de soporte (@GawrGuraSoporte). \n\nLos siguientes podrián ser unos motivos de baneo global: \n\n⚔Usuarios pidiendo contenido ilegal en grupos, o de igual manera que lo compartan (Puede ser reportado en el grupo de soporte).\n⚔Usuarios trolls que se dediquen a unirse a grupos para agregar bots y hacer spam.\n⚔Usuarios tóxicos. \n\n⚠Porfavor considere que no este dentro de estos motivos antes de venir a hacer una apelación al grupo de soporte.";
  }
  if (action === "6") {
    text =
      "Con los comandos de eliminación de usuarios, puede expulsar usuarios de manera permanente, controlar el tiempo del baneo, etc, los comandos son los siguientes:  \n\n/kick: Elimina a un usuario con posibilidad de regreso. \n/ban: Elimina a un usuario haciendo reply a su mensaje o con alias/ID. \n\n/rban <razón>: Elimina a un usuario añadiendo la razon de su eliminacion. \n\n/tban <días>: Establece el tiempo de baneo del usuario (El tiempo se determina en días, Ejemplo: /tban 1, /tban 2, etc.).";
  }
  if (action === "7") {
    text =
      "En ocasiones es nesesario silenciar a un usuario por razones que se encuentren en el chat, por ello, los siguientes comandos lo ayudaran a realizar esta tarea: \n\n/mute: Bloquea la entrada de mensajes para un usuario haciendo reply a un mensaje o con alias/ID. \n\n/tmute <días>: Bloquea la entrada de mensajes de un usuario con tiempo establecido (El tiempo se determina en días, Ejemplo: /tmute 1, /tmute 2, etc.). \n\n/unmute: Retira la entrada de mensajes para un usuario haciendo reply a su mensaje o alias/ID.";
  }
  if (action === "8") {
    text =
      "Un mensaje fijado en el chat tiene como objetivo principal tener presente un mensaje especifico en el chat para los miembros del grupo, los siguientes comandos le ayudaran a realizar esta tarea: \n\n/pin: Fija un mensaje en el grupo respondiendo un mensaje. \n\n/unpin: Desfija un mensaje en el grupo. \n\n/unallpin: Desfija todos los mensajes pineados actuales.";
  }

  if (action === "9") {
    text =
      "El creador y el admisnitrador del grupito, puede establecer diferentes permisos para los usuarios, los podemos ver a continuacion: \n\n/setpoll <on/off>: Cierra el reenvío y envío de encuestas para usuarios, dependiendo del modo activar o desactivar esta función. \n\n/setmedia <on/off>: Desactiva en el grupito el envío y reenvío de contenido multimedia, el modo se activa o desactiva dependiendo de la elección. \n\n/setmsg <on/off>: El staff del grupo bloquea la entrada de mensajes en el grupo, el grupito queda silenciado hasta revertir la acción. \n\n/setpin <on/off>: El creador o administrador del grupo puede permitir a los usuarios del grupito fijar mensajes, USAR BAJO SU RESPONSABILIDAD, por defecto este permiso viene desactivado. ";
  }

  if (action === "10") {
    text =
      "Hagamos cambios en el grupito tan fácil con los siguientes comandos: \n\n/settitledef: Establece el titulo del administrador por defecto: GuraADMON. \n\n/settitle + Titulo de admin.: Establece el titulo personalizado del administrador haciendo reply a su mensaje. \n\n/setgtitle <Nuevo nombre>: Establece el nombre del grupo. \n\n/setdescrip <Nueva descripción>: Establece la descripcion personalizada del grupo.";
  }

  if (action === "11") {
    text =
      "Eliminaciones fáciles en el grupito con Gawr Gura: \n\n/del: Elimina un mensaje de un usuario respondiendo a uno de sus mensajes. \n\n/delchatfoto: Elimina la foto actual del grupo. \n\n/delchatsticker: Borra el pack de stickers establecido en el grupo. \n\n/salirbot: El bot sale del grupito.";
  }

  if (action === "12") {
    text =
      "Otras utilidades en el chat: \n\n/chatlink: Devuelve el enlace del grupo. \n\n/staff: El bot muestra la lista del creador con administradores en el grupo. \n\n@admin: Haces un llamado a los administradores del grupo. \n\n/msg <mensaje>: El bot envia el mensaje añadido al comando en el grupo. \n\n!copiar: El bot copiará cualquier tipo de mensaje en el grupo sin la etiqueta de reenviado. \n\n!reenviar: El bot reenvia cualquier tipo de mensaje en el chat con la etiqueta del nombre del usuario. \n\nNota: El bot por defecto da la bienvenida a los nuevos usuarios con mensajes random pero se eliminan automáticamente despues de 1 min.";
  }
  if (action === "14") {
    text =
      "ID de usuarios: \n\n/myid: Devuelve un mensaje con tu identificador de usuario. \n\n/userid: Devuelve un mensaje con el ID del usuario haciendo reply a su mensaje.\n\n/chatid: Devuelve un mensaje con el ID del grupo.";
  }
  if (action === "15") {
    text =
      "Información para los usuarios: \n/info: Responde con tu informacion de usuario.\n\n/uinfo: Devuelve la informacion de otro usuario haciendo reply a uno de sus mensajes.";
  }

  if (action === "16") {
    bot.answerCallbackQuery({
      callback_query_id: callbackQuery.id,
      text: "¡A continuación encontraras una serie de comandos creados para darle ambiente al grupito!",
      show_alert: true,
    });
  }

  if (action === "20") {
    text =
      "Aw, con Gawr Gura puedes expresar tus emociones: \n\n/kiss, /besar: Entregale un beso a un usuario haciendo reply a uno de sus mensajes. \n\n/hug, /abrazar: Responde un mensaje en el chat para darle un tierno abrazo. \n\n/golpear, /kill: Al hacer respuesta de un mensaje en el chat, el bot responde con esta emoción. \n\n/spank, /nalguear: Entrega una nalgadita al usuario en respuesta de uno de sus mensaje en el grupito. \n\n/pat, /cariciar: Responde a un mensaje para dar una tierna caricia. \n\n/rbesar <razón>: Agrega un motivo a ese beso especial. \n\n/rabrazar <razón>: Agrega la razón del abrazo que has dado a esa personita especial.";
  }

  if (action === "21") {
    text =
      " Gawr creó test´s para pasar el ratos en sus grupos, divierteté usando los siguientes comandos y descubre tus caracteristicas especiales: \n\n¿Conoces el clásico juego de la botella para cumplir retos entre amigos?, En efecto, ambos sabemos de que hablamos, Gawr Gura trae para ti su propia version: \n\n/botella <categoría>: Elige de entre 5 categoría diferentes para responder preguntas que te sacaran hasta la última verdad. \nLas categorías disponibles con las siguientes: \n\n🍾Anime\n🍾Amor\n🍾+18\n🍾Chicos\n🍾Confesión\n\nPara elegir tú categoría, sigue este ejemplo: \n/botella amor, /botella anime, etc. \n\n/qtaesthetic: Descubre cúal es el tipo de estílo aesthetic que te define. \n\n/qttierno: Aw, apuesto a que quieres saber que tan tierno eres. \n\n/qtnerd: ¿Quieres saber qué tan nerd eres?, fácil dale a este comando. \n\n/qtotaku: Gawr Gura calífica que tan otaku eres, pinchale al comando Kamisama. \n\n/qtfrio: ¿Sabes que tan frio eres?. \n\n/qtcringe: ¿Que tanto cringes das?. \n\n/qtgay: Mide tú nivel de porcentaje Gay.";
  }
  if (action === "23") {
    text =
      "Otros comandos de ocio extras: \n\n/mibio: Muestra tú biografía con los usuarios del grupo, pero, ¡No sabes que sorpresa te salté!. \n\n/qtcompatibles: Responde al mensaje de un usuario para conocer que probabilidades hay tener éxito como pareja owo. \n\n/dardo: Lanza un emoji de dardo probando tu suerte. \n/dado: Lanza un dado donde saldra un numero aleatorio del 1 al 6. \n/boliche: Lanza una bola de boliche a ver cuantos pinos tiras. \n/tragaperra: Vamos, mete una moneda a la maquina y prueba tu suerte. \n/basket: Toma una pelota e intenta canastar, Suerte. \n/futbolito: ¿Seras capaz de meter un gol?, Intentalo. \n\n/siono: Crea encuestas añadiendo el mensaje a este comando con respuestas predefinidas Si, No, Tal vez. \n\n/aquiz: Diviertete respondiendo la trivia con preguntas de anime, japón y cultura general. \n\n/basta: Responde acertijos y divertete pensando la respuesta.";
  }
  if (action === "24") {
    bot.answerCallbackQuery({
      callback_query_id: callbackQuery.id,
      text: "Los comandos disponibles en cada modúlo, son herramientas que serán de utilidad en tú grupo.",
      show_alert: true,
    });
  }
  if (action === "25") {
    text =
      "Este módulo te ayudará a encontrar resultados a partir de una imagen, Gawr Gura encontrará los mejores resultados con los siguientes comandos: \n\n/sauce, /s: Responde a una imagen para dar con los 5 resultados más similares a la búsqueda. \n\n/reverse, /r: Respondes a una imagen y gawr gura te dará un resultado de búsqueda de Google.";
  }
  if (action === "29") {
    text =
      "Los siguientes comandos te ayudaran a traducir texto fácilmente: \n\n/tr <codígo ISO>: Responde a un texto para traducirlo al lenguaje especificado en el comando, el bot detecta el idioma de origen.\nEjemplos: /tr es, /tr en, /tr pt \n\n/lenguajes: El bot muestra los lenguajes disponibles para ser utilizados en el traductor. \n\n/ytr <es>: Traduce texto del idioma origen íngles al español con el traductor de Yandex.";
  }
  if (action === "30") {
    text =
      "Gawr Gura traé para ti búsquedas en YouTube en Telegram, de una manera muy sencilla de utilizar: \n\n/yt <búsqueda>: Gawr gura responde con el video más popular de la búsqueda. \n\n/ytvsearch <búsqueda>: El bot devuelve los 5 vídeos con más recuentos de vistas y populares. \n\n/ytvrsearch <búsqueda>: Filtra los primeros 5 vídeos para la consulta más recientes. \n\n/ytpsearch <búsqueda>: El bot responde con las 5 listas de reproducción más populares en la plataforma.";
  }
  if (action === "36") {
    text =
      "¿Te gusta darle un toque diferente a tus textos?, Si es así Gawr Gura, vino a traer un estilo diferente a tus textos con los siguientes comandos: \n\n/uf <texto>: El texto añadido al comando se transformara así: ｇａｗｒ ｇｕｒａ. \n\n/ui <texto>: El texto añadido se invierte al comando: ƃɐʍɹ ƃnɹɐ. \n\n/uc <texto>: El texto agregado al comando tendrá como resultado: ⓖⓐⓦⓡ ⓖⓤⓡⓐ. \n\n/up <texto>: El texto agregado al comando cambiará el formato al siguiente ejemplo: ⒢⒜⒲⒭ ⒢⒰⒭⒜\n\n/urd <texto>: El texto insertado al comando tendrá el siguiente estilo: ġäẅṛ ġüṛä \n\n/usp <texto>: El texto insertado tornará como resultado: ɢᴀᴡʀ ɢᴜʀᴀ \n\n/ust <texto>: El texto agregado tendrá el siguiente estilo: ǥȺwɍ ǥᵾɍȺ \n\n/ur <texto>: El texto agregado al comando se pinta al réves: gAwᴙ gUᴙA";
  }
  if (action === "37") {
    text =
      "Sube contenido multimedia a Telegraph con los siguientes comandos: \n\n/tf: Responde a una imagen para subirla y el bot devuelve el enlace.\n\n/tg: Responde a una animación/gif para subirla y el bot responde con el enlace hecho. \n\n/tv: Responde a un video/mp4 para subirlo y el bot responde con el enlace hecho.";
  }
  if (action === "38") {
    text =
      "Una que otra sorpresa encontrarás en este modúlo: \n\n/swiki <búsqueda>: Devuelve el recurso informativo completo de la busqueda  usando Wikipedia. \n\n/tts <texto>: El texto que añades al comando, el bot lo responderá con un archivo de audio. \n\n/searchduck <búsqueda>: Devuelve el primer resultado de Duck Duck Go (Internet) para esta consulta. \n\n/paste: Comparte código con tus amigos o simplemente comparte texto respondiendo con este comando a mensajes con el texto que deceas compartir, el bot responderá con una URL cargada con el texto. \n\n/diccionario <búsqueda>: Encuentra la definición de una palabra en el diccionario de la la real academia española. \n\n/clima <búsqueda>: Devuelve el estado meteorológico más actual sobre el lugar buscado. \n\nEjemplo: /clima mexico. \n\n/pais <búsqueda>: Contiene datos de un pais que se ingrese en la busqueda, tales como el código alfa, código de llamada, capital, etc.. \n\nNota: La búsqueda es exclusiva para un país en especifico, como Colombia, México, Perù, etc. \n\n/qr <URL>: El bot mandará en respuesta el QR creado apartir de la URL proporcionada listo para ser compartido. \n\n/upimgur: Responde a una imagen para cargarla a imgur y el bot responde con la url ya cargada. \n\n/gif <búsqueda>: El bot responde con un gif apartir de la consulta. \n\n/img <búsqueda>: El bot responde con una imagen a apartir de la consulta.\n\n/movie <nombre de pelicula>: Encuentra tús peliculas favoritas, con una descripción detallada. \n\n/serie <nombre de serie>: Haz la búsqueda de tus serie favoritas de plataformas famosas como Netflix, TV shows, etc. \n\n/nasaphoto: el bot responde con la fotogtafía del día tomada por la NASA.";
  }
  if (action === "39") {
    bot.answerCallbackQuery({
      callback_query_id: callbackQuery.id,
      text: "¡Gawr Gura trae a continuación especiales que la haran única!",
      show_alert: true,
    });
  }

  if (action === "40") {
    text =
      "¡Woah Imagenes/wallpapers de tús vtuber´s hololive favoritas!, encuentralas con los siguientes comandos:\n\n/mori: Mori calliope  \n\n/korone: Inugami Korone \n\n/marine: Houshou Marine. \n\n/gura: Gawr Gura \n\n/usada: Pekora Usada \n\n/kizuna: Kizuna Ai \n\n/fubuki: Shirakami Fubuki \n\n/minato: Minato Aqua \n\n/uruha: Uruha Rushia \n\n/mio: Ookami Mio \n\n/watame: Tsunomaki Watame \n\n/luna: Himemori Luna \n\n/nene: Momosuzu Nene \n\n/flare: Shiranui Flare \n\n/sora: Tokino Sora. \n\n(El comando puede ser utilizado con / o .)\n\nNota: Los resultados de búsqueda seran aleatorios.";
  }
  if (action === "41") {
    text =
      "Los comandos para este modúlo se encuentran a continuación: \n\n/fanime <búsqueda/nombre de anime>: Encuentra la información especifica para el anime que este buscando.\n\n/anime <búsqueda/nombre de anime>: Encuentra información de un anime desde la fuente de anilist.\n\n/manga <búsqueda/nombre del manga>: El bot responde con la información detallada de la consulta(Mangas en emisión, finalizados y novelas ligeras). \n\n/caracter <búsqueda/personaje>: Encuentra a tus personajes favoritos con este comando y obtienes su información detallada. \n\n/fsearchanime: ¿Buscas el nombre de un anime y traes consigo la imagen?, con este comando responde a esas imagenes y busca entre +22,330 horas de anime el nombre del anime al que coincide y una que otra sorpresa más.\n\n/wallpaper, /w: Encuentra Wallpapers random de anime(SFW), el bot responderá con la imagen y el documento. \n\n/2wallpaper, /2w: El bot responde con grupos de imagenes aleatorias. \n\n/iwall <búsqueda>: Encuentra wallpapers de anime a partir de la consulta que se realize. \n\n/pokemon <búsqueda/nombre del pokemón>: Revela la información completa del pokemón, con sus habilidades, estadisticas, etc. \n\n/quote: Gura responde con frases épicas de personajes anime.";
  }
  if (action === "42") {
    text =
      "¡Stickers con Gawr Gura!, no te pierdas sus comandos a continuación: \n\n/stickers <búsqueda>: Encuentra packs de stickers a partir de la búsqueda. \n\n/idsticker: Respondes a un sticker para obtener su ID y sticker pack de origen. \n\n/getsticker: Respondes a un sticker para convertirlo en un archivo documento PNG.";
  }

  if (action === "menu") {
    if (msg.chat.type == "private") {
      text = `➕Revisa a continuación todas mis habilidades Kamisama, en cada botón encontrarás la información necesaria para el uso de cada uno de los comandos. \n\n/donar: Un granito de arena para tener despierta a Gawr Gura siempre. \n\n🐳Para sugerencias, opiniones, comentar bugs y/o errores del bot visita (@GawrGuraSoporte).`;
      opts.reply_markup = menuOpts.reply_markup;
    }
  }
  bot.editMessageText(text, opts);
});
/***************************************************************************************************************************+ */
/*bot.onText(/\/editable/, function onEditableText(msg) {
  var chatId = msg.chat.id;
  bot
    .sendMessage(chatId, "ᕙ༼*◕_◕*༽ᕤ", {
      parse_mode: "HTML",
    })
    .then(result => {
      bot.editMessageText("(-_-)", {
        chat_id: chatId,
        message_id: result.message_id,
      });
    });
});*/

/**************************************************************************************************************************************** */

/*bot.on("message", (msg) => {
  if (msg.text) {
    const chatId = msg.chat.id;
    const usersId = msg.reply_to_message.from.first_name;
    var contador = 0;
    contador1 = contador + 1;
    contador = contador1 + contador;

    if (msg.text == "+") {
      bot.sendMessage(chatId, contador + " ");
    }
  }
});*/

/*bot.onText(/\/setme (.+)/, (msg, match) => {
  if (msg.chat.type == "private") {
    bot.sendMessage(msg.from.id, "Este comando funciona en grupos.");
  }
  let chatId = msg.chat.id;
  var userId = msg.reply_to_message.from.id;
  let mebio = match[1];
  bot.sendMessage(chatId, "Informacion lista: " + mebio);
});*/

bot.onText(/\/clima (.+)/, function (msg, match) {
  var weather = match[1];
  var chatId = msg.chat.id;
  var Weather_key = "3d05aba1dfd2483686a64433212006";
  request(
    `https://api.weatherapi.com/v1/current.json?key=${Weather_key}&q=${weather}`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        bot
          .sendMessage(chatId, "🐟_Estado actual de: _" + weather + "", {
            parse_mode: "Markdown",
          })
          .then(function (msg) {
            var res = JSON.parse(body);
            const city_name = res.location.name;
            const state_name = res.location.region;
            const country_name = res.location.country;
            const local_time = res.location.localtime;
            const temp_c = parseInt(res.current.temp_c);
            const temp_f = parseInt(res.current.temp_f);
            const condition_text = res.current.condition.text;
            const humidity = res.current.humidity;
            const wind_kph = parseFloat(res.current.wind_kph);
            const cloud = parseInt(res.current.cloud);
            const icon = res.current.condition.icon.replace("//", "");
            bot.sendDocument(chatId, icon, {
              caption: `Lugar encontrado: ${city_name} \nRegión: ${state_name} \nPais: ${country_name} \nFecha y Hora actual: ${local_time} \nTemperatura: ${temp_c}°C | ${temp_f}°F \nCondicion: ${condition_text} | Humedad: ${humidity} \nVelocidad del viento: ${wind_kph} | Nubes: ${cloud}`,
            });
          });
      }
    }
  );
});

bot.onText(/\/tempanimenext/, function (msg) {
  var chatid = msg.chat.id;
  request(
    `https://api.jikan.moe/v3/season/later`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var res = JSON.parse(body);
        var nombres = res.anime;

        const animestemp = nombres.map(function (nombre) {
          return nombre.title;
        });

        bot.sendMessage(
          chatid,
          "Animes de la proxima temporada: " + animestemp
        );
      }
    }
  );
});

bot.onText(/\/searchduck (.+)/, function (msg, match) {
  var duck = match[1];
  var chatid = msg.chat.id;
  request(
    `https://api.duckduckgo.com/?q=${duck}&format=json&pretty=1&no_html=1&skip_disambig=1`,
    {
      headers: {
        "Accept-Language": "es_LA",
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var res = JSON.parse(body);
        bot
          .sendPhoto(
            chatid,
            "https://blogthinkbig.com/wp-content/uploads/sites/4/2020/03/duckduckgo.jpg",
            {
              caption: `<i>🔎Resultado para:</i> <b>${res.Heading}</b> \n\n<code>${res.Abstract}</code>`,
              parse_mode: "HTML",
            }
          )
          .catch((err) => {
            bot.sendMessage(
              msg.chat.id,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      }
    }
  );
});
/*///////////////////////////////////////////////////////////////////////////////////////FUNCIONES YOUTUBE////////////////////////////////////////////////////////////////////////////////*/
bot.onText(/\/ytvsearch (.+)/, function (msg, match) {
  var yt = match[1];
  var chatid = msg.chat.id;
  request(
    `https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0KQEl_Yall8lL5A2tMUTd9TbtXk103fE&q=${yt}&part=snippet,id&order=viewCount&maxResults=5&type=video`,
    function (error, response, body) {
      try {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          bot.sendMessage(
            chatid,
            `🎞<i><b>Resultados de vídeos más populares en YouTube para la búsqueda:</b></i> \n\n1️⃣-⭐️\n🎥<b>Título:</b> <code>${res.items[0].snippet.title}</code>\n 
              \n2️⃣-⭐️\n🎥<b>Título:</b> <code>${res.items[1].snippet.title}</code>\n
              \n3️⃣-⭐️\n🎥<b>Título:</b> <code>${res.items[2].snippet.title}</code>\n
              \n4️⃣-⭐️\n🎥<b>Título:</b> <code>${res.items[3].snippet.title}</code>\n
              \n5️⃣-⭐️\n🎥<b>Título:</b> <code>${res.items[4].snippet.title}</code>\n`,
            {
              parse_mode: "HTML",
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "1️⃣Ir al vídeo→",
                      url: `http://www.youtube.com/watch?v=${res.items[0].id.videoId}`,
                      callback_data: "any",
                    },
                  ],
                  [
                    {
                      text: "2️⃣Ir al vídeo→",
                      url: `http://www.youtube.com/watch?v=${res.items[1].id.videoId}`,
                      callback_data: "any",
                    },
                    {
                      text: "3️⃣Ir al vídeo→",
                      url: `http://www.youtube.com/watch?v=${res.items[2].id.videoId}`,
                      callback_data: "any",
                    },
                  ],
                  [
                    {
                      text: "4️⃣Ir al vídeo→",
                      url: `http://www.youtube.com/watch?v=${res.items[3].id.videoId}`,
                      callback_data: "any",
                    },
                    {
                      text: "5️⃣Ir al vídeo→",
                      url: `http://www.youtube.com/watch?v=${res.items[4].id.videoId}`,
                      callback_data: "any",
                    },
                  ],
                ],
              },
            }
          );
        }
      } catch (e) {
        bot.sendMessage(chatid, "No he dado con la búsqueda:(");
      }
    }
  );
});

bot.onText(/\/yt (.+)/, function (msg, match) {
  var yt = match[1];
  var chatid = msg.chat.id;
  request(
    `https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0KQEl_Yall8lL5A2tMUTd9TbtXk103fE&q=${yt}&part=snippet,id&order=viewCount&maxResults=1&type=video`,
    function (error, response, body) {
      try {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          bot.sendMessage(
            chatid,
            `🎞<i><b>Resultado de vídeo en YouTube para la búsqueda:</b></i> \n\n1️⃣ - ⭐️⭐️⭐️⭐️⭐️\n🎥<b>Título:</b> <code>${res.items[0].snippet.title}</code>\n\n📄<b>Descripción:</b> <code>${res.items[0].snippet.description}</code>`,
            {
              parse_mode: "HTML",
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "Ir al vídeo→",
                      url: `http://www.youtube.com/watch?v=${res.items[0].id.videoId}`,
                      callback_data: "any",
                    },
                  ],
                ],
              },
            }
          );
        }
      } catch (e) {
        bot.sendMessage(chatid, "No he dado con la búsqueda:(");
      }
    }
  );
});

bot.onText(/\/ytvrsearch (.+)/, function (msg, match) {
  var ytvr = match[1];
  var chatid = msg.chat.id;
  request(
    `https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0KQEl_Yall8lL5A2tMUTd9TbtXk103fE&q=${ytvr}&part=snippet,id&order=date&maxResults=5&type=video`,
    function (error, response, body) {
      try {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          bot.sendMessage(
            chatid,
            `🔥<i><b>Resultados de vídeos más recientes en YouTube para la búsqueda:</b></i> \n\n1️⃣-🔥\n🎥<b>Título:</b> <code>${res.items[0].snippet.title}</code>\n
              \n2️⃣-🔥\n🎥<b>Título:</b> <code>${res.items[1].snippet.title}</code>\n 
              \n3️⃣-🔥\n🎥<b>Título:</b> <code>${res.items[2].snippet.title}</code>\n 
              \n4️⃣-🔥\n🎥<b>Título:</b> <code>${res.items[3].snippet.title}</code>\n
              \n5️⃣-🔥\n🎥<b>Título:</b> <code>${res.items[4].snippet.title}</code>\n`,
            {
              parse_mode: "HTML",
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "1️⃣Ir al vídeo→",
                      url: `http://www.youtube.com/watch?v=${res.items[0].id.videoId}`,
                      callback_data: "any",
                    },
                  ],
                  [
                    {
                      text: "2️⃣Ir al vídeo→",
                      url: `http://www.youtube.com/watch?v=${res.items[1].id.videoId}`,
                      callback_data: "any",
                    },
                    {
                      text: "3️⃣Ir al vídeo→",
                      url: `http://www.youtube.com/watch?v=${res.items[2].id.videoId}`,
                      callback_data: "any",
                    },
                  ],
                  [
                    {
                      text: "4️⃣Ir al vídeo→",
                      url: `http://www.youtube.com/watch?v=${res.items[3].id.videoId}`,
                      callback_data: "any",
                    },
                    {
                      text: "5️⃣Ir al vídeo→",
                      url: `http://www.youtube.com/watch?v=${res.items[4].id.videoId}`,
                      callback_data: "any",
                    },
                  ],
                ],
              },
            }
          );
        }
      } catch (e) {
        bot.sendMessage(chatid, "No he dado con la búsqueda:(");
      }
    }
  );
});

bot.onText(/\/ytpsearch (.+)/, function (msg, match) {
  var ytp = match[1];
  var chatid = msg.chat.id;
  request(
    `https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0KQEl_Yall8lL5A2tMUTd9TbtXk103fE&q=${ytp}&part=snippet,id&order=viewCount&maxResults=5&type=playlist`,
    function (error, response, body) {
      try {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          bot.sendMessage(
            chatid,
            `🎞<i><b>Resultados de listas de reproducción en YouTube más populares para la búsqueda:</b></i> \n\n1️⃣-⭐️\n🎥<b>Título:</b> <code>${res.items[0].snippet.title}</code>
              \n2️⃣-⭐️\n🎥<b>Título:</b> <code>${res.items[1].snippet.title}</code>\n
              \n3️⃣-⭐️\n🎥<b>Título:</b> <code>${res.items[2].snippet.title}</code>\n
              \n4️⃣-⭐️\n🎥<b>Título:</b> <code>${res.items[3].snippet.title}</code>\n
              \n5️⃣-⭐️\n🎥<b>Título:</b> <code>${res.items[4].snippet.title}</code>\n`,
            {
              parse_mode: "HTML",
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "1️⃣Ir a la play→",
                      url: `https://youtube.com/playlist?list=${res.items[0].id.playlistId}`,
                      callback_data: "any",
                    },
                  ],
                  [
                    {
                      text: "2️⃣Ir a la play→",
                      url: `https://youtube.com/playlist?list=${res.items[1].id.playlistId}`,
                      callback_data: "any",
                    },
                    {
                      text: "3️⃣Ir a la play→",
                      url: `https://youtube.com/playlist?list=${res.items[2].id.playlistId}`,
                      callback_data: "any",
                    },
                  ],
                  [
                    {
                      text: "4️⃣Ir a la play→",
                      url: `https://youtube.com/playlist?list=${res.items[3].id.playlistId}`,
                      callback_data: "any",
                    },
                    {
                      text: "5️⃣Ir a la play→",
                      url: `https://youtube.com/playlist?list=${res.items[4].id.playlistId}`,
                      callback_data: "any",
                    },
                  ],
                ],
              },
            }
          );
        }
      } catch (e) {
        bot.sendMessage(chatid, "No he dado con la búsqueda:(");
        console.log(e);
      }
    }
  );
});

bot.onText(/\/ytr (.+)/, function (msg, match) {
  var trad = match[1];
  var trs = msg.reply_to_message.text;
  var chatid = msg.chat.id;
  if (trad === "es") {
    request(
      `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20210706T033658Z.7f7095d122c55a9a.3c70bab2d04d74a3edbb1c8992894a29dc4167bb&text=${trs}&lang=es`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            bot.sendMessage(
              chatid,
              `Texto traducido del inglés al español: \n\n${res.text}`,
              {
                parse_mode: "HTML",
              }
            );
          }
        } catch (e) {
          console.log(e);
        }
      }
    );
  }
});

bot.onText(/\/swiki (.+)/, function (msg, match) {
  var duck = match[1];
  var chatid = msg.chat.id;
  request(
    `https://api.duckduckgo.com/?q=${duck}&format=json&pretty=1&no_html=1&skip_disambig=1`,
    {
      headers: {
        "Accept-Language": "es_LA",
      },
    },
    function (error, response, body) {
      try {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          bot.sendMessage(
            chatid,
            `Muy bien ${msg.from.first_name}, he dado con la busqueda. \n\n🔎Resultados encontrados: ${res.Heading} \n\n✉️Informacion completa a continuacion: ${res.AbstractURL}`
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  );
});

bot.onText(/\/gif (.+)/, function (msg, match) {
  var gif = match[1];
  var chatid = msg.chat.id;
  request(
    `https://g.tenor.com/v1/search?q=${gif}&key=C4EHLN61H00H&limit=1`,
    function (error, response, body) {
      try {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          bot.sendAnimation(chatid, res.results[0].media[0].mediumgif.url);
        }
      } catch (err) {
        console.log(err);
      }
    }
  );
});

bot.onText(/\/pais (.+)/, function (msg, match) {
  var pais = match[1];
  var chatid = msg.chat.id;
  request(
    `https://restcountries.eu/rest/v2/name/${pais}`,
    function (error, response, body) {
      try {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          bot.sendMessage(
            chatid,
            `╭┈┈┈⋆┈┈⊰ 🇲🇽 ⊱┈┈⋆┈┈┈╮\n👑<b>País:</b> <code>${res[0].name}</code>
          \n<i>Codigo alfa-2:</i> <code>${res[0].alpha2Code}</code>\n<i>Codigo alfa-3:</i> <code>${res[0].alpha3Code}</code>
          \n📱<i>Codigo de llamada:</i> <code>+${res[0].callingCodes}</code>
          \n<i>Capital:</i> <code>${res[0].capital}</code>
          \n🌐<i>Latitud y longitud:</i> <code>${res[0].latlng}</code>
          \n📊<i>GINI:</i> <code>${res[0].gini}</code>
          \n<i>🗃Traducciones:</i> 
          \n<i>🇪🇸Español:</i> <code>${res[0].translations.es}</code>\n<i>🇩🇪Aleman:</i> <code>${res[0].translations.de}</code>\n<i>🇫🇷Francés:</i> <code>${res[0].translations.fr}</code>\n<i>🇯🇵Japonés:</i> <code>${res[0].translations.ja}</code>\n<i>🇮🇹Italiano:</i> <code>${res[0].translations.it}</code>\n<i>🇳🇱Bretón:</i> <code>${res[0].translations.br}</code>\n<i>🇧🇷Portugués:</i> <code>${res[0].translations.pt}</code>\n<i>🇳🇱Neerlandés:</i> <code>${res[0].translations.nl}</code>\n<i>🇭🇷Croata:</i> <code>${res[0].translations.hr}</code>\n<i>🇮🇷Persa:</i> <code>${res[0].translations.fa}</code>\n╰┈┈┈⋆┈┈⊰ 🇲🇽 ⊱┈┈⋆┈┈┈╯`,
            { parse_mode: "HTML" }
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  );
});

bot.onText(/\/fsearchanime/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.photo[1].file_id;
  bot.getFileLink(photo).then(function (enlace) {
    console.log(enlace);
    request(
      `https://api.trace.moe/search?url=${enlace}`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            bot.sendMessage(
              chatId,
              `\n🎍<b><i>¡Anime encontrado!</i></b> \n\n🎬<b><i>Nombre:</i></b> <code>${res.result[0].filename}</code> \n\n🎞️<b><i>Episodio imagen:</i></b> <code>${res.result[0].episode}</code>
              \n<b><i>🌡️Similitud de la imagen:</i></b> <code>%${res.result[0].similarity}</code>
              \n<b><i>🧧ID Anilist:</i></b> <code>${res.result[0].anilist}</code>`,
              { parse_mode: "HTML" }
            ).then;
            bot.sendVideo(chatId, res.result[0].video, {
              caption: `<code>-🔎Escena especifica de la imagen encontrada.</code>`,
              parse_mode: "HTML",
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    );
  });
});

/*bot.onText(/^\/upimgur/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  console.log(msg);

  var photo = msg.reply_to_message.photo[1].file_id;
  bot.getFileLink(photo).then(function (enlace) {
    console.log(enlace);
    var clientId = "cc34bf6c0565a1b";

    imgur.setClientID(clientId);

    imgur.upload(enlace, function (err, res) {
      console.log(res.data.link);
      var link = res.data.link;

      bot.sendMessage(
        chatId,
        "🐬Enlace de la imagen subida a Imgur: \n\n" + link
      );
    });
  });
});*/

/************************************TESTS ENTRETENIMIENTO**************************************/
bot.onText(/\/qtaesthetic/, function (msg) {
  var chatId = msg.chat.id;
  var qtagif = [
    "https://i.pinimg.com/originals/1f/8f/39/1f8f3975b69c4903d275093c3aec1fbf.gif",
    "https://media1.tenor.com/images/13c45d7d4e49fa40c423bf0e4a1c76f8/tenor.gif",
    "https://pa1.narvii.com/7692/13aba0a6619ae82b3524e6924adeb6f19d5fc289r1-500-294_hq.gif",
    "https://64.media.tumblr.com/7602d9db0c566441c7fa1b4d20e00e65/tumblr_nza8hqxAxh1tmz0wgo1_500.gif",
    "https://www.icegif.com/wp-content/uploads/aesthetic-icegif.gif",
    "https://www.icegif.com/wp-content/uploads/aesthetic-icegif-18.gif",
    "https://64.media.tumblr.com/3f0e18c0f81d9e0159db93b6b96bba3b/tumblr_ph7y0nisvR1re6nxeo1_1280.gif",
    "https://yiche-static.oss-cn-hangzhou.aliyuncs.com/images/2021-02-01/a547a7b0.gif",
    "https://www.gifcen.com/wp-content/uploads/2021/03/aesthetic-gif-13.gif",
    "https://thumbs.gfycat.com/EnlightenedSelfreliantChrysomelid-size_restricted.gif",
  ];
  var ma = Math.random();
  var totalqtagif = Math.floor(ma * qtagif.length);

  var qtg = [
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _💖Tú tipo de aesthetic es:_ *Pale*, _Todo lo simple te resulta simplemente hermoso._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _💖Tú tipo de aesthetic es:_ *Vintage*, _Amas las cosas antiguas, la música y ropa antigua, etc._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _💖Tú tipo de aesthetic es:_ *Kawaii pastel*, _Eres una persona que adora el anime, las cosas japonesas y bastante tiernx._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _💖Tú tipo de aesthetic es:_ *Art Hoe*, _Eres una persona que ama el arte, los colores cálidos generalmente el amarillo y eres muy alegre, sin duda este es tu aesthetic._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _💖Tú tipo de aesthetic es:_ *Grunje*, _tienes rabia y sentimientos acumulados, te gusta la musica con personalidad y no te cortas al expresar tus sentimientos._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _💖Tú tipo de aesthetic es:_ *Vaporwave*, _Eres sad, cool y amante del neon._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _💖Tú tipo de aesthetic es:_ *Baddie*, _Tienes caracter fuerte, con mucho ego y presumidx._`,
  ];
  var ma = Math.random();
  var totalqtg = Math.floor(ma * qtg.length);
  bot.sendAnimation(chatId, qtagif[totalqtagif], {
    caption: qtg[totalqtg],
    parse_mode: "Markdown",
  });
});

bot.onText(/\/qttierno/, function (msg) {
  var chatId = msg.chat.id;
  var qtagif = [
    "https://pa1.narvii.com/6405/7f9074efad73029e9c29412b50590dbf35818531_hq.gif",
    "https://pa1.narvii.com/6904/de3cb10db5a332b433c47072146068694506c179r1-500-281_hq.gif",
    "https://acegif.com/wp-content/gif/blushing-35.gif",
    "https://media1.tenor.com/images/b68e4356fa88d51230ee92333d9e0fca/tenor.gif?itemid=18186996",
    "https://i.pinimg.com/originals/ba/25/a9/ba25a9be75cbaaa4b2c2c89a2a117767.gif",
    "https://i.gifer.com/4gtp.gif",
    "http://pa1.narvii.com/6307/23dc285960dd581888f9edc5ee7b47ae2be91170_00.gif",
    "https://i1.wp.com/25.media.tumblr.com/cb9cbc87f51f05526070e31f74d22bd5/tumblr_mgxlatzo9D1rjxujto1_500.gif",
    "http://4.bp.blogspot.com/-Beu5FZLV85k/UvKJD0OV8eI/AAAAAAAAR18/2fGxf7F2nVg/s1600/anime-blond-gif-girl-kawaii-Favim.com-237584_large.gif",
    "https://i.pinimg.com/originals/bb/38/ac/bb38ac3043a2b1ce3ad7bb12c0496589.gif",
  ];
  var ma = Math.random();
  var totalqtagif = Math.floor(ma * qtagif.length);

  var qtg = [
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres muy tiernx, eres muy pero muy tierno que cuando te ven pasar por la calle las personas vomitan arcoiris._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres totalmente tiernx, Eres muy tiernx, tanto en personalidad como en apariencia._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres tiernx, Todos tus amigos te recuerdan lo tiernx que eres a diario, porque si lo eres y punto._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres tiernx, Eres tiernx y nadie puede negarlo, aunque también tienes ese típico estilo BadGirl/boy._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _No eres tiernx :(, No eres tierna pero tu estilo BadGirl roba corazones._`,
  ];
  var ma = Math.random();
  var totalqtg = Math.floor(ma * qtg.length);
  bot.sendAnimation(chatId, qtagif[totalqtagif], {
    caption: qtg[totalqtg],
    parse_mode: "Markdown",
  });
});

bot.onText(/\/qtnerd/, function (msg) {
  var chatId = msg.chat.id;
  var qtagif = [
    "https://i.pinimg.com/originals/c9/d9/91/c9d9916114b0ba5a3832bdb2a7dbb23b.gif",
    "https://i.pinimg.com/originals/a7/e1/38/a7e138395d007c6a2fa740c6e959d394.gif",
    "https://i.gifer.com/TGXb.gif",
    "https://i.pinimg.com/originals/90/a5/2c/90a52c62c1df48f4a41ad67893185f93.gif",
    "https://i.pinimg.com/originals/bc/f9/0d/bcf90d16c7c561df761a5c353b176372.gif",
    "https://i.pinimg.com/originals/82/fe/21/82fe217c5975418b86a40c142c436e0d.gif",
    "https://i.pinimg.com/originals/5a/cb/e7/5acbe72ecb70994137656b1c9e4081b5.gif",
  ];
  var ma = Math.random();
  var totalqtagif = Math.floor(ma * qtagif.length);

  var qtg = [
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _🤓Eres demasiado nerd, no sabes que hay un gran mundo detrás de lo que tu crees que es solo un videojuego, una película o un anime._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _🤓Todo un nerd, te quiero felicitar por ser tan un "Don Nadie" pero sabes mucho acerca de eso que te apasiona y te emociona a tal punto de querer tener una waifu._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _🤓Eres todo un friki no nerd, No llegas a los limites que un nerd llegaría a hacer por su franquicia favorita. Felicidades, no eres tan ñoño(eso es bueno)._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _🤓Eres un poco nerd, A veces se te sale lo nerd aunque lo niegues._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _🤓Nerd de closet, eres un autentico nerd, sin embargo delante de los demás te gusta aparentar lo contrario, por miedo al rechazo._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _🤓Tú nivel de nerd es insuperable, hablas solo todo el tiempo, escuchas música sad o instrumental, duermes temprano, ¡en fin!._`,
  ];
  var ma = Math.random();
  var totalqtg = Math.floor(ma * qtg.length);
  bot.sendAnimation(chatId, qtagif[totalqtagif], {
    caption: qtg[totalqtg],
    parse_mode: "Markdown",
  });
});

bot.onText(/\/qtotaku/, function (msg) {
  var chatId = msg.chat.id;
  var qtagif = [
    "https://i.pinimg.com/originals/c9/d9/91/c9d9916114b0ba5a3832bdb2a7dbb23b.gif",
    "https://i.imgur.com/tg9OG4w.gif",
    "https://data.whicdn.com/images/297928560/original.gif",
    "https://media1.tenor.com/images/0e22d9e02ff37144f79e97b998f8852a/tenor.gif",
    "https://memestatic.fjcdn.com/gifs/Anime+girl+gifs_3a8572_6970665.gif",
    "https://media1.tenor.com/images/6e14c47b040a20c29413cb14b6e4753a/tenor.gif",
    "https://i.pinimg.com/originals/57/e8/c8/57e8c888fa3f5132ec7e45d082512b4b.gif",
    "https://media1.tenor.com/images/ab6079fc9642a0b71ed870b111091f93/tenor.gif",
    "https://i.pinimg.com/originals/00/c5/96/00c596d5eaeabd14c9e7bd88042fa621.gif",
    "https://66.media.tumblr.com/e8e7bb8967a26aa3f4934445e622d46b/959c94a404ffc1c3-79/s640x960/6960d54726066b099dfb9b319357b0e590758636.gif",
    "https://memeworld.funnyjunk.com/gifs/Japanese+people+vs+engrish+you+know+the+source_6701d5_5205214.gif",
  ];
  var ma = Math.random();
  var totalqtagif = Math.floor(ma * qtagif.length);

  var qtg = [
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}),👻_Eres un otaku fake, te viste apenas 1 anime y el manga te parece horrible, juzgas otros anime que nisiquiera vistes y defiendes los más famosos los cuales ni viste el primer episodio._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}),👻_Eres un otaku experto, Te viste muchos animes, sabes sus openings y leiste muchos mangas te felicito te puedes tomar como un otaku ¡perfecto!._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}),👻_Eres un otaku principiante, viste algunos animes buenos pero no los suficientes para ser un experto, aun no leiste ningun manga pero de seguro en dentro de poco seras el mas experto del anime._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}),👻_Eres un otaku noob, Estas empezando a ser un otaku, ¡sigue así!._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}),👻_Eres un otaku alfa, Eres de los mejores otakus, ¡Enhorabuena!._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}),👻_Eres el dios otaku, Cantarias a pulmón 1001 openings, te gustaría hacer cosplay, estas siempre pendiente de los animes en emisión y nunca dejarias el anime._`,
  ];

  var ma = Math.random();
  var totalqtg = Math.floor(ma * qtg.length);
  bot.sendAnimation(chatId, qtagif[totalqtagif], {
    caption: qtg[totalqtg],
    parse_mode: "Markdown",
  });
});

bot.onText(/\/qtcringe/, function (msg) {
  var chatId = msg.chat.id;
  var qtagif = [
    "https://media.tenor.com/images/183010eff72c29b1867510cd74678178/tenor.gif",
    "https://i.redd.it/c5q91gegre331.gif",
    "https://media1.tenor.com/images/a38d711271e2e6745fc6ac49821be77d/tenor.gif?",
    "https://pa1.narvii.com/6340/1712dea613ddca21d9ad63557c70600e24845a2a_hq.gif",
    "https://media1.tenor.com/images/9b71cbdd52a79258b6dcf6a51c40654b/tenor.gif?",
    "https://i.pinimg.com/originals/cb/80/bc/cb80bc66f74ce929839569bd9f68b5c2.gif",
    "https://thumbs.gfycat.com/FairVigorousBuck-size_restricted.gif",
    "https://64.media.tumblr.com/d6471c003c4c863df30ca3e6fb9c8184/1fb1078b8ed678c7-08/s500x750/5d257f1a52d4d4e87fb373714592597aac0bdfd5.gif",
  ];
  var ma = Math.random();
  var totalqtagif = Math.floor(ma * qtagif.length);

  var qtgc = [
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _No das cringe amigx te felicito. Eres perfecto no das cringe, eres original, aesthetic, no te gusta lo básico, por ejemplo, ser gacha o ser otaku por moda :) Amix eres lo máximo._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Das demasiado cringe:(, eres demasiado grasoso, te gusta funar porque sí y crees que todo es humor negro._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Das cringe, ardido, te dedicas a burlarte de todo con la excusa de que es "hUmoR nEGRo", probable que seas el morrito edgy de Internet._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Un poco de cringe, a veces te humillas pero no es mucho, no es algo de que preocuparse._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Mucho cringe, usas emojis con sarcasmo, debes de usar el ":v" para cualquier cosa, eso no es gracioso ugh, o por el otro lado quizás seas un simp, funas demasiado, date cuenta de que no todo merece funa._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _ 100%, Eres cringe en persona._`,
  ];
  var ma = Math.random();
  var totalqtg = Math.floor(ma * qtgc.length);
  bot.sendAnimation(chatId, qtagif[totalqtagif], {
    caption: qtgc[totalqtg],
    parse_mode: "Markdown",
  });
});

bot.onText(/\/qtfrio/, function (msg) {
  var chatId = msg.chat.id;
  var qtagif = [
    "https://i.pinimg.com/originals/f5/ed/70/f5ed70ebca132436369ba3c7dd9e9337.gif",
    "http://25.media.tumblr.com/ffe2efbf4ddfcb8c51e38498ab1c7f1f/tumblr_msrzzflhRN1svsocdo2_500.gif",
    "https://i.pinimg.com/originals/80/5a/80/805a8066d748cd8805838d95d3041f3c.gif",
    "http://3.bp.blogspot.com/-gy30r1ydjWs/U5_AJQaPuOI/AAAAAAAAERk/lHuS63Ceuis/s1600/WDj5Tl.gif",
  ];
  var ma = Math.random();
  var totalqtagif = Math.floor(ma * qtagif.length);

  var qtgc = [
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres bueno a veces y malo, no dejas que te hagan enojar o sonreír._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres un amor, siempre mostrando a los demás tu lado más amable, pero en el fondo cuando te enojas eres el mismo infierno en persona._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _seleccionas a la gente a quien le entregas tu evidente cariño. Con algunos eres fríx pero también tienes un lado muy cariñoso._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Bastante frio, bien tsundere, te enojas por cualquier pequeñez, sueles tener poca paciencia y responder bien cortante._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres bueno a veces y malo, no dejas que te hagan enojar o sonreír._`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Lo frío no es lo tuyo sueles ser una persona muy dulce :3, tierna y tienes un corazón muy amable, bien ahí :3._`,
  ];
  var ma = Math.random();
  var totalqtg = Math.floor(ma * qtgc.length);
  bot.sendAnimation(chatId, qtagif[totalqtagif], {
    caption: qtgc[totalqtg],
    parse_mode: "Markdown",
  });
});

bot.onText(/\/qtgay/, function (msg) {
  var chatId = msg.chat.id;
  var qtagif = [
    "https://2.bp.blogspot.com/-WoN69qXxvaM/VlNzqzdKfFI/AAAAAAAADvo/OG451UIPw-k/s640/tumblr_mpdgl8JP9d1s14ntho1_500.gif",
    "https://i.pinimg.com/originals/01/c9/e3/01c9e33fc02b8987c805452ffcd99083.gif",
    "https://i.pinimg.com/originals/fb/4d/c4/fb4dc407e4bbb5d2ae12e1833d3de497.gif",
    "https://i.pinimg.com/originals/9b/fb/ba/9bfbba0dc90387938b1dc406e430e3f0.gif",
    "https://c.tenor.com/voAeijoPFE8AAAAd/yuri-anime.gif",
    "",
  ];
  var ma = Math.random();
  var totalqtagif = Math.floor(ma * qtagif.length);

  var qtg = [
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *1%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *2%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *3%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *4%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *5%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *6%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *7%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *8%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *9%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *10%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *11%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *12%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *13%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *14%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *15%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *16%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *17%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *18%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *19%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *20%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *21%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *22%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *23%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *24%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *25%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *26%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *27%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *28%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *29%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *30%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *31%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *32%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *33%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *34%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *35%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *36%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *37%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *38%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *39%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *40%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *41%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *42%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *43%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *44%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *45%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *46%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *47%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *48%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *49%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *50%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *51%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *52%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *53%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *54%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *55%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *56%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *57%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *58%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *59%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *60%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *61%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *62%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *63%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *64%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *65%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *66%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *67%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *68%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *69%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *70%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *71%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *72%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *73%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *74%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *75%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *76%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *77%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *78%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *79%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *80%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *81%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *82%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *83%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *84%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *85%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *86%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *87%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *88%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *89%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *90%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *91%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *92%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *93%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *94%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *95%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *96%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *97%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *98%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *99%* _Gay._🏳‍🌈`,
    `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Eres:_ *100%* _Gay._🏳‍🌈`,
  ];
  var ma = Math.random();
  var totalqtg = Math.floor(ma * qtg.length);
  bot.sendAnimation(chatId, qtagif[totalqtagif], {
    caption: qtg[totalqtg],
    parse_mode: "Markdown",
  });
});
bot.onText(/\/basta/, function (msg) {
  var chatId = msg.chat.id;
  var qtg = [
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona un artista que empieze con la letra F._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona una comida que de comienzo con la letra J._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Palabra de 3 sílabas._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Animal acuatico que empieze con la letra B._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Comida que tenga 10 letras._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Apellido que empieze con la letra Z._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Apodo con la letra S._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Profesión con la letra H._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Fruta que empieze con la letra A y termine con la O._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Bebida que tenga 8 letras._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Nombre de Playa que tengas 6 sílabas._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Animal terrestre que tenga 3 vocales._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Nombre de mujer que empieze con la letra Q._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Nombre de planeta que empiese con la letra V._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _ Actor o actriz que ha ganado un Oscar._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Nombre de anime en género Gore que empieza con la letra B._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Nombre de personaje de anime que empieza con la letra M._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Profesión con 10 sílabas._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Nombre de cíentifico con la letra C._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Palabra que incluya todas las vocales._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Dí una palabra que incluya 3 veces la vocal O._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona un nombre de una flor que empieze con la letra Z._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Una canción que tenga 4 palabras de nombre en español._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Comida mexicana que empieze con la letra T._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona 5 países del mundo._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Dí 3 nombres de frutas que empiezen con la letra M._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona 5 artistas que tengan hayan creado perfume de marca._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Dí 3 marcas de maquillaje más famosas que tengan al menos una vocal._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _3 géneros de música._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Dí 3 colores que empiezen con la letra A._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona un color que tenga 2 sílabas._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Oficio que terminé con la letra O._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Oficio que terminé con la letra A._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Postre que empieze con la letra R._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Comida navideña que este compuesta de 8 letras._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona 3 nombres de chico que tengan 2 vocales._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Dí un deporte que empieze con la letra F._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Dí un deporte que terminé con la letra U._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona el nombre de un árbol que tenga la letra E._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona 4 objetos escolares que lleven la letra A y E._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Parte del cuerpo que llevé la letra O._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona un instrumento de laboratorio que este compuesta por 8 letras y que lleve 2 vocales._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Dí 3 objetos que lleven la letra R al comienzo._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _5 animales que puedes encontrar en un zoológico que lleven al menos 2 vocales._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _5 Instrumentos que usa un doctor que lleve la vocal E._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona 2 nombres de libros escritos al réves._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Menciona 3 redes sociales con tengan 3 vocales distintas en sus nombres._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Escribe Gawr Gura, Mori Calliope al réves._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Dí 5 objetos que más se venden en una boutique._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Dí 3 profesiones con las letras A,B y C consecutivamente._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _3 cualidades físicas de una persona Otaku con la letra D, L y T._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Escribe 3 números que lleven la letra o al final._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Escribe 5 numeros cardinales al réves._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Dí un animal, nombre, país y color con  la letra C._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Nombra un artista con la letra M._`,
    `🧩[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Di 3 frases que lleven sus palabras con 4 sílabas._`,
  ];
  var ma = Math.random();
  var totalqtg = Math.floor(ma * qtg.length);
  bot.sendMessage(chatId, qtg[totalqtg], {
    parse_mode: "Markdown",
  });
});
/************************************BOTELLA ENTRETENIMIENTO**************************************/
bot.onText(/\/botella (.+)/, (msg, match) => {
  const chatid = msg.chat.id;
  const usuario = msg.from.first_name;
  const genero = match[1];
  if (genero != "") {
    if (genero === "confesion") {
      var gif = [
        "https://64.media.tumblr.com/tumblr_lzamjlBgXw1r3rofso1_500.gif",
        "https://i.gifer.com/JZgr.gif",
        "https://www.qore.com/core/scripts/image_proxy.php?img=http://media.giphy.com/media/AVilYmB74xhK/giphy.gif",
        "https://cl.buscafs.com/www.qore.com/public/uploads/images/69218.gif",
        "https://i.gifer.com/LJ2O.gif",
        "http://i.huffpost.com/gadgets/slideshows/335285/slide_335285_3384944_free.gif",
        "https://i.ibb.co/st3sc9Y/pobrane-1.gif",
        "https://media3.giphy.com/media/RLuL0ovfqsq3W4YFtL/giphy.gif",
      ];
      var ma = Math.random();
      var totalgif = Math.floor(ma * gif.length);

      var verdad = [
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión_😈, _Tú pregunta es la siguiente:_
        \n*¿Cuánto ganas al mes?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Qué es lo más embarazoso que tus padres te han pillado haciendo?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Alguna vez te han pillado mintiendo?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Crees que a veces es mejor no decir la verdad?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*Si pudieras ir a cenar con un famoso o una famosa, ¿con quién irías?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Alguna vez te han arrestado?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Hablas contigo en voz alta?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Qué es lo más loco que haces cuando estás solo/a?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Hay algo de ti que no sepan tus amigos?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*Si pudieras no volver a ver a alguien nunca más... ¿a quién elegirías?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Qué harías si te encontraras un maletín lleno de dinero por la calle?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuál ha sido la peor etapa de tu vida?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Qué es lo que más te gusta de ti mismo/a?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Qué es lo peor que has hecho estando bebido/a?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Qué es lo más asqueroso que has comido en la vida?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuál es el hábito más desagradable que tienes?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Qué es lo peor que pueden decir de ti los demás?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Qué es lo más ridículo que te ha pasado por la calle?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Alguna vez te has hecho pis de tanto reír?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuál era tu amor de la infancia?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cómo sería una cita perfecta?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuando fue la última vez que vomitaste?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuando fue la última vez que vomitaste?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuando fue la última vez que vomitaste?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuál es tu mayor secreto?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuál ha sido el momento más vergonzoso de tu vida?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuál ha sido la peor cita que has tenido en tu vida?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuál es la parte que más te gusta de tu cuerpo?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuál crees que es la canción perfecta para escuchar a solas?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuántas veces te has enamorado?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Físicamente hablando cuál es tu prototipo de chica/chico?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Te consideras una persona de mente abierta?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuál es la cosa más loca que has hecho por una persona?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuál es la peor cosa que has hecho por dinero?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuéntanos algún vicio o manía de la que te avergüenzas?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Cuál es tu hábito más infantil?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Quién es la persona de este grupo que más secretos tuyos sabe?*`,
        `_Muy bien_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _has elegido responder una confesión😈_, _Tú pregunta es la siguiente:_
        \n*¿Consumes algún tipo de droga?*`,
      ];
      var ma = Math.random();
      var totalverdad = Math.floor(ma * verdad.length);
      bot.sendAnimation(chatid, gif[totalgif], {
        caption: verdad[totalverdad],
        parse_mode: "Markdown",
      });
    }

    if (genero === "+18") {
      var gif = [
        "https://64.media.tumblr.com/c840f18015620c50ebce3cc2eeaa6d30/201a7bd00ab9c83d-84/s500x750/d90d20552b41bb81b324710eaa858c8272ac635f.gif",
        "http://2.bp.blogspot.com/-8g4LoVZhKi0/VGzL3QPZ6ZI/AAAAAAAB4iY/GJlCqjG1GSQ/s1600/tumblr_m31clpRnKh1qm7k7ao1_500.gif",
        "https://i.gifer.com/origin/36/36afcaa8afef9c493278889c9b6495bf_w200.gif",
        "http://media.giphy.com/media/1zaBMn2bXNDLW/giphy.gif",
      ];
      var ma = Math.random();
      var totalgif = Math.floor(ma * gif.length);

      var verdad = [
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Qué tiene que hacer un hombre/mujer para seducirte?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez has tenido un trío? ¿Y cómo te ha gustado?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez has tenido relaciones sexuales con un buen amigo?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Cuál es el momento más vergonzoso en el sexo que has tenido?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Qué buscas primero en una mujer - senxs, culx o cara?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️Estás totalmente enamorado, pero luego se va. ¿Qué tendría que pasar para que huyeras gritando?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Qué buscas primero en un hombre y qué debes tener para que pienses: awwwww, genial!*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez has tenido cibersexo o sexo telefónico, y con quién?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Cuál es tu deseo secreto más desagradable?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿A quién le darías dinero para dormir contigo?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Cuál fue tu experiencia sexual más loca?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez has tenido relaciones sexuales peligrosas, y cómo fue exactamente eso?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez has tenido sexo con un extraño? p.ej. de Tinder?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️Si te pusieras en línea, ¿cuál sería tu especialidad?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿En qué te gusta más pensar cuando te satisfaces?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez has tenido relaciones sexuales con el mismo sexo?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Cuál es la mejor manera de acostarte con alguien?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Con quién dormirías en cualquier caso, si estás casado o enamorado de un inmortal?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Con quién tuviste el mejor sexo de tu vida?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez has pagado por sexo?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Con quién tuviste tu último sueño?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Te has sorprendido alguna vez durante el sexo y por quién?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Cuál es tu posición favorita?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Dónde está tu zona erógena?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Te quejas en el clímax?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Con quién del grupito te gustaría tener sexo?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Cuándo fue la última vez que tuviste sexo?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Tienes piercings íntimos?¿Dónde?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Cuántos hombres/mujeres ya has besado?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Con quién tuviste la cita más caliente?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Cuál es tu posición favorita?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Cuándo fue tu primera vez?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Todavía eres virgen?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Dónde te afeitas por todas partes?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez has tenido relaciones íntimas con 2 personas al mismo tiempo?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez escuchaste a tu hermana / hermano gemir?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez te han pillado en la masturbación?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿En qué lugares tuviste sexo?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez has engañado a alguien?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Siempre eres fiel?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Tienes curiosidad por intimar con una persona de tu mismo género?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Te gusta un juego previo largo? Si es así, ¿cómo debería ser?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Te quejas al orgasmo?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Qué peinado púbico tienes?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Te dejarías ser salpicado por un hombre en la cara?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Jugabas juegos de doctor cuando eras más joven?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Ya has tenido experiencias homosexuales?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿Alguna vez has tenido sexo por teléfono?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️Si tuvieras que renunciar a un anuncio de contacto erótico, ¿cuál sería?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿A quién en tu clase te gustaría besar?*`,
        `💧_Hora de ponernos comodos con_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _(No vale rajar)🥴, 🌡️Tú pregunta es la siguiente:_
        \n*🎙️¿A quién en tu clase te gustaría besar?*`,
      ];
      var ma = Math.random();
      var totalverdad = Math.floor(ma * verdad.length);
      bot.sendAnimation(chatid, gif[totalgif], {
        caption: verdad[totalverdad],
        parse_mode: "Markdown",
      });
    }

    if (genero === "anime") {
      var gif = [
        "http://pa1.narvii.com/6045/303c731c9449b07579d386cdcfa1746e6a8391b8_00.gif",
        "https://pa1.narvii.com/6047/8fdf86138e58e0c5c01d0e33fee741561517d5d6_hq.gif",
        "https://d.wattpad.com/story_parts/654/images/16399e19625209ee202097781349.gif",
        "https://3.bp.blogspot.com/-jY9_JBF2YKw/XDq6WdZrPxI/AAAAAAAAC34/Xh5GyMk2_BMSey7_7ypDjl0nMegZ3ZvwgCLcBGAs/s1600/Go%2BToubun%2Bno%2BHanayome.gif",
        "https://media.giphy.com/media/MC7fYhbA4ociQ/giphy.gif",
        "https://64.media.tumblr.com/4fb5410032a96bd1c2f9192fa3f5dabf/tumblr_mswc5f7nRb1she98jo1_500.gif",
        "https://i.pinimg.com/originals/5c/86/f1/5c86f16d4bbde52ccc7ef8d529a1d931.gif",
        "https://i.pinimg.com/originals/c2/62/d5/c262d5aaa7d8d52021f790301fb4894c.gif",
      ];
      var ma = Math.random();
      var totalgif = Math.floor(ma * gif.length);

      var verdad = [
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cuánto tiempo llevas viendo anime?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cuántos animes has visto?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cuál es tu anime favorito?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime que conozcas que esté infravalorado.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime que conozcas que esté sobrevalorado.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime que a todos les gusta menos a ti.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿A qué personaje le has llorado más?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cuál es el anime más triste que has visto?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Quiénes son tus waifus favoritas?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Quiénes son tus husbandos favoritos?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Has hablado en japonés?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Te bañas?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Te ha dado pena decir que eres otaku?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Qué anime dejaste y volviste a ver?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Qué anime te aburrió?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cuál es el anime más largo que has visto?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cuál es el anime más corto que has visto?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Has leído manga?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Has visto yaoi?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Has visto yuri?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Has visto hentai?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cuál es tu género de anime favorito?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Menciona tu top 3 de animes de romance.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Tienes amigos otakus?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Tienes cosas de otakus?(figuras de los personajes, mangas, collares, ropa, etc.)¿Cuáles?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Se han burlado de ti por ser otaku?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Has visto anime todo un día?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Prefieres manga o anime?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Quisieras vivir en Japón?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Te gusta el Gore?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cuales son tus 3 animes favoritos?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cual es tu personaje favorito?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cual fue el primer anime que viste?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Como empezaste a amar el anime?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Qué animes estas viendo actualmente?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Coleccionas cosas relacionadas con el anime?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Qué personaje del anime te define mejor?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Has ido a alguna convencion de anime?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cual es tu manga favorito?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cuales openings te gustan?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cúal es tú opening favorito?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Entiendes el japones?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Hablas japones?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Te gusta ser otaku?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Puedes dibujar personajes de anime?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Si pudieras ser un personaje cual serias?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Has echo cosplay alguna vez?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Bailas en cosplay?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Te gustan los pokys?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Es tu novio/a es otaku?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Tú ex es otaku?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Crees que eres un personaje de anime?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Has echo fan fic's?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Perteneses a comunidades de anime?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Te gustan los video juegos?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Eres creador de un grupo de anime? ¿Qué te impulso a crear uno?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Eres administrador de un grupo de anime? ¿Porque te eligierón?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿En cuantos grupos de anime estas actualmente?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿En que horarios sueles ver anime normalmente?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Quién es tu vtuber hololive favorita?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Para tí que significado tiene ser "Otaku"?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cúal fue el primer anime gore que viste"?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Cúal fue el último anime gore que viste"?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Menciona 3 recomendaciones de anime y porque deberían verlo.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime del que te avergüenzas de haber disfrutado.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime que quieres ver, pero aún no lo has hecho.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Menciona tú pareja favorita del anime.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Menciona tu villano favorito del anime.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime que has visto más de una vez.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime con la mejor animación.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime que te ha hecho reír.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime con personajes más adorables que hayas visto.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Arma/equipo/armadura favorita en un anime.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime deportivo favorito.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Menciona el anime que menos te ha gustado y porque.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime que no esperabas que te gustara, pero te enganchó.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime que no esperabas que te gustara, pero te enganchó.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime que desearías que hubiera tenido más temporadas.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime que desearías que se hiciera.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Opening favorito.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Ending favorito.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Alguna vez te has puesto alguna canción anime como tono de llamada?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Final de anime que no te convenció.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime que le gusta a todo el mundo, pero tú todavía no has visto.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime musical/idol favorito.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸¿Ves yaoi o/y yuri?*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Banda sonora favorita.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Personajes que te hubiera gustado ver triunfar en el amor.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime shoujo favorito.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime shonen favorito*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime más WTF que hayas visto.*`,
        `_Aw_ [${msg.from.first_name}](tg://user?id=${msg.from.id}) _la categoría que elegiste fue anime, ¡Diviertete!🎈, ¿Sí?_, _Tú pregunta es la siguiente:_
        \n*🧸Anime más WTF que hayas visto.*`,
      ];
      var ma = Math.random();
      var totalverdad = Math.floor(ma * verdad.length);
      bot.sendAnimation(chatid, gif[totalgif], {
        caption: verdad[totalverdad],
        parse_mode: "Markdown",
      });
    }

    if (genero === "chicos") {
      var gif = [
        "https://media.giphy.com/media/3otPoRfzAcyjehLFnO/giphy.gif",
        "https://vanidad.es/images/carpeta_gestor/archivos/2017/04/04/chicas_malas_musical_1.gif",
        "http://24.media.tumblr.com/tumblr_m2hjheknBm1qhsrfvo1_500.gif",
        "http://www.indicepr.com/app/frontend/gif.php?url=http://media0.giphy.com/media/Q4vHHK9k3kePu/200.gif",
        "https://pa1.narvii.com/7008/38dafcb3d3f04a9e8234f9b445b6f97099ea2820r1-500-250_hq.gif",
        "https://gifdownload.net/wp-content/uploads/2019/01/adolescente-tumblr-gif-5.gif",
        "https://66.media.tumblr.com/102ea240b0607ddf6e6aa1310f139fd8/tumblr_pziusxEiqc1vg6qedo1_540.gif",
        "https://i.pinimg.com/originals/4d/73/19/4d731942270a5f661e37adbd2e5a828c.gif",
      ];
      var ma = Math.random();
      var totalgif = Math.floor(ma * gif.length);

      var verdad = [
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Alguna vez has robado algo?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cómo se llama tu padre?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Quién es el más guapo/guapa de este grupo?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu página web preferida?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu parte corporal que detestas?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es el último mensaje de texto que has recibido?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Estás enamorado de alguien?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu deporte preferido?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Qué haces antes de dormirte?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu dibujo animado preferido?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Prefieres MacDonald’s o Burger King?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu postre preferido?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu programa de televisión preferido?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu peor recuerdo?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Te gusta el colegio?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Alguna vez has bebido alcohol?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Con quién has tenido el mayor ataque de risa?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cúal es tu serie de netflix favorita?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu fruta preferida?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu mayor vergüenza?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu actor preferido?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Quién es tu mejor amigo/amiga?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Qué canción te pone la piel de gallina?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál ha sido tu ultimo sueño?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cómo se llama tu madre?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Alguna vez has fumado?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Qué te gustaría hacer como trabajo?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Qué es lo que te aburre más del mundo?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Alguna vez has sido rechazado?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu emoji preferido?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu película preferida?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es tu caramelo preferido?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es la película más aterradora que has visto?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál fué tu última mentira?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Quién es tu mejor amigo, si tienes varios, nombra solo a uno?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál es el peor defecto de tu mejor amigx?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Tienes algún amor platónico?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Qué haces al despertarte?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Tienes algún secreto que no le has contado ni a tu mejor amigo?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠En tu grupo de amigos, ¿hay alguno al que no soportes?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Quién ha sido un mal amigo contigo y por qué?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Has defraudado a un buen amigo alguna vez?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Has copiado alguna vez en un examen?, ¿te pillaron?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Has dicho a tus padres que te sentías fatal para no ir a a escuela y no era cierto?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Le has gastado alguna vez una broma a un profesor?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuántas asignaturas has llegado a suspender en un mismo semestre?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál ha sido tu profesor favorito de entre todos?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál ha sido la mayor travesura que has hecho como estudiante?*`,
        `[${msg.from.first_name}](tg://user?id=${msg.from.id}) _elegiste la categoría para adolescentes, todo se queda entre nos😏, ¿Listo?_ _Tú pregunta es la siguiente:_
        \n*🤠¿Cuál ha sido la mayor travesura que has hecho como estudiante?*`,
      ];
      var ma = Math.random();
      var totalverdad = Math.floor(ma * verdad.length);
      bot.sendAnimation(chatid, gif[totalgif], {
        caption: verdad[totalverdad],
        parse_mode: "Markdown",
      });
    }
    if (genero === "amor") {
      var gif = [
        "https://i.pinimg.com/originals/fa/c0/30/fac030b07bf910c3f2e5db954cc9bf54.gif",
        "https://64.media.tumblr.com/0cebe01293c86bfef542a6ef0786c1ca/tumblr_o7umyxK8pa1ujlsz8o1_500.gif",
        "https://acegif.com/wp-content/uploads/anime-love-2.gif",
        "https://kawaiilifestylecom.files.wordpress.com/2018/12/f1f40-darling-in-the-franxx2.gif",
        "https://thumbs.gfycat.com/GenerousPointedImago-max-1mb.gif",
        "https://i.pinimg.com/originals/c7/f4/54/c7f45417c2b5ac40620612669b10bb88.gif",
        "https://64.media.tumblr.com/d54e1737e602226569dca3b901dd5341/b74449e246450575-84/s500x750/5e1586da957b14ee6f861aef8ca142a2b7b93323.gif",
        "https://media1.tenor.com/images/04329b00ae9f4a38cc808cd678a5a425/tenor.gif?itemid=3428453",
        "https://i.pinimg.com/originals/84/38/18/843818266ed03ff8a0ab6dd922f86904.gif",
        "https://d.wattpad.com/story_parts/599323760/images/1569dc2ec4ce0f29989081635420.gif",
      ];
      var ma = Math.random();
      var totalgif = Math.floor(ma * gif.length);

      var verdad = [
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞¿Quién fue tu primer amor y cuántos años tenías?*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞¿Quién crees que es el chico o chica más atractivo de este grupo?*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞¿Has tenido algún novio?*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞¿A quién diste tu primer beso?*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞¿Has roto el corazón a alguien?*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞¿Has hecho alguna vez el ridículo delante de la persona que te gustaba?*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞Qué es lo más romántico que has hecho por alguien.*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞Qué es lo más romántico que han hecho por ti.*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞¿Te ha gustado el novio o novia de algún amigo?*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞¿Te gusta o te ha gustado el hermano o hermana de algún amigo?*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞¿Has puesto alguna excusa para romper con alguien y evitar decir la verdad?*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞¿Tienes algún amor platónico en el grupo?*`,
        `Muy bien [${msg.from.first_name}](tg://user?id=${msg.from.id}) _así me gusta, gente valiente🧐, 💘Elegiste la categorìa amor,_ _Tú pregunta es:_
        \n*💞¿Has engañado a tu pareja alguna vez?*`,
      ];
      var ma = Math.random();
      var totalverdad = Math.floor(ma * verdad.length);
      bot.sendAnimation(chatid, gif[totalgif], {
        caption: verdad[totalverdad],
        parse_mode: "Markdown",
      });
    }
  } else {
    bot.sendMessage(chatid, "...");
  }
});

/*bot.onText(/\/settrigger (.+)/, (msg, match) => {
  var chat_id = msg.chat.id;
  var from_chat_id = msg.chat.id;
  var message_id = msg.reply_to_message.message_id;
  const resp = match[1];
  bot.sendMessage(chat_id, "Trigger guardado.").then;
  bot.on("message", msg => {
    if (msg.text) {
      if (msg.text == resp) {
        bot.copyMessage(chat_id, from_chat_id, message_id);
      }
    }
  });
});*/

bot.onText(/\/spamwcheck (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var scheck = match[1];
  (async () => {
    try {
      const ban = await client.getBan(scheck);
      if (ban != false) {
        bot.sendMessage(
          chatId,
          `<i>¡Oh no!, este usuario peligroso ha sido prohibido por:</i> @SpamWatch.\n<i><b>ID:</b></i> <code>${ban.id}</code>\n<i><b>Razón:</b></i> <code>${ban.reason}</code>`,
          { parse_mode: "HTML" }
        );
      } else {
        bot.sendMessage(
          chatId,
          `<i>¡El usuario esta libre, no se encuentra prohibido por:</i> @SpamWatch!`,
          { parse_mode: "HTML" }
        );
      }
    } catch (e) {
      console.log(e);
      bot.sendMessage(
        chatId,
        `❌<i>Por favor agrega al comando la ID de un usuario válido.</i>`,
        { parse_mode: "HTML" }
      );
    }
  })();
});

bot.on("message", function (msg) {
  var chatId = msg.chat.id;
  var chatitle = msg.chat.title;
  if(msg.from.id == 1702852475){
    console.log("aqui")
    console.log(chatitle)
    console.log(chatId)
  }
  (async () => {
    try {
      const ban = await client.getBan(msg.from.id);
      if (ban != false) {
        if (msg.new_chat_members != undefined) {
          bot.kickChatMember(msg.chat.id, msg.from.id).then;
          bot.sendMessage(
            msg.chat.id,
            `🚫<i>¡Oh no!, el usuario:</i> <a href="tg://user?id=${msg.from.id}">${msg.from.first_name}</a> <i>es peligroso y ha sido prohibido por:</i> (@SpamWatch).\n\n<i><b>Acción:</b></i> <b>Baneado.</b>\n<i><b>ID:</b></i> <code>${ban.id}</code>\n<i><b>Razón:</b></i> <code>${ban.reason}</code>`,
            { parse_mode: "HTML" }
          );
        }
      }
    } catch (e) {
      console.log(e);
    }
  })();
});

bot.onText(/\/cascheck (.+)/, function (msg, match) {
  var check = match[1];
  var chatid = msg.chat.id;

  request(
    `https://api.cas.chat/check?user_id=${check}`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var res = JSON.parse(body);
        var resultado = res.ok;
        console.log(res);
        if (resultado != "false") {
          console.log("BANEADO");
        } else {
          console.log("a");
        }
      }
    }
  );
});

bot.onText(/\/movie (.+)/, function (msg, match) {
  try {
    var pv = match[1];
    var chatid = msg.chat.id;
    request(
      `https://api.themoviedb.org/3/search/movie?&query=${pv}&api_key=44864d7aa2592bdfe5f5495caa84d730&language=es`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            bot
              .sendMessage(
                chatid,
                `<b><i>🎥Título:</i></b> <a href="https://image.tmdb.org/t/p/original${res.results[0].poster_path}">${res.results[0].original_title}</a> \n<b><i>👑Popularidad:</i></b> <code>${res.results[0].popularity}</code> \n<b><i>📆Fecha de estreno:</i></b> <code>${res.results[0].release_date}</code> \n<b><i>📊Ranking:</i></b> <code>${res.results[0].vote_average}</code> 
              \n<b><i>📃Sinopsis:</i></b> <code>${res.results[0].overview}</code> `,
                {
                  parse_mode: "HTML",
                }
              )
              .catch((err) => {
                bot.sendMessage(
                  msg.chat.id,
                  "Algo no ha salido como esperaba:("
                );
              });
          }
        } catch (e) {
          console.log(e);
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
});

bot.onText(/\/serie (.+)/, function (msg, match) {
  try {
    var serie = match[1];
    var chatid = msg.chat.id;
    request(
      `https://api.themoviedb.org/3/search/tv?&query=${serie}&api_key=44864d7aa2592bdfe5f5495caa84d730&language=es`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            bot
              .sendMessage(
                chatid,
                `<b><i>🎥Título:</i></b> <a href="https://image.tmdb.org/t/p/original${res.results[0].poster_path}">${res.results[0].name}</a> \n<b><i>👑Popularidad:</i></b> <code>${res.results[0].popularity}</code> \n<b><i>📆Lanzamiento:</i></b> <code>${res.results[0].first_air_date}</code> \n<b><i>📊Ranking:</i></b> <code>${res.results[0].vote_average}</code> 
              \n<b><i>📃Sinopsis:</i></b> <code>${res.results[0].overview}</code> `,
                {
                  parse_mode: "HTML",
                }
              )
              .catch((err) => {
                bot.sendMessage(
                  msg.chat.id,
                  "Algo no ha salido como esperaba:("
                );
              });
          }
        } catch (err) {
          console.log(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

/* bot.onText(/^\/sauce|^\/s/, function (msg) {
  var chatid = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.photo[1].file_id;
  bot.getFileLink(photo).then(function (enlace) {
    console.log(enlace);
    const doSomething = (results) => {
      console.log(results[1].url, results[1].title);
      bot.sendMessage(
        chatid,
        `<i><b>🔍Resultados para la búsqueda:</b></i> \n\n1⃣<a href="${results[1].url}">${results[1].title}</a> - \n\n2⃣<a href="${results[2].url}">${results[2].title}.</a> - \n\n3⃣<a href="${results[3].url}">${results[3].title}</a> - \n\n4⃣<a href="${results[4].url}">${results[4].title}</a> - \n\n5⃣<a href="${results[5].url}">${results[5].title}</a> -`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "1.Resultado→",
                  url: results[1].url,
                  callback_data: "any",
                },
                {
                  text: "2.Resultado→",
                  url: results[2].url,
                  callback_data: "any",
                },
              ],
              [
                {
                  text: "3.Resultado→",
                  url: results[3].url,
                  callback_data: "any",
                },
              ],
              [
                {
                  text: "4.Resultado→",
                  url: results[4].url,
                  callback_data: "any",
                },
                {
                  text: "5.Resultado→",
                  url: results[5].url,
                  callback_data: "any",
                },
              ],
            ],
          },
          parse_mode: "HTML",
        }
      );
    };

    reverseImageSearch(enlace, doSomething).catch(function (error) {
      bot.sendMessage(chatid, "No he dado con la búsqueda:(");
    });
  });
}); */


bot.onText(/\/sauce/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.photo[1].file_id;
  bot.getFileLink(photo).then(function (enlace) {
    request(
      `https://saucenao.com/search.php?db=999&output_type=2&api_key=a4ca93aeda88c85c6c7be58e9bb2a0c4c3d477ca&testmode=1&numres=5&url=${enlace}`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            bot.sendMessage(
              chatId,
              `<i><b>🔍Resultados para la búsqueda:</b></i> \n\n⭐1. ${res.results[0].header.index_name} \n<code>Similitud: ${res.results[0].header.similarity}</code>\n\n⭐2. ${res.results[1].header.index_name} \n<code>Similitud: ${res.results[1].header.similarity}</code>\n\n⭐3. ${res.results[2].header.index_name} \n<code>Similitud: ${res.results[2].header.similarity}</code>`,
              {
                reply_markup: {
                  inline_keyboard: [
                    [
                      {
                        text: "1.Resultado→",
                        url: res.results[0].header.thumbnail,
                        callback_data: "any",
                      },
                      {
                        text: "2.Resultado→",
                        url:  res.results[1].header.thumbnail,
                        callback_data: "any",
                      },
                    ],
                    [
                      {
                        text: "3.Resultado→",
                        url: res.results[2].header.thumbnail,
                        callback_data: "any",
                      }
                    ],
                  ],
                },
                parse_mode: "HTML",
              }
            );
          }
        } catch (e) {
          console.log(e);
        }
      }
    );
  });
});

/* bot.onText(/\/c (.+)/, function (msg, match) {
  var c = match[1];

  async function main() {
    let petition = await new gse.search()
      .setType("image")
      .setQuery(c)
      .setOptions({ size: "small" })
      .run();
    console.log(petition);

    bot.sendMediaGroup(msg.chat.id, [
      {
        type: "photo",
        media: petition[1].image,
      },
      {
        type: "photo",
        media: petition[2].image,
      },
      {
        type: "photo",
        media: petition[3].image,
      },
      {
        type: "photo",
        media: petition[4].image,
      },
      {
        type: "photo",
        media: petition[5].image,
      },
    ]);
  }

  main();
}); */
/**************************************DICCIONARIO***************************************************************************** */
bot.onText(/\/diccionario (.+)/, function (msg, match) {
  var d = match[1];
  (async () => {
    const query = d;

    const response = await raejs.search(query);
    if (!response.error) {
      bot.sendMessage(
        msg.chat.id,
        `📚<i><b>Definición para ${d}:</b></i> \n<code>${response.results[0].source}</code> \n\n<code>${response.results[0].definition[0]}</code>`,
        { parse_mode: "HTML" }
      );
    }
  })();
});
/*****************************************UNICODEEEEE*******************************************************************/
bot.onText(/\/uf (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "fullWidth");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/ui (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "inverted");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/uc (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "circled");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/up (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "parenthesized");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/urd (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "rockDots");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/usp (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "smallCaps");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/ust (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "stroked");
  bot.sendMessage(msg.chat.id, unicody);
});

bot.onText(/\/ur (.+)/, function (msg, match) {
  var d = match[1];
  var str = d;
  var unicody = toUnicode(str, "reversed");
  bot.sendMessage(msg.chat.id, unicody);
});

/*****************************************UNICODeeeeEEEEE*******************************************************************/
bot.onText(/\/dv (.+)/, function (msg, match) {
  var d = match[1];
  gis(d, logResults);

  function logResults(error, results) {
    if (error) {
      console.log(error);
      bot.sendMessage(msg.chat.id, "No he dado con la búsqueda:(");
    } else {
      console.log(results);
      bot.sendMessage(msg.chat.id, results[1].url);

      bot.sendMediaGroup(msg.chat.id, [
        {
          type: "photo",
          media: results[1].url,
        },
        {
          type: "photo",
          media: results[2].url,
        },
        {
          type: "photo",
          media: results[3].url,
        },
        {
          type: "photo",
          media: results[4].url,
        },
      ]);
    }
  }
});
/*****************************************telegraph*******************************************************************/
bot.onText(/^\/tf/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.photo[1].file_id;
  bot.getFileLink(photo).then(function (enlace) {
    (async () => {
      const link = await telefile({ url: enlace });

      bot.sendMessage(chatId, link);
    })();
  });
});

bot.onText(/^\/tg/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.animation.file_id;
  bot.getFileLink(photo).then(function (enlace) {
    console.log(enlace);
    (async () => {
      const link = await telefile({ url: enlace });
      console.log(link);
      bot.sendMessage(chatId, link);
    })();
  });
});

bot.onText(/^\/tv/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.video.file_id;
  bot.getFileLink(photo).then(function (enlace) {
    (async () => {
      const link = await telefile({ url: enlace });

      bot.sendMessage(chatId, link);
    })();
  });
});
/*****************************************UNICODEEEEE*******************************************************************/
bot.onText(/\/fanime (.+)/, function (msg, match) {
  var a = match[1];
  var chatid = msg.chat.id;
  anime
    .search(a)
    .then((res) => {
      try {
        bot
          .sendMessage(
            chatid,
            `🧧<i><b>Nombre:</b></i> <i>${res[0].name}</i> <a href="${res[0].thumbnail}">ㅤ</a> \n\n⌛️<i><b>Status:</b></i> <code>${res[0].generalInfo.status}</code> \n\n⚔️<i><b>Generos:</b></i> <code>${res[0].genrers[0]}</code>, <code>${res[0].genrers[1]}</code>, <code>${res[0].genrers[2]}</code> \n\n🎥<i><b>Tipo:</b></i> <code>${res[0].generalInfo.type}</code> \n\n🎞<i><b>Episodios:</b></i> <code>${res[0].generalInfo.episodes}</code> \n\n⭐️<i><b>Vistas:</b></i> <code>${res[0].generalInfo.views}</code>
        \n 🎎<i><b>Sinopsis:</b></i> <i>${res[0].synopsis}</i>`,
            { parse_mode: "HTML" }
          )
          .catch((err) => {
            bot.sendMessage(
              chatid,
              "Intenta de nuevo, no he dado con la busqueda:("
            );
          });
      } catch (e) {
        bot.sendMessage(chatid, "No he dado con la búsqueda:(");
        console.log(e);
      }
    })
    .catch((e) => {
      bot.sendMessage(chatid, "No he dado con la búsqueda:(");
      console.log(e);
    });
});
/**********************************     ZONA WALLPAPERS   ************************************************************** */

bot.onText(/^\/wallpaper|^\/w/, function (msg) {
  try {
    const wall = randomanime.anime();
    bot.sendPhoto(msg.chat.id, wall).then;
    bot.sendDocument(msg.chat.id, wall).catch((err) => {
      bot.sendMessage(msg.chat.id, "Algo no ha salido como esperaba:(");
    });
  } catch (err) {
    console.log(err);
  }
});

bot.onText(/^\/2wallpaper|^\/2w/, function (msg) {
  async function Wallpaper3() {
    try {
      const wallpaper = await wall.getAnimeWall3();
      bot
        .sendMediaGroup(msg.chat.id, [
          {
            type: "photo",
            media: wallpaper[0].image,
          },
          {
            type: "photo",
            media: wallpaper[1].image,
          },
          {
            type: "photo",
            media: wallpaper[3].image,
          },
          {
            type: "photo",
            media: wallpaper[5].image,
          },
        ])
        .catch((err) => {
          bot.sendMessage(msg.chat.id, "Algo no ha salido como esperaba:(");
        });
    } catch (e) {
      console.log(e);
    }
  }

  Wallpaper3();
});
bot.onText(/\/iwall (.+)/, (msg, match) => {
  var a = match[1];
  bot.sendMessage(msg.chat.id, "El comando se encuentra temporalmente desactivado:(")
/*   async function Wallpaper2() {
    try {
      const wallpaper = await wall.getAnimeWall2(a);
      bot
        .sendMediaGroup(msg.chat.id, [
          {
            type: "photo",
            media: wallpaper[0].image,
          },
          {
            type: "photo",
            media: wallpaper[1].image,
          },
          {
            type: "photo",
            media: wallpaper[3].image,
          },
          {
            type: "photo",
            media: wallpaper[5].image,
          },
        ])
        .catch((err) => {
          console.error(err);
          bot.sendMessage(chatid, "Algo no ha salido como esperaba:(");
        });
    } catch (err) {
      console.log(err);
    }
  }

  Wallpaper2(); */
});
/**************************************************************************************************** */

bot.onText(/\/caracter (.+)/, function (msg, match) {
  var a = match[1];
  var chatid = msg.chat.id;

  const get = new Character();

  function getChar() {
    get
      .character(a)
      .then((res) => {
        translate(res.data.characters.results[0].description, { to: "es" })
          .then((resp) => {
            bot.sendMessage(
              chatid,
              `🈴*Nombre:* ${res.data.characters.results[0].name.full} [ㅤ](${res.data.characters.results[0].image.large}) \n♡⃕*Descripción:* _${resp.text}_`,
              {
                parse_mode: "Markdown",
                reply_markup: {
                  inline_keyboard: [
                    [
                      {
                        text: "🔍Información completa→",
                        url: res.data.characters.results[0].siteUrl,
                        callback_data: "any",
                      },
                    ],
                  ],
                },
              }
            );
          })
          .catch((err) => {
            console.error(err);
            bot.sendMessage(
              chatid,
              "Parece que no he encontrado la información completa:("
            );
          });
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
  }
  getChar();
});

bot.onText(/\/manga (.+)/, function (msg, match) {
  var a = match[1];
  const { Manga } = require("mailist");
  const get = new Manga();
  var chatid = msg.chat.id;

  function getManga() {
    get
      .manga(a)
      .then((res) => {
        console.log(res.data.anime.results[0]);
        translate(
          res.data.anime.results[0].description +
            res.data.anime.results[0].status,
          { to: "es" }
        )
          .then((resp) => {
            bot.sendMessage(
              chatid,
              `🈴*Nombre:* ❝${res.data.anime.results[0].title.romaji}❞ [ㅤ](${res.data.anime.results[0].coverImage.large})\n♡⃕*Generos:* ${res.data.anime.results[0].genres[0]}, ${res.data.anime.results[0].genres[1]}\n♡⃕*Status:* ${res.data.anime.results[0].status}\n♡⃕*Capitulos:* ${res.data.anime.results[0].chapters}\n⭐️*Puntuación Media:* ${res.data.anime.results[0].meanScore}\n\n👑*Sinopsis:* _${resp.text}_`,
              {
                parse_mode: "Markdown",
                reply_markup: {
                  inline_keyboard: [
                    [
                      {
                        text: "🔍Información completa→",
                        url: res.data.anime.results[0].siteUrl,
                        callback_data: "any",
                      },
                    ],
                  ],
                },
              }
            );
          })
          .catch((err) => {
            console.error(err);
            bot.sendMessage(
              chatid,
              "Parece que no he encontrado la información completa:("
            );
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getManga();
});

bot.onText(/\/anime (.+)/, function (msg, match) {
  var a = match[1];
  var chatid = msg.chat.id;
  const { Anime } = require("mailist");
  const get = new Anime();

  function getAnime() {
    try {
      get
        .anime(a)
        .then((res) => {
          translate(
            res.data.anime.results[0].description +
              res.data.anime.results[0].status,
            { to: "es" }
          )
            .then((resp) => {
              bot.sendMessage(
                chatid,
                `🈴*Nombre:*  ❝${res.data.anime.results[0].title.english}❞ | ❝${res.data.anime.results[0].title.romaji}❞ [ㅤ](${res.data.anime.results[0].coverImage.large})\n\n♡⃕*Generos:* ${res.data.anime.results[0].genres[0]}, ${res.data.anime.results[0].genres[1]}\n♡⃕*Status:* ${res.data.anime.results[0].status}\n♡⃕*Capitulos:* ${res.data.anime.results[0].episodes}\n♡⃕*Estreno:* ${res.data.anime.results[0].startDate.day} | ${res.data.anime.results[0].startDate.month} | ${res.data.anime.results[0].startDate.year}\n⭐️*Puntuación Media:* ${res.data.anime.results[0].meanScore}\n\n👑*Sinopsis:* _${resp.text}_`,
                {
                  parse_mode: "Markdown",
                  reply_markup: {
                    inline_keyboard: [
                      [
                        {
                          text: "🔍Información completa→",
                          url: res.data.anime.results[0].siteUrl,
                          callback_data: "any",
                        },
                      ],
                    ],
                  },
                }
              );
            })
            .catch((err) => {
              console.error(err);
              bot.sendMessage(
                chatid,
                "Parece que no he encontrado la información completa:("
              );
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {
      console.log(e);
    }
  }
  getAnime();
});

bot.onText(/^\/tts (.+)/, function (msg, match) {
  var a = match[1];
  var chatId = msg.chat.id;
  const url = googleTTS.getAudioUrl(a, {
    lang: "es",
    slow: false,
    host: "https://translate.google.com",
  });
  console.log(url);
  bot.sendVoice(chatId, url);
});

bot.onText(/^\/paste/, function (msg) {
  var chatid = msg.chat.id;
  //var message_id = msg.reply_to_message.text;
bot.sendMessage(chatid, "¡Inhabilitado temporalmente!");
  /*(async () => {
    const paste = await paster.create(message_id);
    bot.sendMessage(
      chatid,
      `🌐<i>El link con el texto insertado se encuentra aquí:</i> \n\n${paste.link}`,
      { parse_mode: "HTML" }
    );
  })();*/
});

bot.onText(/\/tr (.+)/, function (msg, match) {
  var trad = match[1];
  var trs = msg.reply_to_message.text;
  var chatid = msg.chat.id;
  if (trad === "es") {
    //español
    translate(trs, { to: "es" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al es:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "en") {
    //ingles
    translate(trs, { to: "en" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al en:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ar") {
    //arabe
    translate(trs, { to: "ar" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ar:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "fr") {
    //frances
    translate(trs, { to: "fr" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al fr:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ko") {
    //koreano
    translate(trs, { to: "ko" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ko:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ja") {
    //japones
    translate(trs, { to: "ja" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ja:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ru") {
    //ruso
    translate(trs, { to: "ru" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ru:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "af") {
    //africano
    translate(trs, { to: "af" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al af:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sq") {
    //albanes
    translate(trs, { to: "sq" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sq:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "am") {
    //amárico
    translate(trs, { to: "am" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al am:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "hy") {
    //armenian
    translate(trs, { to: "hy" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al hy:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "az") {
    //azerbaijani
    translate(trs, { to: "az" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al az:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "eu") {
    //basque
    translate(trs, { to: "eu" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al eu:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "be") {
    //belarusian
    translate(trs, { to: "be" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al be:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "bn") {
    //bengali
    translate(trs, { to: "bn" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al bn:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "bs") {
    //bosnian
    translate(trs, { to: "bs" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al bs:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ca") {
    //catalan
    translate(trs, { to: "ca" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ca:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ceb") {
    //cebuano
    translate(trs, { to: "ceb" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ceb:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ny") {
    //chichewa
    translate(trs, { to: "ny" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ny:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "zn-CN") {
    //chino simplificado
    translate(trs, { to: "zn-CN" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al zn-CN:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "zn-TW") {
    //chino tradicional
    translate(trs, { to: "zn-TW" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al zn-TW:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "co") {
    //corsican
    translate(trs, { to: "co" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al co:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "hr") {
    //croata
    translate(trs, { to: "hr" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al hr:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "cs") {
    //czech
    translate(trs, { to: "cs" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al cs:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "da") {
    //danish
    translate(trs, { to: "da" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al da:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "nl") {
    //dutch
    translate(trs, { to: "nl" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al nl:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "eo") {
    //esperanto
    translate(trs, { to: "eo" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al eo:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "et") {
    //estonian
    translate(trs, { to: "et" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al et:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "tl") {
    //filipino
    translate(trs, { to: "tl" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al tl:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "fi") {
    //finish
    translate(trs, { to: "fi" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al fi:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "fy") {
    //frisian
    translate(trs, { to: "fy" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al fy:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "gl") {
    //galiciano
    translate(trs, { to: "gl" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al gl:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ka") {
    //georgian
    translate(trs, { to: "ka" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ka:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "de") {
    //aleman
    translate(trs, { to: "de" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al de:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "el") {
    //greek
    translate(trs, { to: "el" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al el:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "gu") {
    //gujarati
    translate(trs, { to: "gu" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al gu:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ht") {
    //haitian
    translate(trs, { to: "ht" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ht:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ha") {
    //hausa
    translate(trs, { to: "ha" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ha:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "haw") {
    //hawaian
    translate(trs, { to: "haw" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al haw:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "he") {
    //hebreo
    translate(trs, { to: "he" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al he:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "hi") {
    //hindi
    translate(trs, { to: "hi" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al hi:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "hmn") {
    //hmong
    translate(trs, { to: "hmn" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al hmn:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "hu") {
    //hungariano
    translate(trs, { to: "hu" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al hu:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "is") {
    //iscelandic
    translate(trs, { to: "is" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al is:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ig") {
    //igbo
    translate(trs, { to: "ig" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ig:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "id") {
    //indonesio
    translate(trs, { to: "id" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al id:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ga") {
    //irish
    translate(trs, { to: "ga" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ga:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "it") {
    //italiano
    translate(trs, { to: "it" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al it:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "jw") {
    //javanese
    translate(trs, { to: "jw" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al jw:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "kn") {
    //kannada
    translate(trs, { to: "kn" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al kn:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "kk") {
    //kazakh
    translate(trs, { to: "kk" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al kk:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "km") {
    //khmer
    translate(trs, { to: "km" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al km:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ku") {
    //kurdich
    translate(trs, { to: "ku" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ku:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ky") {
    //kyrgyz
    translate(trs, { to: "ky" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ky:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "lo") {
    //lao
    translate(trs, { to: "lo" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al lo:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "la") {
    //latin
    translate(trs, { to: "la" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al la:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "lv") {
    //latvian
    translate(trs, { to: "lv" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al lv:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "lt") {
    //lithuan
    translate(trs, { to: "lt" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al lt:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "lb") {
    //lex
    translate(trs, { to: "lb" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al lb:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mk") {
    //mcaedocia
    translate(trs, { to: "mk" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mk:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mg") {
    //malagasi
    translate(trs, { to: "mg" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mg:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ms") {
    //malay
    translate(trs, { to: "ms" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ms:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ml") {
    //malayam
    translate(trs, { to: "ml" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ml:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mt") {
    //maltese
    translate(trs, { to: "mt" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mt:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mi") {
    //maori
    translate(trs, { to: "mi" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mi:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mr") {
    //marathi
    translate(trs, { to: "mr" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mr:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "mn") {
    //mongolo
    translate(trs, { to: "mn" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al mn:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "my") {
    //burmese
    translate(trs, { to: "my" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al my</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ne") {
    //nepali
    translate(trs, { to: "ne" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ne:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "no") {
    //norgew
    translate(trs, { to: "no" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al no:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ps") {
    //pashto
    translate(trs, { to: "ps" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ps:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "fa") {
    //persa
    translate(trs, { to: "fa" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al fa:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "pl") {
    //polish
    translate(trs, { to: "pl" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al pl:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "pt") {
    //portugues
    translate(trs, { to: "pt" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al pt:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "pa") {
    //punjabi
    translate(trs, { to: "pa" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al pa:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ro") {
    //romano
    translate(trs, { to: "ro" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ro:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sm") {
    //samoan
    translate(trs, { to: "sm" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sm:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "gd") {
    //scots
    translate(trs, { to: "gd" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al gd:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sr") {
    //serbian
    translate(trs, { to: "sr" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sr:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "st") {
    //sesoto
    translate(trs, { to: "st" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al st:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sn") {
    //shona
    translate(trs, { to: "sn" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sn:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sd") {
    //sindhi
    translate(trs, { to: "sd" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sd:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sl") {
    //sinhala
    translate(trs, { to: "sl" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sl:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "so") {
    //somali
    translate(trs, { to: "so" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al so:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "su") {
    //sundanese
    translate(trs, { to: "su" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al su:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sw") {
    //swhali
    translate(trs, { to: "sw" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sw:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "sv") {
    //swedish
    translate(trs, { to: "sv" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al sv:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "tg") {
    //tajik
    translate(trs, { to: "tg" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al tg:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ta") {
    //tamil
    translate(trs, { to: "ta" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ta:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "te") {
    //telugu
    translate(trs, { to: "te" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al te:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "th") {
    //thai
    translate(trs, { to: "th" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al th:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "tr") {
    //turkish
    translate(trs, { to: "tr" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al tr:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "uk") {
    //ukrania
    translate(trs, { to: "uk" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al uk:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "ur") {
    //urdu
    translate(trs, { to: "ur" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al ur:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "uz") {
    //uzbek
    translate(trs, { to: "uz" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al uz:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "vi") {
    //vietnamita
    translate(trs, { to: "vi" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al vi:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "cy") {
    //welsh
    translate(trs, { to: "cy" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al cy:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "xh") {
    //xhosa
    translate(trs, { to: "xh" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al xh:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "yi") {
    //yidish
    translate(trs, { to: "yi" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al yi:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "yo") {
    //yoruba
    translate(trs, { to: "yo" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al yo:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  if (trad === "zu") {
    //zulu
    translate(trs, { to: "zu" })
      .then((res) => {
        bot.sendMessage(
          chatid,
          `🌐<i>Texto traducido del ${res.from.language.iso} al zu:</i> \n\n<code>${res.text}</code>`,
          { parse_mode: "HTML" }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
});

bot.onText(/^\/lenguajes/, (msg) => {
  bot.sendAnimation(msg.chat.id, "https://i.redd.it/tfk4b2gsf0d61.gif", {
    caption: `_Haz click en el botón para conocer los códigos y lenguajes disponibles para ser usados en el traductor kamisama_.`,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Códigos de lenguaje→",
            url: "https://telegra.ph/Lenguajes--Traductor-07-18-2",
          },
        ],
      ],
    },
  });
});
/*********************************************************************************************************************** */

/*********************************************************************************************************************/
bot.onText(/^\/mibio|^\.mibio/, (msg) => {
  var chatid = msg.chat.id;
  const usuario = msg.from.first_name;
  var admins = [
    "https://pa1.narvii.com/6884/28783d453cf4cfee2706d7d6baf1dcf70364dac7r1-500-281_hq.gif",
    "https://1.bp.blogspot.com/-8NTUq1DtFKY/XRMqOaukP2I/AAAAAAAAAvo/Ou30MBA6c1g_W2kBMnlSTsshlp78gLa9wCLcBGAs/s400/tumblr_oeoy8xi9zq1vwgg68o1_500.gif",
    "http://pa1.narvii.com/6502/32f5509bb34a63410029ae08000fc41d64a8003a_00.gif",
    "https://acegif.com/wp-content/gif/blushing-1.gif",
    "https://c.tenor.com/HrULWgrh_Z4AAAAC/anime.gif",
    "http://pa1.narvii.com/6029/3375d633015a6b806a8ea9d6cefcd40ace5573ca_00.gif",
    "https://i.pinimg.com/originals/b5/fc/37/b5fc3741c4057ca8d665254476a90701.gif",
    "https://i.pinimg.com/originals/00/30/6a/00306a6f25e8eafd4ab9ae4681ece9de.gif",
    "https://www.losreplicantes.com/images/articulos/3000/3867/1.gif",
    "http://radioaries.argentinastream.com/a00fcbb9f71f762a6d0794f87c1b8eba.gif",
    "https://i.pinimg.com/originals/39/d1/b2/39d1b2450403830ee2b7d4fd49575f29.gif",
    "https://iforo.3djuegos.com/files_foros/1u/1urj_play.gif",
    "https://c.tenor.com/9oJBaHzaT8AAAAAd/log-horizon-anime.gif",
    "https://c.tenor.com/-YundYgqXqEAAAAC/anime-aesthetic.gif",
    "https://i.pinimg.com/originals/14/6e/66/146e660d8206fb40c7fad18819dd3fd7.gif",
    "https://i.pinimg.com/originals/3e/ba/1d/3eba1deaf138dc7c7d6e423eb585e066.gif",
  ];
  var ma = Math.random();
  var margarita = Math.floor(ma * admins.length);

  var edad = [
    `\n\n🧠_Edad:_ 12 | _Estado:_ Ilegal`,
    `\n\n🧠_Edad:_ 13 | _Estado:_ Ilegal`,
    `\n\n🧠_Edad:_ 14 | _Estado:_ Ilegal`,
    `\n\n🧠_Edad:_ 15 | _Estado:_ Ilegal`,
    `\n\n🧠_Edad:_ 16 | _Estado:_ Ilegal`,
    `\n\n🧠_Edad:_ 17 | _Estado:_ Ilegal`,
    `\n\n🧠_Edad:_ 18 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ 19 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ 20 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ 21 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ 22 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ 23 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ 24 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ 25 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ 26 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ 27 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ 28 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ 29 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ +30 | _Estado:_ legal`,
    `\n\n🧠_Edad:_ +40 | _Estado:_ legal`,
  ];
  var ma = Math.random();
  var rosa = Math.floor(ma * edad.length);

  var colorfav = [
    `\n\n🎨_Color favorito:_ Morado`,
    `\n\n🎨_Color favorito:_ Azul`,
    `\n\n🎨_Color favorito:_ Rosa`,
    `\n\n🎨_Color favorito:_ Rojo`,
    `\n\n🎨_Color favorito:_ Amarillo`,
    `\n\n🎨_Color favorito:_ Negro`,
    `\n\n🎨_Color favorito:_ Naranja`,
    `\n\n🎨_Color favorito:_ Blanco`,
    `\n\n🎨_Color favorito:_ Azul marino`,
    `\n\n🎨_Color favorito:_ Violeta`,
    `\n\n🎨_Color favorito:_ Pastel`,
    `\n\n🎨_Color favorito:_ Rojo vino`,
    `\n\n🎨_Color favorito:_ Café`,
  ];
  var ma = Math.random();
  var flor = Math.floor(ma * colorfav.length);

  var signo = [
    `\n\n_Signo zodiacal:_ Aries♒`,
    `\n\n_Signo zodiacal:_ Tauro♉`,
    `\n\n_Signo zodiacal:_ Geminis♊`,
    `\n\n_Signo zodiacal:_ Acuario♒`,
    `\n\n_Signo zodiacal:_ Escorpio♏`,
    `\n\n_Signo zodiacal:_ Piscis♓`,
    `\n\n_Signo zodiacal:_ Cáncer♋`,
    `\n\n_Signo zodiacal:_ Leo♌`,
    `\n\n_Signo zodiacal:_ Libra♎`,
    `\n\n_Signo zodiacal:_ Virgo♍`,
    `\n\n_Signo zodiacal:_ Sagitario♐`,
    `\n\n_Signo zodiacal:_ Capricornio♑`,
  ];
  var ma = Math.random();
  var tulipan = Math.floor(ma * signo.length);
  var musica = [
    `\n\n🎧_Género de música favorito:_ Bachata`,
    `\n\n🎧_Género de música favorito:_ Balada`,
    `\n\n🎧_Género de música favorito:_ Blues`,
    `\n\n🎧_Género de música favorito:_ Corridos`,
    `\n\n🎧_Género de música favorito:_ Salsa`,
    `\n\n🎧_Género de música favorito:_ Instrumental`,
    `\n\n🎧_Género de música favorito:_ Electrónica`,
    `\n\n🎧_Género de música favorito:_ Cumbia`,
    `\n\n🎧_Género de música favorito:_ Disco`,
    `\n\n🎧_Género de música favorito:_ Flamenco`,
    `\n\n🎧_Género de música favorito:_ Pop en español`,
    `\n\n🎧_Género de música favorito:_ Pop en ingles`,
    `\n\n🎧_Género de música favorito:_ Merengue`,
    `\n\n🎧_Género de música favorito:_ Perreo`,
    `\n\n🎧_Género de música favorito:_ Polka`,
    `\n\n🎧_Género de música favorito:_ Rancheras`,
    `\n\n🎧_Género de música favorito:_ Música regional mexicana`,
    `\n\n🎧_Género de música favorito:_ K-pop`,
    `\n\n🎧_Género de música favorito:_ Tango`,
    `\n\n🎧_Género de música favorito:_ Vallenato`,
    `\n\n🎧_Género de música favorito:_ Rap`,
    `\n\n🎧_Género de música favorito:_ Hip-Hop`,
    `\n\n🎧_Género de música favorito:_ Rock`,
    `\n\n🎧_Género de música favorito:_ Samba`,
    `\n\n🎧_Género de música favorito:_ Reggaeton`,
  ];
  var ma = Math.random();
  var menta = Math.floor(ma * musica.length);

  var amor = [
    `\n\n_Estado amoroso:_ Solterx💔`,
    `\n\n_Estado amoroso:_ Casadx❤`,
    `\n\n_Estado amoroso:_ Es complicado:(💔`,
    `\n\n_Estado amoroso:_ Del pueblo y para el pueblo❤`,
    `\n\n_Estado amoroso:_ En una relación❤`,
    `\n\n_Estado amoroso:_ No te sabría decir compa💅`,
    `\n\n_Estado amoroso:_ Humilladx, pero jamás derrotadx💅`,
    `\n\n_Estado amoroso:_ Perdiendo mi dignidad💔`,
    `\n\n_Estado amoroso:_ Tengo crush, pero no me pela:(💔`,
    `\n\n_Estado amoroso:_ Relación a distancia❤`,
    `\n\n_Estado amoroso:_ En dos relaciones, soy todo un don Juan, arre💅`,
  ];
  var ma = Math.random();
  var girasol = Math.floor(ma * amor.length);
  var hobbies = [
    `\n\n🪁_Hobbies:_ Hacer deportes, salir a caminar.`,
    `\n\n🪁_Hobbies:_ Bailar, Cantar a pulmón en el baño.`,
    `\n\n🪁_Hobbies:_ Leer libros filosoficos, leer mangas de vez en cuando.`,
    `\n\n🪁_Hobbies:_ Pintura, Dibujar.`,
    `\n\n🪁_Hobbies:_ Programar en tiempos libres, aprender sobre tecnologías.`,
    `\n\n🪁_Hobbies:_ Aprender cosas nuevas, comer mucho.`,
    `\n\n🪁_Hobbies:_ Cocinar, aprender idiomas.`,
    `\n\n🪁_Hobbies:_ Hacer yoga, escuchar música.`,
    `\n\n🪁_Hobbies:_ Escribir, Bricolaje.`,
    `\n\n🪁_Hobbies:_ Costura, Dormir mucho.`,
    `\n\n🪁_Hobbies:_ Belleza, jugar juegos de meza.`,
  ];
  var ma = Math.random();
  var arbol = Math.floor(ma * hobbies.length);
  var mifrase = [
    `\n\n🖊_Mi frase:_ No se puede hacer nada para cambiar lo que ya pasó, pero sí se puede hacer mucho para cambiar lo que viene.`,
    `\n\n🖊_Mi frase:_ No se preocupe si el plan A falla, hay 25 letras más en el alfabeto.`,
    `\n\n🖊_Mi frase:_ Si no regreso en cinco minutos, espera más …`,
    `\n\n🖊_Mi frase:_ Una dieta equilibrada significa un pastelito en cada mano.`,
    `\n\n🖊_Mi frase:_ Me niego a responder esa pregunta porque no sé la respuesta.`,
    `\n\n🖊_Mi frase:_ ¿No esperar lo inesperado hace esperar lo inesperado?`,
    `\n\n🖊_Mi frase:_ La vida es corta, sonríe mientras todavía tienes dientes.`,
    `\n\n🖊_Mi frase:_ Estoy celosx de mis padres, nunca tendré un niño tan bueno como ellos.`,
    `\n\n🖊_Mi frase:_ No soy flojo, solo estoy muy relajado.`,
    `\n\n🖊_Mi frase:_ Dios creó el mundo, todo lo demás está hecho en China.`,
    `\n\n🖊_Mi frase:_ Si la gente habla a tus espaldas, entonces solo tírate.`,
  ];
  var ma = Math.random();
  var arbusto = Math.floor(ma * mifrase.length);

  bot.sendAnimation(chatid, admins[margarita], {
    caption: `👤_Mi nombre:_ [${usuario}](tg://user?id=${msg.from.id}) ${edad[rosa]} ${colorfav[flor]} ${signo[tulipan]} ${musica[menta]} ${amor[girasol]} ${hobbies[arbol]} ${mifrase[arbusto]}`,
    parse_mode: "Markdown",
  });
});
bot.onText(/^\/kiwi/, function (msg) {
  animes.on("ready", () => {
    animes
      .transform({
        photo:
          "https://media.gq.com.mx/photos/5e220ec2ffa8c7000803441e/16:9/w_1920,c_limit/40-datos-curiosos-para-descubrir-a-scarlett-johansson.jpg",
        // To save the image to a specific path
        destinyFolder: "./images",
      })
      .then((data) => {
        console.log("Image", data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  });
});

bot.onText(/\/f (.+)/, function (msg, match) {
  var c = match[1];
});

bot.onText(/^\/qtcompatibles/, (msg) => {
  var chatid = msg.chat.id;
  var messageId = msg.reply_to_message.from.first_name;
  const usuario = msg.from.first_name;
  const usersId = msg.reply_to_message.from.first_name;
  var animacion = [
    "https://acegif.com/wp-content/uploads/anime-love-53.gif",
    "https://i.pinimg.com/originals/49/7a/55/497a5523d9b1ca23db84ecc3f5d8b1b3.gif",
    "https://64.media.tumblr.com/99691e08eecade2f575b272eda7c2d2a/tumblr_muad2kgj1F1rjonbao1_500.gif",
    "https://i.pinimg.com/originals/16/a2/5a/16a25ac1cc0b39ea3e6cd0aae72deeee.gif",
    "https://acegif.com/wp-content/gif/anime-hug-59.gif",
    "http://1.bp.blogspot.com/-WFNuVqC8aPw/Ue_mZ_FwL9I/AAAAAAAAA_Y/xTJgO3OsM7A/s1600/anime-gif-kimi-ni-todoke-Favim.com-375462_large.gif",
    "http://1.bp.blogspot.com/-3k48PNxzdqQ/U5MXmRQMKuI/AAAAAAAAE2M/XScspSBcJJY/s1600/tumblr_n6iqk7WhUt1ts5lkuo1_500.gif",
    "https://pa1.narvii.com/6427/269e2793b9c165850e522a3dba69b82c07ac16c2_hq.gif",
    "https://media1.tenor.com/images/e61a14a6bd233279eb78c9c40c4f7feb/tenor.gif",
    "http://25.media.tumblr.com/tumblr_ma95gdLpsf1raf3v8o1_500.gif",
    "https://media1.tenor.com/images/aecb71388c86293437d8836910e4323a/tenor.gif",
    "https://media1.tenor.com/images/be8c571dabed34840c4a0f3da4f7f88f/tenor.gif?itemid=4394528",
    "https://pa1.narvii.com/6529/558f56a06e539d3a9a14129a8525146b7ec411de_hq.gif",
    "http://pa1.narvii.com/6435/d6ddcd3b7e9af5b966727e2f783b846f3f041af9_00.gif",
    "https://media1.tenor.com/images/8cd2606b19c041b95e447963f81ed3ae/tenor.gif",
    "https://media1.tenor.com/images/482dda90417c697910d48165b064b363/tenor.gif",
    "http://pa1.narvii.com/6358/f33d62bca49f76a9950b6ce43f56ca0ba251d4b9_00.gif",
    "http://3.bp.blogspot.com/-iimlV6tyAt8/Ue_n86uJ64I/AAAAAAAABAU/cjnjJkCGpD4/s1600/tumblr_mla04dsokc1qd7h1xo2_500.gif",
    "https://i.pinimg.com/originals/f5/58/d7/f558d776f20c0ec86cd02c7edd87ae13.gif",
    "https://i.pinimg.com/originals/c8/69/7a/c8697a9a6804d0a53d8d2fb0fa31ae8f.gif",
    "https://acegif.com/wp-content/uploads/anime-love-29.gif",
    "https://media1.tenor.com/images/110dbddfd3d662479c214cacb754995d/tenor.gif",
    "https://pa1.narvii.com/6143/a002ce6a73a8e0c3fc56de262bf987872806c83f_hq.gif",
    "https://static.vix.com/es/sites/default/files/btg/sailormoon-enamorada.gif",
  ];
  var ma = Math.random();
  var amorani = Math.floor(ma * animacion.length);

  var compatibles = [
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *1%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *2%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *3%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *4%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *5%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *6%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *7%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *8%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *9%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *10%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *11%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *12%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *13%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *14%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *15%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *16%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *17%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *18%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *19%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *20%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *21%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *22%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *23%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *24%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *25%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *26%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *27%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *28%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *29%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *30%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *31%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *32%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *33%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *34%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *35%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *36%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *37%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *38%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *39%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *40%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *41%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *42%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *43%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *44%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *45%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *46%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *47%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *48%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *49%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *50%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *51%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *52%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *53%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *54%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *55%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *56%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *57%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *58%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *59%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *60%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *61%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *62%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *63%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *64%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *65%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *66%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *67%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *68%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *69%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *70%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *71%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *72%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *73%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *74%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *75%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *76%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *77%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *78%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *79%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *80%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *89%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *90%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *91%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *92%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *93%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *94%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *95%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *96%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *97%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *98%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *99%*`,
    `❤Compatibilidad de relación entre: [${usuario}](tg://user?id=${msg.from.id}) + [${usersId}](tg://user?id=${msg.reply_to_message.from.id}) = *100%*`,
  ];
  var ma = Math.random();
  var amorcompatibles = Math.floor(ma * compatibles.length);
  bot.sendAnimation(chatid, animacion[amorani], {
    caption: compatibles[amorcompatibles],
    parse_mode: "Markdown",
  });
});
//test
async function getBanned() {
  try {
    banned = {};
    clientMongo = new MongoClient(uri);
    await clientMongo.connect();
    let db = clientMongo.db("nohebot");
    bans = db.collection("banned").find({}).toArray();
    await bans.then((bansArray) => {
      bansArray.forEach((ban) => {
        banned[ban.telegramId] = ban.username;
        bannedPeople[ban.telegramId] = ban.username;
      });
      clientMongo.close();
    });
    return banned;
  } catch (err) {
    console.log("Mongodb error: " + err);
  }
}
async function updateBanned(id, username) {
  try {
    toban = { telegramId: id, username: username };
    clientMongo = await new MongoClient(uri);
    await clientMongo.connect();
    let db = clientMongo.db("nohebot");
    db.collection("banned").insertOne(toban, function (err, res) {
      clientMongo.close();
    });
    await getBanned();
  } catch (err) {
    console.log("Mongodb error: " + err);
  }
}

function globalBanning(id, username, data, msg, chatId) {
  try{
    if (!(id in data)) {
      updateBanned(id, username).then((data) => {
        username = toEscapeMSg(username);
        console.log(username)
        bot.sendMessage(
          chatId,
          "🐬Ban global aplicado a: " + username + " con la ID: " + id,
          {
            reply_to_message_id: msg.message_id,
            parse_mode: "Markdown",
          }
        );
        bot.kickChatMember(msg.chat.id, id);
      });
    } else {
      bot.sendMessage(chatId, "_🐬Ya esta en lista negra titán._", {
        reply_to_message_id: msg.message_id,
        parse_mode: "Markdown",
      });
    }
  }catch(err){
    console.log("globalBanning error")
    console.log(err)
  }
}

bot.onText(/^\/gban/, (msg) => {
  if (checkId(msg.from.id)) {
    idText = msg.text.split("/gban ");
    chatId = msg.chat.id;
    if (msg.reply_to_message != undefined || idText[1] != undefined) {
      getBanned().then((data) => {
        if (data != undefined) {
          if (msg.reply_to_message != undefined) {
            id = msg.reply_to_message.from.id;
            username = msg.reply_to_message.from.username;
            if (id != 1701653200) {
              globalBanning(id, username, data, msg, chatId);
            }
          } else {
            if (idText[1] != 1701653200) {
              bot
                .getChatMember(chatId, idText[1])
                .then((userdata) => {
                  id = idText[1];
                  username = userdata.user.username;
                  globalBanning(parseInt(id), username, data, msg, chatId);
                })
                .catch(function (e) {
                  console.log(e)
                  bot.sendMessage(chatId, "Usuario no encontrado:(", {
                    reply_to_message_id: msg.message_id,
                    parse_mode: "Markdown",
                  });
                });
            }
          }
        }
      });
    } else {
      bot.sendMessage(
        chatId,
        "🐬_Responde a un mensaje o agrega la ID de un usuario, para usar este comando._",
        {
          reply_to_message_id: msg.message_id,
          parse_mode: "Markdown",
        }
      );
    }
  }
});
function toEscapeMSg(str) {
    return str
        .replace(/_/gi, "\\_")
        .replace(/-/gi, "\\-")
        .replace("~", "\\~")
        .replace(/`/gi, "\\`")
        .replace(/\./g, "\\.")
        .replace(/\</g, "\\<")
        .replace(/\>/g, "\\>");
}
bot.onText(/^\/listgban/, (msg) => {
  if (checkId(msg.from.id)) {
    chatId = msg.chat.id;
    getBanned().then((data) => {
      try{
        if (data != undefined) {
          string = "";
          console.log(data);
          for (const [key, value] of Object.entries(data)) {
            string += `🆔: ${key} | Alias: @${value}\n`;
          }
          string = toEscapeMSg(string);
          console.log(string)
          fs.writeFile("UsuariosGban.txt", string, {encoding: "utf-8"}, function (error) {
            if (error) {
              console.log("Error" + error);
            } else {
              console.log("Hecha la lista de usuarios Gban.");
              bot.sendDocument(chatId, "UsuariosGban.txt", {caption: "🚨 _La lista de usuarios con Baneo Global actualizada a continuación titán._", parse_mode: "Markdown"});
            }
          })
        } else {
          bot.sendMessage(chatId, "No hay usuarios con ban global:(", {
            reply_to_message_id: msg.message_id,
            parse_mode: "Markdown",
          });
        }
      } catch(e){
        console.log("listgban")
        console.log(e)
      }
    });
  }
});

async function removeBanned(id) {
  try {
    toban = { telegramId: id };
    clientMongo = await new MongoClient(uri);
    await clientMongo.connect();
    let db = clientMongo.db("nohebot");
    db.collection("banned").findOneAndDelete(toban, function (err, res) {
      clientMongo.close();
    });
    await getBanned();
  } catch (err) {
    console.log("Mongodb error: " + err);
  }
}

bot.onText(/^\/ungban/, (msg) => {
  if (checkId(msg.from.id)) {
    idText = msg.text.split("/ungban ");
    if (idText[1] == undefined) {
      bot.sendMessage(
        chatId,
        "🐬_Necesito la ID del usuario para usar este comando._",
        {
          reply_to_message_id: msg.message_id,
          parse_mode: "Markdown",
        }
      );
    } else {
      id = parseInt(idText[1]);
      chatId = msg.chat.id;
      getBanned().then((data) => {
        if (data != undefined && id in data) {
          removeBanned(id).then((data) => {
            bot.unbanChatMember(msg.chat.id, id);
            bot.sendMessage(chatId, "🐬Ban *Global* removido a: " + id, {
              reply_to_message_id: msg.message_id,
              parse_mode: "Markdown",
            });
          });
        } else {
          bot.sendMessage(
            chatId,
            "🐬_ID no encontrada en la lista de usuarios con ban global._",
            {
              reply_to_message_id: msg.message_id,
              parse_mode: "Markdown",
            }
          );
        }
      });
    }
  }
});
function checkId(id) {
  /*
    nohe: 1701653200
    wander: 1702852475
    jessie: 1979042083
    saku: 1952301170
  */
  if (
    id == 1702852475 ||
    id == 1701653200 ||
    id == 1979042083 ||
    id == 1952301170 ||
    id == 1388177504 ||
    id == 5591717437 
  ) {
    return true;
  }
  return false;
}
bot.on("message", function (msg) {
  var chatId = msg.chat.id;
  var chatitle = msg.chat.title;
  if (msg.new_chat_members != undefined) {
    if (msg.new_chat_member.id in bannedPeople) {
      bot.kickChatMember(msg.chat.id, msg.new_chat_member.id);
      bot.sendMessage(
        chatId,
        "_🐬Oh no, este usuario peligroso se encuentra baneado globalmente._\n\n🐬_Apelación:_ @GawrGuraSoporte",
        {
          reply_to_message_id: msg.message_id,
          parse_mode: "Markdown",
        }
        );
    }
  } else {  if (msg.from.id in bannedPeople) {
    bot.kickChatMember(msg.chat.id, msg.from.id);
    bot.sendMessage(
      chatId,
      "_🐬Oh no, este usuario peligroso se encuentra baneado globalmente._\n🐬_Apelación:_ @GawrGuraSoporte",
      {
        reply_to_message_id: msg.message_id,
        parse_mode: "Markdown",
      }
      );
  }}

});

/*bot.onText(/^\.reverse|^\/reverse/, function (msg) {
  var chatid = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.photo[1].file_id;
  bot.getFileLink(photo).then(function (enlace) {
    const doSomething = (results) => {
      bot.sendMessage(chatid, `<code>${results[1].title}</code>`, {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🔍Resultado de búsqueda→",
                url: results[1].url,
                callback_data: "any",
              },
            ],
          ],
        },
        parse_mode: "HTML",
      });
    };
    try{
      reverseImageSearchs(enlace, doSomething)
    }catch(e){
      bot.sendMessage(chatid, "No he dado con la búsqueda:(");
    }
  });
});*/

bot.onText(/^\.reverse|^\/reverse/, function (msg) {
  var chatid = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
      try {
        if (msg.reply_to_message.photo) {
          // Get the photo file_id
          var photoId = msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1].file_id;
         bot.downloadFile(photoId, "./download").then(function (path) {

            console.log("hecho " + path);
            async function start() { //C:\Users\Usuario PC\Documents\01 Gura\01 GURA\download\file_37.jpg
              try {
                const my_awesome_image = fs.readFileSync(path);
                const reverse = await google.search(my_awesome_image, { ris: true });
                console.log(reverse.results[0].title)
                bot.sendMessage(chatid, `<code>${reverse.results[0].title}</code>`, {
                  reply_markup: {
                    inline_keyboard: [
                      [
                        {
                          text: "🔍Resultado de búsqueda→",
                          url: reverse.results[0].url,
                          callback_data: "any",
                        },
                      ],
                    ],
                  },
                  parse_mode: "HTML",
                });
                fs.unlinkSync(path);
                console.log("!borrado...")
              } catch (error) {
                console.log(error);
                bot.sendMessage(chatid, "Parece que hubo un error:(");
              }
             }
             start();
          });
      }
    } catch (error) {
        console.log(error);
        bot.sendMessage(chatid, "Parece que hubo un error:(");
      }
});
bot.onText(/\/quote/, (msg) => {
  const chatId = msg.chat.id;
  const frase = randomQuote();
  translate(frase.quote, { to: "es" })
    .then((resp) => {
      bot.sendMessage(
        msg.chat.id,
        `❛<i>${resp.text}</i>❜ \n\n<code>${frase.name}</code> - <code>${frase.anime}</code>`,
        { parse_mode: "HTML" }
      );
    })
    .catch((err) => {
      console.error(err);
      bot.sendMessage(chatId, "Algo no salió como esperaba:(");
    });
});

bot.onText(/^\/donar/, (msg) => {
  bot.sendPhoto(msg.chat.id, "https://i.imgur.com/gOogtf8.jpg", {
    caption: `[${msg.from.first_name}](tg://user?id=${msg.from.id}), _Mantener nuestro bot activo no es una tarea fácil, tampoco desarrollarlo, te agradeceriamos mucho si realizaras una pequeña donación si te ha gustado el bot para ayudarla a mantenerla viva mucho tiempo, en el futuro iremos implementando mejoras y si realizas una pequeña donación avisa en el grupo de soporte (@GawrGuraSoporte), Te tomaremos en cuenta para beneficios, y ¡Muchas gracias!, esto lo hicimos con mucho esfuerzo._`,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "➕¡Quiero hacer una donación!",
            url: "https://www.paypal.me/Garwgura1",
          },
        ],
      ],
    },
  });
});

bot.onText(/^\/upimgur/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.photo[1].file_id;
  bot.getFileLink(photo).then(function (enlace) {
    console.log(enlace);

    imgur
      .uploadUrl(enlace)
      .then((json) => {
        console.log(json.link);
        bot.sendMessage(chatId, json.link);
      })
      .catch((err) => {
        console.error(err.message);
      });
  });
});

bot.onText(/\/img (.+)/, function (msg, match) {
  try{
    var d = match[1];
    gis(d, logResults);
    function logResults(error, results) {
      try{
        if (error) {
          console.log(error);
        } else {
          console.log(JSON.stringify(results[0].url));
          bot.sendPhoto(msg.chat.id, `${results[0].url}`);
        }
      }catch(e){
        console.log(e)
      }
    }
  }catch(e){
    console.log(e);
  }
});



/*bot.onText(/\/img (.+)/, function (msg, match) {

    var d = match[1];
    try{
      async function start() {
        // Image Search
        const images = await google.image(d, { safe: false });
        bot.sendMediaGroup(msg.chat.id, [
          {
            type: "photo",
            media: images[2].url
          },
          {
            type: "photo",
            media: images[3].url
          }
        ]);
       }
       
       start();
    }catch(e){
      console.log(e);
    }
});*/

bot.onText(/\/pokemon (.+)/, function (msg, match) {
  var d = match[1];
  bot.sendMessage(msg.chat.id, "Comando temporalmente inhabilitado:(")
 /*  
  const data = pokemoninfo.pokemon(`${d}`);
  data
    .then(function (result) {
      translate(result.description, { to: "es" }).then((resp) => {
        bot.sendAnimation(msg.chat.id, `${result.sprites.animated}`, {
          caption: `🐬<b>Nombre:</b> <code>${result.name}</code>\n🐹<b>Tipo:</b> <code>${result.type}</code>\n🌎<b>Especie:</b> <code>${result.species[0]}</code>\n📊<b>Habilidades:</b> <code>${result.abilities[0]}</code>\n⚖<b>Peso:</b> <code>${result.weight}</code> | 📏<b>Altura:</b> <code>${result.height}</code>\n⚔<b>Experiencia Base:</b> <code>${result.base_experience}</code>\n🐍<b>Género:</b> <code>${result.gender[0]}</code> | <code>${result.gender[1]}</code>\n------------------------------------\n🏆<b>Estadísticas:</b>\n⭐<b>HP:</b> <code>${result.stats.hp}</code> | ⭐<b>Ataque:</b> <code>${result.stats.attack}</code>\n⭐<b>Defensa:</b> <code>${result.stats.defense}</code> | ⭐<b>SPATQ:</b> <code>${result.stats.sp_atk}</code>\n⭐<b>SPDEF:</b> <code>${result.stats.sp_def}</code> | ⭐<b>Rapidez:</b> <code>${result.stats.speed}</code>\n------------------------------------\n⭐<b>Total</b>= <code>${result.stats.total}</code> \n📅<b>Generación:</b> <code>${result.generation}</code>\n📝<b>Etapa de Evolución:</b> <code>${result.family.evolutionStage}</code> | <code>${result.family.evolutionLine[0]}</code>\n------------------------------------\n➕<b>Descripcion:</b> <code>${resp.text}</code>\n------------------------------------`,
          parse_mode: "HTML",
        });
      });
    })
    .catch(error); */
});

/*bot.onText(/\/marry/, function onEditableText(msg) {
  const usersId = msg.reply_to_message.from.first_name;
  const fromUser = msg.from.first_name;
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Aceptar',
            callback_data: 'aceptar'
          },
          {
            text: 'Rechazar',
            callback_data: 'rechazar'
          }
        ]
      ]
    }
  };
  bot.sendMessage(msg.from.id, `${fromUser} te han propuesto matrimonio`, opts);
});*/

/*bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  if (action === 'aceptar') {
    text = `pwp se casaron`;
  }
  if (action === 'rechazar') {
    text =`F`;
  }
  bot.editMessageText(text, opts);
});*/

bot.on("message", (msg) => {
  const userFrom = msg.from.first_name;
  var userId = msg.from.id;
  const chatId = msg.chat.id;
  var chatype = msg.chat.type;
  const admins = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "✅Resuelto",
            callback_data: "Resuelto",
          },
        ],
      ],
    },
    parse_mode: "HTML",
  };

  if (msg.text == "@admin") {
    bot.getChatAdministrators(chatId).then(function (users) {
      if (chatype == "supergroup") {
        string = "";
        idadmin = "";
        var creador = "";
        var titlecr = "";
        var idcreador = "";
        users.forEach((data) => {
          if (data.status == "creator") {
            creador += data.user.first_name;
            titlecr += data.custom_title;
            idcreador += data.user.id;
            if (titlecr == "undefined") {
              titlecr = "No establecido:(";
            }
          } else {
            idadmin = data.user.id;
            string +=
              `<a href="tg://user?id=${idadmin}">${data.user.first_name}</a>` +
              "  ";
          }
        });
        bot.sendMessage(
          chatId,
          `📵<b>¡ALERTA!</b> el usuario: <a href="tg://user?id=${userId}">${userFrom}</a>, <code>esta solicitando una intervención en el grupo:</code> <a href="tg://user?id=${idcreador}">${creador}</a>, ${string}`,
          admins
        );
      }
    });
  }
});
bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const from = callbackQuery.from.id;
  const nombre = callbackQuery.from.first_name;
  const adminsi = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  if (action === "Resuelto") {
    bot.getChatMember(msg.chat.id, from).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        text = `✅Intervención resuelta por ${nombre} en ${msg.chat.title}.`;
        bot.editMessageText(text, adminsi);
      } else {
        bot.sendMessage(
          msg.chat.id,
          `${nombre}, No tienes permiso para realizar esta acción:(`
        );
      }
    });
  }
});

/*bot.onText(/\/hola/, function (msg) {
  let chatId = msg.chat.id;
    let botReply = "Hola"
    bot.sendMessage(chatId ,botReply)
        .then((result) => { setTimeout(() => {
            bot.deleteMessage(chatId, result.message_id)
        }, 10 * 1000)})
        .catch(err => console.log(err))
});*/
bot.on("message", function (msg) {
  try {
    var chatId = msg.chat.id;
    var chatitle = msg.chat.title;
    var ma = Math.random();
    if( chatId != -1001476318529 &&
        chatId != -1001746624372
      ){

      if (msg.new_chat_members != undefined) {
        var nameNewMember = msg.new_chat_member.first_name;

        var frases = [
          `¡E-mail recibido: [${nameNewMember}](tg://user?id=${msg.from.id}) en el chat!`,
          `Bienvenido [${nameNewMember}](tg://user?id=${msg.from.id}), ahora tenemos una cita en el Genshin Impact.`,
          `¡Felicidades [${nameNewMember}](tg://user?id=${msg.from.id})!, Entraste al grupo VIP!`,
          `[${nameNewMember}](tg://user?id=${msg.from.id}), Bienvenido, ¿Te gusta el pan?`,
          `¡Bienvenido al chat [${nameNewMember}](tg://user?id=${msg.from.id})!, mi Casa, ahora es tú Casa.`,
          `En este grupo vivirás momentos divertidos [${nameNewMember}](tg://user?id=${msg.from.id}), ¡Bienvenido!`,
          `¿Qué hace una persona tan atractiva, divertida y original como [${nameNewMember}](tg://user?id=${msg.from.id}) aquí?`,
          `Estoy buscando dioses para una nueva religión y lo siento mucho, pero acabo de escogerte [${nameNewMember}](tg://user?id=${msg.from.id}).`,
          `Bienvenido [${nameNewMember}](tg://user?id=${msg.from.id}), puedes estar seguro que prefiero besar a mi perro que besarte a tí:(`,
          `¿Alguien podría presentarme a [${nameNewMember}](tg://user?id=${msg.from.id})?, todos dicen que es la unica persona que me quiere.`,
          `No tengo miedo de ir al infierno pues todos mis amigos estarán ahí, excepto [${nameNewMember}](tg://user?id=${msg.from.id}), él es un ángel.`,
          `Cuando ryuk muera para siempre, hasta ese día durará mi amor por ti [${nameNewMember}](tg://user?id=${msg.from.id}). ¡Bienvenido!`,
          `Los ojos sharingan sirven para predecir los movimientos y mis ojos para ver tú entrada al chat [${nameNewMember}](tg://user?id=${msg.from.id}).`,
          `Bienvenido [${nameNewMember}](tg://user?id=${msg.from.id}), espero que permanezcas en el chat hasta el final de One Piece.`,
          `Probablemente no eres de ningún anime pero eres mi favorito [${nameNewMember}](tg://user?id=${msg.from.id}), *Lo abraza*.`,
          `Si fueras un Pokémon, usaría mi única Pokébola para estar segura de que no escapes del chat [${nameNewMember}](tg://user?id=${msg.from.id}).`,
          `Ni todos los artículos de Wikipedia podrán definir lo felíz que me siento que estés aquí [${nameNewMember}](tg://user?id=${msg.from.id}).`,
          `[${nameNewMember}](tg://user?id=${msg.from.id}) Tú software es bueno... Pero tu hardware mejor.`,
          `¡[${nameNewMember}](tg://user?id=${msg.from.id}) tu llegada hizó, que digievolucionará mi corazón!`,
          `No somos calcetines, pero creó que haríamos un gran par [${nameNewMember}](tg://user?id=${msg.from.id}).`,
          `Bienvenido al chat [${nameNewMember}](tg://user?id=${msg.from.id}), ahora tenemos una cita en el Minecraft.`,
          `¿Es este el cielo?, porque se siente como si [${nameNewMember}](tg://user?id=${msg.from.id}) y yo nos dirigiéramos a un lugar mágico.`,
          `Bueno aquí estoy [${nameNewMember}](tg://user?id=${msg.from.id}). ¿Cuáles son tus otros dos deceos?.`,
          `Bienvenido majestad [${nameNewMember}](tg://user?id=${msg.from.id}). Por tí respetaría los semáforos del GTA.`,
          `[${nameNewMember}](tg://user?id=${msg.from.id}) eres seno al cuadrado y yo coseno al cuadrado, nos sumamos y ahora somos uno solo en este chat.`,
          `Estamos en presencia de una especia extinta: [${nameNewMember}](tg://user?id=${msg.from.id}).`,
          `¡Bienvenido a nuestras tierras [${nameNewMember}](tg://user?id=${msg.from.id})!`,
          `El es [${msg.from.first_name}](tg://user?id=${msg.from.id}): un otaku virgen que no se baña. Todos: ¡Bienvenido [${msg.from.first_name}](tg://user?id=${msg.from.id})!`,
          `¡Feliz cumpleaños [${nameNewMember}](tg://user?id=${msg.from.id})!`,
          `*Aplaude*, llegó el famoso [${nameNewMember}](tg://user?id=${msg.from.id}) al chat.`,
          `Cuenta la leyenda que [${nameNewMember}](tg://user?id=${msg.from.id}) y yo estaríamos en este chat hoy...`,
          `¿Sabías que acabas de unirte al mejor grupo de todos [${nameNewMember}](tg://user?id=${msg.from.id})?`,
          `Bienvenido [${nameNewMember}](tg://user?id=${msg.from.id}), ¿Te gusta la pizza?`,
          `El amor será ciego, pero hay que ver lo mucho que me alegra tu llegada [${nameNewMember}](tg://user?id=${msg.from.id}).`,
          `¿De que panaderia te escapaste biscochito [${nameNewMember}](tg://user?id=${msg.from.id})?`,
          `¡Estoy segura que en este chat harás grandes amigos [${nameNewMember}](tg://user?id=${msg.from.id})!`,
          `¿[${nameNewMember}](tg://user?id=${msg.from.id}) eres una pokébola?, ¡Porque capturaste mi atención en tú llegada a este Chat!`,
          `Uf, [${nameNewMember}](tg://user?id=${msg.from.id}) hizó entrada épica al chat.`,
          `[${nameNewMember}](tg://user?id=${msg.from.id}), el siguiente nombre para la Death Note.`,
          `¡[${nameNewMember}](tg://user?id=${msg.from.id}), te he esperado en el chat más que a la segunda temporada de High School Of The Dead!`,
          `Al fin nos encontramos [${nameNewMember}](tg://user?id=${msg.from.id}), te he buscado más que a las Esferas del Dragón.`,
          `No hay más Ki poderoso que la entrada de [${nameNewMember}](tg://user?id=${msg.from.id}) al Chat.`,
          `[${nameNewMember}](tg://user?id=${msg.from.id}) vamos a un lugar donde no haya nadie para que toques mi calva.`,
          `Bienvenido [${nameNewMember}](tg://user?id=${msg.from.id}) pórtate bien o te atacaré con mi tiburón, sólo advierto.`,
          `Entró [${nameNewMember}](tg://user?id=${msg.from.id}) al Chat como Naruto al Ramen.`,
        ];
        var flor = Math.floor(ma * frases.length);
        bot
          .sendMessage(chatId, frases[flor], {
            reply_to_message_id: msg.message_id,
            parse_mode: "Markdown",
          })
          .then((result) => {
            setTimeout(() => {
              bot.deleteMessage(chatId, result.message_id);
            }, 100 * 10000);
          })
          .catch((err) => console.log(err));
      } else if (msg.left_chat_member != undefined) {
        var nameLeftMembers = msg.left_chat_member.first_name;

        bot.sendMessage(
          chatId,
          `<a href="tg://user?id=${msg.from.id}">${nameLeftMembers}</a> abandonó la partida.`,
          {
            reply_to_message_id: msg.message_id,
            parse_mode: "HTML",
          }
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
});

/*bot.onText(/\/nanime/, function (msg) {
  try {
    request(
      `https://api.jikan.moe/v3/season/later`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            for (var i = 0; i < res.anime.length; i++) {
              console.log(res.anime[i].title);
              /*fs.writeFile("animes.txt", `${res.anime[i].title}`, function(err) {
                if (err) {
                  return console.log(err);
                }
                console.log("El archivo fue creado correctamente");
              });
            }
          }
        } catch (err) {
          console.log(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});*/

/*bot.onText(/^\/test/, function (msg) {
  var chatId = msg.chat.id;
  var replyId = msg.reply_to_message.from.id;
  var userId = msg.from.id;
  var replyName = msg.reply_to_message.from.first_name;
  var fromName = msg.from.first_name;
  var messageId = msg.message_id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  const banadmins = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "✅Desbanear",
            callback_data: "desbaneo",
          },
          {
            text: "❌Eliminar",
            callback_data: "eliminar",
          },
        ],
      ],
    },
    parse_mode: "HTML",
  };

  bot.getChatMember(chatId, userId).then(function (data) {
    if (data.status == "creator" || data.status == "administrator") {
      bot
        .kickChatMember(msg.chat.id, msg.reply_to_message.from.id)
        .then(function (result) {
          bot.sendMessage(
            chatId,
            `🔪<i>El usuario</i> <a href="tg://user?id=${replyId}">${replyName}</a> <i>ha sido eliminado del grupo, ¡Hasta la proxima!</i> \n\n🐬<b>ID:</b> (<code>${replyId}</code>)`,
            banadmins
          );
        });
    } else {
      bot.sendMessage(
        chatId,
        "Solo el creador y administradores pueden usar este comando:("
      );
    }
  });
});
bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const from = callbackQuery.from.id;
  const nombre = callbackQuery.from.first_name;
  const hola = callbackQuery.message.reply_to_message.from.id;
  const banadmins = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  if (action === "desbaneo") {
    console.log(callbackQuery.message);
    bot.getChatMember(msg.chat.id, from).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        bot.unbanChatMember(msg.chat.id, hola).then(function (result) {
          text = `✅Usuario desbaneado por ${nombre} en ${msg.chat.title}.`;
          bot.editMessageText(text, banadmins);
        });
      } else {
        bot.sendMessage(
          msg.chat.id,
          `${nombre}, No tienes permiso para realizar esta acción:(`
        );
      }
    });
  }
  if (action === "eliminar") {
    bot.getChatMember(msg.chat.id, from).then(function (data) {
      if (data.status == "creator" || data.status == "administrator") {
        text = "De acuerdo, este usuario no tiene posibilidad de regreso:(";
        bot.editMessageText(text, banadmins);
      } else {
        bot.sendMessage(
          msg.chat.id,
          `${nombre}, No tienes permiso para realizar esta acción:(`
        );
      }
    });
  }
});*/

bot.onText(/\/nasaphoto/, function (msg) {
  try {
    var chatid = msg.chat.id;
    request(
      `https://api.nasa.gov/planetary/apod?api_key=FWhjT0lt4Mac9KmiX0KIF5U0cnBPth5zauc4ag8v`,
      function (error, response, body) {
        try {
          if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            translate(res.explanation, { to: "es" }).then((resp) => {
              bot.sendMessage(
                chatid,
                `📷<b><i>Fotografía del día:</i></b> ${res.title}\n╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴\n📆<b><i>Fecha</i></b> <code>${res.date}</code> \n╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴ ╴\n🌎<b><i>Descripción</i></b> <i>${resp.text}</i><a href="${res.hdurl}">ㅤ</a>`,
                {
                  parse_mode: "HTML",
                }
              );
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
});
/* ***************************************/
let nombresArray = [];
let enlaces = [];

bot.onText(/\/stickers (.+)/, function (msg, match) {
  const buscar = match[1];
  (async () => {
    try{
      const response = await requestPromise(
        `https://combot.org/telegram/stickers?q=${buscar}`
      );
      const $ = cheerio.load(response);
      nombresArray = [];
      $(`div[class="sticker-pack__title"]`).each(function () {
        nombresArray.push($(this).text());
      });
      /*console.log(nombresArray);*/
      enlaces = [];
      $(`a[class="sticker-pack__btn"]`).each(function () {
        var link = $(this).attr("href");
        enlaces.push(link);
      });
      /*console.log(enlaces);*/
      /*Stickers iteraacion*/
      /*let cad = "";
      let i = 0;
      i++;
      for (let item of nombresArray) {
        cad += `${item}`;
      }
      bot.sendMessage(msg.chat.id, `<a href="${lk}">${cad}</a>`, {parse_mode: "HTML"});
      bot.sendMessage(msg.chat.id, `Resultados de stickers: \n${cad} `, {
        parse_mode: "Markdown",
      });*/
      bot.sendMessage(
        msg.chat.id,
        `🐋<i>Resultados de stickers para ${buscar}:</i>\n\n▫<a href="${enlaces[0]}">${nombresArray[0]}</a>\n▫<a href="${enlaces[1]}">${nombresArray[1]}</a> \n▫<a href="${enlaces[2]}">${nombresArray[2]}</a> \n▫<a href="${enlaces[3]}">${nombresArray[3]}</a> \n▫<a href="${enlaces[4]}">${nombresArray[4]}</a>\n▫<a href="${enlaces[5]}">${nombresArray[5]}</a>\n▫<a href="${enlaces[6]}">${nombresArray[6]}</a>\n▫<a href="${enlaces[7]}">${nombresArray[7]}</a>\n▫<a href="${enlaces[8]}">${nombresArray[8]}</a>\n▫<a href="${enlaces[9]}">${nombresArray[9]}</a>\n▫<a href="${enlaces[10]}">${nombresArray[10]}</a>\n▫<a href="${enlaces[11]}">${nombresArray[11]}</a>`,
        { parse_mode: "HTML" }
      );

    }catch(e){
      console.log(e)
    }
  })();
});

bot.onText(/^\/getsticker/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var photo = msg.reply_to_message.sticker.file_id;
  bot.getFileLink(photo).then(function (enlace) {
    convertapi
      .convert(
        "png",
        {
          File: `${enlace}`,
        },
        "webp"
      )
      .then(function (result) {
        bot.sendDocument(chatId, `${result.response.Files[0].Url}`, {
          caption: `🐋<i>Hecho por:</i> @gawrgurahelperbot.`,
          parse_mode: "HTML",
        });
      });
  });
});

bot.onText(/^\/idsticker/, function (msg) {
  var chatId = msg.chat.id;
  if (msg.reply_to_message == undefined) {
    return;
  }
  var idSticker = msg.reply_to_message.sticker.file_id;
  var nombreSticker = msg.reply_to_message.sticker.set_name;

  bot.sendMessage(
    chatId,
    `<b>🔓ID del sticker:</b> <code>${idSticker}</code>`,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Pack de Stickers Origen→",
              url: `https://t.me/addstickers/${nombreSticker}`,
            },
          ],
        ],
      },
    }
  );
});

/*bot.onText(/^\/ping/, function (msg) {
  var chatId = msg.chat.id;
  tcpp.ping({ address: 'gurabotnohe.herokuapp.com', port: 80 }, function(err, data) {
    console.log(data);
});
});*/

bot.onText(/\/ping/, function onEditableText(msg) {
  var chatId = msg.chat.id;
  bot
    .sendMessage(chatId, "<code>¡Ping!</code>", {
      parse_mode: "HTML",
    })
    .then(result => {
      tcpp.ping({ address: 'gurabotnohe.herokuapp.com', port: 80 }, function(err, data) {
        bot.editMessageText(`🏓 <code>¡Pong!</code> \n<code>${data.min}</code> <code>ms.</code>`, {
          chat_id: chatId,
          message_id: result.message_id, parse_mode: "HTML"
        });
    });
  
    });
});