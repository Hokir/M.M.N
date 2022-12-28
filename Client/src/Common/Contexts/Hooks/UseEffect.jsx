import Items from "@Common/Models/ItemsModel";
import { ClearStorage } from "./ClearStorage";
import { post } from "@Common/API/Axios";

import { useEffect, useState } from "react";

export function ShopContextEffect() {
  // Get the items in the database
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const currentItems = await Items.getItems();
      setItems(currentItems.data);
    }
    getItems();
  }, [items]);
  return [items, setItems];
}

export function UserContextEffect() {
  // Check if there is a token, if so, verify and refresh it
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function VerifyToken() {
      const verification = await post("/admin/token", { data: { token } });

      if (verification.status === 200) {
        localStorage.setItem("token", verification.data.token);
        localStorage.setItem("user", JSON.stringify(verification.data.user));
        return setUser(verification.data.user);
      }

      ClearStorage();
      return setUser(null);
    }
    VerifyToken();
  }, []);

  return [user, setUser];
}
