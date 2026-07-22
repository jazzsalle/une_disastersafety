import * as React from 'react';
export interface RadioProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: "dark" | "light";
  prop2?: boolean;
  prop3?: "lg" | "md" | "sm";
  prop4?: "default" | "hover" | "active" | "disabled";
}
export declare const Radio: React.FC<RadioProps>;
export default Radio;
