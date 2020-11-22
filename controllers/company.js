const db = require('../models');


const index = (req, res) => {
    db.Company.find({}, (err, foundCompanys) => {
        if (err) console.log('Error in companies#index:', err);

        if(!foundCompanys.length) return res.status(200).json({ "message": "No companies found in db" });

        res.status(200).json({ "companies": foundCompanys });
    });
};

const show = (req, res) => {
    db.Company.findById(req.params.id, (err, foundCompany) => {
        if (err) console.log('Error in Companys#show:', err);

        if(!foundCompany) return res.status(200).json({ "message": "No Company with that id found in db" });

        res.status(200).json({ "company": foundCompany });
    });
};

const create = (req, res) => {
    db.Company.create(req.body, (err, savedCompany) => {
        if (err) console.log('Error in Companys#create:', err);

        res.status(201).json({ "company": savedCompany });
    });
};

const update = (req, res) => {
    db.Company.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCompany) => {
        if (err) console.log('Error in Companys#update:', err);

        if(!updatedCompany) return res.status(200).json({ "message": "No Company with that id found in db" });

        res.status(200).json({ "company": updatedCompany });
    });
};

const destroy = (req, res) => {
    db.Company.findByIdAndDelete(req.params.id, (err, deletedCompany) => {
        if (err) console.log('Error in Companys#destroy:', err);

        if(!deletedCompany) return res.status(200).json({ "message": "No Company with that id found in db" });

        res.status(200).json({ "company": deletedCompany });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};