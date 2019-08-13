'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

(function (codes) {
    // DB Flags
    // Database error due to violation of duplicate constraint
    codes["OBJECT_DUPLICATE"] = "OBJECT_DUPLICATE";
    // Object matching query does not exist
    codes["OBJECT_NOT_FOUND"] = "OBJECT_NOT_FOUND";
    // Token Flags
    // Expiration time is passed
    codes["TOKEN_EXPIRED"] = "TOKEN_EXPIRED";
    // Token does not contain expected parts after decrypting
    codes["TOKEN_MALFORMED"] = "TOKEN_MALFORMED";
    // Permissions Flags
    // User has insufficient permissions for the desired action
    codes["ACCESS_DENIED"] = "ACCESS_DENIED";
    // User input an invalid email or password
    codes["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
    // Query Flags
    // Layers of query exceed maximum allowed limit
    codes["QUERY_DEPTH_EXCEEDED"] = "QUERY_DEPTH_EXCEEDED";
    // Calculated complexity exceeds the maximum allowed limit
    codes["QUERY_COMPLEXITY_EXCEEDED"] = "QUERY_COMPLEXITY_EXCEEDED";
    // At least one layer contains nodes exceeding the maximum allowed limit
    codes["QUERY_BREADTH_EXCEEDED"] = "QUERY_BREADTH_EXCEEDED";
    // User Input Flags
    // User input an empty list
    codes["INPUT_LIST_EMPTY"] = "INPUT_LIST_EMPTY";
    // User input a list without meeting minimum items threshold
    codes["INPUT_LIST_MIN"] = "INPUT_LIST_MIN";
    // User input a list and exceeded the maximum items threshold
    codes["INPUT_LIST_MAX"] = "INPUT_LIST_MAX";
    // User input invalid
    codes["INPUT_INVALID"] = "INPUT_INVALID";
    // Mystery Flags
    // New phone, who dis?
    codes["UNKNOWN_ERROR"] = "UKNOWN_ERROR";
})(exports.codes || (exports.codes = {}));

var isValidCode = function (code) {
    return Object.keys(exports.codes).includes(code);
};

exports.isValidCode = isValidCode;
