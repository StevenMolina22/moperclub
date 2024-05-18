import React from "react";
import DisplayUser from "./DisplayUserServer";

const ClientUsersPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-start p-24">
      <DisplayUser />
    </div>
  );
};

export default ClientUsersPage;
