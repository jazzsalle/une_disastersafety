import * as React from 'react';
export interface Slot6Props {
  className?: string;
  style?: React.CSSProperties;
  option?: boolean;
  variant?: "default";
  buttons?: boolean;
  sub?: boolean;
  main?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Slot6: React.FC<Slot6Props>;
export default Slot6;
