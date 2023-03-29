const dotenv = require("dotenv");

const { getEmailSubjectById } = require("./services/email");
const { emailClassification } = require("./provider/chatGptApi");

const QUERY = require("./db/queries");

const { dbConnect } = require("./utils/dbConnect");

const emailClassify = async (id = "1872b0ec2715eb85") => {
  await dbConnect();
  const text = await getEmailSubjectById(id);
  const classify = await emailClassification(text);

  let data = await QUERY.Email.findEmail({ id });

  if (data.hasError === 2) {
    data = await QUERY.Email.createEmail({
      id,
      result: classify.result,
    });
    // console.log(classify);
  }

  console.log(data);
};

emailClassify();
