import app from "./app.js";
import connectDB from "./db/mongodb.connection.js";
import { PORT } from "./config/env.config.js";

connectDB()
  .then(() => {
    app.listen(PORT || 8080, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("unable to connect to the mongodb database..!", { error });
  });
