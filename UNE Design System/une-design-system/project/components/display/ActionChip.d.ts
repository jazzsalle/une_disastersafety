import * as React from 'react';
export interface ActionChipProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  variant?: "fill" | "outline" | "ghost";
  color?: "grayscale" | "primary";
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
  size?: "lg" | "md" | "sm";
}
export declare const ActionChip: React.FC<ActionChipProps>;
export default ActionChip;
