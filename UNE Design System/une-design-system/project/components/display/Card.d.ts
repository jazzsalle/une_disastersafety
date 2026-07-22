import * as React from 'react';
export interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: boolean;
  prop2?: boolean;
  prop3?: "vertical" | "horizontal";
  prop4?: boolean;
  prop5?: "elevated" | "fill" | "outline";
  prop6?: boolean;
}
export declare const Card: React.FC<CardProps>;
export default Card;
