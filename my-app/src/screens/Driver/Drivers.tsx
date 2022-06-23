import { useEffect } from "react";
import { DriversTable } from "../../components/DriverTable/DriversTable";
import LayoutComponent from "../../components/Layout/Layout";
import { useActions, useAppState } from "../../services/config";

export default function Drivers() {
  const {
    admin: { fetchDrivers },
  } = useActions();
  const {
    admin: { drivers },
  } = useAppState();
  useEffect(() => {
    fetchDrivers();
  }, []);
  return (
    <>
      <LayoutComponent selectedKey="3">
        <>
          <h1> Drivers table </h1>
          {drivers ? <DriversTable drivers={drivers && drivers} /> : null}
        </>
      </LayoutComponent>
    </>
  );
}
