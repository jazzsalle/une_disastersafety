import * as React from 'react';
export interface DatepickerProps {
  className?: string;
  style?: React.CSSProperties;
  badge?: boolean;
  today?: boolean;
  text?: string;
  selected?: boolean;
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
  range?: "none" | "start" | "middle" | "end";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Datepicker: React.FC<DatepickerProps>;
export default Datepicker;
