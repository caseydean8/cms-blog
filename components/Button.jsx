import React, { forwardRef } from "react";

const Button = forwardRef(({href, onClick, text}, ref) => {
  return (
    <button
      className="bg-transparent hover:bg-teal text-lg font-medium text-teal hover:text-white border border-teal rounded px-4 py-3 cursor-pointer"
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {text}
    </button>
  );
});

export default Button;

