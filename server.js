require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models");
// const routes = require("./controllers/tasks_controller.js");

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on http://localhost:${PORT}`);
    });
});
