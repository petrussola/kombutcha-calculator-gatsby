import React, { useState } from "react";
import Layout from "../components/Layout";

import {
  layout,
  results,
  inputstyle,
  label,
  form,
} from "../components/Calculator.module.css";

const initialIngredients = {
  water: 0,
  sugar: 0,
  tea: 0,
  vinegar: 0,
};

const proportions = {
  sugar: { quantity: 57.89, unit: "gr" },
  tea: { quantity: 4.21, unit: "gr" },
  vinegar: { quantity: 3.16, unit: "tea spoons" },
};

const IndexPage = () => {
  const [ingredients, setIngredients] = useState(initialIngredients);

  const changeHandler = (e) => {
    setIngredients({
      [e.target.name]: e.target.value,
      sugar: e.target.value * proportions.sugar.quantity,
      tea: e.target.value * proportions.tea.quantity,
      vinegar: e.target.value * proportions.vinegar.quantity,
    });
  };

  return (
    <Layout>
      <div className={layout}>
        <form className={form}>
          <label htmlFor="water" className={label}>
            Litres of water:
          </label>
          <input
            type="number"
            name="water"
            id="water"
            value={ingredients.water}
            onChange={changeHandler}
            className={inputstyle}
          />
        </form>
        <div className={results}>
          <h2>{`Sugar: ${Math.round(ingredients.sugar)} ${
            proportions.sugar.unit
          }`}</h2>
          <h2>{`Tea: ${Math.round(ingredients.tea)} ${
            proportions.tea.unit
          }`}</h2>
          <h2>{`Vinegar: ${Math.round(ingredients.vinegar)} ${
            proportions.vinegar.unit
          }`}</h2>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
