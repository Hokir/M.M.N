const db = require("../Database/Database");

class Items {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  async save() {
    const date = new Date().toJSON().slice(0, 10);

    const query = `INSERT INTO items (name, price, category, creation_date) VALUES ("${this.name}", "${this.price}", "${this.category}", "${date}")`;

    const newItem = await db.execute(query);

    return newItem;
  }

  async modify() {
    const date = new Date().toJSON().slice(0, 10);

    const query = `ALTER TABLE items WHERE name = "${this.name}" SET name = "${this.name}", price = "${this.price}", category = "${this.category}", modification_date = "${date}"`;

    const modifiedItem = await db.execute(query);

    return modifiedItem;
  }

  static findAll() {
    const query = "SELECT * FROM items";

    return db.execute(query);
  }

  static findByName(name) {
    const query = `SELECT * FROM items WHERE name = '${name}'`;

    return db.execute(query);
  }
}

module.exports = Items;
