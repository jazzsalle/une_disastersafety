import * as React from 'react';
export interface Slot5Props {
  className?: string;
  style?: React.CSSProperties;
  description4?: string;
  name4?: string;
  list4?: boolean;
  list1?: boolean;
  variant?: "text" | "lists";
  description1?: string;
  name1?: string;
  description3?: string;
  list2?: boolean;
  description2?: string;
  name2?: string;
  name3?: string;
  list3?: boolean;
  /** Text content; defaults to "Contents 주요 콘텐츠 영역 (text, lists, metadata, or any composition.)". */
  text1?: string;
}
export declare const Slot5: React.FC<Slot5Props>;
export default Slot5;
