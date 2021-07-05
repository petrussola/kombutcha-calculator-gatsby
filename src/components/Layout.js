import * as React from "react";
import { Link } from "gatsby";
import { page, navbar, pagetitle } from "./Layout.module.css";
import "@fontsource/open-sans"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={page}>
      <navbar>
        <ul className={navbar}>
          <li>
            <Link to="/">Calculator</Link>
          </li>
          <li>
            <Link to="/receipe">Receipe</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </navbar>
      <div>
        <h1 className={pagetitle}>{pageTitle}</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
