import app from "./app.js";
import connectDatabase from "./config/database.js";

//mongoDB
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port : ${process.env.PORT}`);
});
