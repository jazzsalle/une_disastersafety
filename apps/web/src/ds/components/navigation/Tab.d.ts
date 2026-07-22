import * as React from 'react';
export interface TabProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  selected?: boolean;
  leftIcon?: boolean;
  size?: "lg" | "md" | "sm";
  badge?: boolean;
  state?: "default" | "hover" | "active" | "focus-visible";
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Tab: React.FC<TabProps>;
export default Tab;
