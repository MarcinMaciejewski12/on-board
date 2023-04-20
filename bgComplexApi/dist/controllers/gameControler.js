"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGames = exports.getGame = exports.deleteGame = exports.updateGame = exports.createGame = void 0;
const GamesModel_1 = __importDefault(require("../models/GamesModel"));
const createGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newGames = new GamesModel_1.default(req.body);
    try {
        const savedGames = yield newGames.save();
        res.status(200).json(savedGames);
    }
    catch (err) {
        next(err);
    }
});
exports.createGame = createGame;
const updateGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedGames = yield GamesModel_1.default.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json(updatedGames);
    }
    catch (err) {
        next(err);
    }
});
exports.updateGame = updateGame;
const deleteGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield GamesModel_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json("Game deleted");
    }
    catch (err) {
        next(err);
    }
});
exports.deleteGame = deleteGame;
const getGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const game = yield GamesModel_1.default.findById(req.params.id);
        res.status(200).json(game);
    }
    catch (err) {
        next(err);
    }
});
exports.getGame = getGame;
const getGames = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield GamesModel_1.default.find();
        res.status(200).json(games);
    }
    catch (err) {
        next(err);
    }
});
exports.getGames = getGames;
