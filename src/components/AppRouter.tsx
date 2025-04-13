import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Mission from "./Mission";

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
