const db = require("../Database/Database");
const { hash } = require("../Utilities/Bcrypt");

class Users {
  constructor(name, email, password, role, address) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.address = address;
  }

  async save() {
    const date = new Date().toJSON().slice(0, 10);
    const hashedPassword = await hash(this.password);

    const query = `INSERT INTO users (name, email, password, role, creation_date) VALUES (${this.name}, ${this.email}, ${hashedPassword}, ${this.role}, ${date})`;

    const newUser = await db.execute(query);

    return newUser;
  }

  async modify() {
    const date = new Date().toJSON().slice(0, 10);
    const hashedPassword = await hash(this.password);

    const query = `ALTER TABLE users (name, email, password, role, modified_date) VALUES (${this.name}, ${this.email}, ${hashedPassword}, ${this.role}, ${date})`;

    const modifiedUser = await db.execute(query);

    return modifiedUser;
  }

  static findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = '${email}'`;

    return db.execute(query);
  }
}

module.exports = Users;
