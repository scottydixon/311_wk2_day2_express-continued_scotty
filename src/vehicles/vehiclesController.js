const vehicles = require('../../data/vehicles');

let list = function(req, res) {
    res.json(vehicles);
}

let show = function(req, res) {
    const vehicle = vehicles.find((v) => v._id == req.params.id);
    res.json(vehicle);
}

let create = function(req, res) {
    const newVehicle = {
        ...req.body,
        _id: vehicles.length + 1,
        postId: 1,
};

    vehicles.push(newVehicle);
    res.json(newVehicle);
}

module.exports = { 
    list, 
    show, 
    create 
};
