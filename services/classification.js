const chatGptApiProvider = require("../provider/chatGptApi");

const emailClassification = async (text) => {
  const result = await chatGptApiProvider.emailClassification(text);

  return result;
};

module.exports = { emailClassification };
