import { Button, Space } from "antd";
import { ColumnsType } from "antd/lib/table";
import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { Firebase } from "../../firebase";

interface DataType {
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
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    render: (text) => <p>{text}</p>,
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <>
          <Button
            danger
            onClick={() => {
              const db = getFirestore(Firebase);
              const driverRef = doc(db, `winchDrivers/${record.key}`);
              const userRef = doc(db, `users/${record.key}`);
              deleteDoc(driverRef);
              updateDoc(userRef, {
                role: "user",
              })
                .then((res) => {
                  console.log("res");
                  // eslint-disable-next-line no-restricted-globals
                  location.reload();
                })
                .catch((error) => {
                  alert("error");
                });
            }}
          >
            Remove
          </Button>
        </>
      </Space>
    ),
  },
];

export default Columns;
