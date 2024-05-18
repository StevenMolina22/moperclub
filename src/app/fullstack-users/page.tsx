import DisplayUser from "./DisplayUsersFullstack";
import { UserType } from "./useUsersFullstack";
import axios from "axios";

const ComponentUserFullstack = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users: UserType[] = response.data;

  return (
    <div className="flex min-h-screen flex-col items-start p-24">
      <DisplayUser usersData={users} />
    </div>
  );
};

export default ComponentUserFullstack;
