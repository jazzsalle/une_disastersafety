// figma node: 2528:7954 Action chip (90 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "color=" + __venc(p.color) + '|' + "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function ActionChip(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Action chip", variant: _p.variant ?? "fill", color: _p.color ?? "grayscale", state: _p.state ?? "default", size: _p.size ?? "lg" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      }}>{props.label}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-text-primary)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-text-primary)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      }}>{props.label}</span>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      }}>{props.label}</span>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-hover)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-hover)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-hover)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-hover)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-hover)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-hover)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-active)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-active)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-active)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-active)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-active)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-active)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      }}>{props.label}</span>
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      }}>{props.label}</span>
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 1.667,
            width: 16.667,
            height: 16.667,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 8.333 12.057 C 8.194 12.057 8.064 12.035 7.943 11.992 C 7.821 11.949 7.708 11.875 7.604 11.771 L 3.854 8.021 C 3.663 7.83 3.568 7.587 3.568 7.292 C 3.568 6.997 3.663 6.753 3.854 6.563 C 4.045 6.372 4.292 6.272 4.596 6.262 C 4.9 6.254 5.148 6.345 5.339 6.536 L 7.292 8.49 L 7.292 1.042 C 7.292 0.747 7.392 0.499 7.592 0.299 C 7.791 0.1 8.038 0 8.333 0 C 8.628 0 8.876 0.1 9.076 0.299 C 9.275 0.499 9.375 0.747 9.375 1.042 L 9.375 8.49 L 11.328 6.536 C 11.519 6.345 11.767 6.254 12.071 6.262 C 12.374 6.272 12.622 6.372 12.812 6.563 C 13.003 6.753 13.099 6.997 13.099 7.292 C 13.099 7.587 13.003 7.83 12.812 8.021 L 9.062 11.771 C 8.958 11.875 8.845 11.949 8.724 11.992 C 8.602 12.035 8.472 12.057 8.333 12.057 Z M 2.083 16.667 C 1.51 16.667 1.02 16.463 0.612 16.055 C 0.204 15.647 0 15.156 0 14.583 L 0 12.5 C 0 12.205 0.1 11.957 0.299 11.757 C 0.499 11.558 0.747 11.458 1.042 11.458 C 1.337 11.458 1.584 11.558 1.784 11.757 C 1.984 11.957 2.083 12.205 2.083 12.5 L 2.083 14.583 L 14.583 14.583 L 14.583 12.5 C 14.583 12.205 14.683 11.957 14.883 11.757 C 15.083 11.558 15.33 11.458 15.625 11.458 C 15.92 11.458 16.167 11.558 16.367 11.757 C 16.567 11.957 16.667 12.205 16.667 12.5 L 16.667 14.583 C 16.667 15.156 16.463 15.647 16.055 16.055 C 15.647 16.463 15.156 16.667 14.583 16.667 L 2.083 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
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
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: variant=fill, color=grayscale, size=lg(36), state=Default
    "variant=fill|color=grayscale|state=default|size=lg": __body0,
    // figma: variant=fill, color=grayscale, size=md(32), state=Default
    "variant=fill|color=grayscale|state=default|size=md": __body1,
    // figma: variant=fill, color=grayscale, size=sm(28), state=Default
    "variant=fill|color=grayscale|state=default|size=sm": __body2,
    // figma: variant=fill, color=primary, size=lg(36), state=Default
    "variant=fill|color=primary|state=default|size=lg": __body3,
    // figma: variant=fill, color=primary, size=md(32), state=Default
    "variant=fill|color=primary|state=default|size=md": __body4,
    // figma: variant=fill, color=primary, size=sm(28), state=Default
    "variant=fill|color=primary|state=default|size=sm": __body5,
    // figma: variant=fill, color=primary, size=lg(36), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=lg": __body6,
    // figma: variant=fill, color=primary, size=md(32), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=md": __body7,
    // figma: variant=fill, color=primary, size=sm(28), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=sm": __body8,
    // figma: variant=fill, color=grayscale, size=lg(36), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=lg": __body9,
    // figma: variant=fill, color=grayscale, size=md(32), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=md": __body10,
    // figma: variant=fill, color=grayscale, size=sm(28), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=sm": __body11,
    // figma: variant=fill, color=primary, size=lg(36), state=Disabled
    "variant=fill|color=primary|state=disabled|size=lg": __body12,
    // figma: variant=fill, color=primary, size=md(32), state=Disabled
    "variant=fill|color=primary|state=disabled|size=md": __body13,
    // figma: variant=fill, color=primary, size=sm(28), state=Disabled
    "variant=fill|color=primary|state=disabled|size=sm": __body14,
    // figma: variant=fill, color=grayscale, size=lg(36), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=lg": __body15,
    // figma: variant=fill, color=grayscale, size=md(32), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=md": __body16,
    // figma: variant=fill, color=grayscale, size=sm(28), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=sm": __body17,
    // figma: variant=fill, color=grayscale, size=lg(36), state=Hover
    "variant=fill|color=grayscale|state=hover|size=lg": __body18,
    // figma: variant=fill, color=grayscale, size=md(32), state=Hover
    "variant=fill|color=grayscale|state=hover|size=md": __body19,
    // figma: variant=fill, color=grayscale, size=sm(28), state=Hover
    "variant=fill|color=grayscale|state=hover|size=sm": __body20,
    // figma: variant=fill, color=primary, size=lg(36), state=Hover
    "variant=fill|color=primary|state=hover|size=lg": __body21,
    // figma: variant=fill, color=primary, size=md(32), state=Hover
    "variant=fill|color=primary|state=hover|size=md": __body22,
    // figma: variant=fill, color=primary, size=sm(28), state=Hover
    "variant=fill|color=primary|state=hover|size=sm": __body23,
    // figma: variant=fill, color=grayscale, size=lg(36), state=Active
    "variant=fill|color=grayscale|state=active|size=lg": __body24,
    // figma: variant=fill, color=grayscale, size=md(32), state=Active
    "variant=fill|color=grayscale|state=active|size=md": __body25,
    // figma: variant=fill, color=grayscale, size=sm(28), state=Active
    "variant=fill|color=grayscale|state=active|size=sm": __body26,
    // figma: variant=fill, color=primary, size=lg(36), state=Active
    "variant=fill|color=primary|state=active|size=lg": __body27,
    // figma: variant=fill, color=primary, size=md(32), state=Active
    "variant=fill|color=primary|state=active|size=md": __body28,
    // figma: variant=fill, color=primary, size=sm(28), state=Active
    "variant=fill|color=primary|state=active|size=sm": __body29,
    // figma: variant=outline, color=grayscale, size=lg(36), state=Default
    "variant=outline|color=grayscale|state=default|size=lg": __body30,
    // figma: variant=outline, color=grayscale, size=md(32), state=Default
    "variant=outline|color=grayscale|state=default|size=md": __body31,
    // figma: variant=outline, color=grayscale, size=sm(28), state=Default
    "variant=outline|color=grayscale|state=default|size=sm": __body32,
    // figma: variant=ghost, color=grayscale, size=lg(36), state=Default
    "variant=ghost|color=grayscale|state=default|size=lg": __body33,
    // figma: variant=ghost, color=grayscale, size=md(32), state=Default
    "variant=ghost|color=grayscale|state=default|size=md": __body34,
    // figma: variant=ghost, color=grayscale, size=sm(28), state=Default
    "variant=ghost|color=grayscale|state=default|size=sm": __body35,
    // figma: variant=outline, color=primary, size=lg(36), state=Default
    "variant=outline|color=primary|state=default|size=lg": __body36,
    // figma: variant=outline, color=primary, size=md(32), state=Default
    "variant=outline|color=primary|state=default|size=md": __body37,
    // figma: variant=outline, color=primary, size=sm(28), state=Default
    "variant=outline|color=primary|state=default|size=sm": __body38,
    // figma: variant=ghost, color=primary, size=lg(36), state=Default
    "variant=ghost|color=primary|state=default|size=lg": __body39,
    // figma: variant=ghost, color=primary, size=md(32), state=Default
    "variant=ghost|color=primary|state=default|size=md": __body40,
    // figma: variant=ghost, color=primary, size=sm(28), state=Default
    "variant=ghost|color=primary|state=default|size=sm": __body41,
    // figma: variant=outline, color=primary, size=lg(36), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=lg": __body42,
    // figma: variant=outline, color=primary, size=md(32), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=md": __body43,
    // figma: variant=outline, color=primary, size=sm(28), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=sm": __body44,
    // figma: variant=ghost, color=primary, size=lg(36), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=lg": __body45,
    // figma: variant=ghost, color=primary, size=md(32), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=md": __body46,
    // figma: variant=ghost, color=primary, size=sm(28), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=sm": __body47,
    // figma: variant=outline, color=primary, size=lg(36), state=Hover
    "variant=outline|color=primary|state=hover|size=lg": __body48,
    // figma: variant=outline, color=primary, size=md(32), state=Hover
    "variant=outline|color=primary|state=hover|size=md": __body49,
    // figma: variant=outline, color=primary, size=sm(28), state=Hover
    "variant=outline|color=primary|state=hover|size=sm": __body50,
    // figma: variant=ghost, color=primary, size=lg(36), state=Hover
    "variant=ghost|color=primary|state=hover|size=lg": __body51,
    // figma: variant=ghost, color=primary, size=md(32), state=Hover
    "variant=ghost|color=primary|state=hover|size=md": __body52,
    // figma: variant=ghost, color=primary, size=sm(28), state=Hover
    "variant=ghost|color=primary|state=hover|size=sm": __body53,
    // figma: variant=outline, color=primary, size=lg(36), state=Active
    "variant=outline|color=primary|state=active|size=lg": __body54,
    // figma: variant=outline, color=primary, size=md(32), state=Active
    "variant=outline|color=primary|state=active|size=md": __body55,
    // figma: variant=outline, color=primary, size=sm(28), state=Active
    "variant=outline|color=primary|state=active|size=sm": __body56,
    // figma: variant=ghost, color=primary, size=lg(36), state=Active
    "variant=ghost|color=primary|state=active|size=lg": __body57,
    // figma: variant=ghost, color=primary, size=md(32), state=Active
    "variant=ghost|color=primary|state=active|size=md": __body58,
    // figma: variant=ghost, color=primary, size=sm(28), state=Active
    "variant=ghost|color=primary|state=active|size=sm": __body59,
    // figma: variant=outline, color=grayscale, size=lg(36), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=lg": __body60,
    // figma: variant=outline, color=grayscale, size=md(32), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=md": __body61,
    // figma: variant=outline, color=grayscale, size=sm(28), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=sm": __body62,
    // figma: variant=ghost, color=grayscale, size=lg(36), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=lg": __body63,
    // figma: variant=ghost, color=grayscale, size=md(32), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=md": __body64,
    // figma: variant=ghost, color=grayscale, size=sm(28), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=sm": __body65,
    // figma: variant=outline, color=grayscale, size=lg(36), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=lg": __body66,
    // figma: variant=outline, color=grayscale, size=md(32), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=md": __body67,
    // figma: variant=outline, color=grayscale, size=sm(28), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=sm": __body68,
    // figma: variant=ghost, color=grayscale, size=lg(36), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=lg": __body69,
    // figma: variant=ghost, color=grayscale, size=md(32), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=md": __body70,
    // figma: variant=ghost, color=grayscale, size=sm(28), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=sm": __body71,
    // figma: variant=outline, color=primary, size=lg(36), state=Disabled
    "variant=outline|color=primary|state=disabled|size=lg": __body72,
    // figma: variant=outline, color=primary, size=md(32), state=Disabled
    "variant=outline|color=primary|state=disabled|size=md": __body73,
    // figma: variant=outline, color=primary, size=sm(28), state=Disabled
    "variant=outline|color=primary|state=disabled|size=sm": __body74,
    // figma: variant=ghost, color=primary, size=lg(36), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=lg": __body75,
    // figma: variant=ghost, color=primary, size=md(32), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=md": __body76,
    // figma: variant=ghost, color=primary, size=sm(28), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=sm": __body77,
    // figma: variant=outline, color=grayscale, size=lg(36), state=Hover
    "variant=outline|color=grayscale|state=hover|size=lg": __body78,
    // figma: variant=outline, color=grayscale, size=md(32), state=Hover
    "variant=outline|color=grayscale|state=hover|size=md": __body79,
    // figma: variant=outline, color=grayscale, size=sm(28), state=Hover
    "variant=outline|color=grayscale|state=hover|size=sm": __body80,
    // figma: variant=ghost, color=grayscale, size=lg(36), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=lg": __body81,
    // figma: variant=ghost, color=grayscale, size=md(32), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=md": __body82,
    // figma: variant=ghost, color=grayscale, size=sm(28), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=sm": __body83,
    // figma: variant=outline, color=grayscale, size=lg(36), state=Active
    "variant=outline|color=grayscale|state=active|size=lg": __body84,
    // figma: variant=outline, color=grayscale, size=md(32), state=Active
    "variant=outline|color=grayscale|state=active|size=md": __body85,
    // figma: variant=outline, color=grayscale, size=sm(28), state=Active
    "variant=outline|color=grayscale|state=active|size=sm": __body86,
    // figma: variant=ghost, color=grayscale, size=lg(36), state=Active
    "variant=ghost|color=grayscale|state=active|size=lg": __body87,
    // figma: variant=ghost, color=grayscale, size=md(32), state=Active
    "variant=ghost|color=grayscale|state=active|size=md": __body88,
    // figma: variant=ghost, color=grayscale, size=sm(28), state=Active
    "variant=ghost|color=grayscale|state=active|size=sm": __body89,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ActionChip;
