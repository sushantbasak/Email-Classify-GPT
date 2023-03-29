const { Configuration, OpenAIApi } = require("openai");
const appSettings = require("../config");

const configuration = new Configuration({
  apiKey: appSettings.apiKey.chatGPT,
});

const { emailClassifyPrompt } = require("../utils/chatGptQuery");

const openai = new OpenAIApi(configuration);

const emailClassification = async (text) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: emailClassifyPrompt(text),
      temperature: 0.6,
    });

    return { result: completion.data.choices[0].text };
  } catch (e) {
    console.log(e);
    if (e.response) {
      const error = e.response.status + e.response.data;
      throw new Error(error);
    } else {
      throw new Error(`Error with OpenAI API request: ${e.message}`);
    }
  }
};

module.exports = { emailClassification };
