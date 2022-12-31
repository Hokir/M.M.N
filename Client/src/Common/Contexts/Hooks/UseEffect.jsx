import Shop from "@Common/API/Shop";
import Token from "@Common/API/Token";

import { useEffect, useState } from "react";
import { ClearStorage } from "./ClearStorage";

export function ShopContextEffect() {
  // Get the items in the database
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItemsFunction() {
      const request = await Shop.getItems();
      setItems(request);
    }
    getItemsFunction();
  }, []);
  return [items, setItems];
}

export function UserContextEffect() {
  // Check if there is a token, if so, verify and refresh it
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token = Token.getToken();

  useEffect(() => {
    async function VerifyToken() {
      const verification = await Token.verifyToken({ token });

      if (verification.status === 200) {
        Token.setToken(verification.data.token);
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
