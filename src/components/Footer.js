import React from "react";

import { footer } from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={footer}>
      Made with 💙 by{" "}
      <span>
        &nbsp;<a href="https://www.peresola.com/">peresola.com</a>
      </span>
    </div>
  );
}
