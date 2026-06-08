const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let products = [];
let users = [];
let orders = [];

app.get("/", (req, res) => {
  res.send("E-Commerce Backend Running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  products.push(req.body);
  res.json({ message: "Product Added" });
});

app.post("/api/auth/register", (req, res) => {
  users.push(req.body);
  res.json({ message: "User Registered" });
});

app.post("/api/auth/login", (req, res) => {
  const user = users.find(
    u => u.email === req.body.email &&
         u.password === req.body.password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid Credentials"
    });
  }

  res.json({
    message: "Login Successful"
  });
});

app.post("/api/orders", (req, res) => {
  orders.push(req.body);
  res.json({
    message: "Order Placed"
  });
});

app.get("/api/orders", (req, res) => {
  res.json(orders);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});