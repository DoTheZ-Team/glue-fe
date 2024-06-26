declare const global: unknown;

export const isServer = () => {
  return typeof window === 'undefined' && typeof global !== 'undefined';
};

export const isClient = () => {
  return !isServer();
};
