const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
    // serialNumber: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     unique: true
    // },
    // purchaseDate: {
    //     type: Date,
    //     required: true
    // },
    // supplierName: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // invoiceNumber: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // status: {
    //     type: String,
    //     default: 'in stock',
    //     enum: ['in stock', 'sold', 'lost', 'broken']
    // }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
