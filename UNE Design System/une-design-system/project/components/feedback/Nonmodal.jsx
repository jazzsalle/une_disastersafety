import { Component } from '../display/Component.jsx';
import { IconLine } from '../inputs/IconLine.jsx';

// figma node: 2478:14281 Nonmodal (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "subtitlePlacement=" + __venc(p.subtitlePlacement);

export function Nonmodal(_p = {}) {
  const props = { ..._p, title: _p.title ?? "타이틀", variant: _p.variant ?? "title", subtitle: _p.subtitle ?? true, resizeHandle: _p.resizeHandle ?? true, text: _p.text ?? "서브 타이틀", subtitlePlacement: _p.subtitlePlacement ?? "none", iconButton: _p.iconButton ?? true, icon: _p.icon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 360,
      minWidth: 280,
      minHeight: 200,
      maxWidth: 1536,
      maxHeight: 864,
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 40,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(235,236,240)",
        borderRight: "1px solid rgb(235,236,240)",
        borderBottom: "1px solid rgb(235,236,240)",
        borderLeft: "1px solid rgb(235,236,240)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.title}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-4xs) * 1px)",
          height: "calc(var(--sizing-control-4xs) * 1px)",
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--sizing-icon-sm) * 1px)",
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
                position: "absolute",
                left: 1,
                top: 1,
                width: 10,
                height: 10,
                color: "var(--color-icon-tertiary)",
              }}>
                <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        opacity: 0.95,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "20px 20px 20px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(86,91,105)",
            flexGrow: 1,
            whiteSpace: "pre-wrap",
          }}>{props.text1 ?? "Body 영역\n(텍스트, 폼 요소, 이미지 등 자유롭게 설계 가능)"}</span>
        </div>
      </div>
      {props.resizeHandle && (
      <div style={{
          position: "absolute",
          left: 344,
          top: 344,
          width: 12,
          height: 12,
        }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 360,
      minWidth: 280,
      minHeight: 200,
      maxWidth: 1536,
      maxHeight: 864,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          {props.icon && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
          )}
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            whiteSpace: "nowrap",
            lineHeight: 1.600000023841858,
            letterSpacing: "-0.030em",
            color: "rgb(28,32,42)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          {props.subtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(104,109,120)",
            flexShrink: 0,
          }}>{props.text}</span>
          )}
        </div>
        {props.iconButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--sizing-icon-md) * 1px)",
            height: 16,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
                position: "absolute",
                left: 1.905,
                top: 1.333,
                width: 12.19,
                height: 13.333,
                color: "var(--color-icon-basic)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(86,91,105)",
          flexGrow: 1,
          whiteSpace: "pre-wrap",
        }}>{props.text1 ?? "Body 영역\n(텍스트, 폼 요소, 이미지 등 자유롭게 설계 가능)"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 360,
      minWidth: 280,
      minHeight: 200,
      maxWidth: 1536,
      maxHeight: 864,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
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
            {props.icon && (
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
            )}
            <span style={{
              position: "relative",
              fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              whiteSpace: "nowrap",
              lineHeight: 1.600000023841858,
              letterSpacing: "-0.030em",
              color: "rgb(28,32,42)",
              flexShrink: 0,
            }}>{props.title}</span>
          </div>
          {props.subtitle && (
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(104,109,120)",
            flexShrink: 0,
          }}>{props.text}</span>
          )}
        </div>
        {props.iconButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--sizing-icon-md) * 1px)",
            height: 16,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
                position: "absolute",
                left: 1.905,
                top: 1.333,
                width: 12.19,
                height: 13.333,
                color: "var(--color-icon-basic)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(86,91,105)",
          flexGrow: 1,
          whiteSpace: "pre-wrap",
        }}>{props.text1 ?? "Body 영역\n(텍스트, 폼 요소, 이미지 등 자유롭게 설계 가능)"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: variant=title, subtitlePlacement=none
    "variant=title|subtitlePlacement=none": __body0,
    // figma: variant=title+subtitle, subtitlePlacement=right
    "variant=title+subtitle|subtitlePlacement=right": __body1,
    // figma: variant=title+subtitle, subtitlePlacement=bottom
    "variant=title+subtitle|subtitlePlacement=bottom": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Nonmodal;
