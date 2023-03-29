const { getEmailSubjectById } = require("./services/email");
const { emailClassification } = require("./provider/chatGptApi");

emailClassification();
getEmailSubjectById();
