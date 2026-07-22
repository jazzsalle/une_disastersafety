import * as React from 'react';
export interface UploadListProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "loading" | "complete" | "fail";
  /** Text content; defaults to "파일 명. jpg". */
  text1?: string;
  /** Text content; defaults to "500kb". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const UploadList: React.FC<UploadListProps>;
export default UploadList;
