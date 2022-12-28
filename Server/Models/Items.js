const db = require("../Database/Database");

class Items {
  constructor(name, price, category, image, id) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.image = image;
    this.id = id;
  }

  async save() {
    const date = new Date().toJSON().slice(0, 10);

    const query = `INSERT INTO items (name, price, category, creation_date) VALUES ("${this.name}", "${this.price}", "${this.category}", "${date}")`;

    const newItem = await db.execute(query);

    return newItem;
  }

  async modify() {
    const date = new Date().toJSON().slice(0, 10);

    const query = `UPDATE items SET name = "${this.name}", price = "${this.price}", category = "${this.category}", modification_date = "${date}", image = "${this.image}" WHERE id = "${this.id}"`;

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
