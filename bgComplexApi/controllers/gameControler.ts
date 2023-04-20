import Game from "../models/GamesModel";

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
    await Game.findByIdAndDelete(req.params.id);
    res.status(200).json("Game deleted");
  } catch (err) {
    next(err);
  }
};

export const getGame = async (req: any, res: any, next: any) => {
  try {
    const game = await Game.findById(req.params.id);
    res.status(200).json(game);
  } catch (err) {
    next(err);
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
