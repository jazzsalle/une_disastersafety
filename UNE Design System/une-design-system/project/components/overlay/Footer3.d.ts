import * as React from 'react';
export interface Footer3Props {
  className?: string;
  style?: React.CSSProperties;
  divider?: boolean;
  secondary?: boolean;
  primary?: boolean;
  size?: "lg" | "md" | "sm";
  option?: boolean;
  actions?: boolean;
}
export declare const Footer3: React.FC<Footer3Props>;
export default Footer3;
