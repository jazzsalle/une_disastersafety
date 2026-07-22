import * as React from 'react';
export interface Input3Props {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  variant?: "standard" | "inline";
  label2?: string;
  iconButton?: boolean;
  icon?: boolean;
  placeHolder?: string;
  size?: "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "2xs";
  trailingText?: boolean;
  trailingText2?: string;
  helperText?: boolean;
  helperText2?: string;
  state?: "default" | "hover" | "active" | "focus" | "complete" | "error" | "disabled";
}
export declare const Input3: React.FC<Input3Props>;
export default Input3;
