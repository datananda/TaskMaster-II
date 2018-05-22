const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./controllers/tasks_controller.js");

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
