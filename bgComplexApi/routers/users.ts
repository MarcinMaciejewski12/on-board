import express from "express";
import { getGames } from "../controllers/gameControler";
import { deleteUser, getUser, updateUser } from "../controllers/userControler";
import { verifyUser } from "../utils/tokenVerify";

const router = express.Router();

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyUser, getGames);

export default router;
