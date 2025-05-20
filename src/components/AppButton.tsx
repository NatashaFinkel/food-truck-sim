import React from "react";
import AppButtonProps from "../TypeScript/interfaces/AppButtonProps";

const AppButton: React.FC<AppButtonProps> = ({
  id,
  className,
  onClick,
  children,
}) => (
  <button id={id} className={className} onClick={onClick}>
    {children}
  </button>
);

export default AppButton;
