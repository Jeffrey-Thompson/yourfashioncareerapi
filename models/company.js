const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: String,
    link: String,
    description: String,
    logo: String,
    size: String,
    overall: Number,
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
    numReviews: Number,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
    }],
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;