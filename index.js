exports.codes = require("./lib/codes");

exports.isValidCode = code => Object.keys(exports.codes).includes(code);
