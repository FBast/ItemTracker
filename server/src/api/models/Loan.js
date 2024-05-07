const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
        trim: true
    },
    className: {
        type: String,
        required: true,
        trim: true
    },
    itemName: {
        type: String,
        required: true,
        trim: true
    },
    loanDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date
    }
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
