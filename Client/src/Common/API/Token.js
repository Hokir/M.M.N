import { postRequest } from "./Axios";

class Token {
  static getToken() {
    return localStorage.getItem("token");
  }

  static setToken(token) {
    return localStorage.setItem("token", { token });
  }

  static verifyToken(token) {
    return postRequest("/token/verification", { token });
  }
}

export default Token;
