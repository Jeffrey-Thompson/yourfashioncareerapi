const db = require("../models");

const show = async (req, res) => {
  console.log("user")
  try {
    const foundUser = await db.User.findById(req.profileId);
    res.status(200).json({ status: 200, data: foundUser });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

module.exports = {
  show,
};