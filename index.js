const dotenv = require("dotenv");

const { getEmailSubjectById } = require("./services/email");
const { emailClassification } = require("./provider/chatGptApi");

dotenv.config();

const emailClassify = async () => {
  const text = await getEmailSubjectById();
  const classify = await emailClassification(text);

  //   console.log(classify);
};

emailClassify();
