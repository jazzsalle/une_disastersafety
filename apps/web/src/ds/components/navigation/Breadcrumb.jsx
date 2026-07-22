// figma node: 357:3220 breadcrumb (18 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);

export function Breadcrumb(_p = {}) {
  const props = { ..._p, selected: _p.selected ?? false, label: _p.label ?? true, size: _p.size ?? "lg", leftIcon: _p.leftIcon ?? true, label2: _p.label2 ?? "breadcrumb", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
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
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      {props.label && (
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
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
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
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      {props.label && (
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
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
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
      {props.label && (
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
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
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
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      {props.label && (
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
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
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
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      {props.label && (
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
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "8px 16px 8px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
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
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "4px 12px 4px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
          height: 16,
          flexShrink: 0,
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
      {props.label && (
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
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "4px 12px 4px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
          height: 16,
          flexShrink: 0,
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
      {props.label && (
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
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "4px 12px 4px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
          height: 16,
          flexShrink: 0,
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
      {props.label && (
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
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "4px 12px 4px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
          height: 16,
          flexShrink: 0,
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
      {props.label && (
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
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "4px 12px 4px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
          height: 16,
          flexShrink: 0,
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
      {props.label && (
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
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "4px 12px 4px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
          height: 16,
          flexShrink: 0,
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
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
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
          height: 12,
          flexShrink: 0,
        }}>
          <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
            position: "absolute",
            left: 1.429,
            top: 1,
            width: 9.143,
            height: 10,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      {props.label && (
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
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
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
          height: 12,
          flexShrink: 0,
        }}>
          <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
            position: "absolute",
            left: 1.429,
            top: 1,
            width: 9.143,
            height: 10,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
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
          height: 12,
          flexShrink: 0,
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
      )}
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
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
          height: 12,
          flexShrink: 0,
        }}>
          <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
            position: "absolute",
            left: 1.429,
            top: 1,
            width: 9.143,
            height: 10,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
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
          height: 12,
          flexShrink: 0,
        }}>
          <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
            position: "absolute",
            left: 1.429,
            top: 1,
            width: 9.143,
            height: 10,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-2xs) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-2xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
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
          height: 12,
          flexShrink: 0,
        }}>
          <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
            position: "absolute",
            left: 1.429,
            top: 1,
            width: 9.143,
            height: 10,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: selected=False, size=lg(16), state=Default
    "selected=false|size=lg|state=default": __body0,
    // figma: selected=False, size=lg(16), state=Focus-visible
    "selected=false|size=lg|state=focus-visible": __body1,
    // figma: selected=False, size=lg(16), state=Disabled
    "selected=false|size=lg|state=disabled": __body2,
    // figma: selected=False, size=lg(16), state=Hover
    "selected=false|size=lg|state=hover": __body3,
    // figma: selected=False, size=lg(16), state=Active
    "selected=false|size=lg|state=active": __body4,
    // figma: selected=True, size=lg(16), state=Default
    "selected=true|size=lg|state=default": __body5,
    // figma: selected=False, size=md(14), state=Default
    "selected=false|size=md|state=default": __body6,
    // figma: selected=False, size=md(14), state=Focus-visible
    "selected=false|size=md|state=focus-visible": __body7,
    // figma: selected=False, size=md(14), state=Disabled
    "selected=false|size=md|state=disabled": __body8,
    // figma: selected=False, size=md(14), state=Hover
    "selected=false|size=md|state=hover": __body9,
    // figma: selected=False, size=md(14), state=Active
    "selected=false|size=md|state=active": __body10,
    // figma: selected=True, size=md(14), state=Default
    "selected=true|size=md|state=default": __body11,
    // figma: selected=False, size=sm(12), state=Default
    "selected=false|size=sm|state=default": __body12,
    // figma: selected=False, size=sm(12), state=Focus-visible
    "selected=false|size=sm|state=focus-visible": __body13,
    // figma: selected=False, size=sm(12), state=Disabled
    "selected=false|size=sm|state=disabled": __body14,
    // figma: selected=False, size=sm(12), state=Hover
    "selected=false|size=sm|state=hover": __body15,
    // figma: selected=False, size=sm(12), state=Active
    "selected=false|size=sm|state=active": __body16,
    // figma: selected=True, size=sm(12), state=Default
    "selected=true|size=sm|state=default": __body17,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Breadcrumb;
