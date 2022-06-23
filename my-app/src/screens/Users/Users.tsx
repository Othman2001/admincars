import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UsersTable from "../../components/UserTable/UsersTable";
import { useActions, useAppState } from "../../services/config";

export const Users: React.FC<{}> = () => {
  const {
    admin: { fetchUsers },
  } = useActions();
  const {
    admin: { users },
  } = useAppState();
  useEffect(() => {
    fetchUsers();
    console.log(users, "users");
  }, []);
  return (
    <Layout selectedKey="2">
      <>
        <h1> Users Table</h1>
        {users && <UsersTable users={users} />}
      </>
    </Layout>
  );
};
