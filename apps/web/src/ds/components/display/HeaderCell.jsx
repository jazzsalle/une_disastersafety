import { Slot } from './Slot.jsx';

// figma node: 2438:40757 Header cell (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected) + '|' + "state=" + __venc(p.state);

export function HeaderCell(_p = {}) {
  const props = { ..._p, selected: _p.selected ?? true, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      minHeight: 32,
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-6) * 1px)",
      paddingTop: "calc(var(--space-4) * 1px)",
      paddingRight: "calc(var(--space-6) * 1px)",
      paddingBottom: "calc(var(--space-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <Slot
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        variant={"text"}
        align={"left"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 200,
      minHeight: 32,
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-6) * 1px)",
      paddingTop: "calc(var(--space-4) * 1px)",
      paddingRight: "calc(var(--space-6) * 1px)",
      paddingBottom: "calc(var(--space-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
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
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Header</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Subtext</span>
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
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12.981} height={13.333} viewBox="0 0 12.981 13.333" fill="none" style={{
              position: "absolute",
              left: 1.51,
              top: 1.333,
              width: 12.981,
              height: 13.333,
              color: "var(--color-icon-brand)",
            }}>
              <path d={"M 5.64 2.911 L 1.445 7.105 C 1.274 7.277 1.074 7.359 0.846 7.352 C 0.618 7.344 0.418 7.255 0.247 7.084 C 0.09 6.913 0.008 6.713 0 6.485 C -0.007 6.256 0.075 6.057 0.247 5.886 L 5.897 0.235 C 5.982 0.15 6.075 0.089 6.175 0.054 C 6.275 0.018 6.382 0 6.496 0 C 6.61 0 6.717 0.018 6.817 0.054 C 6.917 0.089 7.01 0.15 7.095 0.235 L 12.745 5.886 C 12.902 6.042 12.981 6.239 12.981 6.474 C 12.981 6.709 12.902 6.913 12.745 7.084 C 12.574 7.255 12.371 7.341 12.135 7.341 C 11.9 7.341 11.697 7.255 11.525 7.084 L 7.352 2.911 L 7.352 12.477 C 7.352 12.72 7.27 12.923 7.106 13.087 C 6.942 13.251 6.738 13.333 6.496 13.333 C 6.253 13.333 6.05 13.251 5.886 13.087 C 5.722 12.923 5.64 12.72 5.64 12.477 L 5.64 2.911 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 200,
      minHeight: 32,
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0.001)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-6) * 1px)",
      paddingTop: "calc(var(--space-4) * 1px)",
      paddingRight: "calc(var(--space-6) * 1px)",
      paddingBottom: "calc(var(--space-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <Slot
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        variant={"text"}
        align={"left"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 200,
      minHeight: 32,
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0.001)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-6) * 1px)",
      paddingTop: "calc(var(--space-4) * 1px)",
      paddingRight: "calc(var(--space-6) * 1px)",
      paddingBottom: "calc(var(--space-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
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
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Header</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Subtext</span>
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
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12.981} height={13.333} viewBox="0 0 12.981 13.333" fill="none" style={{
              position: "absolute",
              left: 1.51,
              top: 1.333,
              width: 12.981,
              height: 13.333,
              color: "var(--color-icon-brand)",
            }}>
              <path d={"M 5.64 2.911 L 1.445 7.105 C 1.274 7.277 1.074 7.359 0.846 7.352 C 0.618 7.344 0.418 7.255 0.247 7.084 C 0.09 6.913 0.008 6.713 0 6.485 C -0.007 6.256 0.075 6.057 0.247 5.886 L 5.897 0.235 C 5.982 0.15 6.075 0.089 6.175 0.054 C 6.275 0.018 6.382 0 6.496 0 C 6.61 0 6.717 0.018 6.817 0.054 C 6.917 0.089 7.01 0.15 7.095 0.235 L 12.745 5.886 C 12.902 6.042 12.981 6.239 12.981 6.474 C 12.981 6.709 12.902 6.913 12.745 7.084 C 12.574 7.255 12.371 7.341 12.135 7.341 C 11.9 7.341 11.697 7.255 11.525 7.084 L 7.352 2.911 L 7.352 12.477 C 7.352 12.72 7.27 12.923 7.106 13.087 C 6.942 13.251 6.738 13.333 6.496 13.333 C 6.253 13.333 6.05 13.251 5.886 13.087 C 5.722 12.923 5.64 12.72 5.64 12.477 L 5.64 2.911 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 200,
      minHeight: 32,
      overflow: "hidden",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-6) * 1px)",
      paddingTop: "calc(var(--space-4) * 1px)",
      paddingRight: "calc(var(--space-6) * 1px)",
      paddingBottom: "calc(var(--space-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
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
            color: "var(--color-text-disabled)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Header</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-disabled)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Subtext</span>
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
            <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
              position: "absolute",
              left: 1.905,
              top: 1.333,
              width: 12.19,
              height: 13.333,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 200,
      minHeight: 32,
      overflow: "hidden",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-6) * 1px)",
      paddingTop: "calc(var(--space-4) * 1px)",
      paddingRight: "calc(var(--space-6) * 1px)",
      paddingBottom: "calc(var(--space-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
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
            color: "var(--color-text-disabled)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Header</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-disabled)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Subtext</span>
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
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12.981} height={13.333} viewBox="0 0 12.981 13.333" fill="none" style={{
              position: "absolute",
              left: 1.51,
              top: 1.333,
              width: 12.981,
              height: 13.333,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 5.64 2.911 L 1.445 7.105 C 1.274 7.277 1.074 7.359 0.846 7.352 C 0.618 7.344 0.418 7.255 0.247 7.084 C 0.09 6.913 0.008 6.713 0 6.485 C -0.007 6.256 0.075 6.057 0.247 5.886 L 5.897 0.235 C 5.982 0.15 6.075 0.089 6.175 0.054 C 6.275 0.018 6.382 0 6.496 0 C 6.61 0 6.717 0.018 6.817 0.054 C 6.917 0.089 7.01 0.15 7.095 0.235 L 12.745 5.886 C 12.902 6.042 12.981 6.239 12.981 6.474 C 12.981 6.709 12.902 6.913 12.745 7.084 C 12.574 7.255 12.371 7.341 12.135 7.341 C 11.9 7.341 11.697 7.255 11.525 7.084 L 7.352 2.911 L 7.352 12.477 C 7.352 12.72 7.27 12.923 7.106 13.087 C 6.942 13.251 6.738 13.333 6.496 13.333 C 6.253 13.333 6.05 13.251 5.886 13.087 C 5.722 12.923 5.64 12.72 5.64 12.477 L 5.64 2.911 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 200,
      minHeight: 32,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-6) * 1px)",
      paddingTop: "calc(var(--space-4) * 1px)",
      paddingRight: "calc(var(--space-6) * 1px)",
      paddingBottom: "calc(var(--space-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
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
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Header</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Subtext</span>
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
            <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
              position: "absolute",
              left: 1.905,
              top: 1.333,
              width: 12.19,
              height: 13.333,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 200,
      minHeight: 32,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-6) * 1px)",
      paddingTop: "calc(var(--space-4) * 1px)",
      paddingRight: "calc(var(--space-6) * 1px)",
      paddingBottom: "calc(var(--space-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
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
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Header</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Subtext</span>
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
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12.981} height={13.333} viewBox="0 0 12.981 13.333" fill="none" style={{
              position: "absolute",
              left: 1.51,
              top: 1.333,
              width: 12.981,
              height: 13.333,
              color: "var(--color-icon-brand)",
            }}>
              <path d={"M 5.64 2.911 L 1.445 7.105 C 1.274 7.277 1.074 7.359 0.846 7.352 C 0.618 7.344 0.418 7.255 0.247 7.084 C 0.09 6.913 0.008 6.713 0 6.485 C -0.007 6.256 0.075 6.057 0.247 5.886 L 5.897 0.235 C 5.982 0.15 6.075 0.089 6.175 0.054 C 6.275 0.018 6.382 0 6.496 0 C 6.61 0 6.717 0.018 6.817 0.054 C 6.917 0.089 7.01 0.15 7.095 0.235 L 12.745 5.886 C 12.902 6.042 12.981 6.239 12.981 6.474 C 12.981 6.709 12.902 6.913 12.745 7.084 C 12.574 7.255 12.371 7.341 12.135 7.341 C 11.9 7.341 11.697 7.255 11.525 7.084 L 7.352 2.911 L 7.352 12.477 C 7.352 12.72 7.27 12.923 7.106 13.087 C 6.942 13.251 6.738 13.333 6.496 13.333 C 6.253 13.333 6.05 13.251 5.886 13.087 C 5.722 12.923 5.64 12.72 5.64 12.477 L 5.64 2.911 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 200,
      minHeight: 32,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-6) * 1px)",
      paddingTop: "calc(var(--space-4) * 1px)",
      paddingRight: "calc(var(--space-6) * 1px)",
      paddingBottom: "calc(var(--space-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
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
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Header</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Subtext</span>
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
            <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
              position: "absolute",
              left: 1.905,
              top: 1.333,
              width: 12.19,
              height: 13.333,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 200,
      minHeight: 32,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-6) * 1px)",
      paddingTop: "calc(var(--space-4) * 1px)",
      paddingRight: "calc(var(--space-6) * 1px)",
      paddingBottom: "calc(var(--space-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
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
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
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
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Header</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-tertiary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Subtext</span>
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
            overflow: "hidden",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12.981} height={13.333} viewBox="0 0 12.981 13.333" fill="none" style={{
              position: "absolute",
              left: 1.51,
              top: 1.333,
              width: 12.981,
              height: 13.333,
              color: "var(--color-icon-brand)",
            }}>
              <path d={"M 5.64 2.911 L 1.445 7.105 C 1.274 7.277 1.074 7.359 0.846 7.352 C 0.618 7.344 0.418 7.255 0.247 7.084 C 0.09 6.913 0.008 6.713 0 6.485 C -0.007 6.256 0.075 6.057 0.247 5.886 L 5.897 0.235 C 5.982 0.15 6.075 0.089 6.175 0.054 C 6.275 0.018 6.382 0 6.496 0 C 6.61 0 6.717 0.018 6.817 0.054 C 6.917 0.089 7.01 0.15 7.095 0.235 L 12.745 5.886 C 12.902 6.042 12.981 6.239 12.981 6.474 C 12.981 6.709 12.902 6.913 12.745 7.084 C 12.574 7.255 12.371 7.341 12.135 7.341 C 11.9 7.341 11.697 7.255 11.525 7.084 L 7.352 2.911 L 7.352 12.477 C 7.352 12.72 7.27 12.923 7.106 13.087 C 6.942 13.251 6.738 13.333 6.496 13.333 C 6.253 13.333 6.05 13.251 5.886 13.087 C 5.722 12.923 5.64 12.72 5.64 12.477 L 5.64 2.911 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: selected=false, state=default
    "selected=false|state=default": __body0,
    // figma: selected=true, state=default
    "selected=true|state=default": __body1,
    // figma: selected=false, state=focus-visible
    "selected=false|state=focus-visible": __body2,
    // figma: selected=true, state=focus-visible
    "selected=true|state=focus-visible": __body3,
    // figma: selected=false, state=disabled
    "selected=false|state=disabled": __body4,
    // figma: selected=true, state=disabled
    "selected=true|state=disabled": __body5,
    // figma: selected=false, state=hover
    "selected=false|state=hover": __body6,
    // figma: selected=true, state=hover
    "selected=true|state=hover": __body7,
    // figma: selected=false, state=active
    "selected=false|state=active": __body8,
    // figma: selected=true, state=active
    "selected=true|state=active": __body9,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default HeaderCell;
