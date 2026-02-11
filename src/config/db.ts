import mongoose from "mongoose";
import colors from "colors";

export const connex = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.CONNECTION_STR);

    const url = `${connection.host}:${connection.port}`;
    console.log(colors.cyan.bold("Mongo conectado en :" + url));
  } catch (error) {
    console.log(colors.bgRed.white.bold("Error: " + error.message));
    process.exit(1);
  }
};
