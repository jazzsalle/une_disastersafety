import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  leftIcon?: boolean;
  variant?: "fill" | "outline" | "ghost";
  rightIcon?: boolean;
  color?: "primary" | "grayscale";
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
  label?: string;
  size?: "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "2xs" | "3xs" | "4xs";
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
