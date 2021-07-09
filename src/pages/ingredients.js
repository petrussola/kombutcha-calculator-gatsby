import * as React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";

import IngredientItem from "../components/IngredientItem";

const Ingredients = () => {
  const data = useStaticQuery(graphql`
    query Ingredients {
      allIngredientsJson {
        edges {
          node {
            name
            description
            link
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Ingredients</h1>
      {data.allIngredientsJson.edges.map((step, index) => {
        return <IngredientItem step={step} key={index} />;
      })}
    </Layout>
  );
};

export default Ingredients;
