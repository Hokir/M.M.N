import { useShopContext } from "@Common/Contexts/ShopContext";
import { CurrencyFormat } from "../../Hooks/CurrencyFormatter";
import { Link } from "react-router-dom";
import { CartItems } from "./CartItems";

export function SideCart() {
  const { cartItems, items } = useShopContext();

  return (
    <div className="w-96 sticky top-20 bottom-0">
      <div className="flex h-20 items-center justify-between text-xl font-bold bg-primary p-4">
        {/* Total cart prices */}

        <span>Total</span>

        {CurrencyFormat(
          cartItems.reduce((total, cartItem) => {
            const item = items.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>

      <div className="w-full text-light">
        <h3 className={cartItems.length > 0 ? "hidden" : "text-lg my-5 mx-2"}>
          Panier vide.
        </h3>

        {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}
      </div>

      <div className="fixed bottom-0 h-20 w-96 bg-terciary">
        <Link
          to={cartItems.length > 0 && "/paiement"}
          className="flex justify-center items-center w-full h-full"
        >
          Suivant
        </Link>
      </div>
    </div>
  );
}
