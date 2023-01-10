import { FindByID } from "@Helpers/FindByID";
import { useShopContext } from "@Common/Contexts/ShopContext";
import { SideCart } from "@Components/Cart/SideCart";

export function Detail() {
  const { increaseProductQuantity, viewCart } = useShopContext();

  const id = parseInt(localStorage.getItem("detail"));
  const product = FindByID(id);

  if (product === null) return null;

  return (
    <div className="flex pt-7 justify-center gap-6">
      <div>
        <img src={product.image} className="object-contain h-screen lg:pb-36" />
      </div>

      <div className="fixed flex flex-col translate-y-24 translate-x-96 gap-6">
        <div>
          {product.name} <span className="text-xs px-1">{product.price}€</span>
        </div>

        <div className="text-xs">Couleurs disponibles</div>
        <div className="dark border w-5 h-5" />

        <div className="text-xs">Tailles disponibles</div>
        <select className="text-xs text-dark">
          <option>36</option>
          <option>37</option>
          <option>38</option>
          <option>39</option>
          <option>40</option>
          <option>41</option>
          <option>42</option>
        </select>

        <button className="button" onClick={() => increaseProductQuantity(id)}>
          Ajouter au panier
        </button>
      </div>

      {viewCart && (
        <div className="fixed dark top-20 w-96 right-0 bottom-0">
          <SideCart />
        </div>
      )}
    </div>
  );
}
