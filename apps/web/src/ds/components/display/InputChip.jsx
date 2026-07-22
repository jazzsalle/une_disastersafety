// figma node: 2525:7514 Input chip (45 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);

export function InputChip(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Input chip", leftIcon: _p.leftIcon ?? true, variant: _p.variant ?? "fill", size: _p.size ?? "lg", state: _p.state ?? "default" };
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-interaction-secondary-icon-disabled)",
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
            color: "var(--color-interaction-secondary-icon-disabled)",
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
              color: "var(--color-interaction-secondary-icon-disabled)",
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
            color: "var(--color-interaction-secondary-icon-disabled)",
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
              color: "var(--color-interaction-secondary-icon-disabled)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body9 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body10 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body11 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body12 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body13 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body14 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body15 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body16 = () => (
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body17 = () => (
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body18 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body19 = () => (
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body20 = () => (
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body21 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-interaction-secondary-icon-disabled)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body22 = () => (
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
            color: "var(--color-interaction-secondary-icon-disabled)",
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
              color: "var(--color-interaction-secondary-icon-disabled)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body23 = () => (
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
            color: "var(--color-interaction-secondary-icon-disabled)",
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
              color: "var(--color-interaction-secondary-icon-disabled)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body24 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body25 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body26 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body27 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body28 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body29 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body30 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body31 = () => (
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body32 = () => (
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-interaction-secondary-icon-disabled)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
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
            color: "var(--color-interaction-secondary-icon-disabled)",
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
              color: "var(--color-interaction-secondary-icon-disabled)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
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
            color: "var(--color-interaction-secondary-icon-disabled)",
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
              color: "var(--color-interaction-secondary-icon-disabled)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body36 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body37 = () => (
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body38 = () => (
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
            color: "var(--color-icon-basic)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body39 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body40 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body41 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body42 = () => (
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
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body43 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body44 = () => (
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
            color: "var(--color-icon-primary)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5 6.065 L 1.274 9.791 C 1.134 9.93 0.957 10 0.741 10 C 0.526 10 0.349 9.93 0.209 9.791 C 0.07 9.651 0 9.474 0 9.259 C 0 9.043 0.07 8.866 0.209 8.726 L 3.935 5 L 0.209 1.274 C 0.07 1.134 0 0.957 0 0.741 C 0 0.526 0.07 0.349 0.209 0.209 C 0.349 0.07 0.526 0 0.741 0 C 0.957 0 1.134 0.07 1.274 0.209 L 5 3.935 L 8.726 0.209 C 8.866 0.07 9.043 0 9.259 0 C 9.474 0 9.651 0.07 9.791 0.209 C 9.93 0.349 10 0.526 10 0.741 C 10 0.957 9.93 1.134 9.791 1.274 L 6.065 5 L 9.791 8.726 C 9.93 8.866 10 9.043 10 9.259 C 10 9.474 9.93 9.651 9.791 9.791 C 9.651 9.93 9.474 10 9.259 10 C 9.043 10 8.866 9.93 8.726 9.791 L 5 6.065 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: variant=fill, size=lg(36), state=Default
    "variant=fill|size=lg|state=default": __body0,
    // figma: variant=fill, size=md(32), state=Default
    "variant=fill|size=md|state=default": __body1,
    // figma: variant=fill, size=sm(28), state=Default
    "variant=fill|size=sm|state=default": __body2,
    // figma: variant=fill, size=lg(36), state=Disabled
    "variant=fill|size=lg|state=disabled": __body3,
    // figma: variant=fill, size=md(32), state=Disabled
    "variant=fill|size=md|state=disabled": __body4,
    // figma: variant=fill, size=sm(28), state=Disabled
    "variant=fill|size=sm|state=disabled": __body5,
    // figma: variant=fill, size=lg(36), state=Focus-visible
    "variant=fill|size=lg|state=focus-visible": __body6,
    // figma: variant=fill, size=md(32), state=Focus-visible
    "variant=fill|size=md|state=focus-visible": __body7,
    // figma: variant=fill, size=sm(28), state=Focus-visible
    "variant=fill|size=sm|state=focus-visible": __body8,
    // figma: variant=fill, size=lg(36), state=Hover
    "variant=fill|size=lg|state=hover": __body9,
    // figma: variant=fill, size=md(32), state=Hover
    "variant=fill|size=md|state=hover": __body10,
    // figma: variant=fill, size=sm(28), state=Hover
    "variant=fill|size=sm|state=hover": __body11,
    // figma: variant=fill, size=lg(36), state=Active
    "variant=fill|size=lg|state=active": __body12,
    // figma: variant=fill, size=md(32), state=Active
    "variant=fill|size=md|state=active": __body13,
    // figma: variant=fill, size=sm(28), state=Active
    "variant=fill|size=sm|state=active": __body14,
    // figma: variant=outline, size=lg(36), state=Default
    "variant=outline|size=lg|state=default": __body15,
    // figma: variant=outline, size=md(32), state=Default
    "variant=outline|size=md|state=default": __body16,
    // figma: variant=outline, size=sm(28), state=Default
    "variant=outline|size=sm|state=default": __body17,
    // figma: variant=outline, size=lg(36), state=Focus-visible
    "variant=outline|size=lg|state=focus-visible": __body18,
    // figma: variant=outline, size=md(32), state=Focus-visible
    "variant=outline|size=md|state=focus-visible": __body19,
    // figma: variant=outline, size=sm(28), state=Focus-visible
    "variant=outline|size=sm|state=focus-visible": __body20,
    // figma: variant=outline, size=lg(36), state=Disabled
    "variant=outline|size=lg|state=disabled": __body21,
    // figma: variant=outline, size=md(32), state=Disabled
    "variant=outline|size=md|state=disabled": __body22,
    // figma: variant=outline, size=sm(28), state=Disabled
    "variant=outline|size=sm|state=disabled": __body23,
    // figma: variant=outline, size=lg(36), state=Hover
    "variant=outline|size=lg|state=hover": __body24,
    // figma: variant=outline, size=md(32), state=Hover
    "variant=outline|size=md|state=hover": __body25,
    // figma: variant=outline, size=sm(28), state=Hover
    "variant=outline|size=sm|state=hover": __body26,
    // figma: variant=outline, size=lg(36), state=Active
    "variant=outline|size=lg|state=active": __body27,
    // figma: variant=outline, size=md(32), state=Active
    "variant=outline|size=md|state=active": __body28,
    // figma: variant=outline, size=sm(28), state=Active
    "variant=outline|size=sm|state=active": __body29,
    // figma: variant=ghost, size=lg(36), state=Default
    "variant=ghost|size=lg|state=default": __body30,
    // figma: variant=ghost, size=md(32), state=Default
    "variant=ghost|size=md|state=default": __body31,
    // figma: variant=ghost, size=sm(28), state=Default
    "variant=ghost|size=sm|state=default": __body32,
    // figma: variant=ghost, size=lg(36), state=Disabled
    "variant=ghost|size=lg|state=disabled": __body33,
    // figma: variant=ghost, size=md(32), state=Disabled
    "variant=ghost|size=md|state=disabled": __body34,
    // figma: variant=ghost, size=sm(28), state=Disabled
    "variant=ghost|size=sm|state=disabled": __body35,
    // figma: variant=ghost, size=lg(36), state=Focus-visible
    "variant=ghost|size=lg|state=focus-visible": __body36,
    // figma: variant=ghost, size=md(32), state=Focus-visible
    "variant=ghost|size=md|state=focus-visible": __body37,
    // figma: variant=ghost, size=sm(28), state=Focus-visible
    "variant=ghost|size=sm|state=focus-visible": __body38,
    // figma: variant=ghost, size=lg(36), state=Hover
    "variant=ghost|size=lg|state=hover": __body39,
    // figma: variant=ghost, size=md(32), state=Hover
    "variant=ghost|size=md|state=hover": __body40,
    // figma: variant=ghost, size=sm(28), state=Hover
    "variant=ghost|size=sm|state=hover": __body41,
    // figma: variant=ghost, size=lg(36), state=Active
    "variant=ghost|size=lg|state=active": __body42,
    // figma: variant=ghost, size=md(32), state=Active
    "variant=ghost|size=md|state=active": __body43,
    // figma: variant=ghost, size=sm(28), state=Active
    "variant=ghost|size=sm|state=active": __body44,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default InputChip;
