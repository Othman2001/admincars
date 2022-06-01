import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get(
    "http://localhost:5001/car-saviors/us-central1/fetchUsers"
  );
  return response.data;
};

export const fetchDrivers = async () => {
  const response = await axios.get(
    "http://localhost:5001/car-saviors/us-central1/fetchDriversAdmin"
  );
  return response.data.drivers;
};
