//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.website = process.env.GURL || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.devs = "233596780685";
global.sudo = process.env.SUDO || "233596780685";
global.owner = process.env.OWNER_NUMBER || "233596780685";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/23998e60fad313cd316fc.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dYMTh0RTg3ekppTmNiSDBVUi9yVndJeHFoYXU4WDRObU02Y29LeFBrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlg1WEtEKzlwc2QrekVzOGVFRjFUZmpFSzRLZTdUcDNZSVIzTDRUWDZBZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSEdTbDBuSFFHMnRtVWpiRkVhSDVEcEcwU0cvRzBmQ2dRV0RDUlNSUUZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOaWhVOUtnZ2ZWelpvTEt5RUhMRGwzS2MwVDhoQ2VxaktJeE9TOW1BTDJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDSWRrbngza2p0MkNnVVJFNEJ2OXd4R3drV0w1d0c2T1JrdGFjekEza2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iktkb1Nod2lQMXVucnMvNnNnSStWWGpIOVpjNWIzRUptV3dlQ0U1bUJTeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5Ec0JiQnhqNEdPNG5zajl3MnQ5NW1xU094WkE2c1RlR0Jza2VTSXZWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTR5dEVabmNraE0rOHBCL3RzQmY1d3NYYnN2d1czMGRWYXVBbk4vYkdDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRGMk9TaTJIc0FwNC9odXdWSEpQU01TdGdUWGJJMWovck43c01ESnpzdUppRU5mdENsanNrSkdVZTVIQzVqeEROSjBCK0lJcGk0ZjYweWplNE9WUEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJ2T3RDWUFaZGY0NlBZS0hEd0VlbkFPTkNNZC9La2JGN0pSUHNwRXNuNzBZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuNEgzQ1R5T1NOdXlhTk96STRza09RIiwicGhvbmVJZCI6IjllYzY4ZWRhLTQ1ZjYtNDFmNS1hNzg5LTllMmEyN2I0M2MyZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvRUVraExnWVA3MlJodmV1SnZ2ZDBFWFg4MUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1FiOFNvcEtJWkdnWUhZbXdCMVFkMVFPcVNzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJCR0tWOVFDIiwibWUiOnsiaWQiOiIyMzM1OTY3ODA2ODU6NjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT2RzIFRlY2hub2xvZ2llcyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGpYN01JQkVMakhyTFFHR0VBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWjN1MXJ2WDBVUFdZQ1hheXhsNGtVYnRjaURwbG5VU1hyYmd3SlBjQ01pUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOUZnSWFsbnZxSTFlOXJlaXNnaTZsVFc5MExLUWhKS3lrbXhma2ZESUJ5Qkg1TjZhYVl0N2FDN3puS09FNmRLWmU4QmRUU20yQ284MWZYN3I1M09hQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjVuYWtlVGR6dXZVck5RbXpCeVZTejA3ZDNwMGZJQnE3RWJON2NMdmQ1Rnl3M0djcW5QL3lEeFJ4MEFRVGFEYnczS2JsQi9lbURsaHNJWmZlZTFLdUNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTk2NzgwNjg1OjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldkN3RhNzE5RkQxbUFsMnNzWmVKRkc3WElnNlpaMUVsNjI0TUNUM0FqSWsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzOTQ2OTR9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "generated by ODS TECHNOLOGIES",
  author: process.env.PACK_AUTHER || "ODS TECHNOLOGIES",
  packname: process.env.PACK_NAME || "ODSTECH",
  botname: process.env.BOT_NAME || "ODS TECHNOLOGIES",
  ownername: process.env.OWNER_NAME || "ODS TECHNOLOGIES",
  errorChat: process.env.ERROR_CHAT || "Please kindly check up, you made a mistake with the command",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "ODS TECHNOLOGIES").toUpperCase(),
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
