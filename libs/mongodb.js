import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://saidtex:tyyU1bAXGOs2zx2u@cluster0.1mmbnkc.mongodb.net');
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;