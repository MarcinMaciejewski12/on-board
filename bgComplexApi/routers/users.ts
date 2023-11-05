import express from "express";
import { getGames } from "../controllers/gameControler";
import { deleteUser, getUser, updateUser } from "../controllers/userControler";
import { tokenAuth } from "../utils/tokenVerify";

const router = express.Router();

// UPDATE
router.put("/:id", tokenAuth, updateUser);

// DELETE
router.delete("/:id", tokenAuth, deleteUser);

// GET
router.get("/:id", tokenAuth, getUser);

// GET ALL
router.get("/", tokenAuth, getGames);

export default router;
