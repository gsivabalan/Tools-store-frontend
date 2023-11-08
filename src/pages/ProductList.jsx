import React ,{useEffect,useState} from "react";
import { getAllProduct } from "../profile";

import './ProductList.css';
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setproduct] = useState([{
    product_id: "",
    product_name: "",
    description: "",
    price: 0,
    quantity: 0,
    supplier: [],
    category_name: "",
    overallreview: 0,
  }]);

  const loadprofile = async () => {
    const response = await getAllProduct();
    setproduct(response);
  };
  useEffect(() => {
    loadprofile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [searchText, setSearchText] = useState('');
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="product-list-container">
    <span className="headname">Product List</span>
    <div className="search-box">
        <input
          type="text"
          placeholder="Search by Product Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => setSearchText('')}>Clear</button>
      </div>
    <table className="product-table">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Supplier</th>
          <th>Category Name</th>
          <th>Overall Review</th>
          <th>Modify</th>
        </tr>
      </thead>
      <tbody>
        { filteredProducts.length > 0 ?
        (filteredProducts.map((product) => (
          <tr key={product.product_id}>
            <td>{product.product_id}</td>
            <td>{product.product_name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
                
            { product.supplier.map((suppliers, index) => (
                    <li key={index}>{suppliers}</li>
                  ))}
               
              </td>
            <td>{product.category_name}</td>
            <td>{product.overallreview}</td>
            <td> <Link to={`/editproducts/?id=${product.product_id}`} >click here</Link>
                </td>
          </tr>
        ))):""}
      </tbody>
    </table>
  </div>
  );
};

export default ProductList;
