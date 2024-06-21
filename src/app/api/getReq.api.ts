import axios from "axios";

export async function getAllItems (endpoint: string) {
  const baseURL = "https://moperclub-server.vercel.app"
  // const baseURL = process.env.BACKEND_URL // uses vite env vars (adaptable to vercel or local)
  const response = await axios.get(baseURL+endpoint)
  return response.data
}