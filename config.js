require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || ".", // Command prefix

    ownerName: process.env.OWNER_NAME || "Aashif", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "94768655794", // Your WhatsApp number

    mode: process.env.MODE || "public", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "srilanka", // Region

    botName: process.env.BOT_NAME || "mona", // Bot name

    exifPack: process.env.EXIF_PACK || "sticker by", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "mona", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Asia/karachi", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "available", // Bot presence status

    autoRead: process.env.AUTO_READ === "true", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "true", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
