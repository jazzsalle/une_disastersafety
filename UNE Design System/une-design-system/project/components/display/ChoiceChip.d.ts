import * as React from 'react';
export interface ChoiceChipProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  variant?: "fill" | "outline" | "ghost";
  selected?: boolean;
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
  size?: "lg" | "md" | "sm";
}
export declare const ChoiceChip: React.FC<ChoiceChipProps>;
export default ChoiceChip;
