import * as React from 'react';
export interface Checkbox2Props {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  value?: "unchecked" | "checked" | "indeterminate";
  size?: "lg" | "md" | "sm";
  label2?: string;
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
}
export declare const Checkbox2: React.FC<Checkbox2Props>;
export default Checkbox2;
