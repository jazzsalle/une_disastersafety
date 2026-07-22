import * as React from 'react';
export interface HeaderCellProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  state?: "default" | "hover" | "active" | "focus-visible" | "disabled";
}
export declare const HeaderCell: React.FC<HeaderCellProps>;
export default HeaderCell;
