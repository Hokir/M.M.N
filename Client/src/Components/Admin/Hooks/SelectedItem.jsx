import { useEffect, useRef, useState } from "react";
import { FindById } from "@Helpers/FindById";

export function SelectedItem(id) {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const category = useRef();

  const selectedItem = FindById(id);

  useEffect(() => {
    if (selectedItem) {
      setName(selectedItem.name);
      setImage(selectedItem.image);
      setPrice(selectedItem.price);
      category.current.value = selectedItem.category;
    }
  }, [id]);

  return { name, image, price, category, setName, setImage, setPrice };
}
