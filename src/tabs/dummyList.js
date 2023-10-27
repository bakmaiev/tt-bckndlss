import React from "react";
import dataProducts from "../data/products.json";

const DummyList = () => {
  return (
    <div className="shadow-md">
      <ul className="p-1 font-medium text-gray-700 list-inside">
        {dataProducts.map((product, index) => (
          <li
            className={`flex p-4 items-center border-gray-200 ${
              index !== dataProducts.length - 1 && "border-b"
            }`}
            key={index}
          >
            {product.productName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DummyList;
