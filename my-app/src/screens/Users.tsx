import React from "react";
import Layout from "../components/Layout";
import UsersTable from "../components/UsersTable";

export const Users: React.FC<{}> = () => {
  return (
    <Layout>
      <>
        <UsersTable />
      </>
    </Layout>
  );
};
