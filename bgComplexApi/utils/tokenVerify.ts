import jwt from "jsonwebtoken";
import { createError } from "./error";

export const verifyToken = (req: any, res: any, next: any, verifyUser: any) => {
  const token = req.cookies.acces_token;

  if (!token) return next(createError(401, "You're not authorized!"));

  jwt.verify(token, process.env.JWT as string, (err: any, user: any) => {
    if (err) return next(createError(401, "Token is not valid!"));

    req.user = user;
    next();
  });
};

export const verifyUser = (req: any, res: any, next: any) => {
  verifyToken(req, res, next, () => {
    req.user.id === req.params.id || req.user.isAdmin
      ? next()
      : next(createError(403, "You are not authorized"));
  });
};
export const verifyAdmin = (req: any, res: any, next: any) => {
  verifyToken(req, res, next, () => {
    req.user.isAdmin
      ? next()
      : next(createError(403, "You are not authorized"));
  });
};
