import * as React from 'react';
export interface BreadcrumbProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  label?: boolean;
  size?: "lg" | "md" | "sm";
  leftIcon?: boolean;
  label2?: string;
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
}
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
