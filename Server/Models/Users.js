const db = require("../Database/Database");
const { hash } = require("../Utilities/Bcrypt");

class Users {
  static async save({ email, password, role, name, surname }) {
    const date = new Date().toJSON().slice(0, 10);
    const hashedPassword = await hash(password);

    const query = `INSERT INTO users (email, password, role, creation_date, name, surname) 
                   VALUES 
                   ("${email}", "${hashedPassword}", "${role}", "${date}", "${name}", "${surname}")`;

    const newUser = await db.execute(query);

    return newUser;
  }

  static async modify({ name, email, password, role }) {
    const date = new Date().toJSON().slice(0, 10);
    const hashedPassword = await hash(password);

    const query = `ALTER TABLE users (name, email, password, role, modified_date)
                   VALUES (${name}, ${email}, ${hashedPassword}, ${role}, ${date})`;

    const modifiedUser = await db.execute(query);

    return modifiedUser;
  }

  static findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = '${email}'`;

    return db.execute(query);
  }
}

module.exports = Users;
