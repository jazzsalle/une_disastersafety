import { Slot7 } from './Slot7.jsx';

// figma node: 2527:18855 Tooltip (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "placement=" + __venc(p.placement) + '|' + "pointer=" + __venc(p.pointer);

export function Tooltip(_p = {}) {
  const props = { ..._p, icon: _p.icon ?? true, title: _p.title ?? true, title2: _p.title2 ?? "Title", button: _p.button ?? true, size: _p.size ?? "lg", placement: _p.placement ?? "top", pointer: _p.pointer ?? "left" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 360,
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--color-surface-raised)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
        <div style={{
          position: "relative",
          height: 24,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
        </div>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          {props.title && (
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title2}</span>
          )}
          <Slot7
            style={{
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다."}
            variant={"text"}
          />
        </div>
        {props.button && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-3xs) * 1px)",
          height: "calc(var(--sizing-control-3xs) * 1px)",
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
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 11 12 L 22 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 360,
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--color-surface-raised)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
        <div style={{
          position: "relative",
          height: 24,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
        </div>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          {props.title && (
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title2}</span>
          )}
          <Slot7
            style={{
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다."}
            variant={"text"}
          />
        </div>
        {props.button && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-3xs) * 1px)",
          height: "calc(var(--sizing-control-3xs) * 1px)",
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
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 11 12 L 22 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 360,
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--color-surface-raised)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
        <div style={{
          position: "relative",
          height: 24,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
        </div>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          {props.title && (
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title2}</span>
          )}
          <Slot7
            style={{
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다."}
            variant={"text"}
          />
        </div>
        {props.button && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-3xs) * 1px)",
          height: "calc(var(--sizing-control-3xs) * 1px)",
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
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 11 12 L 22 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 372,
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,12,0)",
        transformOrigin: "0 0",
        width: 220,
        height: 12,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg width={21} height={12} viewBox="0 0 21 12" fill="none" style={{
          position: "relative",
          width: 21,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 10.5 12 L 21 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--color-surface-raised)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.icon && (
        <div style={{
          position: "relative",
          height: 24,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
        </div>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          {props.title && (
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title2}</span>
          )}
          <Slot7
            style={{
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다."}
            variant={"text"}
          />
        </div>
        {props.button && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-3xs) * 1px)",
          height: "calc(var(--sizing-control-3xs) * 1px)",
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
        )}
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 360,
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 11 12 L 22 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--color-surface-raised)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
        <div style={{
          position: "relative",
          height: 24,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
        </div>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          {props.title && (
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title2}</span>
          )}
          <Slot7
            style={{
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다."}
            variant={"text"}
          />
        </div>
        {props.button && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-3xs) * 1px)",
          height: "calc(var(--sizing-control-3xs) * 1px)",
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
        )}
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 360,
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 11 12 L 22 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--color-surface-raised)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
        <div style={{
          position: "relative",
          height: 24,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
        </div>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          {props.title && (
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title2}</span>
          )}
          <Slot7
            style={{
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다."}
            variant={"text"}
          />
        </div>
        {props.button && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-3xs) * 1px)",
          height: "calc(var(--sizing-control-3xs) * 1px)",
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
        )}
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 360,
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 11 12 L 22 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--color-surface-raised)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
        <div style={{
          position: "relative",
          height: 24,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
        </div>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          {props.title && (
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title2}</span>
          )}
          <Slot7
            style={{
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다."}
            variant={"text"}
          />
        </div>
        {props.button && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-3xs) * 1px)",
          height: "calc(var(--sizing-control-3xs) * 1px)",
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
        )}
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 372,
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--color-surface-raised)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-xs) * 1px)",
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.icon && (
        <div style={{
          position: "relative",
          height: 24,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
        </div>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          {props.title && (
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title2}</span>
          )}
          <Slot7
            style={{
              position: "relative",
              height: 160,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다."}
            variant={"text"}
          />
        </div>
        {props.button && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-3xs) * 1px)",
          height: "calc(var(--sizing-control-3xs) * 1px)",
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
        )}
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,1,0,360,0)",
        transformOrigin: "0 0",
        width: 220,
        height: 12,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg width={21} height={12} viewBox="0 0 21 12" fill="none" style={{
          position: "relative",
          width: 21,
          height: 12,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 10.5 12 L 21 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-raised)",
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
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
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
        }}>{props.text1 ?? "짧은 텍스트만 입력하세요"}</span>
        {props.button && (
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
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 12px 0px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" style={{
          position: "relative",
          width: 14,
          height: 8,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 7 8 L 14 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 12px 0px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" style={{
          position: "relative",
          width: 14,
          height: 8,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 7 8 L 14 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-raised)",
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
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
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
        }}>{props.text1 ?? "짧은 텍스트만 입력하세요"}</span>
        {props.button && (
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
        )}
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-raised)",
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
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
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
        }}>{props.text1 ?? "짧은 텍스트만 입력하세요"}</span>
        {props.button && (
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
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" style={{
          position: "relative",
          width: 14,
          height: 8,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 7 8 L 14 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" style={{
          position: "relative",
          width: 14,
          height: 8,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 7 8 L 14 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-raised)",
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
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
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
        }}>{props.text1 ?? "짧은 텍스트만 입력하세요"}</span>
        {props.button && (
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
        )}
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-raised)",
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
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
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
        }}>{props.text1 ?? "짧은 텍스트만 입력하세요"}</span>
        {props.button && (
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
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 12px 0px 12px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" style={{
          position: "relative",
          width: 14,
          height: 8,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 7 8 L 14 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 12px 0px 12px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" style={{
          position: "relative",
          width: 14,
          height: 8,
          flexShrink: 0,
        }}>
          <path d={"M 0 0 L 7 8 L 14 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-raised)",
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
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
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
        }}>{props.text1 ?? "짧은 텍스트만 입력하세요"}</span>
        {props.button && (
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
        )}
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(-1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,-1,1,0,0,21)",
          transformOrigin: "0 0",
          width: 14,
          height: 8,
        }}>
          <path d={"M 0 0 L 7 8 L 14 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-raised)",
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
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
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "짧은 텍스트만 입력하세요"}</span>
        {props.button && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-4xs) * 1px)",
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
          alignSelf: "stretch",
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
        )}
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      color: "var(--color-surface-raised)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-raised)",
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
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.icon && (
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
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "짧은 텍스트만 입력하세요"}</span>
        {props.button && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-4xs) * 1px)",
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
          alignSelf: "stretch",
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
        )}
      </div>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,-1,1,0,0,21)",
          transformOrigin: "0 0",
          width: 14,
          height: 8,
        }}>
          <path d={"M 0 0 L 7 8 L 14 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: size=lg, placement=bottom, Pointer=left
    "size=lg|placement=bottom|pointer=left": __body0,
    // figma: size=lg, placement=bottom, Pointer=middle
    "size=lg|placement=bottom|pointer=middle": __body1,
    // figma: size=lg, placement=bottom, Pointer=right
    "size=lg|placement=bottom|pointer=right": __body2,
    // figma: size=lg, placement=left, Pointer=left
    "size=lg|placement=left|pointer=left": __body3,
    // figma: size=lg, placement=top, Pointer=left
    "size=lg|placement=top|pointer=left": __body4,
    // figma: size=lg, placement=top, Pointer=middle
    "size=lg|placement=top|pointer=middle": __body5,
    // figma: size=lg, placement=top, Pointer=right
    "size=lg|placement=top|pointer=right": __body6,
    // figma: size=lg, placement=right, Pointer=right
    "size=lg|placement=right|pointer=right": __body7,
    // figma: size=sm, placement=bottom, Pointer=left
    "size=sm|placement=bottom|pointer=left": __body8,
    // figma: size=sm, placement=top, Pointer=left
    "size=sm|placement=top|pointer=left": __body9,
    // figma: size=sm, placement=bottom, Pointer=middle
    "size=sm|placement=bottom|pointer=middle": __body10,
    // figma: size=sm, placement=top, Pointer=middle
    "size=sm|placement=top|pointer=middle": __body11,
    // figma: size=sm, placement=bottom, Pointer=right
    "size=sm|placement=bottom|pointer=right": __body12,
    // figma: size=sm, placement=top, Pointer=right
    "size=sm|placement=top|pointer=right": __body13,
    // figma: size=sm, placement=left, Pointer=left
    "size=sm|placement=left|pointer=left": __body14,
    // figma: size=sm, placement=right, Pointer=right
    "size=sm|placement=right|pointer=right": __body15,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default Tooltip;
