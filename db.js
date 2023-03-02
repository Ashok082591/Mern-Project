//Import MongoDB Into Our Application
const mongoose = require("mongoose");

function connectDB() {
  mongoose.set("strictQuery", false);
  mongoose.connect(
    "mongodb+srv://TeluguTechSteps:OFv89CyLGbDmwiTb@cluster0.uhxwc.mongodb.net/RentalBikes-TTS",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successful");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connectio n  Error");
  });
}

connectDB();
module.exports = mongoose;
