import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";
import Flowers from "../components/Flowers";
import Flower from "../components/Flower";
import NewFlower from "../components/NewFlower"

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/recipe" element={<NewRecipe />} />
      <Route path="/flowers" element={<Flowers />} />
      <Route path="/flower/:id" element={<Flower />} />
      <Route path="/flower" element={<NewFlower />} />
    </Routes>
  </Router>
);