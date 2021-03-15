const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/yourfashioncareer";
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
    .then(() => console.log("MongoDB successfully connected...on " + connectionString))
    .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    Company: require('./company'),
    User: require('./user'),
    Review: require('./review')
};