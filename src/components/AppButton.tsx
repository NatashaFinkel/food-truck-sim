import React from "react";

interface AppButtonProps {
  id: string;
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}

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
