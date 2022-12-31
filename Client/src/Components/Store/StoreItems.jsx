import { useShopContext } from "@Common/Contexts/ShopContext";
import { Currency } from "@Helpers/Currency";
import Shop from "@Common/API/Shop";

export function StoreItems({ id, name, price, image }) {
  const { increaseItemQuantity } = useShopContext();

  return (
    <div className="flex flex-col gap-4">
      <img src={image} className="object-contain h-60 w-60" />

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
