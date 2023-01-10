import { useShopContext } from "@Common/Contexts/ShopContext";
import { ClickCollect } from "@Components/Payment/ClickCollect";
import { ProductsInCart } from "@Components/Cart/ProductsInCart";
import { useState } from "react";

export function Payment() {
  const { cartProducts } = useShopContext();
  const [status, setStatus] = useState();

  return (
    <>
      {cartProducts.length > 0 && (
        <div className="flex">
          <div className="flex flex-col">
            {cartProducts.map((product) => (
              <ProductsInCart key={product.id} {...product} />
            ))}
          </div>

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

      {cartProducts.length === 0 && (
        <h1 className="text-lg px-5">Votre panier est vide.</h1>
      )}
    </>
  );
}
