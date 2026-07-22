import * as React from 'react';
export interface Component4Props {
  className?: string;
  style?: React.CSSProperties;
  eventType?: string;
  location?: string;
  detectType?: string;
  prop?: "light" | "dark";
  prop2?: "default" | "hover" | "active";
  time?: string;
  /** Text content; defaults to "·". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Component4: React.FC<Component4Props>;
export default Component4;
