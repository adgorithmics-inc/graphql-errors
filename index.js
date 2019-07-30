// DB Flags
// Database error due to violation of duplicate constraint
exports.OBJECT_DUPLICATE = 'OBJECT_DUPLICATE';
// Object matching query does not exist
exports.OBJECT_NOT_FOUND = 'OBJECT_NOT_FOUND';

// Token Flags
// Expiration time is passed
exports.TOKEN_EXPIRED = 'TOKEN_EXPIRED';
// Token does not contain expected parts after decrypting
exports.TOKEN_MALFORMED = 'TOKEN_MALFORMED';

// Permissions Flags
// User has insufficient permissions for the desired action
exports.ACCESS_DENIED = 'ACCESS_DENIED';
// Failed to authorize the user
exports.UNAUTHORIZED = 'UNAUTHORIZED';

// Query Flags
// Layers of query exceed maximum allowed limit
exports.QUERY_DEPTH_EXCEEDED = 'QUERY_DEPTH_EXCEEDED';
// Calculated complexity exceeds the maximum allowed limit
exports.QUERY_COMPLEXITY_EXCEEDED = 'QUERY_COMPLEXITY_EXCEEDED';
// At least one layer contains nodes exceeding the maximum allowed limit
exports.QUERY_BREADTH_EXCEEDED = 'QUERY_BREADTH_EXCEEDED';

// Mystery Flags
// New phone, who dis?
exports.UNKNOWN_ERROR = 'UKNOWN_ERROR';
