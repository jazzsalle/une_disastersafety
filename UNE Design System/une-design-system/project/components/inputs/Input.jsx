import { Component } from '../display/Component.jsx';
import { IconFill20 } from './IconFill20.jsx';
import { IconFill29 } from './IconFill29.jsx';
import { IconLine } from './IconLine.jsx';

// figma node: 468:6463 Input (112 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);

export function Input(_p = {}) {
  const props = { ..._p, label: _p.label ?? true, mode: _p.mode ?? "light", label2: _p.label2 ?? "레이블", helperText: _p.helperText ?? true, helperText2: _p.helperText2 ?? "메시지를 입력하세요", placeholder: _p.placeholder ?? "입력하세요", leftIcon: _p.leftIcon ?? true, size: _p.size ?? "3xl", rightButton: _p.rightButton ?? true, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
  const __body1 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
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
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
  const __body2 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
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
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
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
  const __body3 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
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
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
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
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
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
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
                color: "var(--color-interaction-secondary-icon-disabled)",
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
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        borderRadius: 4,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
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
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
        )}
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        borderRadius: 4,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
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
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
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
  const __body9 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(29,31,43)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
        {props.rightButton && (
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
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
        {props.rightButton && (
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
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
                color: "var(--color-icon-basic)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
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
                color: "var(--color-icon-basic)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
                color: "var(--color-icon-basic)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
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
                color: "var(--color-icon-basic)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
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
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(29,31,43)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
        {props.rightButton && (
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
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
                color: "var(--color-icon-basic)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
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
                color: "var(--color-icon-basic)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
  const __body19 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
  const __body20 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
                color: "var(--color-interaction-secondary-icon-disabled)",
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
  const __body21 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(29,31,43)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
        {props.rightButton && (
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
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
        {props.rightButton && (
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
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(29,31,43)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
        {props.rightButton && (
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
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
        </div>
        )}
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(29,31,43)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
        {props.rightButton && (
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
        {props.rightButton && (
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(29,31,43)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
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
        {props.rightButton && (
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(29,31,43)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
                color: "var(--color-icon-basic)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 28,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(29,31,43)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-md) * 1px)",
          height: "calc(var(--sizing-control-md) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-sm) * 1px)",
          height: "calc(var(--sizing-control-sm) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
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
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-md) * 1px)",
          height: "calc(var(--sizing-control-md) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-sm) * 1px)",
          height: "calc(var(--sizing-control-sm) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
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
          color: "rgb(104,109,120)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        borderRadius: 8,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-md) * 1px)",
          height: "calc(var(--sizing-control-md) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
        </div>
        )}
      </div>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        borderRadius: 8,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-sm) * 1px)",
          height: "calc(var(--sizing-control-sm) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
        </div>
        )}
      </div>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        borderRadius: 8,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 6,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
        </div>
        )}
      </div>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 6,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
        </div>
        )}
      </div>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgb(244,245,247)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
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
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(29,31,43)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-md) * 1px)",
          height: "calc(var(--sizing-control-md) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-md) * 1px)",
          height: "calc(var(--sizing-control-md) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-md) * 1px)",
          height: "calc(var(--sizing-control-md) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-md) * 1px)",
          height: "calc(var(--sizing-control-md) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-sm) * 1px)",
          height: "calc(var(--sizing-control-sm) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-sm) * 1px)",
          height: "calc(var(--sizing-control-sm) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-sm) * 1px)",
          height: "calc(var(--sizing-control-sm) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-sm) * 1px)",
          height: "calc(var(--sizing-control-sm) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(60,105,252)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(29,31,43)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-md) * 1px)",
          height: "calc(var(--sizing-control-md) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-md) * 1px)",
          height: "calc(var(--sizing-control-md) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-sm) * 1px)",
          height: "calc(var(--sizing-control-sm) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-sm) * 1px)",
          height: "calc(var(--sizing-control-sm) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(217,45,32)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(29,31,43)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-md) * 1px)",
          height: "calc(var(--sizing-control-md) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-sm) * 1px)",
          height: "calc(var(--sizing-control-sm) * 1px)",
          overflow: "hidden",
          borderRadius: 8,
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 52,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 36,
          height: 36,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-control-xs) * 1px)",
          height: "calc(var(--sizing-control-xs) * 1px)",
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
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 44,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"20px"} />}</div>
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
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(29,121,43)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(41,163,59)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
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
  const __body86 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
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
  const __body87 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255), 0px 0px 0px 2px rgba(132,168,255,0.5)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
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
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(240,68,56)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(240,68,56)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        background: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgb(49,54,68),rgb(49,54,68))",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 8px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(86,91,105)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
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
  const __body91 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(41,163,59)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255), 0px 0px 0px 2px rgba(132,168,255,0.5)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
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
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body96 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(240,68,56)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(240,68,56)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body97 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        background: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgb(49,54,68),rgb(49,54,68))",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<IconLine />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(86,91,105)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body98 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body99 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body100 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(41,163,59)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body101 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255), 0px 0px 0px 2px rgba(132,168,255,0.5)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body102 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
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
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body103 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(240,68,56)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(240,68,56)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body104 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        background: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgb(49,54,68),rgb(49,54,68))",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 12px 0px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(86,91,105)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body105 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        borderRadius: 8,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 32,
          height: 32,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
              <svg width={14.667} height={10.162} viewBox="0 0 14.667 10.162" fill="none" style={{
                position: "absolute",
                left: 0.667,
                top: 2.919,
                width: 14.667,
                height: 10.162,
                color: "var(--color-icon-tertiary)",
              }}>
                <path d={"M 7.333 8.129 C 8.18 8.129 8.9 7.833 9.493 7.241 C 10.086 6.648 10.382 5.928 10.382 5.081 C 10.382 4.234 10.086 3.514 9.493 2.921 C 8.9 2.329 8.18 2.032 7.333 2.032 C 6.487 2.032 5.767 2.329 5.174 2.921 C 4.581 3.514 4.285 4.234 4.285 5.081 C 4.285 5.928 4.581 6.648 5.174 7.241 C 5.767 7.833 6.487 8.129 7.333 8.129 Z M 7.333 6.91 C 6.825 6.91 6.393 6.732 6.038 6.376 C 5.682 6.021 5.504 5.589 5.504 5.081 C 5.504 4.573 5.682 4.141 6.038 3.785 C 6.393 3.429 6.825 3.252 7.333 3.252 C 7.841 3.252 8.273 3.429 8.629 3.785 C 8.985 4.141 9.162 4.573 9.162 5.081 C 9.162 5.589 8.985 6.021 8.629 6.376 C 8.273 6.732 7.841 6.91 7.333 6.91 Z M 7.333 10.162 C 5.764 10.162 4.33 9.747 3.032 8.917 C 1.733 8.087 0.751 6.966 0.085 5.555 C 0.051 5.499 0.028 5.428 0.017 5.343 C 0.006 5.259 0 5.171 0 5.081 C 0 4.991 0.006 4.903 0.017 4.818 C 0.028 4.734 0.051 4.663 0.085 4.607 C 0.751 3.195 1.733 2.075 3.032 1.245 C 4.33 0.415 5.764 0 7.333 0 C 8.903 0 10.337 0.415 11.635 1.245 C 12.934 2.075 13.916 3.195 14.582 4.607 C 14.616 4.663 14.638 4.734 14.65 4.818 C 14.661 4.903 14.667 4.991 14.667 5.081 C 14.667 5.171 14.661 5.259 14.65 5.343 C 14.638 5.428 14.616 5.499 14.582 5.555 C 13.916 6.966 12.934 8.087 11.635 8.917 C 10.337 9.747 8.903 10.162 7.333 10.162 Z M 7.333 8.807 C 8.609 8.807 9.781 8.471 10.848 7.799 C 11.915 7.127 12.73 6.221 13.295 5.081 C 12.73 3.94 11.915 3.034 10.848 2.362 C 9.781 1.691 8.609 1.355 7.333 1.355 C 6.057 1.355 4.886 1.691 3.819 2.362 C 2.752 3.034 1.936 3.94 1.372 5.081 C 1.936 6.221 2.752 7.127 3.819 7.799 C 4.886 8.471 6.057 8.807 7.333 8.807 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body106 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        borderRadius: 8,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(166,169,175)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body107 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        borderRadius: 8,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon3 ?? <Component prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(41,163,59)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body108 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255), 0px 0px 0px 2px rgba(132,168,255,0.5)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body109 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(71,125,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill29 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(71,125,255)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body110 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        borderRadius: 8,
        backgroundColor: "rgb(29,31,43)",
        boxShadow: "inset 0 0 0 1px rgb(240,68,56)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(249,249,251)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
      {props.helperText && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            height: 12,
            flexShrink: 0,
          }}>{props.icon4 ?? <Component prop={<IconFill20 />} prop2={"12px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(240,68,56)",
          flexShrink: 0,
        }}>{props.helperText2}</span>
      </div>
      )}
    </div>
  );
  const __body111 = () => (
    <div className={props.className} style={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(206,207,210)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        height: 56,
        borderRadius: 8,
        background: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), linear-gradient(rgb(49,54,68),rgb(49,54,68))",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leftIcon && (
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"24px"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(86,91,105)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
        {props.rightButton && (
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: mode=Light, size=xs(32), state=Default
    "mode=light|size=xs|state=default": __body0,
    // figma: mode=Light, size=2xs(28), state=Default
    "mode=light|size=2xs|state=default": __body1,
    // figma: mode=Dark, size=2xs(28), state=Default
    "mode=dark|size=2xs|state=default": __body2,
    // figma: mode=Light, size=xs(32), state=Hover
    "mode=light|size=xs|state=hover": __body3,
    // figma: mode=Light, size=2xs(28), state=Hover
    "mode=light|size=2xs|state=hover": __body4,
    // figma: mode=Dark, size=2xs(28), state=Hover
    "mode=dark|size=2xs|state=hover": __body5,
    // figma: mode=Light, size=xs(32), state=Disabled
    "mode=light|size=xs|state=disabled": __body6,
    // figma: mode=Light, size=2xs(28), state=Disabled
    "mode=light|size=2xs|state=disabled": __body7,
    // figma: mode=Dark, size=2xs(28), state=Disabled
    "mode=dark|size=2xs|state=disabled": __body8,
    // figma: mode=Light, size=xs(32), state=Active
    "mode=light|size=xs|state=active": __body9,
    // figma: mode=Light, size=xs(32), state=Focus-visible
    "mode=light|size=xs|state=focus-visible": __body10,
    // figma: mode=Light, size=2xs(28), state=Active
    "mode=light|size=2xs|state=active": __body11,
    // figma: mode=Light, size=2xs(28), state=Focus-visible
    "mode=light|size=2xs|state=focus-visible": __body12,
    // figma: mode=Dark, size=2xs(28), state=Focus-visible
    "mode=dark|size=2xs|state=focus-visible": __body13,
    // figma: mode=Dark, size=2xs(28), state=Active
    "mode=dark|size=2xs|state=active": __body14,
    // figma: mode=Light, size=xs(32), state=Error
    "mode=light|size=xs|state=error": __body15,
    // figma: mode=Light, size=2xs(28), state=Error
    "mode=light|size=2xs|state=error": __body16,
    // figma: mode=Dark, size=2xs(28), state=Error
    "mode=dark|size=2xs|state=error": __body17,
    // figma: mode=Light, size=sm(36), state=Default
    "mode=light|size=sm|state=default": __body18,
    // figma: mode=Light, size=sm(36), state=Hover
    "mode=light|size=sm|state=hover": __body19,
    // figma: mode=Light, size=sm(36), state=Disabled
    "mode=light|size=sm|state=disabled": __body20,
    // figma: mode=Light, size=sm(36), state=Active
    "mode=light|size=sm|state=active": __body21,
    // figma: mode=Light, size=sm(36), state=Focus-visible
    "mode=light|size=sm|state=focus-visible": __body22,
    // figma: mode=Light, size=sm(36), state=Error
    "mode=light|size=sm|state=error": __body23,
    // figma: mode=Light, size=md(40), state=Default
    "mode=light|size=md|state=default": __body24,
    // figma: mode=Light, size=md(40), state=Hover
    "mode=light|size=md|state=hover": __body25,
    // figma: mode=Light, size=md(40), state=Disabled
    "mode=light|size=md|state=disabled": __body26,
    // figma: mode=Light, size=md(40), state=Active
    "mode=light|size=md|state=active": __body27,
    // figma: mode=Light, size=md(40), state=Focus-visible
    "mode=light|size=md|state=focus-visible": __body28,
    // figma: mode=Light, size=md(40), state=Error
    "mode=light|size=md|state=error": __body29,
    // figma: mode=Light, size=xs(32), state=Complete
    "mode=light|size=xs|state=complete": __body30,
    // figma: mode=Light, size=2xs(28), state=Complete
    "mode=light|size=2xs|state=complete": __body31,
    // figma: mode=Dark, size=2xs(28), state=Complete
    "mode=dark|size=2xs|state=complete": __body32,
    // figma: mode=Light, size=sm(36), state=Complete
    "mode=light|size=sm|state=complete": __body33,
    // figma: mode=Light, size=md(40), state=Complete
    "mode=light|size=md|state=complete": __body34,
    // figma: mode=Light, size=3xl(56), state=Default
    "mode=light|size=3xl|state=default": __body35,
    // figma: mode=Light, size=2xl(52), state=Default
    "mode=light|size=2xl|state=default": __body36,
    // figma: mode=Dark, size=2xl(52), state=Default
    "mode=dark|size=2xl|state=default": __body37,
    // figma: mode=Light, size=xl(48), state=Default
    "mode=light|size=xl|state=default": __body38,
    // figma: mode=Dark, size=xl(48), state=Default
    "mode=dark|size=xl|state=default": __body39,
    // figma: mode=Light, size=lg(44), state=Default
    "mode=light|size=lg|state=default": __body40,
    // figma: mode=Dark, size=lg(44), state=Default
    "mode=dark|size=lg|state=default": __body41,
    // figma: mode=Light, size=3xl(56), state=Hover
    "mode=light|size=3xl|state=hover": __body42,
    // figma: mode=Light, size=2xl(52), state=Hover
    "mode=light|size=2xl|state=hover": __body43,
    // figma: mode=Dark, size=2xl(52), state=Hover
    "mode=dark|size=2xl|state=hover": __body44,
    // figma: mode=Light, size=xl(48), state=Hover
    "mode=light|size=xl|state=hover": __body45,
    // figma: mode=Dark, size=xl(48), state=Hover
    "mode=dark|size=xl|state=hover": __body46,
    // figma: mode=Light, size=lg(44), state=Hover
    "mode=light|size=lg|state=hover": __body47,
    // figma: mode=Dark, size=lg(44), state=Hover
    "mode=dark|size=lg|state=hover": __body48,
    // figma: mode=Light, size=3xl(56), state=Disabled
    "mode=light|size=3xl|state=disabled": __body49,
    // figma: mode=Light, size=2xl(52), state=Disabled
    "mode=light|size=2xl|state=disabled": __body50,
    // figma: mode=Dark, size=2xl(52), state=Disabled
    "mode=dark|size=2xl|state=disabled": __body51,
    // figma: mode=Light, size=xl(48), state=Disabled
    "mode=light|size=xl|state=disabled": __body52,
    // figma: mode=Dark, size=xl(48), state=Disabled
    "mode=dark|size=xl|state=disabled": __body53,
    // figma: mode=Light, size=lg(44), state=Disabled
    "mode=light|size=lg|state=disabled": __body54,
    // figma: mode=Dark, size=lg(44), state=Disabled
    "mode=dark|size=lg|state=disabled": __body55,
    // figma: mode=Light, size=3xl(56), state=Active
    "mode=light|size=3xl|state=active": __body56,
    // figma: mode=Light, size=3xl(56), state=Focus-visible
    "mode=light|size=3xl|state=focus-visible": __body57,
    // figma: mode=Light, size=2xl(52), state=Active
    "mode=light|size=2xl|state=active": __body58,
    // figma: mode=Light, size=2xl(52), state=Focus-visible
    "mode=light|size=2xl|state=focus-visible": __body59,
    // figma: mode=Dark, size=2xl(52), state=Focus-visible
    "mode=dark|size=2xl|state=focus-visible": __body60,
    // figma: mode=Dark, size=2xl(52), state=Active
    "mode=dark|size=2xl|state=active": __body61,
    // figma: mode=Light, size=xl(48), state=Active
    "mode=light|size=xl|state=active": __body62,
    // figma: mode=Light, size=xl(48), state=Focus-visible
    "mode=light|size=xl|state=focus-visible": __body63,
    // figma: mode=Dark, size=xl(48), state=Focus-visible
    "mode=dark|size=xl|state=focus-visible": __body64,
    // figma: mode=Dark, size=xl(48), state=Active
    "mode=dark|size=xl|state=active": __body65,
    // figma: mode=Light, size=lg(44), state=Active
    "mode=light|size=lg|state=active": __body66,
    // figma: mode=Light, size=lg(44), state=Focus-visible
    "mode=light|size=lg|state=focus-visible": __body67,
    // figma: mode=Dark, size=lg(44), state=Focus-visible
    "mode=dark|size=lg|state=focus-visible": __body68,
    // figma: mode=Dark, size=lg(44), state=Active
    "mode=dark|size=lg|state=active": __body69,
    // figma: mode=Light, size=3xl(56), state=Error
    "mode=light|size=3xl|state=error": __body70,
    // figma: mode=Light, size=2xl(52), state=Error
    "mode=light|size=2xl|state=error": __body71,
    // figma: mode=Dark, size=2xl(52), state=Error
    "mode=dark|size=2xl|state=error": __body72,
    // figma: mode=Light, size=xl(48), state=Error
    "mode=light|size=xl|state=error": __body73,
    // figma: mode=Dark, size=xl(48), state=Error
    "mode=dark|size=xl|state=error": __body74,
    // figma: mode=Light, size=lg(44), state=Error
    "mode=light|size=lg|state=error": __body75,
    // figma: mode=Dark, size=lg(44), state=Error
    "mode=dark|size=lg|state=error": __body76,
    // figma: mode=Light, size=3xl(56), state=Complete
    "mode=light|size=3xl|state=complete": __body77,
    // figma: mode=Light, size=2xl(52), state=Complete
    "mode=light|size=2xl|state=complete": __body78,
    // figma: mode=Dark, size=2xl(52), state=Complete
    "mode=dark|size=2xl|state=complete": __body79,
    // figma: mode=Light, size=xl(48), state=Complete
    "mode=light|size=xl|state=complete": __body80,
    // figma: mode=Dark, size=xl(48), state=Complete
    "mode=dark|size=xl|state=complete": __body81,
    // figma: mode=Light, size=lg(44), state=Complete
    "mode=light|size=lg|state=complete": __body82,
    // figma: mode=Dark, size=lg(44), state=Complete
    "mode=dark|size=lg|state=complete": __body83,
    // figma: mode=Dark, size=xs(32), state=Complete
    "mode=dark|size=xs|state=complete": __body84,
    // figma: mode=Dark, size=xs(32), state=Default
    "mode=dark|size=xs|state=default": __body85,
    // figma: mode=Dark, size=xs(32), state=Hover
    "mode=dark|size=xs|state=hover": __body86,
    // figma: mode=Dark, size=xs(32), state=Focus-visible
    "mode=dark|size=xs|state=focus-visible": __body87,
    // figma: mode=Dark, size=xs(32), state=Active
    "mode=dark|size=xs|state=active": __body88,
    // figma: mode=Dark, size=xs(32), state=Error
    "mode=dark|size=xs|state=error": __body89,
    // figma: mode=Dark, size=xs(32), state=Disabled
    "mode=dark|size=xs|state=disabled": __body90,
    // figma: mode=Dark, size=sm(36), state=Default
    "mode=dark|size=sm|state=default": __body91,
    // figma: mode=Dark, size=sm(36), state=Hover
    "mode=dark|size=sm|state=hover": __body92,
    // figma: mode=Dark, size=sm(36), state=Complete
    "mode=dark|size=sm|state=complete": __body93,
    // figma: mode=Dark, size=sm(36), state=Focus-visible
    "mode=dark|size=sm|state=focus-visible": __body94,
    // figma: mode=Dark, size=sm(36), state=Active
    "mode=dark|size=sm|state=active": __body95,
    // figma: mode=Dark, size=sm(36), state=Error
    "mode=dark|size=sm|state=error": __body96,
    // figma: mode=Dark, size=sm(36), state=Disabled
    "mode=dark|size=sm|state=disabled": __body97,
    // figma: mode=Dark, size=md(40), state=Default
    "mode=dark|size=md|state=default": __body98,
    // figma: mode=Dark, size=md(40), state=Hover
    "mode=dark|size=md|state=hover": __body99,
    // figma: mode=Dark, size=md(40), state=Complete
    "mode=dark|size=md|state=complete": __body100,
    // figma: mode=Dark, size=md(40), state=Focus-visible
    "mode=dark|size=md|state=focus-visible": __body101,
    // figma: mode=Dark, size=md(40), state=Active
    "mode=dark|size=md|state=active": __body102,
    // figma: mode=Dark, size=md(40), state=Error
    "mode=dark|size=md|state=error": __body103,
    // figma: mode=Dark, size=md(40), state=Disabled
    "mode=dark|size=md|state=disabled": __body104,
    // figma: mode=Dark, size=3xl(56), state=Default
    "mode=dark|size=3xl|state=default": __body105,
    // figma: mode=Dark, size=3xl(56), state=Hover
    "mode=dark|size=3xl|state=hover": __body106,
    // figma: mode=Dark, size=3xl(56), state=Complete
    "mode=dark|size=3xl|state=complete": __body107,
    // figma: mode=Dark, size=3xl(56), state=Focus-visible
    "mode=dark|size=3xl|state=focus-visible": __body108,
    // figma: mode=Dark, size=3xl(56), state=Active
    "mode=dark|size=3xl|state=active": __body109,
    // figma: mode=Dark, size=3xl(56), state=Error
    "mode=dark|size=3xl|state=error": __body110,
    // figma: mode=Dark, size=3xl(56), state=Disabled
    "mode=dark|size=3xl|state=disabled": __body111,
  };
  return (__impls[__vkey(props)] ?? __body35)();
}
export default Input;
