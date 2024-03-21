const db = require('../databases/db.js');

const menuModel = {
  getAll: (res) => {
    const sql = 'SELECT * FROM Menu';
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error('Error fetching menu items:', err);
        res.status(500).json({ message: 'Failed to fetch menu items' });
      } else {
        res.status(200).json(rows);
      }
    });
  },

  create: (req, res) => {
    const { itemName, price } = req.body;
    const sql = 'INSERT INTO Menu (itemName, price) VALUES (?, ?)';
    db.run(sql, [itemName, price], function(err) {
      if (err) {
        console.error('Error creating menu item:', err);
        res.status(500).json({ message: 'Failed to create menu item' });
      } else {
        res.status(201).json({ message: 'Menu item created successfully', menuId: this.lastID });
      }
    });
  },

  update: (menuId, menuData, res) => {
    const { itemName, price } = menuData;
    const sql = 'UPDATE Menu SET itemName = ?, price = ? WHERE menuId = ?';
    db.run(sql, [itemName, price, menuId], function(err) {
      if (err) {
        console.error('Error updating menu item:', err);
        res.status(500).json({ message: 'Failed to update menu item' });
      } else {
        res.status(200).json({ message: 'Menu item updated successfully', rowsAffected: this.changes });
      }
    });
  },

  delete: (menuId, res) => {
    const sql = 'DELETE FROM Menu WHERE menuId = ?';
    db.run(sql, [menuId], function(err) {
      if (err) {
        console.error('Error deleting menu item:', err);
        res.status(500).json({ message: 'Failed to delete menu item' });
      } else {
        res.status(200).json({ message: 'Menu item deleted successfully', rowsAffected: this.changes });
      }
    });
  },

  getOne: (menuId, res) => {
    const sql = 'SELECT * FROM Menu WHERE menuId = ?';
    db.get(sql, [menuId], (err, row) => {
      if (err) {
        console.error('Error fetching menu item:', err);
        res.status(500).json({ message: 'Failed to fetch menu item' });
      } else if (!row) {
        res.status(404).json({ message: 'Menu item not found' });
      } else {
        res.status(200).json(row);
      }
    });
  }
};

module.exports = menuModel;