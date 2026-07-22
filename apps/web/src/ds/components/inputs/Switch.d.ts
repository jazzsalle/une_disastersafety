import * as React from 'react';
export interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
  checked?: boolean;
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
}
export declare const Switch: React.FC<SwitchProps>;
export default Switch;
