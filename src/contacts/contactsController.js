const contacts = require('../../data/contacts');

let list = function(req, res) {
    res.json(contacts);
}

let show = function(req, res) {
    const contact = contacts.find((c) => c._id == req.params.id);
    res.json(contact);
}

let create = function(req, res) {
    const newContact = {
        ...req.body,
        _id: contacts.length + 1,
        postId: 1,
    };

    contacts.push(newContact);
    res.json(newContact);
}

module.exports = { 
    list,
    show,
    create 
};
