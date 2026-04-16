import React from "react"

export interface MyIconProps {
  name: string;
  size?: string | number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
 onClick?: React.MouseEventHandler<HTMLElement>;
}