import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <navbar>
        <ul>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/receipe">Receipe</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </navbar>
      <h1>{pageTitle}</h1>
      {children}
    </div>
  );
};

export default Layout;
