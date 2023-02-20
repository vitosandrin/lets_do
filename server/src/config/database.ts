import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
dotenv.config();

const { MONGO_HOST ,MONGO_DATABASE, MONGO_PASS, MONGO_USER } = process.env;

const MONGO_URI =`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DATABASE}`;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("Mongo connected"))
  .catch(() => console.log("Error to connect Mongo"));

export default mongoose;
