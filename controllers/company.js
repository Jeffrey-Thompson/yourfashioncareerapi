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

const reviewIndex = (req, res) => {
    db.Review.find({company: req.params.id}, (err, foundReviews) => {
        if (err) console.log('Error in Companys#show:', err);

        if(!foundReviews) return res.status(200).json({ "message": "No Company with that id found in db" });

        // if(!foundCompany.reviews) return res.status(200).json({ "message": "No reviews for this company in db" });

        res.status(200).json({ "reviews": foundReviews });
    });
};

const showReview = (req, res) => {
    db.Company.findById(req.params.id, (err, foundCompany) => {
        if (err) console.log('Error in Companys#show:', err);

        if(!foundCompany) return res.status(200).json({ "message": "No Company with that id found in db" });

        if(!foundCompany.reviews) return res.status(200).json({ "message": "No reviews for this company in db" });
        
        db.Review.findById(req.params.reviewId, (err, foundReview) => {
            if (err) console.log('Error in Review#show:', err);

            if(!foundReview) return res.status(200).json({ "message": "No Review with that id found in db" });

            res.status(200).json({ "review": foundReview });
        })
    });
};

const createReview = (req, res) => {
    db.Review.create(req.body, (err, savedReview) => {
        if (err) console.log('Error in Review#create:', err);

        res.status(201).json({ "review": savedReview });
    });
};

const updateReview = (req, res) => {
    db.Review.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedReview) => {
        if (err) console.log('Error in Reviews#update:', err);

        if(!updatedReview) return res.status(200).json({ "message": "No Review with that id found in db" });

        res.status(200).json({ "review": updatedReview });
    });
};

const deleteReview = (req, res) => {
    db.Review.findByIdAndDelete(req.params.id, (err, deletedReview) => {
        if (err) console.log('Error in Reviews#destroy:', err);

        if(!deletedReview) return res.status(200).json({ "message": "No Review with that id found in db" });

        res.status(200).json({ "review": deletedReview });
    });
};





module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    reviewIndex,
    showReview,
    createReview,
    updateReview,
    deleteReview,
};