import React from "react";
import Layout from "../components/Layout";

import { useStaticQuery, graphql } from "gatsby";

import DescriptionParagraph from "../components/DescriptionParagraph";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query KombuchaText {
      allKombuchaJson {
        edges {
          node {
            id
            text
          }
        }
      }
    }
  `);
  return (
    <Layout>
      {data.allKombuchaJson.edges.map((para) => {
        return <DescriptionParagraph para={para} key={para.node.id} />;
      })}
    </Layout>
  );
};

export default IndexPage;
