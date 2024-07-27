import { NextResponse } from "next/server";
import { products } from "./data";

export function GET() {
  return NextResponse.json(products)
}