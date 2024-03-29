import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    userGames: [{}],
    userFriends: [{}],
    gamesPlayed: [{}],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
