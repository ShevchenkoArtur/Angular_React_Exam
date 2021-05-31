module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("car", {
        brand: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.INTEGER
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Car;
};