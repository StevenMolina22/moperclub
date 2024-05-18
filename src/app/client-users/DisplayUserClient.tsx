"use client";
import useUsers, { UserType } from "@/app/client-users/useUsersClient";
import useUserStore from "@/app/client-users/usersStoreClient";

const DisplayUser = () => {
  useUsers(); // Fetch users and set them in the store context
  const { users } = useUserStore(); // get the context

  return (
    <>
      <h1 className="my-4 text-4xl font-bold">Users</h1>
      <div className="flex flex-wrap gap-4">
        {users.map((user: UserType) => (
          <div
            className="flex w-[400px] flex-col border border-black p-8"
            key={user.id}
          >
            <h2>Name: {user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}; 

export default DisplayUser;
