import { get, post } from "@Common/API/Axios";

class Items {
  static async createItem(name, price, category) {
    try {
      const request = await post("/shop/items", {
        data: name,
        price,
        category,
      });
      return request;
    } catch (e) {
      return e;
    }
  }

  static async getItems() {
    const items = await get("/shop/items");
    return items;
  }
}

export default Items;
