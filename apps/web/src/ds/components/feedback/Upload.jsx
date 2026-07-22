import { Button } from '../actions/Button.jsx';

// figma node: 2628:3461 Upload (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Upload(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-brand-subtle)",
      outline: "1px dashed var(--color-border-brand)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-10) * 1px)",
      padding: "40px 40px 40px 40px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-13) * 1px)",
      paddingTop: "calc(var(--space-13) * 1px)",
      paddingRight: "calc(var(--space-13) * 1px)",
      paddingBottom: "calc(var(--space-13) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-3xl) * 1px)",
          height: 32,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 32,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={24.381} height={26.667} viewBox="0 0 24.381 26.667" fill="none" style={{
              position: "absolute",
              left: 3.81,
              top: 2.667,
              width: 24.381,
              height: 26.667,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 3.048 23.619 L 7.619 23.619 L 7.619 14.476 L 16.762 14.476 L 16.762 23.619 L 21.333 23.619 L 21.333 9.905 L 12.19 3.048 L 3.048 9.905 L 3.048 23.619 Z M 3.048 26.667 C 2.21 26.667 1.492 26.369 0.896 25.772 C 0.299 25.175 0 24.457 0 23.619 L 0 9.905 C 0 9.422 0.108 8.965 0.325 8.533 C 0.54 8.102 0.838 7.746 1.219 7.467 L 10.362 0.61 C 10.641 0.406 10.933 0.254 11.238 0.152 C 11.543 0.051 11.86 0 12.19 0 C 12.521 0 12.838 0.051 13.143 0.152 C 13.448 0.254 13.74 0.406 14.019 0.61 L 23.162 7.467 C 23.543 7.746 23.842 8.102 24.058 8.533 C 24.273 8.965 24.381 9.422 24.381 9.905 L 24.381 23.619 C 24.381 24.457 24.083 25.175 23.486 25.772 C 22.889 26.369 22.171 26.667 21.333 26.667 L 13.714 26.667 L 13.714 17.524 L 10.667 17.524 L 10.667 26.667 L 3.048 26.667 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "업로드할 파일을 선택하거나 이곳으로 끌어다 놓아주세요."}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "파일 형식 표출 · 최대 999MB · 최대 5개"}</span>
      </div>
      <Button
        style={{
          position: "relative",
          height: 36,
          width: 77,
          flexShrink: 0,
        }}
        variant={"outline"}
        color={"primary"}
        state={"default"}
        size={"sm"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-subtle)",
      outline: "1px dashed var(--color-border-muted)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-10) * 1px)",
      padding: "40px 40px 40px 40px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-13) * 1px)",
      paddingTop: "calc(var(--space-13) * 1px)",
      paddingRight: "calc(var(--space-13) * 1px)",
      paddingBottom: "calc(var(--space-13) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-3xl) * 1px)",
          height: 32,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 32,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={24.381} height={26.667} viewBox="0 0 24.381 26.667" fill="none" style={{
              position: "absolute",
              left: 3.81,
              top: 2.667,
              width: 24.381,
              height: 26.667,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 3.048 23.619 L 7.619 23.619 L 7.619 14.476 L 16.762 14.476 L 16.762 23.619 L 21.333 23.619 L 21.333 9.905 L 12.19 3.048 L 3.048 9.905 L 3.048 23.619 Z M 3.048 26.667 C 2.21 26.667 1.492 26.369 0.896 25.772 C 0.299 25.175 0 24.457 0 23.619 L 0 9.905 C 0 9.422 0.108 8.965 0.325 8.533 C 0.54 8.102 0.838 7.746 1.219 7.467 L 10.362 0.61 C 10.641 0.406 10.933 0.254 11.238 0.152 C 11.543 0.051 11.86 0 12.19 0 C 12.521 0 12.838 0.051 13.143 0.152 C 13.448 0.254 13.74 0.406 14.019 0.61 L 23.162 7.467 C 23.543 7.746 23.842 8.102 24.058 8.533 C 24.273 8.965 24.381 9.422 24.381 9.905 L 24.381 23.619 C 24.381 24.457 24.083 25.175 23.486 25.772 C 22.889 26.369 22.171 26.667 21.333 26.667 L 13.714 26.667 L 13.714 17.524 L 10.667 17.524 L 10.667 26.667 L 3.048 26.667 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "업로드할 파일을 선택하거나 이곳으로 끌어다 놓아주세요."}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "파일 형식 표출 · 최대 999MB · 최대 5개"}</span>
      </div>
      <Button
        style={{
          position: "relative",
          height: 36,
          width: 77,
          flexShrink: 0,
        }}
        variant={"outline"}
        color={"primary"}
        state={"default"}
        size={"sm"}
      />
    </div>
  );
  const __impls = {
    // figma: state=Hover
    "state=hover": __body0,
    // figma: state=Default
    "state=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Upload;
