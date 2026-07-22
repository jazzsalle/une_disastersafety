import * as React from 'react';
export interface TabLineProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: string;
  prop2?: "light" | "dark";
  prop3?: "lg" | "md";
  prop4?: "default" | "hover" | "active" | "selected";
}
export declare const TabLine: React.FC<TabLineProps>;
export default TabLine;
