import { useEffect } from "react";
import useUserStore from "./usersStoreClient";

// Data Type:
export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
};

// Custom Hook & Fetching:
const useUsers = () => {
  const { setUsers } = useUserStore();

  // Fetch users and set them in the store context:
  useEffect(() => {
    async function getUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      setUsers(users);
    };

    getUsers();
  }, [setUsers]);

  // return useUserStore(); // Makes it possible to access state from the hook
};

export default useUsers;
