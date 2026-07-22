// figma node: 149:7901 Component Title
export function ComponentTitle(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1320,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--color-border-strong)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "var(--color-surface-subtle)",
        borderTop: "4px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "20px 40px 20px 40px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div className="fig-asset-286c59b108e40018-c58ddc7d" style={{
              position: "relative",
              width: 36,
              height: 36,
              flexShrink: 0,
            }} />
            <span style={{
              position: "relative",
              fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              whiteSpace: "nowrap",
              lineHeight: 1.5,
              letterSpacing: "-0.030em",
              color: "var(--color-text-primary)",
              flexShrink: 0,
            }}>{props.text1 ?? "디자인 시스템"}</span>
          </div>
          <svg width={1} height={16} viewBox="-0.500 0 1 16" fill="none" style={{
            position: "relative",
            width: 1,
            height: 16,
            flexShrink: 0,
          }}>
            <path d={"M 0.5 0 C 0.5 -0.276 0.276 -0.5 0 -0.5 C -0.276 -0.5 -0.5 -0.276 -0.5 0 L 0 0 L 0.5 0 Z M -0.5 16 C -0.5 16.276 -0.276 16.5 0 16.5 C 0.276 16.5 0.5 16.276 0.5 16 L 0 16 L -0.5 16 Z M 0 0 L -0.5 0 L -0.5 16 L 0 16 L 0.5 16 L 0.5 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 20,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-tertiary)",
            flexShrink: 0,
          }}>{props.text2 ?? "대제목 > 소제목"}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-tertiary)",
          flexShrink: 0,
        }}>{props.text3 ?? "버전 정보"}</span>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "var(--color-surface-brand-subtle)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "40px 40px 40px 40px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 32,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "페이지 명"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>부가설명</span>
      </div>
    </div>
  );
}
export default ComponentTitle;
