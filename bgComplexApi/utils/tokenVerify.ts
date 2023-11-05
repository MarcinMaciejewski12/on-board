import jwt from "jsonwebtoken";

export const tokenAuth = (req: any, res: any, next: any) => {
  const { JWT } = process.env;
  const userToken = req.headers.authorization;

  const transformedToken = userToken.replace("Bearer ", "");

  const decodedUser = jwt.verify(transformedToken, JWT as string);

  if (!decodedUser) {
    res.status(401);
    return;
  }
  req.decodedUser = decodedUser;
  next();
};
