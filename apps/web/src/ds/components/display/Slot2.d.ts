import * as React from 'react';
export interface Slot2Props {
  className?: string;
  style?: React.CSSProperties;
  lIcon?: boolean;
  variant?: "checkbox" | "text" | "button" | "iconbutton" | "badge" | "input";
  rIcon?: boolean;
  align?: "left" | "center" | "right";
  subtext?: string;
  subtext2?: boolean;
  /** Text content; defaults to "Body". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Slot2: React.FC<Slot2Props>;
export default Slot2;
