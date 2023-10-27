import React from "react";
import dataProducts from "../data/products.json";

const DummyChart = () => {
  return dataProducts.map((product, index) => (
    <>
      <h2 class="text-xl font-semibold text-gray-900 p-2 ">
        {product.productName}
      </h2>
      <div key={index} className="bg-white rounded-lg shadow p-2 m-2 ">
        <div className="flex justify-between">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 pb-2">
              {product.purchases}
            </h5>
            <p className="text-base font-normal text-gray-500">
              Purchases this week
            </p>
          </div>
          <div
            className={`flex items-center px-2.5 py-0.5 text-base font-semibold ${
              parseFloat(product.percentage) < 0
                ? "text-red-500"
                : "text-green-500"
            } text-center`}
          >
            {product.percentage}
          </div>
        </div>
      </div>
    </>
  ));
};

export default DummyChart;
