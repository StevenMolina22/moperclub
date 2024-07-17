import { supabase } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("place").select("*");
  console.log("data is: ", data);
  return NextResponse.json(data);
}
