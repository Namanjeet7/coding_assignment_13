import React from 'react';
import './Button.css';

const Button = ({ primary, disabled, hovered, pressed, children }) => {
  let className = "button";
  if (primary) className += " button-primary";
  if (disabled) className += " button-disabled";
  if (hovered) className += " button-hovered";
  if (pressed) className += " button-pressed";

  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
