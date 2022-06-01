import { useEffect, useState } from "react";
import { Table, Tag, Space, Button, Spin } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { useActions, useAppState } from "../services/config";
import "./table.css";
import { Link } from "react-router-dom";

interface DataType {
  key: string;
  firstName: string;
  lastName: string;
  tags: string;
  phoneNumber: string | null;
}
const columns: ColumnsType<DataType> = [
  {
    title: "id",
    dataIndex: "key",
    key: "id",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "FirstName",
    dataIndex: "firstName",
    key: "firstName",
    responsive: ["sm"],
    render: (text) => <p>{text}</p>,
  },
  {
    title: "LastName",
    dataIndex: "lastName",
    key: "lastName",
    responsive: ["sm"],
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    responsive: ["md"],
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Role",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        <Tag key={tags}>{tags.toUpperCase()}</Tag>
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    responsive: ["lg"],
    render: (_, record) => (
      <Space size="middle">
        <>
          {record.tags === "user" || !record.phoneNumber ? (
            <Button
              onClick={() => {
                console.log(record, "this is record");
              }}
            >
              {" "}
              convert to winch driver{" "}
            </Button>
          ) : null}
        </>
      </Space>
    ),
  },
];

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
          <Button>Add user</Button>
        </Link>
      </div>

      {users ? (
        <Table
          size={"small"}
          columns={columns}
          // @ts-ignore
          dataSource={tableData && tableData}
        />
      ) : (
        <Spin />
      )}
    </>
  );
}
