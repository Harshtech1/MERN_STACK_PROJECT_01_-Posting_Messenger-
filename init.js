const mongoose = require("mongoose");
const Prompt = require("./Models/prompts");

main()
  .then(() => {
    console.log("Connected to MongoDB");

    // Save the prompt after successful connection
    let prompt1 = new Prompt({
      from: "John",
      to: "Jane",
      message: "Hello, how are you?",
      createdAt: new Date(),
    });

    prompt1
      .save()
      .then(() => {
        console.log("Prompt saved");
      })
      .catch((err) => {
        console.log("Error saving prompt:", err);
      });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err.message);
    console.log(
      "Please make sure MongoDB is running. You can start it by running PowerShell as Administrator and executing: net start MongoDB"
    );
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
}

let allprompt = [
  {
    from: "John",
    to: "Jane",
    message: "Hello, how are you?",
    createdAt: new Date(),
  },
  {
    from: "herr",
    to: "kathi",
    message: "Hello, how are you?",
    createdAt: new Date(),
  },
  {
    from: "rahul",
    to: "karan",
    message: "Hello, how are you?",
    createdAt: new Date(),
  },
];

Prompt.insertMany(allprompt)
  .then(() => {
    console.log("Prompts inserted");
  })
  .catch((err) => {
    console.log("Error inserting prompts:", err);
  });
