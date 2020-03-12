import { codes } from './lib/codes';
export * from './lib/codes';
export declare const isValidCode: (code: string) => boolean;
export declare const isRetryableCode: (code: codes) => boolean;
