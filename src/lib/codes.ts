export enum codes {
    // DB Flags
    // Database error due to violation of duplicate constraint
    OBJECT_DUPLICATE = 'OBJECT_DUPLICATE',
    // Object matching query does not exist
    OBJECT_NOT_FOUND = 'OBJECT_NOT_FOUND',
    // Object in immutable state
    OBJECT_IMMUTABLE = 'OBJECT_IMMUTABLE',

    // Token Flags
    // Expiration time is passed
    TOKEN_EXPIRED = 'TOKEN_EXPIRED',
    // Token does not contain expected parts after decrypting
    TOKEN_MALFORMED = 'TOKEN_MALFORMED',
    // Refresh token is invalid
    INVALID_REFRESH_TOKEN = 'INVALID_REFRESH_TOKEN',
    // No token provided
    TOKEN_MISSING = 'TOKEN_MISSING',

    // Permissions Flags
    // User has insufficient permissions for the desired action
    ACCESS_DENIED = 'ACCESS_DENIED',
    // User input an invalid email or password
    INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',

    // Query Flags
    // Layers of query exceed maximum allowed limit
    QUERY_DEPTH_EXCEEDED = 'QUERY_DEPTH_EXCEEDED',
    // Calculated complexity exceeds the maximum allowed limit
    QUERY_COMPLEXITY_EXCEEDED = 'QUERY_COMPLEXITY_EXCEEDED',
    // At least one layer contains nodes exceeding the maximum allowed limit
    QUERY_BREADTH_EXCEEDED = 'QUERY_BREADTH_EXCEEDED',

    // User Input Flags
    // User input an empty list
    INPUT_LIST_EMPTY = 'INPUT_LIST_EMPTY',
    // User input a list without meeting minimum items threshold
    INPUT_LIST_MIN = 'INPUT_LIST_MIN',
    // User input a list and exceeded the maximum items threshold
    INPUT_LIST_MAX = 'INPUT_LIST_MAX',
    // User input invalid
    INPUT_INVALID = 'INPUT_INVALID',

    // Something went wrong
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',

    // The amount of data requested exceeds the allowable limit.
    MAX_PAYLOAD_EXCEEDED = 'MAX_PAYLOAD_EXCEEDED',

    // Service is temporarily unavailable due to maintenance
    UNDER_MAINTENANCE = 'UNDER_MAINTENANCE',

    // Too many requests
    REQUEST_LIMIT = 'REQUEST_LIMIT',
}

export const retryableCodes = [
    codes.UNDER_MAINTENANCE,
    codes.UNKNOWN_ERROR,
    codes.REQUEST_LIMIT,
];
