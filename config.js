//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/+22871394585 , https://wa.me/+22871394585";
global.sudo = process.env.SUDO || "+22871394585";
global.owner = process.env.OWNER_NUMBER || "+22871394585";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhFVlcxQis4YmY0WEVYMnd6WlNwclg0SUM3cTkyQlBiNXowUDNvVk8ycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Q1SFJHc2JrNDVTcmtmWWRLY2JTS1A2TXI4OUdDN3dOTTdQUWcxVnN4TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQy91SDUzQityRGE2YnBOTklUTkphMDBwaERsRUNjZnBRYlo0OFhCQjFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIem5GSEd2Ylp0R2ZKdVlKQzhydHd6alErZzBUL2tKNklFK0RRaFpZQlNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhMbDBVeFVPaFZLd013OElSdUozL1I3eThoUWxBMVRyRHRIYVhBb0d5MEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNRNCs0U0lnUnVycyt6OGR2TnRpL1hMTGtYN2xpbFR6ZWE1bkdhUlRFRXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5iSmN1N2N0Q1BET0pmQ05aTC8yV1lBRCt5Y1p6QWh2b3JYM2tIaGlFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWRhek9OWXFRLzg3OVJPbWdVL3MxaEtaMk5IVzFIa0ZPOFVQbTdPRVlEVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklTRWY3a2Q0by9mQTJ2WThWQlN0cEl5eTAvakZwR3kybVFOcFpqMWlKUitZUmtZbmtIOFFJY3dEZmpxUytoUjFKVml3dUtCaEJuTGkrYUlFY0M2L0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJzYWI2VDlqeHM3RkdxRWZ3UnNQeHdCZURZZEQzc2w0S0x6U3k5TUp2WHVnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyWW56cUNVZFJkT21mUnVzYmRfNmZ3IiwicGhvbmVJZCI6Ijg3YTI4YjQ1LTM3YjMtNDE1Ni05ZTEzLTdhMTdhZDJkMjU4YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrYkJlam42eU9YVXdnSGtyZkNGRzIyYS81Y289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnhENm8rdFpZZFNQT3ZqZ2FJa3A5NFBmdnRrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZFVjdTUzhXIiwibWUiOnsiaWQiOiIyMjg3MTM5NDU4NTo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkILwnZCI8J2QgyDwnZCK8J2QgPCdkIbwnZCE8J2QjfCdkI4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ042RHV1MEVFTU9aczdvR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Img4TjBhZnpkeGFSQmVIQW5yT2hFeEFjMXhqVnYrV0llWitOZlJCZ0FaMTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFkNDNjUGtoM2JzK2tzR2RhbVBuOWxTM2dpT3lnUisxamtkc0JjVzBINnNmSG04VDNmQm9ST1o4Rk0zU3JYZEdWSGt3Unl0WU1PaVpSdjI0a1kvT0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtaFlDL0x6K2RmL3hBbnQzOEcxaUlNSWcrTVJFdDRVMzhuL3ArQnVncytjR0xzVE1NR2ZqSllrRmJIUVU2UzlXUldTVkRsU052QTE5SnJlUjVvUWNBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyODcxMzk0NTg1OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWZEZEduODNjV2tRWGh3SjZ6b1JNUUhOY1kxYi9saUhtZmpYMFFZQUdkZiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzA4NjQxNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPaFUifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "¥",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ミ★сіↁ™каБэио™★彡`",
  author: process.env.PACK_AUTHER || " 𝙎dw",
  packname: process.env.PACK_NAME || "░▒▓█►─═𝐂ᴵᴰ ᴷᴬᴳᴱᴺᴼ ═─◄█▓▒░",
  botname: process.env.BOT_NAME || "ミ★ᴀ̸ᴛ̸ᴏ̸ᴍ̸ɪ̸ᴄ̸︵❻❾★彡",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑ミ★ˢʰᵃᵈᵒʷ™★彡🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
