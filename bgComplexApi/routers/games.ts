import express from "express";

import {
  createGame,
  deleteGame,
  getGame,
  getGames,
  updateGame,
} from "../controllers/gameControler";
import { verifyAdmin } from "../utils/tokenVeryfy";

const router = express.Router();

// CREATE

router.post("/", verifyAdmin, createGame);
// UPDATE

router.put("/:id", verifyAdmin, updateGame);

// DELETE

router.delete("/:id", verifyAdmin, deleteGame);

// GET

router.get("/:id", getGame);

// GET ALL

router.get("/", getGames);
export default router;
