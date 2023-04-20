"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gameControler_1 = require("../controllers/gameControler");
const router = express_1.default.Router();
// CREATE
router.post("/", gameControler_1.createGame);
// UPDATE
router.put("/:id", gameControler_1.updateGame);
// DELETE
router.delete("/:id", gameControler_1.deleteGame);
// GET
router.get("/:id", gameControler_1.getGame);
// GET ALL
router.get("/", gameControler_1.getGames);
exports.default = router;
