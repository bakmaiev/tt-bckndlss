import React from "react";
import { NavLink } from "react-router-dom";
import dataTabs from "../data/tabs.json";

const Header = () => {
  return (
    <header className="bg-white border-gray-200 shadow-md p-4 mb-4">
      <nav className="flex flex-wrap items-center justify-center mx-auto p-4">
        <ul className="flex flex-col border items-center border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white w-full md:w-fit">
          {dataTabs.map(({ id, title }) => (
            <li
              key={id}
              className="block py-2 pl-3 pr-4 text-lg font-bold text-whiterounded md:bg-transparent text-700 md:p-0"
            >
              <NavLink to={id}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
