import { useShopContext } from "@Common/Contexts/ShopContext";
import { ClickCollect } from "./Components/ClickCollect";
import { CartItems } from "@Components/Cart/CartItems";
import { useState } from "react";

export function Payment() {
  const { cartItems } = useShopContext();
  const [status, setStatus] = useState();

  return (
    <>
      {cartItems.length > 0 && (
        <div className="flex">
          {/* Cart items */}

          <div className="flex flex-col">
            {cartItems.length > 0 &&
              cartItems.map((item) => <CartItems key={item.id} {...item} />)}
          </div>

          {/* Payment choice */}

          <div className="flex flex-col gap-4">
            <h2 className="text-lg">Méthode de livraison</h2>

            <div className="flex">
              <button className="btn" onClick={() => setStatus("Click")}>
                Click & Collect
              </button>

              {status === "Click" && <ClickCollect />}
            </div>
          </div>
        </div>
      )}

      {cartItems.length === 0 && (
        <h1 className="text-lg px-5">Votre panier est vide.</h1>
      )}
    </>
  );
}
