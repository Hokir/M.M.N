import React from "react";
import ReactDOM from "react-dom/client";

import { Router } from "./Setup/Routes/Router";

// Contexts

import { UserContext } from "@Setup/Contexts/UserContext";
import { ShopContext } from "@Setup/Contexts/ShopContext";

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
