import { useRef, useState } from "react";
import Shop from "@Common/API/Shop";

export function Create() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [message, setMessage] = useState();
  const category = useRef();

  async function onSubmit(e) {
    e.preventDefault();

    const data = { name, image, price, category: category.current.value };

    const request = await Shop.createItem("/shop", { ...data });
    setMessage(request);
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

      <button>Ajouter ce produit</button>
    </form>
  );
}
