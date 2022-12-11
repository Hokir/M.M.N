import { get, post } from "@Common/API/Axios";

class Items {
  static async createItem(name, price, category) {
    try {
      const request = await post("/shop/items", {
        data: { name: name, price: price, category: category },
      });
      return request;
    } catch (e) {
      return e.response;
    }
  }

  static async getItems() {
    const items = await get("/shop/items");
    return items;
  }

  static async findById(id) {
    const item = await get(`/shop/items/${id}`);
    return item;
  }
}

export default Items;
