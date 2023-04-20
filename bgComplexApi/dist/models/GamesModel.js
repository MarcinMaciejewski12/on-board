"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const GamesSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
        required: true,
    },
    difficulty: {
        type: Number,
        min: 1,
        max: 10,
    },
    playTime: {
        type: Number,
        min: 0.5,
        max: 10,
    },
    players: {
        type: Number,
        min: 1,
    },
    photos: {
        type: [String],
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
});
exports.default = mongoose_1.default.model("Game", GamesSchema);
