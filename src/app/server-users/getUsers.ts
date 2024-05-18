export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export async function getUsers(): Promise<UserType[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}