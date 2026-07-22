import { Button } from '../actions/Button.jsx';
import { Checkbox } from '../inputs/Checkbox.jsx';
import { Component } from '../display/Component.jsx';

// figma node: 2478:6916 Modal
export function Modal(_p = {}) {
  const props = { ..._p, icon: _p.icon ?? true, title: _p.title ?? "Header", text: _p.text ?? "(예시) 다시보지않기", iconButton: _p.iconButton ?? true, option: _p.option ?? true, footer: _p.footer ?? true, button: _p.button ?? true };
  return (
    <div className={props.className} style={{
      width: 540,
      minWidth: 300,
      minHeight: 232,
      maxWidth: 1536,
      maxHeight: 864,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.icon && (
      <div style={{
        position: "relative",
        width: 64,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "32px 32px 32px 32px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component prop2={"32px"} />}</div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: "32px 32px 32px 32px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: 1.600000023841858,
              letterSpacing: "-0.030em",
              color: "rgb(28,32,42)",
              flexGrow: 1,
            }}>{props.title}</span>
            {props.iconButton && (
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
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: 1.399999976158142,
              letterSpacing: "-0.030em",
              color: "rgb(86,91,105)",
              flexGrow: 1,
              alignSelf: "stretch",
              whiteSpace: "pre-wrap",
            }}>{props.text1 ?? "Body\n(텍스트, 폼 요소, 이미지 등이 들어가는 영역)"}</span>
          </div>
        </div>
        {props.footer && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 32px 32px 32px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.option && (
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon3 ?? <Checkbox mode={"light"} checked={false} state={"default"} size={"sm"} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: 1.399999976158142,
              letterSpacing: "-0.030em",
              color: "rgb(28,32,42)",
              flexShrink: 0,
            }}>{props.text}</span>
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
            {props.button && (
            <Button
              style={{
                position: "relative",
                height: 40,
                width: 83,
                flexShrink: 0,
              }}
              variant={"fill"}
              color={"grayscale"}
              state={"default"}
              size={"md"}
            />
            )}
            <Button
              style={{
                position: "relative",
                height: 40,
                width: 83,
                flexShrink: 0,
              }}
              variant={"fill"}
              color={"primary"}
              state={"default"}
              size={"md"}
            />
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
export default Modal;
