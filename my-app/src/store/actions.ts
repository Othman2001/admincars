import { AsyncAction } from "../services/config";

export const fetchUsers: AsyncAction = async ({ state, effects }) => {
  state.admin.loading = true;
  state.admin.users = await effects.admin.fetchUsers();
  state.admin.loading = false;
};

export const fetchDrivers: AsyncAction = async ({ state, effects }) => {
  state.admin.loading = true;
  state.admin.drivers = await effects.admin.fetchDrivers();
  state.admin.loading = false;
};
