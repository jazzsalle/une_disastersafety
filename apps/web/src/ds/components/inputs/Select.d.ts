import * as React from 'react';
export interface SelectProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: boolean;
  prop2?: "dark" | "light";
  prop3?: boolean;
  prop4?: string;
  prop5?: string;
  prop6?: boolean;
  prop7?: "standard" | "inline";
  prop8?: "default" | "hover" | "focus" | "complete" | "error" | "disabled";
  prop9?: "xl" | "lg" | "md";
  /** Text content; defaults to "레이블". */
  text1?: string;
  /** Text content; defaults to "선택하세요". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Select: React.FC<SelectProps>;
export default Select;
