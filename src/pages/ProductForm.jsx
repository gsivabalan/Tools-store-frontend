import React, { useState } from "react";
import "./ProductForm.css";
import { addProduct } from "../profile";

const ProductForm = () => {
  const initialState = {
    product_id: "",
    product_name: "",
    description: "",
    price: 0,
    quantity: 0,
    supplier: "",
    category_name: "",
    overallreview: 0,
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addProduct(formData);
   
    setFormData(initialState);
    // Handle form submission here, e.g., sending the data to an API
  };

  return (
    <div className="product-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input
            type="text"
            id="product_id"
            name="product_id"
            value={formData.product_id}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Product Name:
          <input
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Supplier Name:
          <input
            type="text"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category Name:
          <input
            type="text"
            name="category_name"
            value={formData.category_name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Overall Review:
          <input
            type="number"
            name="overallreview"
            value={formData.overallreview}
            onChange={handleChange}
            required
          />
        </label>

        <button className="subbtn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
