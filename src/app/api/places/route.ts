import { supabase } from "@/db";
import { API_URL } from "@/utils/envs";
import { NextResponse } from "next/server";

// export async function GET() {
//   const { data, error } = await supabase.from("places").select("*");
//   return NextResponse.json(data);
// }

export async function GET() {
  const data = await fetch(API_URL + "/places");
  return data;
}
