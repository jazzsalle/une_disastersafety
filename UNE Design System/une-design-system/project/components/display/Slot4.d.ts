import * as React from 'react';
export interface Slot4Props {
  className?: string;
  style?: React.CSSProperties;
  badges?: boolean;
  badge1?: boolean;
  subtitle?: boolean;
  variant?: "default";
  text?: string;
  button3?: boolean;
  buttons?: boolean;
  button2?: boolean;
  button1?: boolean;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Slot4: React.FC<Slot4Props>;
export default Slot4;
