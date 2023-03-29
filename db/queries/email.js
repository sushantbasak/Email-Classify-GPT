const { Email } = require("../schemas");

const createEmail = async (data) => {
  try {
    const result = await Email.schema.create(body);

    if (result == null) return { result: null, hasError: false };

    const final = result.toJSON();

    return { result: final, hasError: false };
  } catch (e) {
    console.log(e);
    return { result: null, hasError: true };
  }
};

const findEmail = async (data) => {
  try {
    const result = await Email.schema.findOne(body);

    if (result == null) return { result: null, hasError: false };

    const final = result.toJSON();

    return { result: final, hasError: false };
  } catch (e) {
    ErrorHandler.extractError(e);

    return { result: null, hasError: true };
  }
};

module.exports = {
  createEmail,
  findEmail,
};
