interface IStoreState {
  loading: boolean;
  drivers: [];
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
      ]
    | null;
}

const state: IStoreState = {
  loading: false,
  users: null,
  drivers: [],
};

export { state };
