import express from "express";

const app = express();

// Middleware log thời gian + URL request
const logRequestTime = (req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
};
app.use(logRequestTime);

// Fake database sản phẩm
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 }
];

// 1. Route chào mừng
app.get("/", (req, res) => {
  res.send("Xin chào!");
});

// 2. Lấy danh sách sản phẩm (có filter maxPrice)
app.get("/products", (req, res) => {
  const { maxPrice } = req.query;
  let result = products;
  if (maxPrice) {
    const price = parseInt(maxPrice);
    result = products.filter(p => p.price <= price);
  }
  res.json(result);
});

// 3. Lấy sản phẩm theo ID
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).send("Không tìm thấy sản phẩm với ID này");
  }

  res.json(product);
});

// 4. Tìm kiếm theo tên (case-insensitive)
app.get("/products/search", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).send("Vui lòng nhập query parameter ?name=");
  }

  const keyword = name.toLowerCase();
  const result = products.filter(p => p.name.toLowerCase().includes(keyword));

  res.json(result);
});

// Start server
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
