const app = require("./app");
const connectDB = require("./database/config");

require("dotenv").config();

// connect to db
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server running on PORT: ${process.env.PORT}`);
});
