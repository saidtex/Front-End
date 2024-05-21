// pages/index.js

import Hero1 from "../../components/partenaires.jsx";
import connectMongoDB from "../../../libs/mongodb";
import Partner from "../../../models/partner";

const HomePage = ({ initialGalleryItems }) => {
  return <Hero1 initialGalleryItems={initialGalleryItems} />;
};

export async function getServerSideProps() {
  await connectMongoDB();
  const partners = await Partner.find();

  const props = {
    initialGalleryItems: JSON.parse(JSON.stringify(partners))
  };

  // Set CORS headers in the response
  return {
    props,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  };
}

export default HomePage;
