import React from "react";
import ReactDOM from "react-dom/client";

//Contexts

import { UserContext } from "@Common/Contexts/UserContext";
import { ShopContext } from "@Common/Contexts/ShopContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserContext>
      <ShopContext>
        <App />
      </ShopContext>
    </UserContext>
  </React.StrictMode>
);
