import * as React from 'react';
export interface InputProps {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  mode?: "light" | "dark";
  label2?: string;
  helperText?: boolean;
  helperText2?: string;
  placeholder?: string;
  leftIcon?: boolean;
  size?: "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "2xs";
  rightButton?: boolean;
  state?: "default" | "hover" | "active" | "focus-visible" | "complete" | "error" | "disabled";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Input: React.FC<InputProps>;
export default Input;
