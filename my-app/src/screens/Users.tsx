import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import UsersTable from "../components/UsersTable";
import { useActions, useAppState } from "../services/config";

export const Users: React.FC<{}> = () => {
  const {
    admin: { fetchUsers },
  } = useActions();
  const {
    admin: { users, loading },
  } = useAppState();
  useEffect(() => {
    fetchUsers();
    console.log(users, "users");
  }, []);
  return (
    <Layout>
      <>{users && <UsersTable users={users} />}</>
    </Layout>
  );
};
