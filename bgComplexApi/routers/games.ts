import cors from "cors";
import express from "express";
import {
  createGame,
  deleteGame,
  getGame,
  getGames,
  updateGame,
  userGames,
} from "../controllers/gameControler";
import { verifyAdmin } from "../utils/tokenVeryfy";

const router = express.Router();
router.use(cors());
// CREATE

router.post("/", verifyAdmin, createGame);
// UPDATE

router.put("/addUserGame", userGames);
router.put("/:id", verifyAdmin, updateGame);

// DELETE

router.delete("/:id", verifyAdmin, deleteGame);

// GET

router.get("/:id", getGame);

// GET ALL

router.get("/", getGames);
export default router;
