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

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxPQnYyc3hyMStHaVhQdVpOQWl1S01Fb1BqZHRrTDRvQ0tBZWlKTlcyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSklDWkphZThpR3RSZlJSK0x3QmFPYXRFOXZyV3dBdzU4MUZlM3BLb2ltUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTXVkYmZybGVvVDlSNGU4QW1oT080MThpNlUvcXdpMU56ckVBdUNXMG5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGNzNqcW5EQk1kMUdNaTJnaDVIQzczY1MyRVh4TWhSQ0RLYnlTcGtTbFY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEb2hodDJDK2d4NFFCbmIxSFROdVJ6aFBpMEpBYnlQLzRBQUdWN1dsMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitXZHo2ckpJcDk2L2Y0YllLTHROUUIxNG91Rjk4di91cVFRRzhmbiswVkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE5xVzYwUGRMSzlROUlZUDV4b0hOa25IUWN3ak1yLy85dmNhbFYrc1BYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmh0UDNpZThkcjRISnRCY2pBR1ZGVGt1Vm5OVkwyaGNMeHZPcFlSZkFTUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkzbXlBVXFmcm1zMEFIWVd1ajArQVI0Nm9LUzZ4SUZPbm9zblBKTm92VWN3YW5UQ1JIMEthVzRhM01HZFZDVEFEMDdscGkySUQ2eVg1SjcrUlRQdWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiI5bDJTQnZOT2tHb0dJcTczWTlVOXRHZmlJUi9ZaDRVR0o4VCsvYkxyN3VRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3NTAwNjYzMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQUUxMkNEM0FFRDBGOTBFQzdBNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM3MTczMzEwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFR0cxVlNHUCIsIm1lIjp7ImlkIjoiMjYzNzc1MDA2NjMyOjMwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDE3OTQ4MzAwOTg2NDU6MzBAbGlkIiwibmFtZSI6Ik1vbmHinaTvuI/igI3wn5SlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMN0U4WXdHRUtiU3JMd0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkdmVJVHRGcEwwMjBha2cxMW1DV3BJRHJuVjMxTUxSejgvdXV3Z3MrYmljPSIsImFjY291bnRTaWduYXR1cmUiOiIvQVc1NUViQVZSb0NaNUlGaE16VkFpMjlDSE4rQkYyUmc1SVI3TVhDeHFZYXZNczErWFpOQ0oyRFBSNkZUanNLTDFZZUR5UlpLdHJsbmRTTjRZN0Fpdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibjQxekpONUZzSlZRMGFlbkYwSVVRb2FYZ3BYYXZCcUVvOGdGSlVvbkliaFVqWlFTQzA3cnYycm1Vd3ZaejNTa3R5OXQ3aENyOVdZZC85Tjl3elloalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3NzUwMDY2MzI6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGIzaUU3UmFTOU50R3BJTmRaZ2xxU0E2NTFkOVRDMGMvUDdyc0lMUG00biJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzcxNzM0ODksImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmNhIn0=", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
