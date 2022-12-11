import "@Assets/CSS/App.css";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "@Components/Navbar/Navbar";
import { Profil } from "@Pages/Profil";
import { Login } from "@Pages/Login";
import { Store } from "@Pages/Store";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/connexion" element={<Login />} />
      </Routes>
    </>
  );
}
