import React, { useState,useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import { getbyProductid ,updateProduct} from '../profile';
import './ModifyProduct.css';


const ModifyProduct = ({ product, onUpdate }) => {
 

  const initialState = {
    product_id: "",
    product_name: "",
    description: "",
    price: 0,
    quantity: 0,
    supplier: [],
    category_name: "",
    overallreview: 0,
  };
  const [params] = useSearchParams();
  
  const [editedProduct, setEditedProduct] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleSupplierChange = (e) => {
    const newSuppliers = e.target.value.split(',').map((supplier) => supplier.trim());
    setEditedProduct({
      ...editedProduct,
      supplier: newSuppliers,
    });
  };
  
    const navigate = useNavigate();
  
    const loadprofile= async () => {
      console.log(params.get('id'));
      const response = await getbyProductid(params.get('id'));
      setEditedProduct(response);
    }
  
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await updateProduct(params.get('id'), editedProduct);
      navigate('/productList');
    };
  
    useEffect(() => {
      loadprofile();
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  
  return (
    <div className="modify-product-container">
      <h2>Modify Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="input-label">
            Product Name:
            <input
              type="text"
              name="product_name"
              value={editedProduct.product_name}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
        </div>

        <div>
          <label className="input-label">
            Description:
            <textarea
              name="description"
              value={editedProduct.description}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
        </div>

        <div>
          <label className="input-label">
            Price:
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
        </div>

        <div>
          <label className="input-label">
            Quantity:
            <input
              type="number"
              name="quantity"
              value={editedProduct.quantity}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
        </div>

        <div>
          <label className="input-label">
            Suppliers:
            <input
              type="text"
              name="supplier"
              value={editedProduct.supplier.join(', ')}
              onChange={handleSupplierChange}
              className="input-field"
            />
             <small>Enter supplier names separated by a comma and space (e.g., Supplier 1, Supplier 2)</small>
         </label>
        </div>

        <div>
          <label className="input-label">
            Category Name:
            <input
              type="text"
              name="category_name"
              value={editedProduct.category_name}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
        </div>

        <div>
          <label className="input-label">
            Overall Review:
            <input
              type="number"
              name="overallreview"
              value={editedProduct.overallreview}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
        </div>

        <button type="submit" className="update-button">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default ModifyProduct;