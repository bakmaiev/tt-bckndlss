import React from "react";
import { NavLink } from "react-router-dom";
import dataTabs from "../data/tabs.json";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {dataTabs.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={id}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
