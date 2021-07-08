import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { page, pagetitle, body } from "./Layout.module.css";
import "@fontsource/open-sans";

import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={page}>
      <NavBar />
      <div>
        <h1 className={pagetitle}>{data.site.siteMetadata.title}</h1>
        <div className={body}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
