import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { navbar, imagecontainer } from "./NavBar.module.css";
import { StaticImage } from "gatsby-plugin-image";

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
      <li>
        <div className={imagecontainer}>
          <a
            href="https://play.google.com/store/apps/details?id=com.kombucha_making_app"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              alt="Download app from Play store"
              src="../images/google-play-badge.png"
            />
          </a>
        </div>
      </li>
    </ul>
  );
};

export default NavBar;
