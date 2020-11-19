//external imports
const express = require('express');
const cors = require('cors');

//internal imports
const routes = require("./routes");

//config
const port = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/reviews", routes.reviews)




//connection
app.listen(port, () => console.log(`Server is running on port ${port}`));