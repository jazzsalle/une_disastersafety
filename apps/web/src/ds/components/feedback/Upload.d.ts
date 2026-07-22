import * as React from 'react';
export interface UploadProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover";
  /** Text content; defaults to "업로드할 파일을 선택하거나 이곳으로 끌어다 놓아주세요.". */
  text1?: string;
  /** Text content; defaults to "파일 형식 표출 · 최대 999MB · 최대 5개". */
  text2?: string;
}
export declare const Upload: React.FC<UploadProps>;
export default Upload;
