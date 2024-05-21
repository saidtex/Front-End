import connectMongoDB from "../../../libs/mongodb";
import Partner from "../../../models/partner";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const partners = await Partner.find();
  res.setHeader('Cache-Control', 'no-store');

  // Set Cache-Control header to prevent caching
  return NextResponse.json(partners, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate"
    }
  });
}
