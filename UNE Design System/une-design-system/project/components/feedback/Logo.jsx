// figma node: 944:12349 Logo/메인
export function Logo(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 3.428,
        top: 2,
        width: 17.143,
        height: 20,
        overflow: "hidden",
      }}>
        <svg width={5.714} height={8.571} viewBox="0 0 5.714 8.571" fill="none" style={{
          position: "absolute",
          left: 11.429,
          top: 2.857,
          width: 5.714,
          height: 8.571,
          color: "rgb(255,199,58)",
        }}>
          <path d={"M 0 0 L 0 5.714 L 5.714 8.571 L 5.714 2.857 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={11.429} height={5.714} viewBox="0 0 11.429 5.714" fill="none" style={{
          position: "absolute",
          left: 5.714,
          top: 8.571,
          width: 11.429,
          height: 5.714,
          color: "rgb(255,199,58)",
        }}>
          <path d={"M 5.714 0 L 0 2.857 L 5.714 5.714 L 11.429 2.857 L 5.714 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={11.429} height={5.714} viewBox="0 0 11.429 5.714" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 11.429,
          height: 5.714,
          color: "rgb(74,211,255)",
        }}>
          <path d={"M 5.714 0 L 0 2.857 L 5.714 5.714 L 11.429 2.857 L 5.714 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={5.714} height={17.143} viewBox="0 0 5.714 17.143" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 2.857,
          width: 5.714,
          height: 17.143,
          color: "rgb(6,99,255)",
        }}>
          <path d={"M 0 0 L 0 17.143 L 5.714 14.286 L 5.714 2.857 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
}
export default Logo;
