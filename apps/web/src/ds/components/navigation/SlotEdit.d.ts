import * as React from 'react';
export interface SlotEditProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: boolean;
  prop2?: boolean;
  prop3?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const SlotEdit: React.FC<SlotEditProps>;
export default SlotEdit;
