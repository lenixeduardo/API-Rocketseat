const express = require("express");

const routes = require("../routes");

const app = express();

app.use(express.json());

app.use(routes);




const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} `))