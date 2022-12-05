import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";
import { ShopContext } from "./Contexts/ShopContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <ShopContext>
          <App />
        </ShopContext>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);
