import React from "react";
import ReactDOM from "react-dom/client";

import { Router } from "@Common/Routes/Router";

// Contexts

import { UserContext } from "@Common/Contexts/UserContext";
import { ShopContext } from "@Common/Contexts/ShopContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <UserContext>
        <ShopContext>
          <App />
        </ShopContext>
      </UserContext>
    </Router>
  </React.StrictMode>
);
