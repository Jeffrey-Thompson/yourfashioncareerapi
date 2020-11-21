const db = require('../models');


// Rename all places that has College with Company like below
const index = (req, res) => {
    db.Company.find({}, (err, foundCompanys) => {
        if (err) console.log('Error in companies#index:', err);

        if(!foundCompanys.length) return res.status(200).json({ "message": "No companies found in db" });

        res.status(200).json({ "companies": foundCompanys });
    });
};

const show = (req, res) => {
    db.College.findById(req.params.id, (err, foundCollege) => {
        if (err) console.log('Error in colleges#show:', err);

        if(!foundCollege) return res.status(200).json({ "message": "No college with that id found in db" });

        res.status(200).json({ "college": foundCollege });
    });
};

const create = (req, res) => {
    db.College.create(req.body, (err, savedCollege) => {
        if (err) console.log('Error in colleges#create:', err);

        res.status(201).json({ "college": savedCollege });
    });
};

const update = (req, res) => {
    db.College.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCollege) => {
        if (err) console.log('Error in Colleges#update:', err);

        if(!updatedCollege) return res.status(200).json({ "message": "No College with that id found in db" });

        res.status(200).json({ "College": updatedCollege });
    });
};

const destroy = (req, res) => {
    db.College.findByIdAndDelete(req.params.id, (err, deletedCollege) => {
        if (err) console.log('Error in Colleges#destroy:', err);

        if(!deletedCollege) return res.status(200).json({ "message": "No College with that id found in db" });

        res.status(200).json({ "College": deletedCollege });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};