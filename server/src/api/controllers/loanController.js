const Loan = require('../models/Loan');

exports.createLoan = async (req, res) => {
    try {
        const newLoan = new Loan(req.body);
        await newLoan.save();
        res.status(201).send(newLoan);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.find({});
        res.status(200).send(loans);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getLoanById = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id);
        if (!loan) {
            return res.status(404).send();
        }
        res.send(loan);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateLoan = async (req, res) => {
    try {
        const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!loan) {
            return res.status(404).send();
        }
        res.send(loan);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteLoan = async (req, res) => {
    try {
        const loan = await Loan.findByIdAndDelete(req.params.id);
        if (!loan) {
            return res.status(404).send();
        }
        res.send(loan);
    } catch (error) {
        res.status(500).send(error);
    }
};