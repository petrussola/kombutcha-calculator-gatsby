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
        return null;
      } else {
        return item;
      }
    } else {
      return null;
    }
  });
  const arrayWithHomeFirst = [homeNode, ...filteredPages];
  return (
      <ul className={navbar}>
        {arrayWithHomeFirst.map((page, index) => {
          return (
            <li key={index}>
              <Link to={page.node.path}>
                {page.node.path === "/"
                  ? "HOME"
                  : page.node.path.split("/")[1].toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
  );
};

export default NavBar;
