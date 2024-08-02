import { BASE } from "@/utils/envs";

export function fetcher<T>(url: string): Promise<T> {
  return fetch(BASE + url).then((response) => response.json());
}
