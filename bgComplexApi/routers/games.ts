import express from "express";

import {
  createGame,
  deleteGame,
  getGame,
  getGames,
  updateGame,
} from "../controllers/gameControler";

const router = express.Router();

// CREATE

router.post("/", createGame);
// UPDATE

router.put("/:id", updateGame);

// DELETE

router.delete("/:id", deleteGame);

// GET

router.get("/:id", getGame);

// GET ALL

router.get("/", getGames);
export default router;
