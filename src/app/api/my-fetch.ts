import { BASE } from "@/utils/envs";

export async function fetcher<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(BASE + url);

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.log(
      `Fetch error for ${url}: ${error instanceof Error ? error.message : String(error)}`,
    );
    return null;
  }
}
