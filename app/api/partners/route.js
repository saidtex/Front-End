import connectMongoDB from "../../../libs/mongodb";
import Partner from "../../../models/partner";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Fetch partners from the database
    const partners = await Partner.find();

    // Prepare the response
    const response = NextResponse.json(partners);

    // Set cache control headers to prevent caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');

    return response;
  } catch (error) {
    // Handle errors
    console.error("Error fetching partners:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
