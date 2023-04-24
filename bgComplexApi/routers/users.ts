import express from "express";
import { updateUser, deleteUser, getUser } from "../controllers/userControler";
import { getGames } from "../controllers/gameControler";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/tokenVeryfy";

const router = express.Router();

// router.get("/checkauth", verifyToken, (req: any, res: any, next: any) => {
//   res.send("hello user you are logged in!");
// });
// router.get("/checkuser/:id", verifyUser, (req: any, res: any, next) => {
//   res.send("hello user you are logged in and you can delete this account!");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req: any, res: any, next) => {
//   res.send("hello Admin you are logged in and you can do what you want!");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getGames);

export default router;
