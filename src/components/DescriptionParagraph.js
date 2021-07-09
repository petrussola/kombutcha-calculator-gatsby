import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { image } from "./DescriptionParagraph.module.css";

export default function DescriptionParagraph({ para }) {
  return (
    <div>
      {para.node.id === "1" ? (
        <StaticImage className={image} alt="test" src="../images/kombucha.jpg" />
      ) : null}
      <h4>{para.node.text}</h4>
    </div>
  );
}
