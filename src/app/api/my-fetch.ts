import { API_URL } from "@/envs";

export function apiGET<T>(url: string): Promise<T> {
  return fetch(API_URL + url).then((response) => response.json());
}
