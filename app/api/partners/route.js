import connectMongoDB from "../../../libs/mongodb";
import Partner from "../../../models/partner";

const PartnersPage = ({ partners }) => {
  // Render your component or page with the fetched data
};

export async function getServerSideProps() {
  await connectMongoDB();
  const partners = await Partner.find();

  // Set CORS headers in the response
  return {
    props: {
      partners: JSON.parse(JSON.stringify(partners))
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  };
}

export default PartnersPage;
