import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import gamesRoute from "./routers/games";
import usersRoute from "./routers/users";
import authRoute from "./routers/auth";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO as string);
    console.log("connected to mongo");
  } catch (error) {
    throw error;
  }
};

// middlewares
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/games", gamesRoute);
app.use("/api/users", usersRoute);

app.use((err: any, req: any, res: any, next: any) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Server started on port 8800");
});
