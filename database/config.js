const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI).then((con) => {
    console.log(`DB connect successful HOST: ${con.connection.host}`);
  });
};

module.exports = connectDB;
