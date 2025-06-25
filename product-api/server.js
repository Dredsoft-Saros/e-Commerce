const express = require('express');
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'products.json');

function readProducts() {
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
}

function writeProducts(products) {
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
}

const app = express();
app.use(express.json());

app.get('/products', (req, res) => {
  let products = readProducts();
  if (req.query.category) {
    const category = req.query.category.toLowerCase();
    products = products.filter(p => p.category.toLowerCase() === category);
  }
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const products = readProducts();
  const product = products.find(p => String(p.id) === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

app.post('/products', (req, res) => {
  const { name, category, price } = req.body;
  if (!name || !category || typeof price !== 'number') {
    return res.status(400).json({ message: 'Invalid product data' });
  }
  const products = readProducts();
  const id = products.length ? products[products.length - 1].id + 1 : 1;
  const newProduct = { id, name, category, price };
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json(newProduct);
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Product API running on port ${PORT}`);
  });
}
