const mongoose = require("mongoose");

exports.connectDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.3rpt8ou.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
  );
  console.log("Database connected successfully");
};
