module.exports = function (sequelize, DataTypes) {
    const Task = sequelize.define("Task", {
        text: DataTypes.STRING,
        state: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    });

    return Task;
};
