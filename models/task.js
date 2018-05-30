module.exports = function (sequelize, DataTypes) {
    const Task = sequelize.define("Task", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    });

    Task.associate = function (models) {
        Task.belongsTo(models.Color, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return Task;
};
