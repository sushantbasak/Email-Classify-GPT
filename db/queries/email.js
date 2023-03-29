const { Email } = require("../schema");

const createEmail = async (data) => {
  try {
    const result = await Email.schema.create(data);

    if (result == null) return { result: null, hasError: 2 };

    const final = result.toJSON();

    return { result: final, hasError: 1 };
  } catch (e) {
    console.log(e);
    return { result: null, hasError: 0 };
  }
};

const findEmail = async (data) => {
  try {
    const result = await Email.schema.findOne(data);

    if (result == null) return { result: null, hasError: 2 };

    const final = result.toJSON();

    return { result: final, hasError: 1 };
  } catch (e) {
    console.log(e);
    return { result: null, hasError: 0 };
  }
};

module.exports = {
  createEmail,
  findEmail,
};
