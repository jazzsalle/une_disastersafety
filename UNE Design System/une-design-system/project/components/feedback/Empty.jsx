import { Slot3 } from './Slot3.jsx';

// figma node: 1963:10324 Empty (빈 화면) (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function Empty(_p = {}) {
  const props = { ..._p, visual: _p.visual ?? true, title: _p.title ?? "타이틀을 입력하세요", description: _p.description ?? true, size: _p.size ?? "lg", description2: _p.description2 ?? "보조 설명을 입력하세요", actions: _p.actions ?? true, primary: _p.primary ?? true, secondary: _p.secondary ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xl) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.visual && (
      <Slot3
        style={{
          position: "relative",
          width: 100,
          height: 100,
          flexShrink: 0,
        }}
        variant={"image"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-gap-2xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.title}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-tertiary)",
          flexShrink: 0,
        }}>{props.description2}</span>
        )}
      </div>
      {props.actions && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.secondary && (
        <div style={{
          position: "relative",
          width: 83,
          height: "calc(var(--sizing-control-md) * 1px)",
          borderRadius: 8,
          backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          padding: "0px 16px 0px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
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
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: 1.600000023841858,
            letterSpacing: "-0.030em",
            color: "var(--color-text-basic)",
            flexShrink: 0,
          }}>버튼이름</span>
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
        {props.primary && (
        <div style={{
          position: "relative",
          width: 83,
          height: "calc(var(--sizing-control-md) * 1px)",
          borderRadius: 8,
          backgroundColor: "var(--color-interaction-primary-bg-default)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          padding: "0px 16px 0px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
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
              <svg width={13.333} height={13.333} viewBox="0 0 13.333 13.333" fill="none" style={{
                position: "absolute",
                left: 1.333,
                top: 1.333,
                width: 13.333,
                height: 13.333,
                color: "var(--color-icon-brand)",
              }}>
                <path d={"M 6.633 10.667 C 6.867 10.667 7.064 10.586 7.225 10.425 C 7.386 10.264 7.467 10.067 7.467 9.833 C 7.467 9.6 7.386 9.403 7.225 9.242 C 7.064 9.081 6.867 9 6.633 9 C 6.4 9 6.203 9.081 6.041 9.242 C 5.88 9.403 5.8 9.6 5.8 9.833 C 5.8 10.067 5.88 10.264 6.041 10.425 C 6.203 10.586 6.4 10.667 6.633 10.667 Z M 6.733 3.8 C 7.044 3.8 7.294 3.886 7.483 4.058 C 7.672 4.23 7.767 4.456 7.767 4.733 C 7.767 4.922 7.703 5.114 7.575 5.308 C 7.447 5.503 7.267 5.706 7.033 5.917 C 6.7 6.206 6.456 6.483 6.3 6.75 C 6.144 7.017 6.067 7.283 6.067 7.55 C 6.067 7.706 6.125 7.836 6.242 7.941 C 6.358 8.047 6.494 8.1 6.65 8.1 C 6.806 8.1 6.944 8.044 7.067 7.933 C 7.189 7.822 7.267 7.683 7.3 7.517 C 7.333 7.328 7.408 7.153 7.525 6.992 C 7.642 6.831 7.833 6.622 8.1 6.367 C 8.444 6.044 8.686 5.75 8.825 5.483 C 8.964 5.217 9.033 4.922 9.033 4.6 C 9.033 4.033 8.82 3.569 8.392 3.208 C 7.964 2.847 7.411 2.667 6.733 2.667 C 6.267 2.667 5.853 2.756 5.492 2.933 C 5.131 3.111 4.85 3.383 4.65 3.75 C 4.572 3.894 4.544 4.036 4.567 4.175 C 4.589 4.314 4.667 4.428 4.8 4.517 C 4.944 4.606 5.103 4.633 5.275 4.6 C 5.447 4.567 5.589 4.472 5.7 4.317 C 5.822 4.15 5.97 4.022 6.142 3.933 C 6.314 3.844 6.511 3.8 6.733 3.8 Z M 6.667 13.333 C 5.756 13.333 4.894 13.158 4.083 12.808 C 3.272 12.458 2.564 11.983 1.959 11.383 C 1.353 10.783 0.875 10.078 0.525 9.267 C 0.175 8.456 0 7.589 0 6.667 C 0 5.744 0.175 4.878 0.525 4.067 C 0.875 3.256 1.353 2.55 1.959 1.95 C 2.564 1.35 3.272 0.875 4.083 0.525 C 4.894 0.175 5.756 0 6.667 0 C 7.6 0 8.472 0.175 9.283 0.525 C 10.094 0.875 10.8 1.35 11.4 1.95 C 12 2.55 12.472 3.256 12.817 4.067 C 13.161 4.878 13.333 5.744 13.333 6.667 C 13.333 7.589 13.161 8.456 12.817 9.267 C 12.472 10.078 12 10.783 11.4 11.383 C 10.8 11.983 10.094 12.458 9.283 12.808 C 8.472 13.158 7.6 13.333 6.667 13.333 Z"} fill="currentColor" fillRule="nonzero" />
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
            lineHeight: 1.600000023841858,
            letterSpacing: "-0.030em",
            color: "var(--color-text-on-brand)",
            flexShrink: 0,
          }}>메인버튼</span>
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
                color: "var(--color-icon-on-brand)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.visual && (
      <Slot3
        style={{
          position: "relative",
          width: 100,
          height: 100,
          flexShrink: 0,
        }}
        variant={"image"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-gap-2xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.title}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-tertiary)",
          flexShrink: 0,
        }}>{props.description2}</span>
        )}
      </div>
      {props.actions && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.secondary && (
        <div style={{
          position: "relative",
          width: 75,
          height: "calc(var(--sizing-control-sm) * 1px)",
          borderRadius: 8,
          backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          padding: "0px 12px 0px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
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
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: 1.600000023841858,
            letterSpacing: "-0.030em",
            color: "var(--color-text-basic)",
            flexShrink: 0,
          }}>버튼이름</span>
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
        {props.primary && (
        <div style={{
          position: "relative",
          width: 75,
          height: "calc(var(--sizing-control-sm) * 1px)",
          borderRadius: 8,
          backgroundColor: "var(--color-interaction-primary-bg-default)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          padding: "0px 12px 0px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
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
                color: "var(--color-icon-on-brand)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
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
            lineHeight: 1.600000023841858,
            letterSpacing: "-0.030em",
            color: "var(--color-text-on-brand)",
            flexShrink: 0,
          }}>버튼이름</span>
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
                color: "var(--color-icon-on-brand)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.visual && (
      <Slot3
        style={{
          position: "relative",
          width: 80,
          height: 80,
          flexShrink: 0,
        }}
        variant={"image"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-gap-2xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.title}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-tertiary)",
          flexShrink: 0,
        }}>{props.description2}</span>
        )}
      </div>
      {props.actions && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.secondary && (
        <div style={{
          position: "relative",
          width: 75,
          height: "calc(var(--sizing-control-xs) * 1px)",
          borderRadius: 4,
          backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          padding: "0px 12px 0px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
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
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: 1.600000023841858,
            letterSpacing: "-0.030em",
            color: "var(--color-text-basic)",
            flexShrink: 0,
          }}>버튼이름</span>
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
        {props.primary && (
        <div style={{
          position: "relative",
          width: 75,
          height: "calc(var(--sizing-control-xs) * 1px)",
          borderRadius: 4,
          backgroundColor: "var(--color-interaction-primary-bg-default)",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          padding: "0px 12px 0px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
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
                color: "var(--color-icon-on-brand)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
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
            lineHeight: 1.600000023841858,
            letterSpacing: "-0.030em",
            color: "var(--color-text-on-brand)",
            flexShrink: 0,
          }}>버튼이름</span>
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
                color: "var(--color-icon-on-brand)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: size=lg
    "size=lg": __body0,
    // figma: size=md
    "size=md": __body1,
    // figma: size=sm
    "size=sm": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Empty;
