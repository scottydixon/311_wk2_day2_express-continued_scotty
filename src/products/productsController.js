const products = require('../../data/products');

// Get
let list = function(req, res) {
    res.json(products);
}

// Get
let show = function(req, res) {
    const product = products.find((p) => p._id == req.params.id);
    res.json(product);
}

// Post
let create = function(req, res) {
    const newProduct = {
        ...req.body,
        _id: products.length + 1,
        postId: 1,
    };

    products.push(newProduct);
    res.json(newProduct);
}

module.exports = { 
    list,
    show, 
    create 
};
