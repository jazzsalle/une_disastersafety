import * as React from 'react';
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  leftIcon?: boolean;
  mode?: "dark" | "light";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  variant?: "solid" | "solid-pastel" | "outline" | "dot-accent" | "dot-neutral";
  color?: "primary" | "success" | "error" | "secondary" | "warning" | "grayscale";
  shape?: "round-square" | "cylinder";
}
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
