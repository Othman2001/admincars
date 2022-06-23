import { useEffect, useState } from "react";
import { Table } from "antd";
import Columns from "./Columns";
import "./table.css";

interface DataType {
  key: string;
  firstName: string;
  lastName: string;
  tags: string;
  phoneNumber: string | null;
}

export const DriversTable = ({
  drivers,
}: {
  drivers: [
    {
      id: string;
      firstName: string;
      email: string;
      lastName: string;
      role: string;
      phoneNumber: string;
    }
  ];
}) => {
  const [tableData, setData] = useState<DataType[] | null>();

  useEffect(() => {
    const data = [];
    if (drivers) {
      for (let i = 0; i < drivers.length; i++) {
        data.push({
          key: drivers[i].id,
          tags: drivers[i].role,
          phoneNumber: drivers[i]?.phoneNumber || null,
          firstName: drivers[i].firstName,
          lastName: drivers[i].lastName,
        });
      }
      console.log("renderd");
      setData(data);
      console.log(data, "data");
      console.log(drivers, "drivers");
    }
  }, []);
  return (
    <Table
      size={"large"}
      columns={Columns}
      scroll={{
        x: true,
      }}
      // @ts-ignore
      dataSource={tableData && tableData}
    />
  );
};
