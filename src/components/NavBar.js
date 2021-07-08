import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { navbar } from "./NavBar.module.css";

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query WhateverDva {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `);
  const pages = data.allSitePage.edges;
  let homeNode = null;
  const filteredPages = pages.filter((item) => {
    if (!item.node.path.includes("404")) {
      if (item.node.path === "/") {
        homeNode = item;
      } else {
        return item;
      }
    }
  });
  const arrayWithHomeFirst = [homeNode, ...filteredPages];
  return (
    <nav>
      <ul className={navbar}>
        {arrayWithHomeFirst.map((page) => {
          return (
            <li>
              <Link to={page.node.path}>
                {page.node.path === "/"
                  ? "HOME"
                  : page.node.path.split("/")[1].toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
