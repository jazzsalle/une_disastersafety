import { Component } from '../../components/display/Component.jsx';
import { ComponentTitle } from '../../components/overlay/ComponentTitle.jsx';

// figma node: 2212:2907 lnb
export function Lnb(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1915,
      height: 2073,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ComponentTitle
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text2={"Navigation > LNB"}
        text4={"LNB (로컬 내비게이션바)"}
        text3={"V 1.0.0"}
      />
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 40,
          top: 40,
          width: 89,
          height: 24,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.030em",
          color: "rgb(21,37,92)",
        }}>Component</span>
        <div style={{
          position: "absolute",
          left: 49,
          top: 112,
          width: 200,
          height: 40,
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "8px 8px 8px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
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
                color: "var(--color-icon-secondary)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>label</span>
        </div>
        <div style={{
          position: "absolute",
          left: 49,
          top: 292,
          width: 200,
          height: 48,
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "8px 8px 8px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--sizing-icon-lg) * 1px)",
            height: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
                position: "absolute",
                left: 2.381,
                top: 1.667,
                width: 15.238,
                height: 16.667,
                color: "var(--color-icon-secondary)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
            lineHeight: "20px",
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>label</span>
        </div>
        <div style={{
          position: "absolute",
          left: 49,
          top: 458,
          width: 200,
          height: 56,
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "8px 8px 8px 8px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--sizing-icon-lg) * 1px)",
            height: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
                position: "absolute",
                left: 2.381,
                top: 1.667,
                width: 15.238,
                height: 16.667,
                color: "var(--color-icon-secondary)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
            lineHeight: "20px",
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>label</span>
        </div>
        <div style={{
          position: "absolute",
          left: 1050,
          top: 112,
          width: 200,
          height: 40,
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          padding: "8px 8px 8px 8px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
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
            <Component
              style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}
              prop2={"16px"}
            />
            <span style={{
              position: "relative",
              fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.030em",
              color: "var(--color-text-basic)",
              flexShrink: 0,
            }}>label</span>
          </div>
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
              <svg width={6.850} height={13.333} viewBox="0 0 6.850 13.333" fill="none" style={{
                position: "absolute",
                left: 4.575,
                top: 1.333,
                width: 6.85,
                height: 13.333,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 0.28 0.21 C 0.624 -0.095 1.151 -0.064 1.456 0.28 L 6.64 6.113 C 6.92 6.429 6.92 6.904 6.64 7.22 L 1.456 13.054 C 1.151 13.398 0.624 13.429 0.28 13.123 C -0.064 12.817 -0.095 12.291 0.21 11.946 L 4.902 6.667 L 0.21 1.387 C -0.095 1.043 -0.064 0.516 0.28 0.21 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Lnb;
