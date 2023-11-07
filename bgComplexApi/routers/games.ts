import cors from "cors";
import express from "express";
import {
  addGameToUserGames,
  createGame,
  deleteGame,
  getGame,
  getGames,
  getUserGames,
  updateGame,
} from "../controllers/gameControler";
import { tokenAuth } from "../utils/tokenVerify";

// import { verifyAdmin, verifyUser } from "../utils/tokenVerify";

const router = express.Router();
router.use(cors());
// CREATE

router.post("/", tokenAuth, createGame);
// UPDATE

router.put("/addUserGame", tokenAuth, addGameToUserGames);
router.put("/:id", tokenAuth, updateGame);

// DELETE

router.delete("/:id", tokenAuth, deleteGame);

// GET
router.get("/userGames", tokenAuth, getUserGames);
router.get("/:id", getGame);

// GET ALL

router.get("/", getGames);
export default router;
