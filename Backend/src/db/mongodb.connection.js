import mongoose from "mongoose";
import { DB_NAME, MONGODB_URI_ATLAS } from "../config/env.config.js";
import { MONGODB_URI } from "../config/env.config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    console.log("- - - - - Mongodb connected successfully - - - - - - - ");
  } catch (error) {
    console.log("- - - - - - Mongodb connection failed - - - - - - - - -");
    process.exit(1);
  }
};

export default connectDB;
