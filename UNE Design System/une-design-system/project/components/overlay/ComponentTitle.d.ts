import * as React from 'react';
export interface ComponentTitleProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "디자인 시스템". */
  text1?: string;
  /** Text content; defaults to "대제목 > 소제목". */
  text2?: string;
  /** Text content; defaults to "버전 정보". */
  text3?: string;
  /** Text content; defaults to "페이지 명". */
  text4?: string;
}
export declare const ComponentTitle: React.FC<ComponentTitleProps>;
export default ComponentTitle;
