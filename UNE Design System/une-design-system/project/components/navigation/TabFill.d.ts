import * as React from 'react';
export interface TabFillProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: string;
  prop2?: "light" | "dark";
  prop3?: "lg" | "md";
  prop4?: "default" | "hover" | "active" | "selected";
  prop5?: "first" | "middle" | "last";
}
export declare const TabFill: React.FC<TabFillProps>;
export default TabFill;
