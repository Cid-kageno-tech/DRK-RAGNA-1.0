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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5Ycm5oZzhpOXlKU0tYSzdURGo3UXRFb0M4UGU4VFI0YWxDZXl0eVMwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFHYUdjZlR1emcyZTdVZGozTS9KODR3L3c5c2RiYnA3aUl0eGlwa2lFYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTnk5cXloVUZET2xqenB2d1NTVUhQWExaSllyRmZJM1VvTEJIbE51N0Z3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMV0xVeHFMMURxaWZlM2ZSc29DMEo1MmlZNDRSUE1waTB2VVZDZkppODFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEQUJMRnVjR3lOWmF4dDVDaHhQTlVuMjJGSTFrMzhEbTU4NVdhU01TRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFzcFZNY3RDT1orU3Vld2h1YmU2QjJZNmdPTWxrTkhRSkJzUWo1UXcrQnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU056amo4VWZnSm1IcmVHMnM0QmtaMGxwSGR1N0NvaTRBaWtqVnBnV0hscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkJWWk80NmlNUWRrbS9GWk9raGZucUo5K1I3K0g3R3NyZFprL0phNGlHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0yNFpOV1NaaFgvdkpkaStHT2taRU51Tmt4SVJWSU1ySTZ5dWl0eStyT2g3MHRmalFHS1NnUmdHL2pqT1lnZGVHMU0ycjBLN25BVHVRQ3llbHl5eEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDAsImFkdlNlY3JldEtleSI6InNFek1hejFoZmJ5a1ltWVNMYldCN0ZBQk5jMWJUMTVIQ2phYlNUTEYyb0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlU4MEFoVENEU0R1Y0FmYUl5QnE4SnciLCJwaG9uZUlkIjoiNWQyNDhjYWUtZDZmZi00MGNiLTkzMDAtZjI3MjA5YzIyZTc0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldyUGR0WmFJcytpK2dIcVJHczVab0R3TGEwVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTN2lCakwyRlBEWExSVWl6bTViYlZ4U2FYR0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUtYRjlDWFIiLCJtZSI6eyJpZCI6IjIyODk2MjExMDgzOjlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o3MWxBZ1ExUFBhdVFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ill0bmlQdVdWdk95b1p4bU1JdmhqaE5HSFZqZXlDanZybGxxeUMvTWRqZ0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6InY0OXBBaHU0SUdaUFZiZFJUQzVpYUgrL09UZTh2TDQ4VEk4U2pXNXQzcTh4YnFTOTlSWS9PQ1ZsRjRtMlcvSjlGTyt5NC8wWlVxSmxJcGdxS3JjbkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMZk5qbC9nUTNWTFhKTVJxeW96OGpQVGdvQ0wvbTYyaVZHL3NTUGtnUm9jWHl6K3I5bmx5QndPMXQ5L1ZBZjNPN0g4eEdhY1ZYNk1IVDZrL1F1TjVEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyODk2MjExMDgzOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0xaNGo3bGxienNxR2NaakNMNFk0VFJoMVkzc2dvNzY1WmFzZ3Z6SFk0QyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTYzOTc5NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCM1oifQ=="
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
