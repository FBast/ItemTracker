const Item = require('../models/Item');

exports.createItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).send(newItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    } catch (error) {
        res.status(500).send(error);
    }
};
