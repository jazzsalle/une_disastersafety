import * as React from 'react';
export interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "none" | "fill";
  slot?: React.ReactNode;
}
export declare const Footer: React.FC<FooterProps>;
export default Footer;
