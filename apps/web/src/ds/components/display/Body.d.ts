import * as React from 'react';
export interface BodyProps {
  className?: string;
  style?: React.CSSProperties;
  slot?: React.ReactNode;
  variant?: "fill" | "line" | "none";
}
export declare const Body: React.FC<BodyProps>;
export default Body;
