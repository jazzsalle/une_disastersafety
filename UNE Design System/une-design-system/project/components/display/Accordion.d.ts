import * as React from 'react';
export interface AccordionProps {
  className?: string;
  style?: React.CSSProperties;
  showList?: boolean;
  headerCheckbox?: boolean;
  variant?: "line" | "select";
  bodyText?: string;
  leftIcon?: boolean;
  size?: "lg" | "md" | "sm";
  showBodyText?: boolean;
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
  title?: string;
  open?: boolean;
  helperText?: string;
  helpertext?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
