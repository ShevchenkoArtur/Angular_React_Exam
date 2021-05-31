const db = require("../models")
const Car = db.cars
const Op = db.Sequelize.Op

// Create and Save a new Car
exports.create = (req, res) => {
    // Validate request
    if (!req.body.brand) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Car
    const car = {
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        published: req.body.published ? req.body.published : false
    };

    // Save Car in the database
    Car.create(car)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Car."
            });
        });
};


// Retrieve all Cars from the database.
exports.findAll = (req, res) => {
    const brand = req.query.brand;
    const condition = brand ? { brand: { [Op.like]: `%${brand}%` } } : null;

    Car.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving cars."
            });
        });
};

// Find a single Car with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Car.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Car with id=" + id
            });
        });
};

// Update a Car by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Car.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Car was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Car with id=${id}. Maybe Car was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Car with id=" + id
            });
        });
};

// Delete a Car with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Car.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Car was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Car with id=${id}. Maybe Car was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Car with id=" + id
            });
        });
};

// Delete all Cars from the database.
exports.deleteAll = (req, res) => {
    Car.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Cars were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all cars."
            });
        });
};

// Find all published Cars
exports.findAllPublished = (req, res) => {
    Car.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving cars."
            });
        });
};