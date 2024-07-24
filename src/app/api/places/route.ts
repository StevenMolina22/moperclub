import { supabase } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("place").select("*");
  return NextResponse.json(data);
}
