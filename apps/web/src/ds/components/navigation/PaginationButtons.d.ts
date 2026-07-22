import * as React from 'react';
export interface PaginationButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  selected?: boolean;
  state?: "default" | "hover" | "active" | "focus-visible";
}
export declare const PaginationButtons: React.FC<PaginationButtonsProps>;
export default PaginationButtons;
