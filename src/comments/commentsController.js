let db = require("../../data/comments");

// this function should return all the comments
let getComments = function(req, res){
    res.json(db);
};

// this function returns a single comment with the matching id
let getComment = function(req, res){

    let id = req.params.id;

    let found;
    for(let i=0;i<db.length;i++){
        let item = db[i];
        if(item._id == id){
            found = item;
        }
    }

    res.json(found);
}

// add a comment
let addComment = function(req, res){

    let comment = req.body;

    let next = db.legth+1;
    comment._id = next;
    comment.postId = 1;
    db.push(comment);
}


module.exports = {
    getComments,
    getComment,
    addComment
}