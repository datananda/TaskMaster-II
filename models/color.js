module.exports = function (sequelize, DataTypes) {
    const Color = sequelize.define("Color", {
        color: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "blue",
        },
    });

    Color.associate = function (models) {
        Color.hasMany(models.Task);
    };

    return Color;
};
