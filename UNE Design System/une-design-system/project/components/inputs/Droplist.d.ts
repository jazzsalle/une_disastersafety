import * as React from 'react';
export interface DroplistProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: boolean;
  prop2?: "dark" | "light";
  prop3?: string;
  prop4?: "default" | "hover" | "selected" | "disabled";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Droplist: React.FC<DroplistProps>;
export default Droplist;
