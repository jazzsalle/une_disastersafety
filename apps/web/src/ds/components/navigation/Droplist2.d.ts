import * as React from 'react';
export interface Droplist2Props {
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
export declare const Droplist2: React.FC<Droplist2Props>;
export default Droplist2;
