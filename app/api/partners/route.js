import connectMongoDB from "../../../libs/mongodb";
import Partner from "../../../models/partner";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const partners = await Partner.find();
  return NextResponse.json( partners );
}
