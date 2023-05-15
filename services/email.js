const emailAPIProvider = require("../provider/gmailApi");

const getEmailLabels = async () => {
  const auth = await emailAPIProvider.authorize();

  const val = await getEmailLabels.listLabels(auth);
};

const getListofEmails = async () => {
  const auth = await emailAPIProvider.authorize();

  const val = await emailAPIProvider.getMessageIdList(auth, 10);
  // console.log(val);
  return val;
};

const getEmailSubjectById = async (id) => {
  const auth = await emailAPIProvider.authorize();

  const val = await emailAPIProvider.getEmailSubject(auth, id);
  return val.data.snippet;
};

module.exports = {
  getEmailLabels,
  getEmailSubjectById,
  getListofEmails,
};
