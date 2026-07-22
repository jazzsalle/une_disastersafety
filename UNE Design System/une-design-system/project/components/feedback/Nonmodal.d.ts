import * as React from 'react';
export interface NonmodalProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  variant?: "title" | "title+subtitle";
  subtitle?: boolean;
  resizeHandle?: boolean;
  text?: string;
  subtitlePlacement?: "none" | "right" | "bottom";
  iconButton?: boolean;
  icon?: boolean;
  /** Text content; defaults to "Body 영역\n(텍스트, 폼 요소, 이미지 등 자유롭게 설계 가능)". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Nonmodal: React.FC<NonmodalProps>;
export default Nonmodal;
