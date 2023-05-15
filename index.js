const dotenv = require("dotenv");

const { getEmailSubjectById, getListofEmails } = require("./services/email");
const { emailClassification } = require("./services/classification");

const QUERY = require("./db/queries");

const { dbConnect } = require("./utils/dbConnect");

const emailClassify = async (id) => {
  await dbConnect();
  const text = await getEmailSubjectById(id);
  console.log(text);
  const classify = await emailClassification(text);
  let data = await QUERY.Email.findEmail({ id });
  if (data.hasError === 2) {
    data = await QUERY.Email.createEmail({
      id,
      result: classify.result,
    });
  }

  console.log(data);

  return data;
};

// emailClassify("1881de51cff9c4c6");

// getListofEmails()
//   .then((data) => {
//     emailClassification(data[0]);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
