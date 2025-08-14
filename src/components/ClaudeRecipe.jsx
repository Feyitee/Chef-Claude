import React from "react";
import ReactMarkdown from "react-markdown";

const ClaudeRecipe = (props) => {
  return (
    <div className="suggested-recipe-container" aria-label="live">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </div>
  );
};

export default ClaudeRecipe;
