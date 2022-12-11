import { useShopContext } from "@Setup/Contexts/ShopContext";

export function StoreItems({ id, name, price }) {
  const { increaseItemQuantity } = useShopContext();

  return (
    <div className="flex flex-col p-6 border rounded-xl text-dark">
      <span className="text-6xl">Image</span>

      <h3 className="flex text-2xl">{name}</h3>

      <div className="flex items-center justify-between">
        <span>{price}€</span>

        <button className="btn" onClick={() => increaseItemQuantity(id)}>
          Ajouter
        </button>
      </div>
    </div>
  );
}
