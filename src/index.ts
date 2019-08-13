import { codes } from './lib/codes';

export * from './lib/codes';
export const isValidCode = (code: string): boolean =>
    Object.keys(codes).includes(code);
