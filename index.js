const dotenv = require("dotenv");

const { getEmailSubjectById } = require("./services/email");
const { emailClassification } = require("./provider/chatGptApi");

const { dbConnect } = require("./utils/dbConnect");

// const emailClassify = async () => {
//   // await dbConnect();
//   const text = await getEmailSubjectById();
//   const classify = await emailClassification(text);

//   console.log(classify);
// };

// emailClassify();

async function func() {
  await dbConnect();
}

func();
