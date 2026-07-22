// figma node: 2525:7743 Filter chip (90 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "selected=" + __venc(p.selected) + '|' + "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function FilterChip(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Filter chip", leftIcon: _p.leftIcon ?? true, variant: _p.variant ?? "fill", selected: _p.selected ?? true, state: _p.state ?? "default", size: _p.size ?? "lg" };
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
      {props.leftIcon && (
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
            color: "var(--color-text-basic)",
          }}>
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
      backgroundColor: "var(--color-interaction-primary-bg-muted-default)",
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-muted-default)",
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-muted-default)",
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-muted-default)",
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-muted-default)",
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-muted-default)",
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
      {props.leftIcon && (
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
            color: "var(--color-text-basic)",
          }}>
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
      backgroundColor: "var(--color-interaction-primary-bg-muted-hover)",
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-muted-hover)",
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-muted-hover)",
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
      backgroundColor: "var(--color-interaction-primary-bg-muted-active)",
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-muted-active)",
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-muted-active)",
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={16.667} height={12.818} viewBox="0 0 16.667 12.818" fill="none" style={{
            position: "absolute",
            left: 1.667,
            top: 3.591,
            width: 16.667,
            height: 12.818,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 5.344 9.23 L 14.163 0.411 C 14.437 0.137 14.786 0 15.209 0 C 15.633 0 15.982 0.137 16.256 0.411 C 16.53 0.685 16.667 1.034 16.667 1.457 C 16.667 1.881 16.53 2.23 16.256 2.504 L 6.39 12.369 C 6.091 12.668 5.742 12.818 5.344 12.818 C 4.945 12.818 4.596 12.668 4.297 12.369 L 0.411 8.483 C 0.137 8.209 0 7.86 0 7.436 C 0 7.013 0.137 6.664 0.411 6.39 C 0.685 6.116 1.034 5.979 1.457 5.979 C 1.881 5.979 2.23 6.116 2.504 6.39 L 5.344 9.23 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
          <svg width={13.333} height={10.254} viewBox="0 0 13.333 10.254" fill="none" style={{
            position: "absolute",
            left: 1.333,
            top: 2.873,
            width: 13.333,
            height: 10.254,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 4.275 7.384 L 11.33 0.329 C 11.55 0.11 11.829 0 12.167 0 C 12.506 0 12.785 0.11 13.004 0.329 C 13.224 0.548 13.333 0.827 13.333 1.166 C 13.333 1.505 13.224 1.784 13.004 2.003 L 5.112 9.895 C 4.873 10.135 4.594 10.254 4.275 10.254 C 3.956 10.254 3.677 10.135 3.438 9.895 L 0.329 6.786 C 0.11 6.567 0 6.288 0 5.949 C 0 5.61 0.11 5.331 0.329 5.112 C 0.548 4.893 0.827 4.783 1.166 4.783 C 1.505 4.783 1.784 4.893 2.003 5.112 L 4.275 7.384 Z"} fill="currentColor" fillRule="nonzero" />
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
            <path d={"M 8.336 3.54 C 5.697 3.54 3.54 5.697 3.54 8.336 C 3.54 10.974 5.697 13.127 8.336 13.127 C 10.975 13.127 13.127 10.974 13.127 8.336 C 13.127 5.697 10.975 3.54 8.336 3.54 Z M 8.336 4.909 C 10.235 4.909 11.757 6.437 11.757 8.336 C 11.757 10.234 10.235 11.757 8.336 11.757 C 6.437 11.757 4.909 10.234 4.909 8.336 C 4.909 6.437 6.437 4.909 8.336 4.909 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.336 0 C 3.744 0 0 3.744 0 8.336 C 0 12.928 3.744 16.667 8.336 16.667 C 12.928 16.667 16.667 12.928 16.667 8.336 C 16.667 3.744 12.928 0 8.336 0 Z M 8.336 1.515 C 12.11 1.515 15.152 4.563 15.152 8.336 C 15.152 12.11 12.11 15.152 8.336 15.152 C 4.563 15.152 1.515 12.11 1.515 8.336 C 1.515 4.563 4.563 1.515 8.336 1.515 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
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
      {props.leftIcon && (
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
      )}
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
      {props.leftIcon && (
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
      )}
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
    // figma: variant=fill, selected=False, size=lg(36), state=Default
    "variant=fill|selected=false|state=default|size=lg": __body0,
    // figma: variant=fill, selected=False, size=md(32), state=Default
    "variant=fill|selected=false|state=default|size=md": __body1,
    // figma: variant=fill, selected=False, size=sm(28), state=Default
    "variant=fill|selected=false|state=default|size=sm": __body2,
    // figma: variant=fill, selected=True, size=lg(36), state=Default
    "variant=fill|selected=true|state=default|size=lg": __body3,
    // figma: variant=fill, selected=True, size=md(32), state=Default
    "variant=fill|selected=true|state=default|size=md": __body4,
    // figma: variant=fill, selected=True, size=sm(28), state=Default
    "variant=fill|selected=true|state=default|size=sm": __body5,
    // figma: variant=fill, selected=True, size=lg(36), state=Focus-visible
    "variant=fill|selected=true|state=focus-visible|size=lg": __body6,
    // figma: variant=fill, selected=True, size=md(32), state=Focus-visible
    "variant=fill|selected=true|state=focus-visible|size=md": __body7,
    // figma: variant=fill, selected=True, size=sm(28), state=Focus-visible
    "variant=fill|selected=true|state=focus-visible|size=sm": __body8,
    // figma: variant=fill, selected=False, size=lg(36), state=Disabled
    "variant=fill|selected=false|state=disabled|size=lg": __body9,
    // figma: variant=fill, selected=False, size=md(32), state=Disabled
    "variant=fill|selected=false|state=disabled|size=md": __body10,
    // figma: variant=fill, selected=False, size=sm(28), state=Disabled
    "variant=fill|selected=false|state=disabled|size=sm": __body11,
    // figma: variant=fill, selected=True, size=lg(36), state=Disabled
    "variant=fill|selected=true|state=disabled|size=lg": __body12,
    // figma: variant=fill, selected=True, size=md(32), state=Disabled
    "variant=fill|selected=true|state=disabled|size=md": __body13,
    // figma: variant=fill, selected=True, size=sm(28), state=Disabled
    "variant=fill|selected=true|state=disabled|size=sm": __body14,
    // figma: variant=fill, selected=False, size=lg(36), state=Focus-visible
    "variant=fill|selected=false|state=focus-visible|size=lg": __body15,
    // figma: variant=fill, selected=False, size=md(32), state=Focus-visible
    "variant=fill|selected=false|state=focus-visible|size=md": __body16,
    // figma: variant=fill, selected=False, size=sm(28), state=Focus-visible
    "variant=fill|selected=false|state=focus-visible|size=sm": __body17,
    // figma: variant=fill, selected=False, size=lg(36), state=Hover
    "variant=fill|selected=false|state=hover|size=lg": __body18,
    // figma: variant=fill, selected=False, size=md(32), state=Hover
    "variant=fill|selected=false|state=hover|size=md": __body19,
    // figma: variant=fill, selected=False, size=sm(28), state=Hover
    "variant=fill|selected=false|state=hover|size=sm": __body20,
    // figma: variant=fill, selected=True, size=lg(36), state=Hover
    "variant=fill|selected=true|state=hover|size=lg": __body21,
    // figma: variant=fill, selected=True, size=md(32), state=Hover
    "variant=fill|selected=true|state=hover|size=md": __body22,
    // figma: variant=fill, selected=True, size=sm(28), state=Hover
    "variant=fill|selected=true|state=hover|size=sm": __body23,
    // figma: variant=fill, selected=False, size=lg(36), state=Active
    "variant=fill|selected=false|state=active|size=lg": __body24,
    // figma: variant=fill, selected=False, size=md(32), state=Active
    "variant=fill|selected=false|state=active|size=md": __body25,
    // figma: variant=fill, selected=False, size=sm(28), state=Active
    "variant=fill|selected=false|state=active|size=sm": __body26,
    // figma: variant=fill, selected=True, size=lg(36), state=Active
    "variant=fill|selected=true|state=active|size=lg": __body27,
    // figma: variant=fill, selected=True, size=md(32), state=Active
    "variant=fill|selected=true|state=active|size=md": __body28,
    // figma: variant=fill, selected=True, size=sm(28), state=Active
    "variant=fill|selected=true|state=active|size=sm": __body29,
    // figma: variant=outline, selected=False, size=lg(36), state=Default
    "variant=outline|selected=false|state=default|size=lg": __body30,
    // figma: variant=outline, selected=False, size=md(32), state=Default
    "variant=outline|selected=false|state=default|size=md": __body31,
    // figma: variant=outline, selected=False, size=sm(28), state=Default
    "variant=outline|selected=false|state=default|size=sm": __body32,
    // figma: variant=ghost, selected=False, size=lg(36), state=Default
    "variant=ghost|selected=false|state=default|size=lg": __body33,
    // figma: variant=ghost, selected=False, size=md(32), state=Default
    "variant=ghost|selected=false|state=default|size=md": __body34,
    // figma: variant=ghost, selected=False, size=sm(28), state=Default
    "variant=ghost|selected=false|state=default|size=sm": __body35,
    // figma: variant=outline, selected=True, size=lg(36), state=Default
    "variant=outline|selected=true|state=default|size=lg": __body36,
    // figma: variant=outline, selected=True, size=md(32), state=Default
    "variant=outline|selected=true|state=default|size=md": __body37,
    // figma: variant=outline, selected=True, size=sm(28), state=Default
    "variant=outline|selected=true|state=default|size=sm": __body38,
    // figma: variant=ghost, selected=True, size=lg(36), state=Default
    "variant=ghost|selected=true|state=default|size=lg": __body39,
    // figma: variant=ghost, selected=True, size=md(32), state=Default
    "variant=ghost|selected=true|state=default|size=md": __body40,
    // figma: variant=ghost, selected=True, size=sm(28), state=Default
    "variant=ghost|selected=true|state=default|size=sm": __body41,
    // figma: variant=outline, selected=True, size=lg(36), state=Focus-visible
    "variant=outline|selected=true|state=focus-visible|size=lg": __body42,
    // figma: variant=outline, selected=True, size=md(32), state=Focus-visible
    "variant=outline|selected=true|state=focus-visible|size=md": __body43,
    // figma: variant=outline, selected=True, size=sm(28), state=Focus-visible
    "variant=outline|selected=true|state=focus-visible|size=sm": __body44,
    // figma: variant=ghost, selected=True, size=lg(36), state=Focus-visible
    "variant=ghost|selected=true|state=focus-visible|size=lg": __body45,
    // figma: variant=ghost, selected=True, size=md(32), state=Focus-visible
    "variant=ghost|selected=true|state=focus-visible|size=md": __body46,
    // figma: variant=ghost, selected=True, size=sm(28), state=Focus-visible
    "variant=ghost|selected=true|state=focus-visible|size=sm": __body47,
    // figma: variant=outline, selected=True, size=lg(36), state=Hover
    "variant=outline|selected=true|state=hover|size=lg": __body48,
    // figma: variant=outline, selected=True, size=md(32), state=Hover
    "variant=outline|selected=true|state=hover|size=md": __body49,
    // figma: variant=outline, selected=True, size=sm(28), state=Hover
    "variant=outline|selected=true|state=hover|size=sm": __body50,
    // figma: variant=ghost, selected=True, size=lg(36), state=Hover
    "variant=ghost|selected=true|state=hover|size=lg": __body51,
    // figma: variant=ghost, selected=True, size=md(32), state=Hover
    "variant=ghost|selected=true|state=hover|size=md": __body52,
    // figma: variant=ghost, selected=True, size=sm(28), state=Hover
    "variant=ghost|selected=true|state=hover|size=sm": __body53,
    // figma: variant=outline, selected=True, size=lg(36), state=Active
    "variant=outline|selected=true|state=active|size=lg": __body54,
    // figma: variant=outline, selected=True, size=md(32), state=Active
    "variant=outline|selected=true|state=active|size=md": __body55,
    // figma: variant=outline, selected=True, size=sm(28), state=Active
    "variant=outline|selected=true|state=active|size=sm": __body56,
    // figma: variant=ghost, selected=True, size=lg(36), state=Active
    "variant=ghost|selected=true|state=active|size=lg": __body57,
    // figma: variant=ghost, selected=True, size=md(32), state=Active
    "variant=ghost|selected=true|state=active|size=md": __body58,
    // figma: variant=ghost, selected=True, size=sm(28), state=Active
    "variant=ghost|selected=true|state=active|size=sm": __body59,
    // figma: variant=outline, selected=False, size=lg(36), state=Focus-visible
    "variant=outline|selected=false|state=focus-visible|size=lg": __body60,
    // figma: variant=outline, selected=False, size=md(32), state=Focus-visible
    "variant=outline|selected=false|state=focus-visible|size=md": __body61,
    // figma: variant=outline, selected=False, size=sm(28), state=Focus-visible
    "variant=outline|selected=false|state=focus-visible|size=sm": __body62,
    // figma: variant=ghost, selected=False, size=lg(36), state=Focus-visible
    "variant=ghost|selected=false|state=focus-visible|size=lg": __body63,
    // figma: variant=ghost, selected=False, size=md(32), state=Focus-visible
    "variant=ghost|selected=false|state=focus-visible|size=md": __body64,
    // figma: variant=ghost, selected=False, size=sm(28), state=Focus-visible
    "variant=ghost|selected=false|state=focus-visible|size=sm": __body65,
    // figma: variant=outline, selected=False, size=lg(36), state=Disabled
    "variant=outline|selected=false|state=disabled|size=lg": __body66,
    // figma: variant=outline, selected=False, size=md(32), state=Disabled
    "variant=outline|selected=false|state=disabled|size=md": __body67,
    // figma: variant=outline, selected=False, size=sm(28), state=Disabled
    "variant=outline|selected=false|state=disabled|size=sm": __body68,
    // figma: variant=ghost, selected=False, size=lg(36), state=Disabled
    "variant=ghost|selected=false|state=disabled|size=lg": __body69,
    // figma: variant=ghost, selected=False, size=md(32), state=Disabled
    "variant=ghost|selected=false|state=disabled|size=md": __body70,
    // figma: variant=ghost, selected=False, size=sm(28), state=Disabled
    "variant=ghost|selected=false|state=disabled|size=sm": __body71,
    // figma: variant=outline, selected=True, size=lg(36), state=Disabled
    "variant=outline|selected=true|state=disabled|size=lg": __body72,
    // figma: variant=outline, selected=True, size=md(32), state=Disabled
    "variant=outline|selected=true|state=disabled|size=md": __body73,
    // figma: variant=outline, selected=True, size=sm(28), state=Disabled
    "variant=outline|selected=true|state=disabled|size=sm": __body74,
    // figma: variant=ghost, selected=True, size=lg(36), state=Disabled
    "variant=ghost|selected=true|state=disabled|size=lg": __body75,
    // figma: variant=ghost, selected=True, size=md(32), state=Disabled
    "variant=ghost|selected=true|state=disabled|size=md": __body76,
    // figma: variant=ghost, selected=True, size=sm(28), state=Disabled
    "variant=ghost|selected=true|state=disabled|size=sm": __body77,
    // figma: variant=outline, selected=False, size=lg(36), state=Hover
    "variant=outline|selected=false|state=hover|size=lg": __body78,
    // figma: variant=outline, selected=False, size=md(32), state=Hover
    "variant=outline|selected=false|state=hover|size=md": __body79,
    // figma: variant=outline, selected=False, size=sm(28), state=Hover
    "variant=outline|selected=false|state=hover|size=sm": __body80,
    // figma: variant=ghost, selected=False, size=lg(36), state=Hover
    "variant=ghost|selected=false|state=hover|size=lg": __body81,
    // figma: variant=ghost, selected=False, size=md(32), state=Hover
    "variant=ghost|selected=false|state=hover|size=md": __body82,
    // figma: variant=ghost, selected=False, size=sm(28), state=Hover
    "variant=ghost|selected=false|state=hover|size=sm": __body83,
    // figma: variant=outline, selected=False, size=lg(36), state=Active
    "variant=outline|selected=false|state=active|size=lg": __body84,
    // figma: variant=outline, selected=False, size=md(32), state=Active
    "variant=outline|selected=false|state=active|size=md": __body85,
    // figma: variant=outline, selected=False, size=sm(28), state=Active
    "variant=outline|selected=false|state=active|size=sm": __body86,
    // figma: variant=ghost, selected=False, size=lg(36), state=Active
    "variant=ghost|selected=false|state=active|size=lg": __body87,
    // figma: variant=ghost, selected=False, size=md(32), state=Active
    "variant=ghost|selected=false|state=active|size=md": __body88,
    // figma: variant=ghost, selected=False, size=sm(28), state=Active
    "variant=ghost|selected=false|state=active|size=sm": __body89,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default FilterChip;
