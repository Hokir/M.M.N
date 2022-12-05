import { useShopContext } from "../../Contexts/ShopContext";

export function CartItems({ id, quantity }) {
  const { items, removeFromCart } = useShopContext();
  const item = items.find((item) => item.id === id);

  if (!item) return null;

  return (
    <div className="flex m-4 p-4 justify-between items-center border">
      <div className="flex-col">
        {/* Display name and quantity */}

        <span className="flex">
          <h3 className="text-lg mr-2">{item.name}</h3>
          <span className="text-xs translate-y-2">x{quantity}</span>
        </span>

        {/* Remove from cart button */}

        <button className="text-xs" onClick={() => removeFromCart(id)}>
          Retirer du panier
        </button>
      </div>

      <span className="p-1">{item.price * quantity}€</span>
    </div>
  );
}
