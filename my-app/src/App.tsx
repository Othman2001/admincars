import { Route, Routes } from "react-router-dom";
import { Users } from "./screens/Users/Users";
import "antd/dist/antd.css";
import Drivers from "./screens/Driver/Drivers";
import Workshops from "./screens/Wokrshops/Workshops";
import { AddUser } from "./screens/AddUser/AddUser";
import WorkshopsDetailsScreen from "./screens/WorkshopsDetails/WorkshopsDetailsScreen";
import { AddWorkshop } from "./screens/AddWorkshop/AddWorkshop";
import { useAppState } from "./services/config";
import { Login } from "./screens/Login/Login";

function App() {
  const {
    admin: { isAdmin },
  } = useAppState();
  return (
    <>
      {isAdmin ? (
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshops/add/:name" element={<AddWorkshop />} />
          <Route path="/workshops/:name" element={<WorkshopsDetailsScreen />} />
        </Routes>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
