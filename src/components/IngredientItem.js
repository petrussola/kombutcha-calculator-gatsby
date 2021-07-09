import React from "react";

export default function IngredientItem({ step }) {
  return (
    <div>
      <h3>{step.node.name}</h3>
      <h4>{step.node.description}</h4>
      {step.node.link ? (
        <h5>
          <a
            href={step.node.link}
          >{`Click here for more info about ${step.node.name}`}</a>
        </h5>
      ) : null}
    </div>
  );
}
