export const createError = (status: any, message: string) => {
  const err = new Error();
  err.message = message;
  err.name = status;
  return err;
};
