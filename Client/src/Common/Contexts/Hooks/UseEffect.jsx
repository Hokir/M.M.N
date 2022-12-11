import Items from "../Models/ItemsModel";
import { post } from "@Setup/API/Axios";
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
  }, []);
  return [items, setItems];
}

export function UserContextEffect() {
  // Check if there is a token, if so, verify and refresh it
  const [user, setUser] = useState();

  useEffect(() => {
    async function VerifyToken() {
      const token = localStorage.getItem("token");

      if (token === ("undefined" || null)) {
        return localStorage.clear();
      }

      const verification = await post("/admin/token", { data: { token } });

      if (verification.status === 200) {
        localStorage.setItem("token", verification.data.token);
        localStorage.setItem("user", JSON.stringify(verification.data.user));
        setUser(verification.data.user);
      }
    }
    VerifyToken();
  }, []);

  return [user, setUser];
}
