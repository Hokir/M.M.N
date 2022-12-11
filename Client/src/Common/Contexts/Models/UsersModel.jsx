import { post } from "@Setup/API/Axios";

class Users {
  constructor(name, surname, email, password, role) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  static async createUser() {
    const user = new Users(
      this.name,
      this.surname,
      this.email,
      this.password,
      this.role
    );

    const request = await post("/users/register", { data: { user } });
    return request;
  }

  static async getUser(email, password) {
    if (!(email && password)) {
      return null;
    }

    try {
      const request = await post("/users/login", {
        data: { email: email, password: password },
      });
      return request;
    } catch (e) {
      return e.response;
    }
  }
}

export default Users;
