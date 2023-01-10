import { deleteRequest, getRequest, patchRequest, postRequest } from "./Axios";

class Shop {
  static getProducts() {
    return getRequest("/shop");
  }

  static createProduct(path, payload) {
    return postRequest(path, payload);
  }

  static patchProduct(path, payload) {
    return patchRequest(path, payload);
  }

  static deleteProduct(path, payload) {
    return deleteRequest(path, payload);
  }
}

export default Shop;
