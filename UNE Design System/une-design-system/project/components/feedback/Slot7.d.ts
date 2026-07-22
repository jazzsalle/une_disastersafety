import * as React from 'react';
export interface Slot7Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: boolean;
  list1?: boolean;
  variant?: "text" | "list";
  list5?: boolean;
  list2?: boolean;
  list4?: boolean;
  list3?: boolean;
  /** Text content; defaults to "Text". */
  text1?: string;
  /** Text content; defaults to "최대 1줄까지 입력하세요". */
  text2?: string;
  /** Text content; defaults to "최대 1줄까지 입력하세요". */
  text3?: string;
  /** Text content; defaults to "최대 1줄까지 입력하세요". */
  text4?: string;
}
export declare const Slot7: React.FC<Slot7Props>;
export default Slot7;
