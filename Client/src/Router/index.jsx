import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Signin } from "@Pages/Signin";
import { Store } from "@Pages/Store";
import { Profil } from "@Pages/Profil";
import { Payment } from "@Pages/Payment";
import { Detail } from "@Pages/Detail";

export function Router({ children }) {
  return (
    <BrowserRouter>
      {children}

      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/connexion" element={<Signin />} />
        <Route path="/paiement" element={<Payment />} />
        <Route path="/:name" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
