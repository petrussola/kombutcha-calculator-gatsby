import React from "react";
import Layout from "../components/Layout";

import { graphql } from "gatsby";

import DescriptionParagraph from "../components/DescriptionParagraph";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allKombuchaJson.edges.map((para) => {
        return <DescriptionParagraph para={para} key={para.node.id} />;
      })}
    </Layout>
  );
};

export const query = graphql`
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
`;

export default IndexPage;
