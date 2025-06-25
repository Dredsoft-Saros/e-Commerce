## Prerequisites

Clone the project

```bash
  git clone https://github.com/Dredsoft-Saros/eCommerce.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  yarn install
```

Start the main e-commerce project

```bash
  yarn start
```

You can access the application by opening the following URL in your browser:

```bash
  http://localhost:3000
```

---

## Product API

This repository also contains a simple **Product API** that demonstrates building RESTful endpoints with Node and Express. The API exposes basic product data stored in `product-api/products.json`.

### Tech Stack

- Node.js
- Express
- Yarn (package manager)

### Running the Product API

```bash
yarn run product-api
```

The server will start on port `4000` by default. You can test the endpoints using `curl` or any HTTP client.

### Endpoints

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/products` | Returns all products. Supports filtering by category using the `category` query parameter. |
| `GET` | `/products/:id` | Returns a single product by its `id`. |
| `POST` | `/products` | Creates a new product. Requires a JSON body containing `name`, `category` and numeric `price`. |

### Examples

List all products:

```bash
curl http://localhost:4000/products
```

Filter by category:

```bash
curl "http://localhost:4000/products?category=Apparel"
```

Get one product:

```bash
curl http://localhost:4000/products/1
```

Create a product:

```bash
curl -X POST http://localhost:4000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Sneakers","category":"Apparel","price":79.99}'
```

The newly created product will be stored in `product-api/products.json`.
