const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String },
  imgUrl: { type: String },
  price: { type: Number },
});

const Products = mongoose.model("products", productSchema);

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 8080;

app.get("/products", (req, res) => {
  Products.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
  //   res.send("Hello World!");
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  Products.findById(id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.status(500).json({ message: err });
    }
  });
  //   res.send("Hello World!");
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  Products.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("Deleted!");
    } else {
      res.status(500).json({ message: err });
    }
  });
  //   res.send("Hello World!");
});

app.post("/products", (req, res) => {
  let product = new Products({
    name: req.body.name,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
  });
  product.save();
});

mongoose.connect(
  "mongodb+srv://maralzeynal:Maral.2003@cluster0.wojm7e7.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (!err) {
      app.listen(port, () => {
        console.log(`http://localhost:${port}`);
      });
    } else {
      console.log(err);
    }
  }
);
