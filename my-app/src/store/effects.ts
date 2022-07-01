import axios from "axios";
import {
  getDocs,
  query,
  getFirestore,
  collection,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { Firebase } from "../firebase";
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  browserLocalPersistence,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { getApp } from "firebase/app";

export const loadFirebaseUser = async (
  onUserStateChanged: (user: User) => void,
  onNoUserFound: () => void
) => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    const db = getFirestore(Firebase);
    const adminCollection = doc(db, `admins/${user?.uid}`);
    getDoc(adminCollection).then((docSnap) => {
      if (docSnap.exists() && user) {
        onUserStateChanged(user);
      } else {
        onNoUserFound();
      }
    });
    // if (user) {
    //   onUserStateChanged(user);
    // } else {
    //   onNoUserFound();
    // }
  });
};

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

export const fetchBrands = async () => {
  const response = await axios.get(
    "http://localhost:5001/car-saviors/us-central1/fetchBrands"
  );
  return response.data;
};
export const fetchWorkshops = async ({ name }: { name: string }) => {
  const db = getFirestore(Firebase);
  const collectionWorkshop = collection(db, `carWorkshops/${name}/workshops`);
  const q = query(collectionWorkshop, where("brand", "==", name));
  let workshops: any[] = [];

  await getDocs(q).then((docs) => {
    if (docs.empty) {
    } else {
      docs.forEach((doc) => {
        console.log(doc.data());
        workshops.push(doc.data());
      });
    }
  });
  console.log(workshops, "workshops");
  return workshops;
};

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const auth = getAuth();
  return setPersistence(auth, browserLocalPersistence).then(async () => {
    return await signInWithEmailAndPassword(auth, email, password).then(
      async (result) => {
        return result.user;
      }
    );
  });
};

export const signOut = async () => {
  const app = getApp();
  const auth = getAuth(app);
  firebaseSignOut(auth);
};

export const createUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  role: string
) => {
  const user = await axios.post(
    "http://localhost:5001/car-saviors/us-central1/createUserAdmin",
    {
      email,
      password,
      firstName,
      lastName,
    }
  );
  return user;
};
