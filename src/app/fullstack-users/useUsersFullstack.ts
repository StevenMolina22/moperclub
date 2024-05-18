import { create } from "zustand";
import { useEffect } from "react";

// Data Type:
export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
};

// Context Type:
type UserStoreContextType = {
  users: UserType[];
  setUsers: (users: UserType[]) => void;
};

// Context Store:
const useUserStore = create<UserStoreContextType>((set) => ({
  users: [],
  setUsers: (users: UserType[]) => set({ users }),
}));

// Custom Hook:
export const useUsers = ( users: UserType[] ) => {
  const { setUsers } = useUserStore();

  // Set users to the context:  
  useEffect(() => {
    setUsers(users);
  }, [users, setUsers]);
}

export default useUserStore;
