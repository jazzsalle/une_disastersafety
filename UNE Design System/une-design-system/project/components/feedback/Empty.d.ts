import * as React from 'react';
export interface EmptyProps {
  className?: string;
  style?: React.CSSProperties;
  visual?: boolean;
  title?: string;
  description?: boolean;
  size?: "lg" | "md" | "sm";
  description2?: string;
  actions?: boolean;
  primary?: boolean;
  secondary?: boolean;
}
export declare const Empty: React.FC<EmptyProps>;
export default Empty;
