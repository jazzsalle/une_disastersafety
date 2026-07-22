import * as React from 'react';
export interface ComponentProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: React.ReactNode;
  prop2?: "40px" | "36px" | "32px" | "28px" | "24px" | "20px" | "16px" | "12px";
}
export declare const Component: React.FC<ComponentProps>;
export default Component;
