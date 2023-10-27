import React from "react";
import dataProducts from "../data/products.json";

const DummyTable = () => {
  return (
    <div className="shadow-md relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 ">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50 ">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {dataProducts.map((product, index) => (
            <tr key={index} className="border-b border-gray-200 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
              >
                {product.productName}
              </th>
              <td className="px-6 py-4">{product.color}</td>
              <td className="px-6 py-4 bg-gray-50">{product.category}</td>
              <td className="px-6 py-4">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DummyTable;
