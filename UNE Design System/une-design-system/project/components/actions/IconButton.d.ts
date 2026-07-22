import * as React from 'react';
export interface IconButtonProps {
  className?: string;
  style?: React.CSSProperties;
  badge?: boolean;
  variant?: "fill" | "outline" | "ghost";
  color?: "primary" | "grayscale";
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
  size?: "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | "2xs" | "3xs" | "4xs";
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
