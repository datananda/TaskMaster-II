const orm = require("../config/orm.js");

const task = {
    all: (cb) => {
        orm.selectAll("tasks", (data) => {
            cb(data);
        });
    },
    insert: (values, cb) => {
        orm.insertOne("tasks", ["text", "state"], values, (res) => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne("tasks", objColVals, condition, (res) => {
            cb(res);
        });
    },
};

module.exports = task;
