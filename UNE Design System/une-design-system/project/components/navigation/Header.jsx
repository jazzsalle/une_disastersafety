import { Component } from '../display/Component.jsx';
import { Icon137 } from './Icon137.jsx';
import { IconButton } from '../actions/IconButton.jsx';

// figma node: 1882:28384 Header (헤더) (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "login=" + __venc(p.login);

export function Header(_p = {}) {
  const props = { ..._p, toolButton: _p.toolButton ?? true, login: _p.login ?? false, buttons: _p.buttons ?? true, button2: _p.button2 ?? true, button1: _p.button1 ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 50,
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-muted)",
      borderRight: "1px solid var(--color-border-muted)",
      borderBottom: "1px solid var(--color-border-muted)",
      borderLeft: "1px solid var(--color-border-muted)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<Icon137 />} prop2={"32px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "시스템 명"}</span>
        <svg width={1} height={16} viewBox="-0.500 0 1 16" fill="none" style={{
          position: "relative",
          width: 1,
          height: 16,
          flexShrink: 0,
          color: "var(--color-border-strong)",
        }}>
          <path d={"M 0.5 0 C 0.5 -0.276 0.276 -0.5 0 -0.5 C -0.276 -0.5 -0.5 -0.276 -0.5 0 L 0 0 L 0.5 0 Z M -0.5 16 C -0.5 16.276 -0.276 16.5 0 16.5 C 0.276 16.5 0.5 16.276 0.5 16 L 0 16 L -0.5 16 Z M 0 0 L -0.5 0 L -0.5 16 L 0 16 L 0.5 16 L 0.5 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text2 ?? "서브 서비스 명"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.buttons && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          {props.button1 && (
          <div style={{
              position: "relative",
              width: 36,
              height: 36,
              flexShrink: 0,
            }}>{props.icon2 ?? <IconButton variant={"ghost"} color={"grayscale"} state={"default"} size={"sm"} />}</div>
          )}
          {props.button2 && (
          <div style={{
              position: "relative",
              width: 36,
              height: 36,
              flexShrink: 0,
            }}>{props.icon3 ?? <IconButton variant={"ghost"} color={"grayscale"} state={"default"} size={"sm"} />}</div>
          )}
          <div style={{
              position: "relative",
              width: 36,
              height: 36,
              flexShrink: 0,
            }}>{props.icon4 ?? <IconButton variant={"ghost"} color={"grayscale"} state={"default"} size={"sm"} />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              textAlign: "right",
              lineHeight: 1.399999976158142,
              letterSpacing: "-0.030em",
              color: "var(--color-text-primary)",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}>{props.text3 ?? "로그인해주세요"}</span>
            <div style={{
              position: "relative",
              width: 32,
              height: 32,
              overflow: "hidden",
              borderRadius: 100,
              backgroundColor: "rgb(218,219,221)",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 32,
                height: 32,
                borderRadius: "50%",
              }} />
              <svg width={24.621} height={26.400} viewBox="0 0 24.621 26.400" fill="none" style={{
                position: "absolute",
                left: 3.69,
                top: 5.6,
                width: 24.621,
                height: 26.4,
                color: "rgb(187,188,192)",
              }}>
                <path d={"M 24.621 20.618 C 21.686 24.15 17.261 26.4 12.31 26.4 C 7.36 26.4 2.934 24.15 0 20.618 C 2.173 15.997 6.867 12.8 12.31 12.8 C 17.754 12.8 22.448 16 24.621 20.618 Z M 12.31 11.2 C 15.402 11.2 17.91 8.691 17.91 5.6 C 17.91 2.509 15.405 0 12.31 0 C 9.216 0 6.71 2.509 6.71 5.6 C 6.71 8.691 9.219 11.2 12.31 11.2 L 12.31 11.2 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
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
                <svg width={16.667} height={8.563} viewBox="0 0 16.667 8.563" fill="none" style={{
                  position: "absolute",
                  left: 1.667,
                  top: 5.719,
                  width: 16.667,
                  height: 8.563,
                  color: "var(--color-icon-basic)",
                }}>
                  <path d={"M 0.263 0.35 C 0.645 -0.08 1.304 -0.119 1.734 0.263 L 8.333 6.127 L 14.933 0.263 C 15.363 -0.119 16.022 -0.08 16.404 0.35 C 16.786 0.78 16.747 1.438 16.317 1.82 L 9.025 8.3 C 8.631 8.65 8.036 8.65 7.641 8.3 L 0.35 1.82 C -0.08 1.438 -0.119 0.78 0.263 0.35 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.toolButton && (
      <div style={{
        position: "absolute",
        left: 942,
        top: 7,
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
            <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
              position: "absolute",
              left: 1.667,
              top: 1.667,
              width: 16.667,
              height: 16.667,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5.965 14.394 C 5.629 15.701 4.442 16.667 3.03 16.667 C 1.357 16.667 0 15.31 0 13.636 C 0 12.224 0.966 11.038 2.273 10.701 L 2.273 5.965 C 0.966 5.629 0 4.442 0 3.03 C 0 1.357 1.357 0 3.03 0 C 4.442 0 5.629 0.966 5.965 2.273 L 10.701 2.273 C 11.038 0.966 12.224 0 13.636 0 C 15.31 0 16.667 1.357 16.667 3.03 C 16.667 4.442 15.701 5.629 14.394 5.965 L 14.394 10.701 C 15.701 11.038 16.667 12.224 16.667 13.636 C 16.667 15.31 15.31 16.667 13.636 16.667 C 12.224 16.667 11.038 15.701 10.701 14.394 L 5.965 14.394 Z M 3.788 5.965 C 4.853 5.691 5.691 4.853 5.965 3.788 L 10.701 3.788 C 10.976 4.853 11.814 5.691 12.879 5.965 L 12.879 10.701 C 11.814 10.976 10.976 11.814 10.701 12.879 L 5.965 12.879 C 5.691 11.814 4.853 10.976 3.788 10.701 L 3.788 5.965 Z M 4.545 3.03 C 4.545 3.867 3.867 4.545 3.03 4.545 C 2.193 4.545 1.515 3.867 1.515 3.03 C 1.515 2.193 2.193 1.515 3.03 1.515 C 3.867 1.515 4.545 2.193 4.545 3.03 Z M 4.545 13.636 C 4.545 14.473 3.867 15.152 3.03 15.152 C 2.193 15.152 1.515 14.473 1.515 13.636 C 1.515 12.8 2.193 12.121 3.03 12.121 C 3.867 12.121 4.545 12.8 4.545 13.636 Z M 13.636 4.545 C 14.473 4.545 15.152 3.867 15.152 3.03 C 15.152 2.193 14.473 1.515 13.636 1.515 C 12.8 1.515 12.121 2.193 12.121 3.03 C 12.121 3.867 12.8 4.545 13.636 4.545 Z M 15.152 13.636 C 15.152 14.473 14.473 15.152 13.636 15.152 C 12.8 15.152 12.121 14.473 12.121 13.636 C 12.121 12.8 12.8 12.121 13.636 12.121 C 14.473 12.121 15.152 12.8 15.152 13.636 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 50,
      backgroundColor: "var(--color-surface-primary)",
      borderTop: "1px solid var(--color-border-muted)",
      borderRight: "1px solid var(--color-border-muted)",
      borderBottom: "1px solid var(--color-border-muted)",
      borderLeft: "1px solid var(--color-border-muted)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop={<Icon137 />} prop2={"32px"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "시스템 명"}</span>
        <svg width={1} height={16} viewBox="-0.500 0 1 16" fill="none" style={{
          position: "relative",
          width: 1,
          height: 16,
          flexShrink: 0,
          color: "var(--color-border-strong)",
        }}>
          <path d={"M 0.5 0 C 0.5 -0.276 0.276 -0.5 0 -0.5 C -0.276 -0.5 -0.5 -0.276 -0.5 0 L 0 0 L 0.5 0 Z M -0.5 16 C -0.5 16.276 -0.276 16.5 0 16.5 C 0.276 16.5 0.5 16.276 0.5 16 L 0 16 L -0.5 16 Z M 0 0 L -0.5 0 L -0.5 16 L 0 16 L 0.5 16 L 0.5 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text2 ?? "서브 서비스 명"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.buttons && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          {props.button1 && (
          <div style={{
              position: "relative",
              width: 36,
              height: 36,
              flexShrink: 0,
            }}>{props.icon2 ?? <IconButton variant={"ghost"} color={"grayscale"} state={"default"} size={"sm"} />}</div>
          )}
          {props.button2 && (
          <div style={{
              position: "relative",
              width: 36,
              height: 36,
              flexShrink: 0,
            }}>{props.icon3 ?? <IconButton variant={"ghost"} color={"grayscale"} state={"default"} size={"sm"} />}</div>
          )}
          <div style={{
              position: "relative",
              width: 36,
              height: 36,
              flexShrink: 0,
            }}>{props.icon4 ?? <IconButton variant={"ghost"} color={"grayscale"} state={"default"} size={"sm"} />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: 1.399999976158142,
                letterSpacing: "-0.030em",
                color: "var(--color-text-warning)",
                flexShrink: 0,
              }}>{props.text3 ?? "홍길동"}</span>
              <span style={{
                position: "relative",
                fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: 1.399999976158142,
                letterSpacing: "-0.030em",
                color: "var(--color-text-primary)",
                flexShrink: 0,
              }}>{props.text4 ?? "님 환영합니다"}</span>
            </div>
            <div style={{
              position: "relative",
              width: 32,
              height: 32,
              overflow: "hidden",
              borderRadius: 100,
              backgroundColor: "rgb(36,41,53)",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 32,
                height: 32,
                borderRadius: "50%",
              }} />
              <svg width={24.621} height={26.400} viewBox="0 0 24.621 26.400" fill="none" style={{
                position: "absolute",
                left: 3.69,
                top: 5.6,
                width: 24.621,
                height: 26.4,
                color: "rgb(68,74,87)",
              }}>
                <path d={"M 24.621 20.618 C 21.686 24.15 17.261 26.4 12.31 26.4 C 7.36 26.4 2.934 24.15 0 20.618 C 2.173 15.997 6.867 12.8 12.31 12.8 C 17.754 12.8 22.448 16 24.621 20.618 Z M 12.31 11.2 C 15.402 11.2 17.91 8.691 17.91 5.6 C 17.91 2.509 15.405 0 12.31 0 C 9.216 0 6.71 2.509 6.71 5.6 C 6.71 8.691 9.219 11.2 12.31 11.2 L 12.31 11.2 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
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
                <svg width={16.667} height={8.563} viewBox="0 0 16.667 8.563" fill="none" style={{
                  position: "absolute",
                  left: 1.667,
                  top: 5.719,
                  width: 16.667,
                  height: 8.563,
                  color: "var(--color-icon-basic)",
                }}>
                  <path d={"M 0.263 0.35 C 0.645 -0.08 1.304 -0.119 1.734 0.263 L 8.333 6.127 L 14.933 0.263 C 15.363 -0.119 16.022 -0.08 16.404 0.35 C 16.786 0.78 16.747 1.438 16.317 1.82 L 9.025 8.3 C 8.631 8.65 8.036 8.65 7.641 8.3 L 0.35 1.82 C -0.08 1.438 -0.119 0.78 0.263 0.35 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.toolButton && (
      <div style={{
        position: "absolute",
        left: 942,
        top: 7,
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
            <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
              position: "absolute",
              left: 1.667,
              top: 1.667,
              width: 16.667,
              height: 16.667,
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 5.965 14.394 C 5.629 15.701 4.442 16.667 3.03 16.667 C 1.357 16.667 0 15.31 0 13.636 C 0 12.224 0.966 11.038 2.273 10.701 L 2.273 5.965 C 0.966 5.629 0 4.442 0 3.03 C 0 1.357 1.357 0 3.03 0 C 4.442 0 5.629 0.966 5.965 2.273 L 10.701 2.273 C 11.038 0.966 12.224 0 13.636 0 C 15.31 0 16.667 1.357 16.667 3.03 C 16.667 4.442 15.701 5.629 14.394 5.965 L 14.394 10.701 C 15.701 11.038 16.667 12.224 16.667 13.636 C 16.667 15.31 15.31 16.667 13.636 16.667 C 12.224 16.667 11.038 15.701 10.701 14.394 L 5.965 14.394 Z M 3.788 5.965 C 4.853 5.691 5.691 4.853 5.965 3.788 L 10.701 3.788 C 10.976 4.853 11.814 5.691 12.879 5.965 L 12.879 10.701 C 11.814 10.976 10.976 11.814 10.701 12.879 L 5.965 12.879 C 5.691 11.814 4.853 10.976 3.788 10.701 L 3.788 5.965 Z M 4.545 3.03 C 4.545 3.867 3.867 4.545 3.03 4.545 C 2.193 4.545 1.515 3.867 1.515 3.03 C 1.515 2.193 2.193 1.515 3.03 1.515 C 3.867 1.515 4.545 2.193 4.545 3.03 Z M 4.545 13.636 C 4.545 14.473 3.867 15.152 3.03 15.152 C 2.193 15.152 1.515 14.473 1.515 13.636 C 1.515 12.8 2.193 12.121 3.03 12.121 C 3.867 12.121 4.545 12.8 4.545 13.636 Z M 13.636 4.545 C 14.473 4.545 15.152 3.867 15.152 3.03 C 15.152 2.193 14.473 1.515 13.636 1.515 C 12.8 1.515 12.121 2.193 12.121 3.03 C 12.121 3.867 12.8 4.545 13.636 4.545 Z M 15.152 13.636 C 15.152 14.473 14.473 15.152 13.636 15.152 C 12.8 15.152 12.121 14.473 12.121 13.636 C 12.121 12.8 12.8 12.121 13.636 12.121 C 14.473 12.121 15.152 12.8 15.152 13.636 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: login=false
    "login=false": __body0,
    // figma: login=true
    "login=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Header;
