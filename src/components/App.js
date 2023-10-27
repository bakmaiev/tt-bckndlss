import React, { createElement, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import dataTabs from "../data/tabs.json";
import sortTabs from "../hooks/sortTabs";

const App = () => {
  sortTabs();

  return (
    <BrowserRouter basename="/tt-bckndlss">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={createElement(
              lazy(() => import(`../${dataTabs[0].path}`))
            )}
          ></Route>
          {dataTabs.map(({ id, path }) => (
            <Route
              key={id}
              path={id}
              element={createElement(lazy(() => import(`../${path}`)))}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
