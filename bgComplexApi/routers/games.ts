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
import { verifyAdmin, verifyUser } from "../utils/tokenVerify";

const router = express.Router();
router.use(cors());
// CREATE

router.post("/", verifyAdmin, createGame);
// UPDATE

router.put("/addUserGame", verifyUser, addGameToUserGames);
router.put("/:id", verifyAdmin, updateGame);

// DELETE

router.delete("/:id", verifyAdmin, deleteGame);

// GET
router.get("/userGames", verifyUser, getUserGames);
router.get("/:id", getGame);

// GET ALL

router.get("/", getGames);
export default router;
