import * as React from 'react';
export interface ToastProps {
  className?: string;
  style?: React.CSSProperties;
  intent?: "info" | "success" | "warning" | "error" | "none";
  iconButton?: boolean;
  text?: string;
}
export declare const Toast: React.FC<ToastProps>;
export default Toast;
