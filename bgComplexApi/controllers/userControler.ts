import User from "../models/UserModel";

export const updateUser = async (req: any, res: any, next: any) => {
  try {
    const updatedUsers = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedUsers);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req: any, res: any, next: any) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user deleted");
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req: any, res: any, next: any) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req: any, res: any, next: any) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const getUserFriends = async (req: any, res: any, next: any) => {};
