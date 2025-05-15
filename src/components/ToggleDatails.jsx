import React, { useState } from "react";

export default function ToggleAllDetailsButton({
  targetClass = "",
  expandLabel = "Свернуть все",
  collapseLabel = "Развернуть все",
  className = ""
}) {
  const [expanded, setExpanded] = useState(true);

  const handleClick = () => {
const containers = document.querySelectorAll(`.${targetClass}`);
containers.forEach(container => {
  const allDetails = container.querySelectorAll("details");
  allDetails.forEach(details => {
    details.open = expanded;
  });
});
setExpanded(prev => !prev);

  };

  return (
    <button
      onClick={handleClick}
      className={`button ${className}`.trim()}
      type="button"
    >
      {expanded ? expandLabel : collapseLabel}
    </button>
  );
}
