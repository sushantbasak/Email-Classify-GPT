const gmailAPIService = require("./services/gmailApi");

const executeLogin = () => {
  gmailAPIService
    .authorize()
    .then(gmailAPIService.listLabels)
    .catch(console.error);
};

executeLogin();
