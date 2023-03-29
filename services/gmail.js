const gmailAPIService = require("../provider/gmailApi");

const getEmailLabels = async () => {
  const auth = await gmailAPIService.authorize();

  const val = await getEmailLabels.listLabels(auth);
};

const getListofEmails = async () => {
  const auth = await gmailAPIService.authorize();

  const val = await gmailAPIService.getMessageIdList(auth, 10);
};

const getEmailSubjectById = async () => {
  const auth = await gmailAPIService.authorize();

  const val = await gmailAPIService.getEmailSubject(auth);
  console.log(val.data.snippet);
  return val.data.snippet;
};

module.exports = {
  getEmailLabels,
  getEmailSubjectById,
  getListofEmails,
};