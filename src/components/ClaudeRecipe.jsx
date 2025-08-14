import React from "react";
import ReactMarkdown from "react-markdown";

const ClaudeRecipe = (props) => {
  return (
    <div>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </div>
  );
};

export default ClaudeRecipe;
