import { NextResponse } from "next/server";
import { fetcher } from "@/app/api/my-fetch";

export async function GET() {
  const places = await fetcher("/places");
  return NextResponse.json(places);
}
