const connection = require("./connection.js");

const orm = {
    selectAll: (table, cb) => {
        connection.query("SELECT * FROM ??", [table], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: (table, columns, values, cb) => {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [table, columns, values], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {
        connection.query("UPDATE ?? SET ? WHERE ?", [table, objColVals, condition], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
};

module.exports = orm;
