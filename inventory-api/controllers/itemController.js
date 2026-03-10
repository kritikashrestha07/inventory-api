const items = require('../data/storage');

// Get all items
exports.getAllItems = (req, res) => {
    res.json(items);
};

// Get item by ID
exports.getItemById = (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }

    res.json(item);
};

// Create item
exports.createItem = (req, res) => {
    const { name, quantity, price } = req.body;

    const newItem = {
        id: items.length + 1,
        name,
        quantity,
        price
    };

    items.push(newItem);

    res.status(201).json({
        message: "Item added successfully",
        item: newItem
    });
};

// Update item
exports.updateItem = (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }

    const { name, quantity, price } = req.body;

    item.name = name || item.name;
    item.quantity = quantity || item.quantity;
    item.price = price || item.price;

    res.json({
        message: "Item updated successfully",
        item
    });
};

// Delete item
exports.deleteItem = (req, res) => {
    const id = parseInt(req.params.id);

    const index = items.findIndex(i => i.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Item not found" });
    }

    const deletedItem = items.splice(index, 1);

    res.json({
        message: "Item deleted successfully",
        deletedItem
    });
};