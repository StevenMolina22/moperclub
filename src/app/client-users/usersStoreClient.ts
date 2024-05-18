import { create } from "zustand";
import { UserType } from "./useUsersClient";

type UserStoreContextType = {
  users: UserType[];
  setUsers: (users: UserType[]) => void;
};

const useUserStore = create<UserStoreContextType>((set) => ({
  users: [],
  setUsers: (users: UserType[]) => set({ users }),
}));

export default useUserStore;
