export const getBuzzTest = (payload: string): Promise<string> => {
  const res = new Promise<string>((res, rej) => {
    if (payload === '') {
      res(`${payload}`);
    } else {
      rej(new Error('Coinflip error'));
    }
  });

  return res;
};
