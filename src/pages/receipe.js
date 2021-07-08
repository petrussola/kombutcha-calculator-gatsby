import * as React from "react";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";

import ReceipeStep from "../components/ReceipeStep";

const ReceipePage = () => {
  const data = useStaticQuery(graphql`
    query Whatever {
      allStepsJson {
        edges {
          node {
            id
            step
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h2>## Kombucha Receipe Step by Step ##</h2>
      {data.allStepsJson.edges.map((step, index) => {
        return <ReceipeStep step={step} index={index} key={index} />;
      })}
    </Layout>
  );
};

export default ReceipePage;
