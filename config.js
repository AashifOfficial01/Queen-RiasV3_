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

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU0xc3FPY3BDUHVrRDlYdVh2bHFTVUVtUjFPcWJUL1pXdlllOXVTNEhGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHNVRXlSeVBFT0VqL3huVDFaNDB4Ujg1c1NvYlk2MkdrZDRmTm9wdE93OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSXRYRFFwQTZudTJKOVlCRHQxWm1JQ2ZhSGFPY2tRc3U5dkJINlV2cDBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpV2htMERtbk91UXpHS1JRVXpZTzJTT1JUY0NDZmhQY1lMODBHWkRaRkJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVObllnZGtRbXViaE5WeU5Jb3dTdnhhT2EzbDFabjc0dGp1YjljWmJnMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtTMGJwMkoxOE1LNWxCcFNNM3A0Qng4R3lTMGpyUDA3ZHYwK3dPTXJKRDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk81SExSeU9xSDVjZzB5bkVNRlpuVm5YelBCMWZKbi9vZitSdDZTdGoyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFlFMkFIcHROQlFjYUZaM3dpRzFIWDdDU0NBMWg3VktPcDJ6ZDNPb0dIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitPWUhzcEU2ZHMrcUFrUEFsS3pHTmUwWk8vVXp0MDQxSVFVMzJSUnJMT1dJSnR3TElxbGY3ZTNhaVhjeC9EUHpXUi8zd2FlQlFJZnZNcmttMWlLQkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6ImFpZCsxNE9Ebm9rbFUxRVJVSUdEMjZ5bHFUaXFDNTdnRU9ueGJiMVZuMW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjFEVkFTSzNOIiwibWUiOnsiaWQiOiIyNjM3NzUwMDY2MzI6MzFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI0MTc5NDgzMDA5ODY0NTozMUBsaWQiLCJuYW1lIjoiTW9uYeKdpO+4j+KAjfCflKUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w3RThZd0dFTXJQcmJ3R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImR2ZUlUdEZwTDAyMGFrZzExbUNXcElEcm5WMzFNTFJ6OC91dXdncytiaWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZLSmluK2VVbTRyczdWWmRkcWVLOG5RUnNFWWJkdGZJZHdQZHlwb0REQk5DaGdBNmdkMVZuMHdZWjEyRmlBWk9Tc05WeGovWmY2WXVpTm5zNXpjM2pnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKaVkzZXJqRFFRb2J5UGhhVHFBbGcxamptc1U4dUl0QXRVcWtVaXNCVlB5VmxCWkxQRGNqNDdqN0hFMkkvYnpnbEU5N0Joc1VTMzR6YXhPUk16LzlBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc3NTAwNjYzMjozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYYjNpRTdSYVM5TnRHcElOZFpnbHFTQTY1MWQ5VEMwYy9QN3JzSUxQbTRuIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNzE4OTMzNCwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCY2EifQ==", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
