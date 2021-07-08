import * as React from "react";

const ReceipeStep = ({ step, index }) => {
  return <h4>{`${index + 1}. ${step.node.step}`}</h4>;
};

export default ReceipeStep;
