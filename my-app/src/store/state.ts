import { User } from "firebase/auth";
import { brandsSchema } from "../brands";

interface IStoreState {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  didInitialize: boolean;
  error: string | any | null;
  workshops: any[] | null;
  brands: {
    id: string;
    name: string;
    imageUrl: string;
  }[];
  drivers:
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
  isAdmin: false,
  didInitialize: false,
  user: null,
  users: null,
  drivers: null,
  brands: brandsSchema,
  error: null,
  workshops: null,
};

export { state };
