import connectMongoDB from "../../../libs/mongodb";
import Partner from "../../../models/partner";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const partners = await Partner.find();
  return NextResponse.json(partners);
}

export async function getServerSideProps() {
  await connectMongoDB();
  const partners = await Partner.find();
  return {
    props: {
      partners: JSON.parse(JSON.stringify(partners)),
    },
    revalidate: 10, // Refresh every 10 seconds
  };
}
