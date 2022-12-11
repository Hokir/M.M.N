import { get, post } from "@Common/API/Axios";

class Items {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  static async createItem() {
    let newItem = new Items(this.name, this.price, this.category);
    newItem = await post("/shop/items", newItem);
    return newItem;
  }

  static async getItems() {
    const items = await get("/shop/items");
    return items;
  }
}

export default Items;
