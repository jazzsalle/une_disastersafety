import * as React from 'react';
export interface ModalProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: boolean;
  title?: string;
  text?: string;
  iconButton?: boolean;
  option?: boolean;
  footer?: boolean;
  button?: boolean;
  /** Text content; defaults to "Body\n(텍스트, 폼 요소, 이미지 등이 들어가는 영역)". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Modal: React.FC<ModalProps>;
export default Modal;
