import Game from "../models/GamesModel";
import User from "../models/UserModel";

export const createGame = async (req: any, res: any, next: any) => {
  const newGames = new Game(req.body);

  try {
    const savedGames = await newGames.save();
    res.status(200).json(savedGames);
  } catch (err) {
    next(err);
  }
};

export const updateGame = async (req: any, res: any, next: any) => {
  try {
    const updatedGames = await Game.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedGames);
  } catch (err) {
    next(err);
  }
};

export const deleteGame = async (req: any, res: any, next: any) => {
  try {
    const userId = req.decodedUser.id;
    const user = await User.findById(userId);

    const userGames = user?.userGames;
  } catch (err) {
    console.log(err);
  }
  // try {
  //   await Game.findByIdAndDelete(req.params.id);
  //   res.status(200).json("Game deleted");
  // } catch (err) {
  //   next(err);
  // }
};

export const getGame = async (req: any, res: any, next: any) => {
  try {
    const game = await Game.findById(req.params.id);
    res.status(200).json(game);
  } catch (err) {
    next(err);
  }
};

export const addGameToUserGames = async (req: any, res: any, next: any) => {
  try {
    const gameId = req.body.id;
    const game = await Game.findById(gameId);

    const userId = req.decodedUser.id;
    const user = await User.findById(userId);
    const userGames = user?.userGames;

    if (!game) return res.status(404).json({ message: "game doesnt exist" });

    const userGamesIds = userGames?.map((game) => game._id.toString());

    if (!userGamesIds?.includes(gameId)) {
      userGames?.push(game);

      user?.save();
      res.status(200).send(true);
    } else {
      res.status(422).send(false);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUserGames = async (req: any, res: any) => {
  try {
    if (req.decodedUser) {
      const user = await User.findById(req.decodedUser.id);
      if (!user) return;

      res.status(200).json(user.userGames);
    } else {
      console.log("error");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getGames = async (req: any, res: any, next: any) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (err) {
    next(err);
  }
};
