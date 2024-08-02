import { supabase } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("events").select("*");
  return NextResponse.json(data);
}
