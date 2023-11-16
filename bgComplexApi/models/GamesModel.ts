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
    type: String,
  },
  players: {
    type: String,
  },
  photos: {
    type: [String],
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  scoreboardItems: {
    type: [String],
  },
});

export default mongoose.model("Game", GamesSchema);
