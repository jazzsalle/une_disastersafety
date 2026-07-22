import * as React from 'react';
export interface DotBadgeProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "primary" | "new";
  size?: "xl" | "lg" | "md" | "sm";
}
export declare const DotBadge: React.FC<DotBadgeProps>;
export default DotBadge;
