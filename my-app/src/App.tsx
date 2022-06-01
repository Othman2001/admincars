import { Provider } from "overmind-react";
import { overmind } from "./services/config";
import { Route, Routes } from "react-router-dom";
import { Users } from "./screens/Users";
import "antd/dist/antd.css";
import { Dashboard } from "./screens/Dashboard";
import Drivers from "./screens/Drivers";
import Workshops from "./screens/Workshops";

function App() {
  return (
    <Provider value={overmind}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
    </Provider>
  );
}

export default App;
