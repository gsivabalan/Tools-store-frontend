import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashbord">
      <h1>Dashboard </h1>
      <br></br>
      <div className="landingDash">
        <h1> Tools Management Store </h1><br></br>
        <div >
          <p>
            Complete DetailS of Product, Suppliers , quick stock reports, and accurate
            inventory and Analysis of goods 
          </p>
          <ul>
            <ol>
              Keep a record of different product variants and prices and its condition
            </ol>
            <ol>
              Records of Sold goods and product 
            </ol>
            <ol>
              Monitor stock level using detailed reports
            </ol>
          </ul>
        </div><img src="/dashimg.png" alt="dashimg" width="300" height="300"/>
      </div><br></br><br></br>
      <p>
        To Add new Product to inventory -- <Link to="/product">Click here</Link>
      </p>
    </div>
  );
};

export default Dashboard;
