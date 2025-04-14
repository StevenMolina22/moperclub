import { NextResponse } from "next/server";
import { fetcher } from "@/app/api/my-fetch";

export async function GET() {
  const events = await fetcher("/events");
  return NextResponse.json(events);
}
