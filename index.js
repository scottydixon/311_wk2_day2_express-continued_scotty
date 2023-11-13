const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"))


app.use(require("./src/comments/commentsRoutes"));
app.use(require("./src/contacts/contactsRoutes"));
app.use(require("./src/vehicles/vehiclesRoutes"));
app.use(require("./src/products/productsRoutes"));


const port = process.env.PORT || 4002;

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});
