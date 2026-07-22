import { Badge2 } from '../display/Badge2.jsx';

// figma node: 2406:47273 Tab (24 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);

export function Tab(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Tab", selected: _p.selected ?? false, leftIcon: _p.leftIcon ?? true, size: _p.size ?? "lg", badge: _p.badge ?? true, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xl) * 1px)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 20,
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
            color: "rgb(255,255,255)",
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
        color: "var(--color-interaction-secondary-text-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 20,
          width: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0.001)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 20,
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
            color: "rgb(255,255,255)",
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
        color: "var(--color-interaction-secondary-text-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 20,
          width: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xl) * 1px)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 20,
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
            color: "rgb(255,255,255)",
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
        color: "var(--color-interaction-secondary-text-hover)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 20,
          width: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xl) * 1px)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 20,
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
            color: "rgb(255,255,255)",
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
        color: "var(--color-interaction-secondary-text-active)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 20,
          width: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
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
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 24,
        height: 24,
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
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
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
        color: "var(--color-interaction-secondary-text-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 24,
          width: 24,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 label={"1"} leftIcon={false} variant={"soild-pastel"} shape={"round-square"} size={"sm"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0.001)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
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
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 24,
        height: 24,
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
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 24,
          width: 24,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 label={"1"} leftIcon={false} variant={"soild-pastel"} shape={"round-square"} size={"sm"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
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
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 24,
        height: 24,
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
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-hover)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 24,
          width: 24,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 label={"1"} leftIcon={false} variant={"soild-pastel"} shape={"round-square"} size={"sm"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 20px 12px 20px",
      justifyContent: "center",
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
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 24,
        height: 24,
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
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-active)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 24,
          width: 24,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 label={"1"} leftIcon={false} variant={"soild-pastel"} shape={"round-square"} size={"sm"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 105,
      height: "calc(var(--sizing-control-md) * 1px)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 16,
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
        alignSelf: "stretch",
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
        color: "var(--color-interaction-secondary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 20,
          width: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 105,
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0.001)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 16,
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
        alignSelf: "stretch",
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
        color: "var(--color-interaction-secondary-text-default)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 20,
          width: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 105,
      height: "calc(var(--sizing-control-md) * 1px)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 16,
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
        alignSelf: "stretch",
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
        color: "var(--color-interaction-secondary-text-hover)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 20,
          width: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 105,
      height: "calc(var(--sizing-control-md) * 1px)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: 16,
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
        alignSelf: "stretch",
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
        color: "var(--color-interaction-secondary-text-active)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.badge && (
      <div style={{
          position: "relative",
          height: 20,
          width: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 52,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 20px 8px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
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
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
              position: "absolute",
              left: 2.857,
              top: 2,
              width: 18.286,
              height: 20,
              color: "var(--color-interaction-primary-icon-default)",
            }}>
              <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            height: 24,
            width: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"sm"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 4,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xl) * 1px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 44,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 16px 8px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 20,
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
              color: "var(--color-interaction-primary-icon-default)",
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
          color: "var(--color-interaction-primary-text-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            height: 20,
            width: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 4,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-md) * 1px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 38,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 16,
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
          alignSelf: "stretch",
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
              color: "var(--color-interaction-primary-icon-default)",
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
          color: "var(--color-interaction-primary-text-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 105,
      height: "calc(var(--sizing-control-md) * 1px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 38,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 16,
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
          alignSelf: "stretch",
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
              color: "var(--color-interaction-primary-icon-hover)",
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
          color: "var(--color-interaction-primary-text-hover)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-hover)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 105,
      height: "calc(var(--sizing-control-md) * 1px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 38,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 16,
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
          alignSelf: "stretch",
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
              color: "var(--color-interaction-primary-icon-active)",
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
          color: "var(--color-interaction-primary-text-active)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-active)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xl) * 1px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 44,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 16px 8px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 20,
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
              color: "var(--color-interaction-primary-icon-hover)",
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
          color: "var(--color-interaction-primary-text-hover)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            height: 20,
            width: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 4,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-hover)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xl) * 1px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 44,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 16px 8px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 20,
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
              color: "var(--color-interaction-primary-icon-active)",
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
          color: "var(--color-interaction-primary-text-active)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            height: 20,
            width: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 4,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-active)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 44,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 16px 8px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 20,
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
              color: "var(--color-interaction-primary-icon-default)",
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
          color: "var(--color-interaction-primary-text-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            height: 20,
            width: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 4,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 52,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 20px 8px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
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
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
              position: "absolute",
              left: 2.857,
              top: 2,
              width: 18.286,
              height: 20,
              color: "var(--color-interaction-primary-icon-default)",
            }}>
              <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            height: 24,
            width: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"sm"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 4,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 52,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 20px 8px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
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
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
              position: "absolute",
              left: 2.857,
              top: 2,
              width: 18.286,
              height: 20,
              color: "var(--color-interaction-primary-icon-hover)",
            }}>
              <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-hover)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            height: 24,
            width: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"sm"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 4,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-hover)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 52,
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 20px 8px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
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
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
              position: "absolute",
              left: 2.857,
              top: 2,
              width: 18.286,
              height: 20,
              color: "var(--color-interaction-primary-icon-active)",
            }}>
              <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-active)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            height: 24,
            width: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"sm"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 4,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-active)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 38,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "12px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: 16,
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
          alignSelf: "stretch",
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
              color: "var(--color-interaction-primary-icon-default)",
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
          color: "var(--color-interaction-primary-text-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.label}</span>
        {props.badge && (
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"xs"} color={"warning"} />}</div>
        )}
      </div>
      <div style={{
        position: "relative",
        height: 2,
        borderRadius: "8px 8px 0px 0px",
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __impls = {
    // figma: selected=False, size=md(48), state=Default
    "selected=false|size=md|state=default": __body0,
    // figma: selected=False, size=md(48), state=Focus-visible
    "selected=false|size=md|state=focus-visible": __body1,
    // figma: selected=False, size=md(48), state=Hover
    "selected=false|size=md|state=hover": __body2,
    // figma: selected=False, size=md(48), state=Active
    "selected=false|size=md|state=active": __body3,
    // figma: selected=False, size=lg(56), state=Default
    "selected=false|size=lg|state=default": __body4,
    // figma: selected=False, size=lg(56), state=Focus-visible
    "selected=false|size=lg|state=focus-visible": __body5,
    // figma: selected=False, size=lg(56), state=Hover
    "selected=false|size=lg|state=hover": __body6,
    // figma: selected=False, size=lg(56), state=Active
    "selected=false|size=lg|state=active": __body7,
    // figma: selected=False, size=sm(40), state=Default
    "selected=false|size=sm|state=default": __body8,
    // figma: selected=False, size=sm(40), state=Focus-visible
    "selected=false|size=sm|state=focus-visible": __body9,
    // figma: selected=False, size=sm(40), state=Hover
    "selected=false|size=sm|state=hover": __body10,
    // figma: selected=False, size=sm(40), state=Active
    "selected=false|size=sm|state=active": __body11,
    // figma: selected=True, size=lg(56), state=Default
    "selected=true|size=lg|state=default": __body12,
    // figma: selected=True, size=md(48), state=Default
    "selected=true|size=md|state=default": __body13,
    // figma: selected=True, size=sm(40), state=Default
    "selected=true|size=sm|state=default": __body14,
    // figma: selected=True, size=sm(40), state=Hover
    "selected=true|size=sm|state=hover": __body15,
    // figma: selected=True, size=sm(40), state=Active
    "selected=true|size=sm|state=active": __body16,
    // figma: selected=True, size=md(48), state=Hover
    "selected=true|size=md|state=hover": __body17,
    // figma: selected=True, size=md(48), state=Active
    "selected=true|size=md|state=active": __body18,
    // figma: selected=True, size=md(48), state=Focus-visible
    "selected=true|size=md|state=focus-visible": __body19,
    // figma: selected=True, size=lg(56), state=Focus-visible
    "selected=true|size=lg|state=focus-visible": __body20,
    // figma: selected=True, size=lg(56), state=Hover
    "selected=true|size=lg|state=hover": __body21,
    // figma: selected=True, size=lg(56), state=Active
    "selected=true|size=lg|state=active": __body22,
    // figma: selected=True, size=sm(40), state=Focus-visible
    "selected=true|size=sm|state=focus-visible": __body23,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default Tab;
