import { Component5 } from './Component5.jsx';
import { LogoJpeg } from './LogoJpeg.jsx';
import { Spinner } from './Spinner.jsx';

// figma node: 2628:3477 Upload List (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function UploadList(_p = {}) {
  const props = { ..._p, state: _p.state ?? "loading" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 52,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-primary)",
      boxShadow: "inset 0 0 0 1px var(--color-border-muted)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Component5 prop={<LogoJpeg />} prop2={"36px"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "파일 명. jpg"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "500kb"}</span>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-control-2xs) * 1px)",
        height: "calc(var(--sizing-control-2xs) * 1px)",
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
            <svg width={13.333} height={13.333} viewBox="0 0 13.333 13.333" fill="none" style={{
              position: "absolute",
              left: 1.333,
              top: 1.333,
              width: 13.333,
              height: 13.333,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 6.667 9.646 C 6.556 9.646 6.451 9.628 6.354 9.593 C 6.257 9.559 6.167 9.5 6.083 9.417 L 3.083 6.417 C 2.931 6.264 2.854 6.069 2.854 5.833 C 2.854 5.597 2.931 5.403 3.083 5.25 C 3.236 5.097 3.434 5.017 3.677 5.01 C 3.92 5.003 4.118 5.076 4.271 5.229 L 5.833 6.792 L 5.833 0.833 C 5.833 0.597 5.913 0.399 6.073 0.239 C 6.233 0.08 6.431 0 6.667 0 C 6.903 0 7.101 0.08 7.261 0.239 C 7.42 0.399 7.5 0.597 7.5 0.833 L 7.5 6.792 L 9.063 5.229 C 9.215 5.076 9.413 5.003 9.657 5.01 C 9.899 5.017 10.097 5.097 10.25 5.25 C 10.403 5.403 10.479 5.597 10.479 5.833 C 10.479 6.069 10.403 6.264 10.25 6.417 L 7.25 9.417 C 7.167 9.5 7.076 9.559 6.979 9.593 C 6.882 9.628 6.778 9.646 6.667 9.646 Z M 1.667 13.333 C 1.208 13.333 0.816 13.17 0.49 12.844 C 0.163 12.517 0 12.125 0 11.667 L 0 10 C 0 9.764 0.08 9.566 0.239 9.406 C 0.399 9.246 0.597 9.167 0.833 9.167 C 1.069 9.167 1.267 9.246 1.427 9.406 C 1.587 9.566 1.667 9.764 1.667 10 L 1.667 11.667 L 11.667 11.667 L 11.667 10 C 11.667 9.764 11.747 9.566 11.907 9.406 C 12.066 9.246 12.264 9.167 12.5 9.167 C 12.736 9.167 12.934 9.246 13.093 9.406 C 13.253 9.566 13.333 9.764 13.333 10 L 13.333 11.667 C 13.333 12.125 13.17 12.517 12.844 12.844 C 12.517 13.17 12.125 13.333 11.667 13.333 L 1.667 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-control-2xs) * 1px)",
        height: "calc(var(--sizing-control-2xs) * 1px)",
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
            <svg width={11.852} height={13.333} viewBox="0 0 11.852 13.333" fill="none" style={{
              position: "absolute",
              left: 2.074,
              top: 1.333,
              width: 11.852,
              height: 13.333,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 2.222 13.333 C 1.815 13.333 1.466 13.188 1.176 12.899 C 0.886 12.608 0.741 12.259 0.741 11.852 L 0.741 2.222 C 0.531 2.222 0.355 2.151 0.213 2.01 C 0.071 1.867 0 1.691 0 1.481 C 0 1.272 0.071 1.096 0.213 0.953 C 0.355 0.812 0.531 0.741 0.741 0.741 L 3.704 0.741 C 3.704 0.531 3.775 0.355 3.917 0.213 C 4.059 0.071 4.235 0 4.444 0 L 7.407 0 C 7.617 0 7.793 0.071 7.936 0.213 C 8.077 0.355 8.148 0.531 8.148 0.741 L 11.111 0.741 C 11.321 0.741 11.497 0.812 11.639 0.953 C 11.781 1.096 11.852 1.272 11.852 1.481 C 11.852 1.691 11.781 1.867 11.639 2.01 C 11.497 2.151 11.321 2.222 11.111 2.222 L 11.111 11.852 C 11.111 12.259 10.966 12.608 10.676 12.899 C 10.386 13.188 10.037 13.333 9.63 13.333 L 2.222 13.333 Z M 2.222 2.222 L 2.222 11.852 L 9.63 11.852 L 9.63 2.222 L 2.222 2.222 Z M 3.704 9.63 C 3.704 9.84 3.775 10.015 3.917 10.157 C 4.059 10.299 4.235 10.37 4.444 10.37 C 4.654 10.37 4.83 10.299 4.973 10.157 C 5.114 10.015 5.185 9.84 5.185 9.63 L 5.185 4.444 C 5.185 4.235 5.114 4.059 4.973 3.916 C 4.83 3.775 4.654 3.704 4.444 3.704 C 4.235 3.704 4.059 3.775 3.917 3.916 C 3.775 4.059 3.704 4.235 3.704 4.444 L 3.704 9.63 Z M 6.667 9.63 C 6.667 9.84 6.738 10.015 6.88 10.157 C 7.022 10.299 7.198 10.37 7.407 10.37 C 7.617 10.37 7.793 10.299 7.936 10.157 C 8.077 10.015 8.148 9.84 8.148 9.63 L 8.148 4.444 C 8.148 4.235 8.077 4.059 7.936 3.916 C 7.793 3.775 7.617 3.704 7.407 3.704 C 7.198 3.704 7.022 3.775 6.88 3.916 C 6.738 4.059 6.667 4.235 6.667 4.444 L 6.667 9.63 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 528,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-primary)",
      boxShadow: "inset 0 0 0 1px var(--color-border-error)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Component5 prop={<LogoJpeg />} prop2={"36px"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "파일 명. jpg"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-error)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Upload failed"}</span>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-control-2xs) * 1px)",
        height: "calc(var(--sizing-control-2xs) * 1px)",
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
            <svg width={13.333} height={13.080} viewBox="0 0 13.333 13.080" fill="none" style={{
              position: "absolute",
              left: 1.333,
              top: 1.46,
              width: 13.333,
              height: 13.08,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 8.117 0.023 C 9.617 0.356 10.861 1.123 11.85 2.323 C 12.839 3.523 13.333 4.929 13.333 6.54 C 13.333 7.551 13.13 8.484 12.725 9.34 C 12.319 10.195 11.767 10.929 11.067 11.54 L 12 11.54 C 12.189 11.54 12.347 11.604 12.475 11.732 C 12.603 11.859 12.667 12.018 12.667 12.206 C 12.667 12.395 12.603 12.554 12.475 12.681 C 12.347 12.809 12.189 12.873 12 12.873 L 9.333 12.873 C 9.144 12.873 8.986 12.809 8.859 12.681 C 8.731 12.554 8.667 12.395 8.667 12.206 L 8.667 9.54 C 8.667 9.351 8.731 9.192 8.859 9.064 C 8.986 8.937 9.144 8.873 9.333 8.873 C 9.522 8.873 9.68 8.937 9.808 9.064 C 9.936 9.192 10 9.351 10 9.54 L 10 10.69 C 10.611 10.19 11.097 9.584 11.459 8.873 C 11.82 8.162 12 7.384 12 6.54 C 12 5.262 11.608 4.148 10.825 3.198 C 10.042 2.248 9.056 1.634 7.867 1.356 C 7.711 1.323 7.583 1.245 7.483 1.123 C 7.383 1.001 7.333 0.862 7.333 0.706 C 7.333 0.484 7.411 0.301 7.567 0.156 C 7.722 0.012 7.906 -0.032 8.117 0.023 Z M 5.217 13.056 C 3.717 12.723 2.472 11.956 1.483 10.756 C 0.494 9.556 0 8.151 0 6.54 C 0 5.529 0.203 4.595 0.609 3.74 C 1.014 2.884 1.567 2.151 2.267 1.54 L 1.333 1.54 C 1.144 1.54 0.986 1.476 0.859 1.348 C 0.731 1.22 0.667 1.062 0.667 0.873 C 0.667 0.684 0.731 0.526 0.859 0.398 C 0.986 0.27 1.144 0.206 1.333 0.206 L 4 0.206 C 4.189 0.206 4.347 0.27 4.475 0.398 C 4.603 0.526 4.667 0.684 4.667 0.873 L 4.667 3.54 C 4.667 3.729 4.603 3.887 4.475 4.015 C 4.347 4.143 4.189 4.206 4 4.206 C 3.811 4.206 3.653 4.143 3.525 4.015 C 3.397 3.887 3.333 3.729 3.333 3.54 L 3.333 2.39 C 2.722 2.879 2.236 3.482 1.875 4.198 C 1.514 4.915 1.333 5.695 1.333 6.54 C 1.333 7.818 1.725 8.931 2.509 9.881 C 3.292 10.831 4.278 11.445 5.467 11.723 C 5.622 11.756 5.75 11.834 5.85 11.956 C 5.95 12.079 6 12.218 6 12.373 C 6 12.595 5.922 12.779 5.767 12.923 C 5.611 13.068 5.428 13.112 5.217 13.056 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-control-2xs) * 1px)",
        height: "calc(var(--sizing-control-2xs) * 1px)",
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
            <svg width={11.852} height={13.333} viewBox="0 0 11.852 13.333" fill="none" style={{
              position: "absolute",
              left: 2.074,
              top: 1.333,
              width: 11.852,
              height: 13.333,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 2.222 13.333 C 1.815 13.333 1.466 13.188 1.176 12.899 C 0.886 12.608 0.741 12.259 0.741 11.852 L 0.741 2.222 C 0.531 2.222 0.355 2.151 0.213 2.01 C 0.071 1.867 0 1.691 0 1.481 C 0 1.272 0.071 1.096 0.213 0.953 C 0.355 0.812 0.531 0.741 0.741 0.741 L 3.704 0.741 C 3.704 0.531 3.775 0.355 3.917 0.213 C 4.059 0.071 4.235 0 4.444 0 L 7.407 0 C 7.617 0 7.793 0.071 7.936 0.213 C 8.077 0.355 8.148 0.531 8.148 0.741 L 11.111 0.741 C 11.321 0.741 11.497 0.812 11.639 0.953 C 11.781 1.096 11.852 1.272 11.852 1.481 C 11.852 1.691 11.781 1.867 11.639 2.01 C 11.497 2.151 11.321 2.222 11.111 2.222 L 11.111 11.852 C 11.111 12.259 10.966 12.608 10.676 12.899 C 10.386 13.188 10.037 13.333 9.63 13.333 L 2.222 13.333 Z M 2.222 2.222 L 2.222 11.852 L 9.63 11.852 L 9.63 2.222 L 2.222 2.222 Z M 3.704 9.63 C 3.704 9.84 3.775 10.015 3.917 10.157 C 4.059 10.299 4.235 10.37 4.444 10.37 C 4.654 10.37 4.83 10.299 4.973 10.157 C 5.114 10.015 5.185 9.84 5.185 9.63 L 5.185 4.444 C 5.185 4.235 5.114 4.059 4.973 3.916 C 4.83 3.775 4.654 3.704 4.444 3.704 C 4.235 3.704 4.059 3.775 3.917 3.916 C 3.775 4.059 3.704 4.235 3.704 4.444 L 3.704 9.63 Z M 6.667 9.63 C 6.667 9.84 6.738 10.015 6.88 10.157 C 7.022 10.299 7.198 10.37 7.407 10.37 C 7.617 10.37 7.793 10.299 7.936 10.157 C 8.077 10.015 8.148 9.84 8.148 9.63 L 8.148 4.444 C 8.148 4.235 8.077 4.059 7.936 3.916 C 7.793 3.775 7.617 3.704 7.407 3.704 C 7.198 3.704 7.022 3.775 6.88 3.916 C 6.738 4.059 6.667 4.235 6.667 4.444 L 6.667 9.63 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 52,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-primary)",
      boxShadow: "inset 0 0 0 1px var(--color-border-muted)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Component5 prop={<LogoJpeg />} prop2={"36px"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "파일 명. jpg"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-disabled)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "500kb"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Spinner size={"sm"} />}</div>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-control-2xs) * 1px)",
        height: "calc(var(--sizing-control-2xs) * 1px)",
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
            <svg width={11.852} height={13.333} viewBox="0 0 11.852 13.333" fill="none" style={{
              position: "absolute",
              left: 2.074,
              top: 1.333,
              width: 11.852,
              height: 13.333,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 2.222 13.333 C 1.815 13.333 1.466 13.188 1.176 12.899 C 0.886 12.608 0.741 12.259 0.741 11.852 L 0.741 2.222 C 0.531 2.222 0.355 2.151 0.213 2.01 C 0.071 1.867 0 1.691 0 1.481 C 0 1.272 0.071 1.096 0.213 0.953 C 0.355 0.812 0.531 0.741 0.741 0.741 L 3.704 0.741 C 3.704 0.531 3.775 0.355 3.917 0.213 C 4.059 0.071 4.235 0 4.444 0 L 7.407 0 C 7.617 0 7.793 0.071 7.936 0.213 C 8.077 0.355 8.148 0.531 8.148 0.741 L 11.111 0.741 C 11.321 0.741 11.497 0.812 11.639 0.953 C 11.781 1.096 11.852 1.272 11.852 1.481 C 11.852 1.691 11.781 1.867 11.639 2.01 C 11.497 2.151 11.321 2.222 11.111 2.222 L 11.111 11.852 C 11.111 12.259 10.966 12.608 10.676 12.899 C 10.386 13.188 10.037 13.333 9.63 13.333 L 2.222 13.333 Z M 2.222 2.222 L 2.222 11.852 L 9.63 11.852 L 9.63 2.222 L 2.222 2.222 Z M 3.704 9.63 C 3.704 9.84 3.775 10.015 3.917 10.157 C 4.059 10.299 4.235 10.37 4.444 10.37 C 4.654 10.37 4.83 10.299 4.973 10.157 C 5.114 10.015 5.185 9.84 5.185 9.63 L 5.185 4.444 C 5.185 4.235 5.114 4.059 4.973 3.916 C 4.83 3.775 4.654 3.704 4.444 3.704 C 4.235 3.704 4.059 3.775 3.917 3.916 C 3.775 4.059 3.704 4.235 3.704 4.444 L 3.704 9.63 Z M 6.667 9.63 C 6.667 9.84 6.738 10.015 6.88 10.157 C 7.022 10.299 7.198 10.37 7.407 10.37 C 7.617 10.37 7.793 10.299 7.936 10.157 C 8.077 10.015 8.148 9.84 8.148 9.63 L 8.148 4.444 C 8.148 4.235 8.077 4.059 7.936 3.916 C 7.793 3.775 7.617 3.704 7.407 3.704 C 7.198 3.704 7.022 3.775 6.88 3.916 C 6.738 4.059 6.667 4.235 6.667 4.444 L 6.667 9.63 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: state=complete
    "state=complete": __body0,
    // figma: state=fail
    "state=fail": __body1,
    // figma: state=loading
    "state=loading": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default UploadList;
