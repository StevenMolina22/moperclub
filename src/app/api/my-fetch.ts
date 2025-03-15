import { BASE } from "@/utils/envs";

export function fetcher<T>(url: string): Promise<T | null> {
  return fetch(BASE + url)
    .then((response) => {
      if (!response.ok) {
        return null;
      }
      return response.json() as Promise<T>;
    })
    .catch((error) => {
      console.log(`Fetch error for ${url}: ${error.message}`);
      return null;
    });
}
