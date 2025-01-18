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

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU82aVk0OHQzazB2azZOMUEvdFEvOU9vcTlYcjlFa3krV1EyRHdIMGttOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXhHdWlVK3pZN25Tdy9BUkJxci9ES0huN1pkN08xbjBuVlFTUFB3RHVsUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSTk2TU16MHZ6MTRwVXIyVjk4TXlBcCtsOTNEaXN4SUpJWjAwNkk3d1g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkK1Z5SkxSenVEVzRyOTNjSlVrYjBudm1MMUJtdXZtWUJMQndjZGdwczE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFYndna0RlaTllbUVPeFhIZ2VzbDEyQ2dBMnNuNzU1YWJYU0dOeTQ4Mms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdZbUtLdE9MSGo1TnQ3L21FZG5UcGRFOXMrcUVlRGhraW4rc0hLUTBPemM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkgrNHVVK0dDVFhmd2hBeHJlb21VY0FxZDhTUklPSENJTEtPSW9QTnZuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWtTWUdoM1lGeGdxaGk1M3Z3Wk9GOHlUclphNFpvMllrRUw3bCtnUkZFWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRCSkkvbmFhckl2YVB5RENpMFAxMWk5V1lSSGxnSllIbEhHS1NJSmRmSWczTnc5ZGNmZHE1NE9SYTdmTXR3TzF1TnFHMDF4bWJwY0hWa1BjZVVneGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJwYkhrN0dhNENyeStNNWloN1h1YU1SdzlZZnlWU0FaWkhyS0dIVFE1dk9ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc3NTAwNjYzMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTYwNjE4NkJDREQ1Nzk0RjhEQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM3MTk3MTQ0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBMkJaS0FDOCIsIm1lIjp7ImlkIjoiMjYzNzc1MDA2NjMyOjMzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDE3OTQ4MzAwOTg2NDU6MzNAbGlkIiwibmFtZSI6IlJlZCBsaWdodCBncmVlbiBMaWdodCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFNxaFJjUXg0eXV2QVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZHZlSVR0RnBMMDIwYWtnMTFtQ1dwSURyblYzMU1MUno4L3V1d2dzK2JpYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU1YvVWRtNkI5a0p5Zm1DeWIzTTBJYVgwZlZkWk9mUXlhbUJkM0dZc2FTSjIxUElVU1NPOVMzVVA2c0g4elVpSkN4Y3BkdGdDS0hqbjFHZy84VjR5aUE9PSIsImRldmljZVNpZ25hdHVyZSI6InF5NzNDR1h0R3NFRUdvaENRQnd5WDhFT2hjQ25GMktKaFV6cC9qd3B0VW5xa0Y5MVp6cWgwK0N4NDNldTRSZmlHMzJ5TmgvSDZ5Zlg1SnI0QkpFWWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzc1MDA2NjMyOjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhiM2lFN1JhUzlOdEdwSU5kWmdscVNBNjUxZDlUQzBjL1A3cnNJTFBtNG4ifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3MTk3MTM5LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUt6TCJ9", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
