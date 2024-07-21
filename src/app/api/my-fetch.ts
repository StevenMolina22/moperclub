const BASE_URL = "http://localhost:3000/api";

export function apiGET<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url).then((response) => response.json());
}
