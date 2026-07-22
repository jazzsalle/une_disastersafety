import * as React from 'react';
export interface Header5Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: boolean;
  divider?: boolean;
  description?: boolean;
  description2?: string;
  title?: string;
  descriptionPosition?: "right" | "bottom";
  button?: boolean;
  iconButton?: boolean;
  size?: "lg" | "md" | "sm";
}
export declare const Header5: React.FC<Header5Props>;
export default Header5;
