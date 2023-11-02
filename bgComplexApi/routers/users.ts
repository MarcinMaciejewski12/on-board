import express from "express";
import { getGames } from "../controllers/gameControler";
import { deleteUser, getUser, updateUser } from "../controllers/userControler";
import { verifyAdmin, verifyUser } from "../utils/tokenVeryfy";

const router = express.Router();

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getGames);

export default router;
