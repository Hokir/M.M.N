import { useShopContext } from "@Common/Contexts/ShopContext";
import { Currency } from "@Helpers/Currency";

export function StoreItems({ id, name, price, image }) {
  const { increaseItemQuantity } = useShopContext();

  return (
    <div className="flex flex-col bg-light text-dark border rounded-xl p-6">
      <img src={image} className="h-60 w-60" />

      <h3 className="text-xl font-bold">{name}</h3>

      <div className="flex w-full justify-between items-center">
        <span>{Currency(price)}</span>

        <button className="btn" onClick={() => increaseItemQuantity(id)}>
          Ajouter
        </button>
      </div>
    </div>
  );
}
