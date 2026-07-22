import * as React from 'react';
export interface V03TextButtonProps {
  className?: string;
  style?: React.CSSProperties;
  lIcon?: boolean;
  prop?: "grayscale" | "primary" | "primary_white";
  prop2?: "8px" | "4px";
  rIcon?: boolean;
  underline?: boolean;
  prop3?: "medium_20px" | "regular_20px" | "medium_18px" | "regular_18px" | "medium_16px" | "regular_16px" | "medium_14px" | "regular_14px" | "medium_12px" | "regular_12px";
  label?: string;
  prop4?: "default" | "hover" | "active" | "focus" | "disabled";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const V03TextButton: React.FC<V03TextButtonProps>;
export default V03TextButton;
