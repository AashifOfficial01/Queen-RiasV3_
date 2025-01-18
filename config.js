require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || ".", // Command prefix

    ownerName: process.env.OWNER_NAME || "Aashif", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "94768655794", // Your WhatsApp number

    mode: process.env.MODE || "public", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "srilanka", // Region

    botName: process.env.BOT_NAME || "Mona", // Bot name

    exifPack: process.env.EXIF_PACK || "Sticker by", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "Mona", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Asia/karachi", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "available", // Bot presence status

    autoRead: process.env.AUTO_READ === "true", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "true", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0oxQ2thN2ZwYUFsSERrMlIzQ0Ztbml6blNYRnZBMmx4WCtSWVNjQXNGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVM2TEVRWGVrbnZWb2djNnpHVEhOV24zd3hYZis5elRreUFEZE9TVDFFYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TjA2cGVmWHd3TzJEdWJkRmpVb1FYdnEvdHNYL3JWZXExell0NlhualVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmU2Mvak9BbkFMRmJCdlBoWENTYk43OUg3cmxsSHlnZEhPNFBDZzR2UVJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HT0pONm9hdFBDODdoMFlQd1lsZTRnQ2thR2M5M2tSU2FjTjVMS2pTbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZvUmp5VmNjQkdVYUhNZDYzTGJabmVla3oxbmY1bk9BdDN4R2RZb2lGajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0pqNjBGQnREd2o3R1QvYk9TeW9CWGE4Yk41YStwNjhhbFJSWTdxcGwxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGhMdWF0bDZZQlhjeE0xRVJYbnhyL0Y2T0VpWmpHZmw5Y0tMMkt2aUMwdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBrMmhlSTlqaEJZNGYvZFJIRE12bUp0Wk5QZnM4RDBDRkpVbElHazdkTWdEZzc1Z2NycSsxVTlIQlVoY1BzMHRKRXZPbS8zOGlvbk5LTWJQUERXREJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJ6NlltbzJ2WFRrYWR2QUYrVTNUQS9maUJZNFpEMTluaS9OTEl4OTdoTXJrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIyVlMyV1FWWCIsIm1lIjp7ImlkIjoiMjYzNzc1MDA2NjMyOjI4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDE3OTQ4MzAwOTg2NDU6MjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLTzRoM2dRcHNHcXZBWVlDU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkdmVJVHRGcEwwMjBha2cxMW1DV3BJRHJuVjMxTUxSejgvdXV3Z3MrYmljPSIsImFjY291bnRTaWduYXR1cmUiOiJpV1IzRkcvb1F0QnNKNmNVTWlhN3FJRnlWQmhQb3dyQTM4c1hWcFM0L0w3eUprSTBnRCt1Ykdxb2V6c2UyTDM4dzhQdWcxZ0M2Z1JESGxTb2F6L1dpdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMnR2V2F4TVFBdm4vWnFOVGJRR0hta1JHN0xVMVRVaEtmdUV0R2hrUFNRT1dsYUkyL1Q5cC8yK1VhMmdxbThsK1dTR0xzeExwZWdhTDlyNFVjaUUzRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3NzUwMDY2MzI6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGIzaUU3UmFTOU50R3BJTmRaZ2xxU0E2NTFkOVRDMGMvUDdyc0lMUG00biJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzcxMzgzNTQsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQUlZIn0=", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
