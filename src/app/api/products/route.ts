import { products } from "@/data/products";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(products);
}
