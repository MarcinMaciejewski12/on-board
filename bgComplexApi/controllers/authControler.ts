import bcrypt from "bcryptjs";
import { createError } from "../utils/error";
import UserModel from "../models/UserModel";

export const register = async (req: any, res: any, next: any) => {
  const hash = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(req.body.password, hash);

  try {
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: passwordHash,
    });

    await newUser.save();
    res.status(200).send("new user created!");
  } catch (err) {
    next(err);
  }
};

export const login = async (req: any, res: any, next: any) => {
  try {
    const userLogin = UserModel.findOne({ username: req.body.username });
    if (!userLogin) return next(createError(404, "user not found"));
    // const userPassword = bcrypt.compare(req.body.password, userLogin);
    // siemsiemsiem
    res.status(200).json(userLogin);
  } catch (err) {
    next(err);
  }
};
