import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { page, core, pagetitle, body } from "./Layout.module.css";
import "@fontsource/open-sans";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Seo from "./seo";

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
      <Seo />
      <NavBar />
      <div className={core}>
        <h1 className={pagetitle}>{data.site.siteMetadata.title}</h1>
        <div className={body}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
