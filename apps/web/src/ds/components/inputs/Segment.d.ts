import * as React from 'react';
export interface SegmentProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: boolean;
  intent?: "none" | "primary";
  lablel?: string;
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
  selected?: boolean;
  size?: "lg" | "md" | "sm";
}
export declare const Segment: React.FC<SegmentProps>;
export default Segment;
