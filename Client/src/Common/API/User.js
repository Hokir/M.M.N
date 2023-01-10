import { postRequest } from "./Axios";

class User {
  static getAccount(payload) {
    return postRequest("/users/login", { ...payload });
  }

  static createAccount(payload) {
    return postRequest("/users/register", { ...payload });
  }

  static updateAccount(payload) {
    return postRequest("/users/update", { ...payload });
  }

  static deleteAccount(id) {
    return postRequest("/users/delete", { id });
  }
}

export default User;
