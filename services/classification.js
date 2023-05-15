const chatGptApiProvider = require("../provider/chatGptApi");

const emailClassification = async (text) => {
  const result = await chatGptApiProvider.emailClassification(text);
  console.log(result);
  return result;
};

module.exports = { emailClassification };
