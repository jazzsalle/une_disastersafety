import * as React from 'react';
export interface Badge2Props {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  variant?: "solid" | "soild-pastel" | "outline" | "dot-accent" | "dot-netural";
  leftIcon?: boolean;
  shape?: "round-square" | "cylinder";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  color?: "primary" | "warning" | "success" | "error" | "light-warning" | "grayscale";
}
export declare const Badge2: React.FC<Badge2Props>;
export default Badge2;
