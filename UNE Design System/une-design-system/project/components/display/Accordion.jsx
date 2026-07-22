import { Checkbox2 } from './Checkbox2.jsx';
import { Component } from './Component.jsx';
import { ListItem } from './ListItem.jsx';

// figma node: 2323:31777 Accordion (60 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state) + '|' + "open=" + __venc(p.open);

export function Accordion(_p = {}) {
  const props = { ..._p, showList: _p.showList ?? true, headerCheckbox: _p.headerCheckbox ?? true, variant: _p.variant ?? "line", bodyText: _p.bodyText ?? "컨텐츠 영역 (아코디언이 펼쳐지면 자세한 설명 본문 또는 UI 요소가 영역에 노출됩니다.)", leftIcon: _p.leftIcon ?? true, size: _p.size ?? "lg", showBodyText: _p.showBodyText ?? true, state: _p.state ?? "default", title: _p.title ?? "Title", open: _p.open ?? false, helperText: _p.helperText ?? "helperText", helpertext: _p.helpertext ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-icon-tertiary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"20px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.360px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"20px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-icon-tertiary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-icon-tertiary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"20px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.360px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"20px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-icon-tertiary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-icon-tertiary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"20px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.360px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"20px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-icon-tertiary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"disabled"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"disabled"} />}</div>
      )}
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"disabled"} />}</div>
      )}
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
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"disabled"} />}</div>
      )}
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
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.360px",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"disabled"} />}</div>
      )}
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
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"disabled"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"disabled"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"disabled"} />}</div>
      )}
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-interaction-primary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"disabled"} />}</div>
      )}
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-interaction-primary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"disabled"} />}</div>
      )}
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-interaction-primary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.360px",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"disabled"} />}</div>
      )}
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-interaction-primary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"disabled"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-interaction-primary-text-disabled)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-disabled)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 440,
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 64,
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
        )}
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
          fontWeight: 500,
          fontSize: 20,
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12} height={8} viewBox="0 0 12 8" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,-1,18,16)",
              transformOrigin: "0 0",
              width: 12,
              height: 8,
              color: "var(--color-interaction-primary-icon-default)",
            }}>
              <path d={"M 4.835 7.478 L 0.509 2.957 C -0.018 2.406 -0.136 1.776 0.156 1.066 C 0.447 0.355 0.966 0 1.715 0 L 10.285 0 C 11.034 0 11.553 0.355 11.844 1.066 C 12.136 1.776 12.018 2.406 11.491 2.957 L 7.165 7.478 C 6.998 7.652 6.818 7.783 6.624 7.87 C 6.43 7.957 6.222 8 6 8 C 5.778 8 5.57 7.957 5.376 7.87 C 5.182 7.783 5.002 7.652 4.835 7.478 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 20px 16px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
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
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 440,
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-3xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "32px",
          letterSpacing: "-0.600px",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 440,
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 12px 16px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-primary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.360px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 12px 16px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "18px",
          letterSpacing: "-0.360px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-primary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-3xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-primary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 64,
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
        )}
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "32px",
          letterSpacing: "-0.600px",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12} height={8} viewBox="0 0 12 8" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,-1,18,16)",
              transformOrigin: "0 0",
              width: 12,
              height: 8,
              color: "var(--color-interaction-primary-icon-default)",
            }}>
              <path d={"M 4.835 7.478 L 0.509 2.957 C -0.018 2.406 -0.136 1.776 0.156 1.066 C 0.447 0.355 0.966 0 1.715 0 L 10.285 0 C 11.034 0 11.553 0.355 11.844 1.066 C 12.136 1.776 12.018 2.406 11.491 2.957 L 7.165 7.478 C 6.998 7.652 6.818 7.783 6.624 7.87 C 6.43 7.957 6.222 8 6 8 C 5.778 8 5.57 7.957 5.376 7.87 C 5.182 7.783 5.002 7.652 4.835 7.478 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 20px 16px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      {props.showList && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
      </div>
      )}
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 64,
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
        )}
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
          fontWeight: 500,
          fontSize: 20,
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12} height={8} viewBox="0 0 12 8" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,-1,18,16)",
              transformOrigin: "0 0",
              width: 12,
              height: 8,
              color: "var(--color-interaction-primary-icon-default)",
            }}>
              <path d={"M 4.835 7.478 L 0.509 2.957 C -0.018 2.406 -0.136 1.776 0.156 1.066 C 0.447 0.355 0.966 0 1.715 0 L 10.285 0 C 11.034 0 11.553 0.355 11.844 1.066 C 12.136 1.776 12.018 2.406 11.491 2.957 L 7.165 7.478 C 6.998 7.652 6.818 7.783 6.624 7.87 C 6.43 7.957 6.222 8 6 8 C 5.778 8 5.57 7.957 5.376 7.87 C 5.182 7.783 5.002 7.652 4.835 7.478 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 20px 16px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      {props.showList && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
      </div>
      )}
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-3xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "32px",
          letterSpacing: "-0.600px",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 12px 16px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-primary)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.360px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 12px 16px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "18px",
          letterSpacing: "-0.360px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-primary)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-3xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-primary)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 64,
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
        )}
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "32px",
          letterSpacing: "-0.600px",
          color: "var(--color-interaction-primary-text-default)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12} height={8} viewBox="0 0 12 8" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,-1,18,16)",
              transformOrigin: "0 0",
              width: 12,
              height: 8,
              color: "var(--color-interaction-primary-icon-default)",
            }}>
              <path d={"M 4.835 7.478 L 0.509 2.957 C -0.018 2.406 -0.136 1.776 0.156 1.066 C 0.447 0.355 0.966 0 1.715 0 L 10.285 0 C 11.034 0 11.553 0.355 11.844 1.066 C 12.136 1.776 12.018 2.406 11.491 2.957 L 7.165 7.478 C 6.998 7.652 6.818 7.783 6.624 7.87 C 6.43 7.957 6.222 8 6 8 C 5.778 8 5.57 7.957 5.376 7.87 C 5.182 7.783 5.002 7.652 4.835 7.478 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 20px 16px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      {props.showList && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
      </div>
      )}
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: 440,
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 64,
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
        )}
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
          fontWeight: 500,
          fontSize: 20,
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-hover)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12} height={8} viewBox="0 0 12 8" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,-1,18,16)",
              transformOrigin: "0 0",
              width: 12,
              height: 8,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 4.835 7.478 L 0.509 2.957 C -0.018 2.406 -0.136 1.776 0.156 1.066 C 0.447 0.355 0.966 0 1.715 0 L 10.285 0 C 11.034 0 11.553 0.355 11.844 1.066 C 12.136 1.776 12.018 2.406 11.491 2.957 L 7.165 7.478 C 6.998 7.652 6.818 7.783 6.624 7.87 C 6.43 7.957 6.222 8 6 8 C 5.778 8 5.57 7.957 5.376 7.87 C 5.182 7.783 5.002 7.652 4.835 7.478 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 20px 16px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      {props.showList && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
      </div>
      )}
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 440,
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-3xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "32px",
          letterSpacing: "-0.600px",
          color: "var(--color-interaction-primary-text-hover)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 440,
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-interaction-primary-text-hover)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 12px 16px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-primary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-interaction-primary-text-hover)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.360px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 12px 16px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "18px",
          letterSpacing: "-0.360px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-primary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-3xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-interaction-primary-text-hover)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-primary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 64,
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
        )}
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "32px",
          letterSpacing: "-0.600px",
          color: "var(--color-interaction-primary-text-hover)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12} height={8} viewBox="0 0 12 8" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,-1,18,16)",
              transformOrigin: "0 0",
              width: 12,
              height: 8,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 4.835 7.478 L 0.509 2.957 C -0.018 2.406 -0.136 1.776 0.156 1.066 C 0.447 0.355 0.966 0 1.715 0 L 10.285 0 C 11.034 0 11.553 0.355 11.844 1.066 C 12.136 1.776 12.018 2.406 11.491 2.957 L 7.165 7.478 C 6.998 7.652 6.818 7.783 6.624 7.87 C 6.43 7.957 6.222 8 6 8 C 5.778 8 5.57 7.957 5.376 7.87 C 5.182 7.783 5.002 7.652 4.835 7.478 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 20px 16px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      {props.showList && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
      </div>
      )}
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 440,
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 64,
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
        )}
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
          fontWeight: 500,
          fontSize: 20,
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-active)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12} height={8} viewBox="0 0 12 8" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,-1,18,16)",
              transformOrigin: "0 0",
              width: 12,
              height: 8,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 4.835 7.478 L 0.509 2.957 C -0.018 2.406 -0.136 1.776 0.156 1.066 C 0.447 0.355 0.966 0 1.715 0 L 10.285 0 C 11.034 0 11.553 0.355 11.844 1.066 C 12.136 1.776 12.018 2.406 11.491 2.957 L 7.165 7.478 C 6.998 7.652 6.818 7.783 6.624 7.87 C 6.43 7.957 6.222 8 6 8 C 5.778 8 5.57 7.957 5.376 7.87 C 5.182 7.783 5.002 7.652 4.835 7.478 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 20px 16px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      {props.showList && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
      </div>
      )}
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 440,
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-3xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
        )}
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
              color: "var(--color-interaction-primary-bg-active)",
            }}>
              <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "32px",
          letterSpacing: "-0.600px",
          color: "var(--color-interaction-primary-text-active)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: 440,
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
        borderTop: "1px solid var(--color-border-default)",
        borderRight: "1px solid var(--color-border-default)",
        borderBottom: "1px solid var(--color-border-default)",
        borderLeft: "1px solid var(--color-border-default)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-interaction-primary-text-active)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 12px 16px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-primary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
        )}
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
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-interaction-primary-text-active)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          letterSpacing: "-0.360px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 12px 16px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "18px",
          letterSpacing: "-0.360px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 40,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"sm"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-primary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: "calc(var(--sizing-control-3xl) * 1px)",
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
        )}
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
              color: "var(--color-interaction-primary-bg-active)",
            }}>
              <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-interaction-primary-text-active)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.420px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
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
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"md"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: 440,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-primary)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 64,
        overflow: "hidden",
        backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "0px 20px 0px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.headerCheckbox && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
        )}
        {props.leftIcon && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "32px",
          letterSpacing: "-0.600px",
          color: "var(--color-interaction-primary-text-active)",
          flexGrow: 1,
        }}>{props.title}</span>
        {props.helpertext && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-helper-2)",
          flexShrink: 0,
        }}>{props.helperText}</span>
        )}
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-xl) * 1px)",
          height: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={12} height={8} viewBox="0 0 12 8" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,-1,18,16)",
              transformOrigin: "0 0",
              width: 12,
              height: 8,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 4.835 7.478 L 0.509 2.957 C -0.018 2.406 -0.136 1.776 0.156 1.066 C 0.447 0.355 0.966 0 1.715 0 L 10.285 0 C 11.034 0 11.553 0.355 11.844 1.066 C 12.136 1.776 12.018 2.406 11.491 2.957 L 7.165 7.478 C 6.998 7.652 6.818 7.783 6.624 7.87 C 6.43 7.957 6.222 8 6 8 C 5.778 8 5.57 7.957 5.376 7.87 C 5.182 7.783 5.002 7.652 4.835 7.478 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.showBodyText && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        padding: "16px 20px 16px 20px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingTop: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-h-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.480px",
          color: "var(--color-text-secondary-2)",
          flexGrow: 1,
        }}>{props.bodyText}</span>
      </div>
      )}
      {props.showList && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
        <ListItem
          style={{
            position: "relative",
            height: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          selected={false}
          size={"lg"}
          state={"default"}
        />
      </div>
      )}
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-icon-tertiary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"20px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
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
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"sm"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        letterSpacing: "-0.360px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
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
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: 440,
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"md"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"20px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
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
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: 440,
      height: 64,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-sm) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-v-lg) * 1px)",
      paddingRight: "calc(var(--spacing-padding-v-lg) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.headerCheckbox && (
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox2 value={"unchecked"} size={"lg"} state={"default"} />}</div>
      )}
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "var(--color-icon-tertiary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        lineHeight: "32px",
        letterSpacing: "-0.600px",
        color: "var(--color-text-basic)",
        flexGrow: 1,
      }}>{props.title}</span>
      {props.helpertext && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.480px",
        color: "var(--color-text-helper-2)",
        flexShrink: 0,
      }}>{props.helperText}</span>
      )}
      <div style={{
        position: "relative",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
    </div>
  );
  const __impls = {
    // figma: variant=line, size=lg(64), open=False, state=Hover
    "variant=line|size=lg|state=hover|open=false": __body0,
    // figma: variant=line, size=md(56), open=False, state=Hover
    "variant=line|size=md|state=hover|open=false": __body1,
    // figma: variant=line, size=sm(48), open=False, state=Hover
    "variant=line|size=sm|state=hover|open=false": __body2,
    // figma: variant=Select, size=sm(48), open=False, state=Hover
    "variant=select|size=sm|state=hover|open=false": __body3,
    // figma: variant=Select, size=md(56), open=False, state=Hover
    "variant=select|size=md|state=hover|open=false": __body4,
    // figma: variant=Select, size=lg(64), open=False, state=Hover
    "variant=select|size=lg|state=hover|open=false": __body5,
    // figma: variant=line, size=lg(64), open=False, state=Active
    "variant=line|size=lg|state=active|open=false": __body6,
    // figma: variant=line, size=md(56), open=False, state=Active
    "variant=line|size=md|state=active|open=false": __body7,
    // figma: variant=line, size=sm(48), open=False, state=Active
    "variant=line|size=sm|state=active|open=false": __body8,
    // figma: variant=Select, size=sm(48), open=False, state=Active
    "variant=select|size=sm|state=active|open=false": __body9,
    // figma: variant=Select, size=md(56), open=False, state=Active
    "variant=select|size=md|state=active|open=false": __body10,
    // figma: variant=Select, size=lg(64), open=False, state=Active
    "variant=select|size=lg|state=active|open=false": __body11,
    // figma: variant=line, size=lg(64), open=False, state=Focus-visible
    "variant=line|size=lg|state=focus-visible|open=false": __body12,
    // figma: variant=line, size=md(56), open=False, state=Focus-visible
    "variant=line|size=md|state=focus-visible|open=false": __body13,
    // figma: variant=line, size=sm(48), open=False, state=Focus-visible
    "variant=line|size=sm|state=focus-visible|open=false": __body14,
    // figma: variant=Select, size=sm(48), open=False, state=Focus-visible
    "variant=select|size=sm|state=focus-visible|open=false": __body15,
    // figma: variant=Select, size=md(56), open=False, state=Focus-visible
    "variant=select|size=md|state=focus-visible|open=false": __body16,
    // figma: variant=Select, size=lg(64), open=False, state=Focus-visible
    "variant=select|size=lg|state=focus-visible|open=false": __body17,
    // figma: variant=line, size=lg(64), open=False, state=Disabled
    "variant=line|size=lg|state=disabled|open=false": __body18,
    // figma: variant=line, size=md(56), open=False, state=Disabled
    "variant=line|size=md|state=disabled|open=false": __body19,
    // figma: variant=line, size=sm(48), open=False, state=Disabled
    "variant=line|size=sm|state=disabled|open=false": __body20,
    // figma: variant=Select, size=sm(48), open=False, state=Disabled
    "variant=select|size=sm|state=disabled|open=false": __body21,
    // figma: variant=Select, size=md(56), open=False, state=Disabled
    "variant=select|size=md|state=disabled|open=false": __body22,
    // figma: variant=Select, size=lg(64), open=False, state=Disabled
    "variant=select|size=lg|state=disabled|open=false": __body23,
    // figma: variant=line, size=lg(64), open=True, state=Disabled
    "variant=line|size=lg|state=disabled|open=true": __body24,
    // figma: variant=line, size=md(56), open=True, state=Disabled
    "variant=line|size=md|state=disabled|open=true": __body25,
    // figma: variant=line, size=sm(48), open=True, state=Disabled
    "variant=line|size=sm|state=disabled|open=true": __body26,
    // figma: variant=Select, size=sm(48), open=True, state=Disabled
    "variant=select|size=sm|state=disabled|open=true": __body27,
    // figma: variant=Select, size=md(56), open=True, state=Disabled
    "variant=select|size=md|state=disabled|open=true": __body28,
    // figma: variant=Select, size=lg(64), open=True, state=Disabled
    "variant=select|size=lg|state=disabled|open=true": __body29,
    // figma: variant=line, size=lg(64), open=True, state=Default
    "variant=line|size=lg|state=default|open=true": __body30,
    // figma: variant=line, size=md(56), open=True, state=Default
    "variant=line|size=md|state=default|open=true": __body31,
    // figma: variant=line, size=sm(48), open=True, state=Default
    "variant=line|size=sm|state=default|open=true": __body32,
    // figma: variant=Select, size=sm(48), open=True, state=Default
    "variant=select|size=sm|state=default|open=true": __body33,
    // figma: variant=Select, size=md(56), open=True, state=Default
    "variant=select|size=md|state=default|open=true": __body34,
    // figma: variant=Select, size=lg(64), open=True, state=Default
    "variant=select|size=lg|state=default|open=true": __body35,
    // figma: variant=line, size=lg(64), open=True, state=Focus-visible
    "variant=line|size=lg|state=focus-visible|open=true": __body36,
    // figma: variant=line, size=md(56), open=True, state=Focus-visible
    "variant=line|size=md|state=focus-visible|open=true": __body37,
    // figma: variant=line, size=sm(48), open=True, state=Focus-visible
    "variant=line|size=sm|state=focus-visible|open=true": __body38,
    // figma: variant=Select, size=sm(48), open=True, state=Focus-visible
    "variant=select|size=sm|state=focus-visible|open=true": __body39,
    // figma: variant=Select, size=md(56), open=True, state=Focus-visible
    "variant=select|size=md|state=focus-visible|open=true": __body40,
    // figma: variant=Select, size=lg(64), open=True, state=Focus-visible
    "variant=select|size=lg|state=focus-visible|open=true": __body41,
    // figma: variant=line, size=lg(64), open=True, state=Hover
    "variant=line|size=lg|state=hover|open=true": __body42,
    // figma: variant=line, size=md(56), open=True, state=Hover
    "variant=line|size=md|state=hover|open=true": __body43,
    // figma: variant=line, size=sm(48), open=True, state=Hover
    "variant=line|size=sm|state=hover|open=true": __body44,
    // figma: variant=Select, size=sm(48), open=True, state=Hover
    "variant=select|size=sm|state=hover|open=true": __body45,
    // figma: variant=Select, size=md(56), open=True, state=Hover
    "variant=select|size=md|state=hover|open=true": __body46,
    // figma: variant=Select, size=lg(64), open=True, state=Hover
    "variant=select|size=lg|state=hover|open=true": __body47,
    // figma: variant=line, size=lg(64), open=True, state=Active
    "variant=line|size=lg|state=active|open=true": __body48,
    // figma: variant=line, size=md(56), open=True, state=Active
    "variant=line|size=md|state=active|open=true": __body49,
    // figma: variant=line, size=sm(48), open=True, state=Active
    "variant=line|size=sm|state=active|open=true": __body50,
    // figma: variant=Select, size=sm(48), open=True, state=Active
    "variant=select|size=sm|state=active|open=true": __body51,
    // figma: variant=Select, size=md(56), open=True, state=Active
    "variant=select|size=md|state=active|open=true": __body52,
    // figma: variant=Select, size=lg(64), open=True, state=Active
    "variant=select|size=lg|state=active|open=true": __body53,
    // figma: variant=line, size=lg(64), open=False, state=Default
    "variant=line|size=lg|state=default|open=false": __body54,
    // figma: variant=line, size=md(56), open=False, state=Default
    "variant=line|size=md|state=default|open=false": __body55,
    // figma: variant=line, size=sm(48), open=False, state=Default
    "variant=line|size=sm|state=default|open=false": __body56,
    // figma: variant=Select, size=sm(48), open=False, state=Default
    "variant=select|size=sm|state=default|open=false": __body57,
    // figma: variant=Select, size=md(56), open=False, state=Default
    "variant=select|size=md|state=default|open=false": __body58,
    // figma: variant=Select, size=lg(64), open=False, state=Default
    "variant=select|size=lg|state=default|open=false": __body59,
  };
  return (__impls[__vkey(props)] ?? __body54)();
}
export default Accordion;
