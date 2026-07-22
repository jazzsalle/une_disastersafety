import * as React from 'react';
export interface TooltipProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: boolean;
  title?: boolean;
  title2?: string;
  button?: boolean;
  size?: "lg" | "sm";
  placement?: "top" | "bottom" | "left" | "right";
  pointer?: "left" | "middle" | "right";
  /** Text content; defaults to "짧은 텍스트만 입력하세요". */
  text1?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
