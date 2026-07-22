import { Frame14492 } from '../navigation/Frame14492.jsx';

// figma node: 566:416 알럿 (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "prop=" + __venc(p.prop) + '|' + "prop2=" + __venc(p.prop2);

export function Component4(_p = {}) {
  const props = { ..._p, eventType: _p.eventType ?? "이벤트유형명", location: _p.location ?? "[위치명]", detectType: _p.detectType ?? "탐지유형명", prop: _p.prop ?? "light", prop2: _p.prop2 ?? "default", time: _p.time ?? "00:00:00" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 480,
      borderRadius: 8,
      backgroundColor: "rgb(28,32,42)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      padding: "12px 20px 12px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 48,
          height: 48,
          flexShrink: 0,
        }}>{props.icon1 ?? <Frame14492 icon={"화재"} />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.eventType}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.location}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexShrink: 0,
          }}>{props.detectType}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexShrink: 0,
          }}>{props.text1 ?? "·"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexShrink: 0,
          }}>{props.time}</span>
        </div>
      </div>
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
            <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
              position: "absolute",
              left: 1.429,
              top: 1,
              width: 9.143,
              height: 10,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 480,
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      padding: "12px 20px 12px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 48,
          height: 48,
          flexShrink: 0,
        }}>{props.icon1 ?? <Frame14492 icon={"화재"} />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.eventType}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.location}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.detectType}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text1 ?? "·"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.time}</span>
        </div>
      </div>
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
            <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
              position: "absolute",
              left: 1.429,
              top: 1,
              width: 9.143,
              height: 10,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 480,
      borderRadius: 8,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      padding: "12px 20px 12px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 48,
          height: 48,
          flexShrink: 0,
        }}>{props.icon1 ?? <Frame14492 icon={"화재"} />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.eventType}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.location}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexShrink: 0,
          }}>{props.detectType}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexShrink: 0,
          }}>{props.text1 ?? "·"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexShrink: 0,
          }}>{props.time}</span>
        </div>
      </div>
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
            <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
              position: "absolute",
              left: 1.429,
              top: 1,
              width: 9.143,
              height: 10,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 480,
      borderRadius: 8,
      backgroundColor: "rgb(68,74,87)",
      boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.08), 0px 10px 32px 0px rgba(0,0,0,0.32)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      padding: "12px 20px 12px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 48,
          height: 48,
          flexShrink: 0,
        }}>{props.icon1 ?? <Frame14492 icon={"화재"} />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.eventType}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.location}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexShrink: 0,
          }}>{props.detectType}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexShrink: 0,
          }}>{props.text1 ?? "·"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexShrink: 0,
          }}>{props.time}</span>
        </div>
      </div>
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
            <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
              position: "absolute",
              left: 1.429,
              top: 1,
              width: 9.143,
              height: 10,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 480,
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      padding: "12px 20px 12px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 48,
          height: 48,
          flexShrink: 0,
        }}>{props.icon1 ?? <Frame14492 icon={"화재"} />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.eventType}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.location}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.detectType}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text1 ?? "·"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.time}</span>
        </div>
      </div>
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
            <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
              position: "absolute",
              left: 1.429,
              top: 1,
              width: 9.143,
              height: 10,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 480,
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      padding: "12px 20px 12px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 48,
          height: 48,
          flexShrink: 0,
        }}>{props.icon1 ?? <Frame14492 icon={"화재"} />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.eventType}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.location}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.detectType}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text1 ?? "·"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.time}</span>
        </div>
      </div>
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
            <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
              position: "absolute",
              left: 1.429,
              top: 1,
              width: 9.143,
              height: 10,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: 모드=Dark, 상태=Default
    "prop=dark|prop2=default": __body0,
    // figma: 모드=Light, 상태=Default
    "prop=light|prop2=default": __body1,
    // figma: 모드=Dark, 상태=Hover
    "prop=dark|prop2=hover": __body2,
    // figma: 모드=Dark, 상태=Active
    "prop=dark|prop2=active": __body3,
    // figma: 모드=Light, 상태=Hover
    "prop=light|prop2=hover": __body4,
    // figma: 모드=Light, 상태=Active
    "prop=light|prop2=active": __body5,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Component4;
