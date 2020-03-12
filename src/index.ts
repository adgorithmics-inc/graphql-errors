import { codes, retryableCodes } from './lib/codes';

export * from './lib/codes';
export const isValidCode = (code: string): boolean =>
    Object.keys(codes).includes(code);
export const isRetryableCode = (code: codes): boolean =>
    retryableCodes.includes(code);
