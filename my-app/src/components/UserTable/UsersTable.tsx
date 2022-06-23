/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import { Table, Spin, Button } from "antd";
import { useActions } from "../../services/config";
import "./table.css";
import Column, { DataType } from "./Columns";
import { Link } from "react-router-dom";

export default function UsersTable({
  users,
}: {
  users:
    | [
        {
          id: string;
          firstName: string;
          email: string;
          lastName: string;
          role: string;
          phoneNumber: string;
        }
      ];
}) {
  const [tableData, setData] = useState<DataType[] | null>();

  const {
    admin: { fetchUsers },
  } = useActions();
  useEffect(() => {
    fetchUsers();
    const data = [];

    for (let i = 0; i < users.length; i++) {
      data.push({
        key: users[i].id,
        tags: users[i].role,
        phoneNumber: users[i]?.phoneNumber || null,
        firstName: users[i].firstName,
        lastName: users[i].lastName,
      });
    }
    setData(data);
    console.log(users, "table");
  }, []);

  return (
    <>
      <div className="right-button">
        <Link to="/users/add">
          <Button> Add User</Button>
        </Link>
      </div>

      {users ? (
        <Table
          scroll={{
            x: true,
          }}
          size={"large"}
          columns={Column}
          // @ts-ignore
          dataSource={tableData && tableData}
        />
      ) : (
        <Spin />
      )}
    </>
  );
}
