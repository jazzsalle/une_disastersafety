import * as React from 'react';
export interface TextareaProps {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  size?: "lg" | "md" | "sm";
  label2?: string;
  placeholder?: string;
  helperText?: boolean;
  state?: "default" | "hover" | "active" | "focus" | "complete" | "error" | "disabled";
  helperText2?: string;
  showCounter?: boolean;
  showScrollbar?: boolean;
  showResize?: boolean;
  /** Text content; defaults to "00". */
  text1?: string;
  /** Text content; defaults to "/100". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Textarea: React.FC<TextareaProps>;
export default Textarea;
