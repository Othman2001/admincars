import { User } from "firebase/auth";
import { Action, AsyncAction } from "../services/config";

export const onInitializeOvermind: AsyncAction = async ({ state, effects }) => {
  await effects.admin.loadFirebaseUser(
    (user) => {
      state.admin.user = user;
      state.admin.didInitialize = true;
      state.admin.isAdmin = true;
    },
    () => {
      state.admin.didInitialize = true;
      state.admin.isAdmin = false;
    }
  );
};

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

export const fetchWorkshops: AsyncAction<{ name: string }> = async (
  { state, effects },
  { name }
) => {
  state.admin.loading = true;
  state.admin.workshops = await effects.admin.fetchWorkshops({ name });
  state.admin.loading = false;
};

export const setUser: Action<{ user: User }> = ({ state }, { user }) => {
  state.admin.user = user;
  state.admin.isAdmin = true;
};

export const signOut: AsyncAction = async ({ state, effects }) => {
  await effects.admin.signOut();
  state.admin.user = null;
};

export const createUser: AsyncAction<{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
}> = async (
  { state: { admin }, effects },
  { email, password, firstName, lastName, role }
) => {
  //   @ts-ignore
  await effects.admin
    .createUser(email, password, firstName, lastName, role)
    .then((res) => {
      console.log(res.data, "Res");
      window.location.reload();
    })
    .catch((error) => {
      admin.error = "there is an error , user is already created before";
    });
};
