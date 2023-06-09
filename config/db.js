const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(
    `Connected to mongodDB : ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
