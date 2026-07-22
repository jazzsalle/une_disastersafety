import * as React from 'react';
export interface TreeProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: boolean;
  prop2?: "1뎁스" | "2뎁스" | "3뎁스" | "4뎁스" | "5뎁스";
  prop3?: "open" | "collapsed" | "leaf";
  prop4?: string;
  label?: string;
  slot?: boolean;
  slot2?: React.ReactNode;
  prop5?: "default" | "hover" | "selected";
  prop6?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Tree: React.FC<TreeProps>;
export default Tree;
