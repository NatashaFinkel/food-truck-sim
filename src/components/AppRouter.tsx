import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Mission from "./Mission";
import PlayBoard from "./PlayBoard";

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/mission" replace />} />
        <Route path="/playboard" element={<PlayBoard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
