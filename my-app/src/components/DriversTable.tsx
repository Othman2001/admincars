import React, { useEffect } from "react";

import { useActions, useAppState } from "../services/config";

export const DriversTable = () => {
  const {
    admin: { fetchDrivers },
  } = useActions();
  const {
    admin: { drivers },
  } = useAppState();

  useEffect(() => {
    fetchDrivers();
    console.log(drivers, "drivers");
  }, [fetchDrivers]);
  return <div></div>;
};
