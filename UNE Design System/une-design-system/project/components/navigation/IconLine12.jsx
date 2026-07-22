// figma node: 17:4292 Icon/폴더_Line
export function IconLine12(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--color-icon-tertiary)",
      ...props.style,
    }}>
      <svg width={20} height={16} viewBox="0 0 20 16" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 4,
        width: 20,
        height: 16,
      }}>
        <path d={"M 7.17 2 L 9.17 4 L 18 4 L 18 14 L 2 14 L 2 2 L 7.17 2 Z M 8 0 L 2 0 C 0.9 0 0.01 0.9 0.01 2 L 0 14 C 0 15.1 0.9 16 2 16 L 18 16 C 19.1 16 20 15.1 20 14 L 20 4 C 20 2.9 19.1 2 18 2 L 10 2 L 8 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default IconLine12;
