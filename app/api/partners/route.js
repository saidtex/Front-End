import nextConnect from 'next-connect';
import { connectMongoDB } from "../../../libs/mongodb";
import Partner from "../../../models/partner";

const handler = nextConnect();

// Connect to MongoDB
handler.use(connectMongoDB);

// Add CORS middleware
handler.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

// Define your API route handler
handler.get(async (req, res) => {
  try {
    const partners = await Partner.find();
    return res.json(partners);
  } catch (error) {
    console.error("Error fetching partners:", error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default handler;
