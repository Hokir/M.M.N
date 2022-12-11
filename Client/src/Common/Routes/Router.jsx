import { Routes, Route, BrowserRouter } from "react-router-dom";

// Pages

import { Store } from "@Pages/Store/Store";
import { Profil } from "@Pages/Profil/Profil";
import { Login } from "@Pages/Login/Login";
import { Payment } from "@Pages/Payment/Payment";

export function Router({ children }) {
  return (
    <BrowserRouter>
      {children}

      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/paiement" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}
