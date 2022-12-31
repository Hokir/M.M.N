import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Sign } from "@Pages/Sign";
import { Store } from "@Pages/Store";
import { Profil } from "@Pages/Profil";
import { Payment } from "@Pages/Payment";

export function Router({ children }) {
  return (
    <BrowserRouter>
      {children}

      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/connexion" element={<Sign />} />
        <Route path="/paiement" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}
