import { Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import User from "./Pages/User";
import Login from "./Pages/Login";

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </div>
    </>
  );
}
