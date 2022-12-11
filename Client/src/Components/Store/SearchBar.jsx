import { useState } from "react";
import { useShopContext } from "@Common/Contexts/ShopContext";

export function SearchBar() {
  const { items } = useShopContext();
  const [search, setSearch] = useState("");

  const filter = items.filter((item) => {
    const filteredItems = JSON.stringify(item);

    return search.toLowerCase() === ""
      ? filteredItems
      : filteredItems.toLowerCase().includes(search);
  });

  return { filter, search, setSearch };
}
