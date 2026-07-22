import * as React from 'react';
export interface FilterChipProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  leftIcon?: boolean;
  variant?: "fill" | "outline" | "ghost";
  selected?: boolean;
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
  size?: "lg" | "md" | "sm";
}
export declare const FilterChip: React.FC<FilterChipProps>;
export default FilterChip;
