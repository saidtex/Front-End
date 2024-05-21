import connectMongoDB from "../../../libs/mongodb";
import Partner from "../../../models/partner";

const PartnersPage = ({ partners }) => {
  // Render your component or page with the fetched data
};

export async function getServerSideProps() {
  try {
    await connectMongoDB();
    const partners = await Partner.find();

    return {
      props: {
        partners: JSON.parse(JSON.stringify(partners))
      },
      // No need to set CORS headers here
    };
  } catch (error) {
    console.error("Error fetching partners:", error);
    return {
      props: {
        partners: []
      },
    };
  }
}

export default PartnersPage;
