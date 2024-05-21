import { connectMongoDB } from "../../../libs/mongodb";
import Partner from "../../../models/partner";

// Connect to MongoDB
await connectMongoDB();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const partners = await Partner.find();
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      return res.json(partners);
    } catch (error) {
      console.error("Error fetching partners:", error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
