import { Currency } from "@Helpers/Currency";
import { ProductsInCart } from "./ProductsInCart";
import { useShopContext } from "@Common/Contexts/ShopContext";

export function SideCart() {
  const { cartProducts, products } = useShopContext();

  return (
    <>
      <div className="flex bg-primary justify-between items-center p-6 h-16 text-2xl font-bold">
        <span>Total</span>

        {Currency(
          cartProducts.reduce((total, cartProduct) => {
            const product = products.find((i) => i.id === cartProduct.id);
            return total + (product?.price || 0) * cartProduct.quantity;
          }, 0)
        )}
      </div>

      {cartProducts.map((product) => (
        <ProductsInCart key={product.id} {...product} />
      ))}

      <h3 className={cartProducts.length > 0 ? "hidden" : "p-4"}>
        Panier vide.
      </h3>
    </>
  );
}
