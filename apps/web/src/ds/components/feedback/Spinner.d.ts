import * as React from 'react';
export interface SpinnerProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
}
export declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
