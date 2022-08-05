export const lerp = (from, to, n) => (1 - n) * from + n * to;

// eslint-disable-next-line no-promise-executor-return
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
