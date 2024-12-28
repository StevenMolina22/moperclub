import { supabase } from "@/db";
import { API_URL } from "@/utils/envs";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetch(API_URL + "/events");
  return data;
}
