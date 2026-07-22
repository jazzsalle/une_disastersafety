import * as React from 'react';
export interface ListItemProps {
  className?: string;
  style?: React.CSSProperties;
  showCheckbox?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
  selected?: boolean;
  label?: string;
  size?: "lg" | "md" | "sm";
  helperText?: boolean;
  helperText2?: string;
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ListItem: React.FC<ListItemProps>;
export default ListItem;
