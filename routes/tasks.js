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
        db.Task.findAll({}).then((data) => {
            const dataVals = data.map(dataRow => dataRow.dataValues);
            res.render("index", {
                tasks: getStateBooleans(dataVals),
            });
        });
    });

    // router.post("/tasks", (req, res) => {
    //     task.insert([req.body.text, req.body.state], (result) => {
    //         res.json({ id: result.insertId });
    //     });
    // });

    // router.put("/tasks/:id", (req, res) => {
    //     task.update(req.body.objColVals, req.body.condition, (result) => {
    //         if (result.changedRows === 0) {
    //             return res.status(404).end();
    //         }
    //         return res.status(200).end();
    //     });
    // });
};
