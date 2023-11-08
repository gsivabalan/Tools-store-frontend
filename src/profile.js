import { backendUrl } from "./Config";


export const addProduct= async (productData) => {
  const response = await fetch(
    `${backendUrl}/api/products`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    }
  );
  const product = await response.json();
  if(product.error!==undefined)
  alert(product.error);
else
alert(product.msg);
  return product;
}

export const getAllProduct = async () => {
  const response = await fetch(
    `${backendUrl}/api/products`
  );
  const products = await response.json();
  return products;
}


export const deleteProduct = async (product_id) => {
  const response = await fetch(
    `${backendUrl}/api/products/${product_id}`,
    {
      method: 'DELETE'
    }
  );
  const product = await response.json();
  return product;
}

export const updateProduct = async (product_id, productData) => {
  const response = await fetch(
    `${backendUrl}/api/products/${product_id}`,
    {
      method: 'PUT',
      body: JSON.stringify(productData),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const product = await response.json();
  if(product.error!==undefined)
  alert(product.error);
else
alert(product.msg);
  return product;
}

export const getbyProductid = async (product_id, productData) => {
  const response = await fetch(
    `${backendUrl}/api/products/${product_id}`,
    {
      method: 'GET',
      body: JSON.stringify(productData),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const product = await response.json();
  return product;
}