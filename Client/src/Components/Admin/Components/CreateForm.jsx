import { useRef, useState } from "react";
import { post } from "@Common/API/Axios";

export function CreateForm() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const category = useRef();

  async function onSubmit(e) {
    e.preventDefault();

    const fields = { name, image, price, category: category.current.value };

    await post("/shop/items", { data: { ...fields } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} className="flex flex-col text-dark">
      <input
        type="text"
        value={name}
        placeholder="Article"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={image}
        placeholder="URL image"
        onChange={(e) => setImage(e.target.value)}
      />

      <input
        type="text"
        value={price}
        placeholder="Prix"
        onChange={(e) => setPrice(e.target.value)}
      />

      <select ref={category}>
        <option value="Robe">Robe</option>
        <option value="Pantalon">Pantalon</option>
      </select>

      <button className="text-light">Ajouter ce produit</button>
    </form>
  );
}
