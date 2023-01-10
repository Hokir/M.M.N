import Shop from "@Common/API/Shop";
import Token from "@Common/API/Token";

import { useEffect, useState } from "react";
import { ClearStorage } from "./ClearStorage";

export function ShopContextEffect() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductsFunction() {
      const request = await Shop.getProducts();
      return setProducts(request);
    }
    getProductsFunction();
  }, []);
  return [products, setProducts];
}

export function UserContextEffect() {
  // Check if there is a token, if so, verify and refresh it
  const [user, setUser] = useState(() => {
    const currentUser = localStorage.getItem("user");

    if (currentUser !== "undefined" && typeof currentUser === "string") {
      return JSON.parse(localStorage.getItem("user"));
    }

    return null;
  });

  const token = Token.getToken();

  useEffect(() => {
    async function TokenVerification() {
      const verification = await Token.verification({ token });

      if (verification.status === 200) {
        Token.setToken(verification.data.token);
        localStorage.setItem("user", JSON.stringify(verification.data.user));
        return setUser(verification.data.user);
      }

      ClearStorage();
      return setUser(null);
    }
    TokenVerification();
  }, []);

  return [user, setUser];
}
