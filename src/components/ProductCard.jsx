import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 text-center shadow-sm">
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top p-3"
          style={{ height: "250px", objectFit: "contain" }}
        />

        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
          <p className="card-text">{product.description.substring(0, 90)}...</p>
          <p className="text-muted fw-bold">${product.price.toFixed(2)}</p>

          {product.price < 10 && (
            <select
              className="form-select mb-3 focus:shadow-none focus:outline-none"
              style={{ outline: "none", boxShadow: "none" }}
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          )}

          <div className="d-flex justify-content-center gap-2 mt-auto">
            {product.price < 10 && (
              <Link to={`/product/${product.id}`} className="btn btn-dark">
                Buy Now
              </Link>
            )}

            {product.price < 10 ? (
              <button
                className="btn btn-outline-dark"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            ) : (
              <button className="btn btn-secondary" disabled>
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
