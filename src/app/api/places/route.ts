import { supabase } from "@/db";
import { API_URL } from "@/utils/envs";
import { NextResponse } from "next/server";
import { fetcher } from "@/app/api/my-fetch";

// export async function GET() {
//   const { data, error } = await supabase.from("places").select("*");
//   return NextResponse.json(data);
// }

export async function GET() {
  const places = await fetcher("/places");
  return NextResponse.json(places);
}
