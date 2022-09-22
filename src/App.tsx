import React from "react";
import "./App.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { GenRoute } from "./router/index";

function App() {
  
  return (
    <BrowserRouter>
      <PageRender></PageRender>
    </BrowserRouter>
  );
}

const PageRender = () => {
  const routers = GenRoute();
  const Routers = useRoutes(routers);

  return Routers;
};

export default App;
