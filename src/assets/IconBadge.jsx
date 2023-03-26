import React from "react";

const IconBadge = (props) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="#203010"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M10 12a6 6 0 110-12 6 6 0 010 12zm0-3a3 3 0 100-6 3 3 0 000 6zm4 2.75V20l-4-4-4 4v-8.25a6.97 6.97 0 008 0z" />
    </svg>
  );
};

export default IconBadge;
