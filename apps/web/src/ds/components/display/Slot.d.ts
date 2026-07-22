import * as React from 'react';
export interface SlotProps {
  className?: string;
  style?: React.CSSProperties;
  lIcon?: boolean;
  variant?: "checkbox" | "text";
  rIcon?: boolean;
  align?: "left" | "center" | "right";
  subtext?: string;
  subtext2?: boolean;
  /** Text content; defaults to "Header". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Slot: React.FC<SlotProps>;
export default Slot;
