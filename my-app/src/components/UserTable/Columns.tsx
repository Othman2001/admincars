import { Button, Space, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import { setDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { Firebase } from "../../firebase";

export interface DataType {
  key: string;
  firstName: string;
  lastName: string;
  tags: string;
  phoneNumber: string | null;
}

const Columns: ColumnsType<DataType> = [
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
    render: (text) => <p>{text}</p>,
  },
  {
    title: "LastName",
    dataIndex: "lastName",
    key: "lastName",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
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
    render: (_, record) => (
      <Space size="middle">
        <>
          {record.tags === "user" || !record.phoneNumber ? (
            <Button
              onClick={() => {
                const db = getFirestore(Firebase);
                const userRef = doc(db, `users/${record.key}`);
                const winchDriver = doc(db, `winchDrivers/${record.key}`);
                setDoc(winchDriver, {
                  availability: false,
                  distance: 0,
                  price: 0,
                  role: "winch-driver",
                  firstName: record.firstName,
                  lastName: record.lastName,
                  phoneNumber: record.phoneNumber,
                  geopoint: {
                    latitude: 30.2212,
                    longitude: 31.2212,
                  },
                  id: record.key,
                });
                updateDoc(userRef, {
                  role: "driver",
                }).then((res) => {
                  // eslint-disable-next-line no-restricted-globals
                  location.reload();
                });
              }}
            >
              convert to winch driver{" "}
            </Button>
          ) : null}
        </>
      </Space>
    ),
  },
];

export default Columns;
