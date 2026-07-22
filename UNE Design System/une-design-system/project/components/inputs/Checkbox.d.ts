import * as React from 'react';
export interface CheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  checked?: boolean;
  state?: "default" | "hover" | "active" | "disabled";
  size?: "lg" | "md" | "sm";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
