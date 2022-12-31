import { deleteRequest, getRequest, patchRequest, postRequest } from "./Axios";

class Shop {
  static getItems() {
    return getRequest("/shop");
  }

  static createItem(path, payload) {
    return postRequest(path, payload);
  }

  static patchItem(path, payload) {
    return patchRequest(path, payload);
  }

  static deleteItem(path, payload) {
    return deleteRequest(path, payload);
  }
}

export default Shop;
