import { SelectedItem } from "../Hooks/SelectedItem";
import Shop from "@Common/API/Shop";
import { useState } from "react";

export function Modify({ id }) {
  const { name, setName, image, setImage, price, setPrice, category } =
    SelectedItem(id);

  const [message, setMessage] = useState();

  async function onSubmit(e) {
    e.preventDefault();

    const data = { id, name, image, price, category: category.current.value };

    await Shop.patchItem("/shop", { ...data })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} className="flex flex-col text-dark">
      {message && <span className="text-light m-1">{message}</span>}

      <input
        type="text"
        className="p-2"
        value={name}
        placeholder="Article"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        className="p-2"
        value={image}
        placeholder="URL image"
        onChange={(e) => setImage(e.target.value)}
      />

      <input
        type="text"
        className="p-2"
        value={price}
        placeholder="Prix"
        onChange={(e) => setPrice(e.target.value)}
      />

      <select className="p-2" ref={category}>
        <option value="Robe">Robe</option>
        <option value="Pantalon">Pantalon</option>
      </select>

      <button>Modifier ce produit</button>
    </form>
  );
}
