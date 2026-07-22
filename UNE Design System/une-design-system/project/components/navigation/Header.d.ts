import * as React from 'react';
export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  toolButton?: boolean;
  login?: boolean;
  buttons?: boolean;
  button2?: boolean;
  button1?: boolean;
  /** Text content; defaults to "시스템 명". */
  text1?: string;
  /** Text content; defaults to "서브 서비스 명". */
  text2?: string;
  /** Text content; defaults to "로그인해주세요". */
  text3?: string;
  /** Text content; defaults to "님 환영합니다". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Header: React.FC<HeaderProps>;
export default Header;
