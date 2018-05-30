const db = require("../models");

const stateLookup = {
    0: "todo",
    1: "doing",
    2: "done",
};

function getStateBooleans(inTaskArray) {
    const outTaskArray = inTaskArray;
    outTaskArray.forEach((taskRow) => {
        Object.keys(stateLookup).forEach((state) => {
            const stateName = stateLookup[state];
            if (taskRow.state === parseInt(state, 10)) {
                taskRow[stateName] = 1;
            } else {
                taskRow[stateName] = 0;
            }
        });
    });
    return outTaskArray;
}

module.exports = (app) => {
    app.get("/", (req, res) => {
        db.Task.findAll({
            include: [db.Color],
            order: [["updatedAt", "DESC"]],
        }).then((data) => {
            const dataVals = data.map(dataRow => dataRow.dataValues);
            res.render("index", {
                tasks: getStateBooleans(dataVals),
            });
        });
    });

    app.post("/tasks", (req, res) => {
        db.Color.findOrCreate({
            where: {
                color: req.body.color,
            },
        }).spread((color) => {
            db.Task.create({
                text: req.body.text,
                state: req.body.state,
                ColorId: color.dataValues.id,
            }).then((result) => {
                res.json(result);
            });
        });
    });

    app.put("/tasks/:id", (req, res) => {
        db.Task.update(req.body, {
            where: {
                id: req.params.id,
            },
        }).then((result) => {
            res.json(result);
        });
    });
};
