import mongoose from "mongoose";

const GamesSchema = new mongoose.Schema({
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

export default mongoose.model("Game", GamesSchema);
