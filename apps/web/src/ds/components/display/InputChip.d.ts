import * as React from 'react';
export interface InputChipProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  leftIcon?: boolean;
  variant?: "fill" | "outline" | "ghost";
  size?: "lg" | "md" | "sm";
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
}
export declare const InputChip: React.FC<InputChipProps>;
export default InputChip;
