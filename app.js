const gmailAPIService = require("./services/gmailApi");

const getEmailLabels = async () => {
  const auth = await gmailAPIService.authorize();

  const val = await getEmailLabels.listLabels(auth);
};

const getListofEmails = async () => {
  const auth = await gmailAPIService.authorize();

  const val = await gmailAPIService.getMessageIdList(auth, 10);
};
