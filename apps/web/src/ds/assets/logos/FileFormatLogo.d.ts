import * as React from 'react';
export type FileFormatLogoName =
  | "빌더"
  | "관리"
  | "관제"
  | "메인"
  | "파일포맷_docx"
  | "파일포맷_hwpx"
  | "파일포맷_jpeg"
  | "파일포맷_pdf"
  | "파일포맷_png"
  | "파일포맷_pptx"
  | "sop"
  | "파일포맷_xlsx";
export interface FileFormatLogoProps {
  name: FileFormatLogoName;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare const FileFormatLogo: React.FC<FileFormatLogoProps>;
export default FileFormatLogo;
