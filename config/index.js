require("dotenv").config();

const config = {
  development: {
    apiKey: {
      chatGPT: process.env.OPENAI_API_KEY,
    },
    mongoDb: process.env.DB_URL,
  },
};

const appSettings = { ...config[process.env.NODE_ENV || "development"] };

module.exports = appSettings;
