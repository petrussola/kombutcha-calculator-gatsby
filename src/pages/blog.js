import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export default function Blog({ data }) {
  return (
    <Layout>
      <h1>Blog</h1>
      {data.allFile.nodes.length === 0 ? (
        <p>No blog posts yet</p>
      ) : (
        <ul>
          {data.allFile.nodes.map((post) => (
            <li>{post.name}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
}

export const query = graphql`
  query KombuchaPosts {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;
