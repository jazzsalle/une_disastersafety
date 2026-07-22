import * as React from 'react';
export interface TooltipBasicProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: boolean;
  prop2?: boolean;
  prop3?: "dark" | "light";
  s?: string;
  prop4?: "top" | "bottom" | "left" | "right";
  prop5?: "lg" | "sm";
  l?: string;
  prop6?: "left" | "center" | "right";
}
export declare const TooltipBasic: React.FC<TooltipBasicProps>;
export default TooltipBasic;
