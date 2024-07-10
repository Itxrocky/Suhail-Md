const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꧁❤•༆HU$N么IN ♡¸.•*" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923165167688 ";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_14_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NixcbiAgICAgICAgMTkxLFxuICAgICAgICA4MixcbiAgICAgICAgNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTIzLFxuICAgICAgICA5MixcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE0LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NixcbiAgICAgICAgMjI1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdjUjBPQUR5SGJNWHJabE9qTjM1b0V5OHZVd2xrdnVOWHlUM3Z5OG5TbmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTY1MTY3Njg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2ODRFMjc0MDJCQ0VDNEQzNDIyMzIxQzM5RUU3OUQzRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MjA4ODZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQkFRdGhVVHhSZFNzTDJ6R0RvcDF2QVwiLFxuICBcInBob25lSWRcIjogXCIzNDhiMTBiMy1iMjE2LTQ0MmQtOWNjOC00YmRhN2ExY2FiZDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAyMDYsXG4gICAgICAxNDAsXG4gICAgICAyMDQsXG4gICAgICA2NyxcbiAgICAgIDQ4LFxuICAgICAgMjM0LFxuICAgICAgOSxcbiAgICAgIDE2LFxuICAgICAgMjEwLFxuICAgICAgMjI2LFxuICAgICAgNTQsXG4gICAgICAxNTgsXG4gICAgICAyNDAsXG4gICAgICAxMDksXG4gICAgICAyNDIsXG4gICAgICAxMTUsXG4gICAgICA1MSxcbiAgICAgIDI1MyxcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDE1MyxcbiAgICAgIDE1NSxcbiAgICAgIDE3OCxcbiAgICAgIDI1NCxcbiAgICAgIDYzLFxuICAgICAgMjIyLFxuICAgICAgNCxcbiAgICAgIDEwNCxcbiAgICAgIDIxOSxcbiAgICAgIDYyLFxuICAgICAgMTU2LFxuICAgICAgODYsXG4gICAgICAyMDQsXG4gICAgICA3MixcbiAgICAgIDU0LFxuICAgICAgMTAyLFxuICAgICAgMTYwLFxuICAgICAgMTU2LFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzlTWlFIV0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE2NTE2NzY4ODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjc2MjExNDQ4MzAwNTY6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLqp4HinL/wn4y44oSt4oSfw4XihKTCpfCThqngvKLgv5TgvoDgq4FcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQT1F6c29DRU0ydXVyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIngyWHBiR2s5UGxXRUpXQ0dSUEpoNE1ENzU3VFBmUVZTdGtxdUdROGExek09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidFdVb2FTNXJkT1lGTjV5ZWE4SGprYnRRMTNzOU5GSU5CdzE0ZTh4SUpGWUlQTVFwSlQxcFZ3blA3M2ZWbFRTYmpUV2tyOUcwOFdLSmdpdGwrQmRMQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieVZqaENISGtIbGVGUWNFUmZPYmFzVVdGaHRheGI3MXZmYytoMWQ4L011K2NjSStETHk2cHZsa0ZTd3lMWkFxUGVEbUhRWHg2VjQvdlNYa00wK1BsaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTY1MTY3Njg4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MjA4NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFMjZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUyNi5qc29uIjogIntcImtleURhdGFcIjpcIjMrYnAxN0pPTWxLYkw5cWNTWEQ0MzdiTU9rd280U0J0UUg0TitBdEtyOVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjkzMzQwMjc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MTk5MjA2NzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
