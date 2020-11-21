const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    overall: Number, // calculated from the other catergories
    development: Number,
    workLife: Number,
    salary: Number,
    sustainability: Number,
    treatment: Number,
    authenticity: Number,
    diversity: Number,
    freedom: Number,
    management: Number,
    growth: Number,
    text: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
    },
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
