import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/UserModel";
import { createError } from "../utils/error";

export const register = async (req: any, res: any, next: any) => {
  const hash = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(req.body.password, hash);

  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: passwordHash,
      isAdmin: req.body.isAdmin,
      userGames: req.body.userGames,
    });

    await newUser.save();
    res.status(200).send("new user created!");
  } catch (err) {
    next(err);
  }
};

export const login = async (req: any, res: any, next: any) => {
  try {
    const userLogin = await User.findOne({
      username: req.body.username,
    });

    if (!userLogin) return next(createError(404, "user not found"));

    const isUserPasswordMatch = await bcrypt.compare(
      req.body.password,
      userLogin.password ?? ""
    );

    if (!isUserPasswordMatch)
      return next(createError(401, "wrong password or username"));

    const token = jwt.sign(
      { id: userLogin._id, isAdmin: userLogin.isAdmin },
      process.env.JWT as string
    );

    res
      .cookie("acces_token", token, { httpOnly: true })
      .status(200)
      .json(userLogin);
  } catch (err) {
    next(err);
  }
};
