// figma node: 589:2363 Tooltip_Basic (32 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "prop3=" + __venc(p.prop3) + '|' + "prop4=" + __venc(p.prop4) + '|' + "prop5=" + __venc(p.prop5) + '|' + "prop6=" + __venc(p.prop6);

export function TooltipBasic(_p = {}) {
  const props = { ..._p, prop: _p.prop ?? true, prop2: _p.prop2 ?? true, prop3: _p.prop3 ?? "dark", s: _p.s ?? "짧은 텍스트만 입력하세요", prop4: _p.prop4 ?? "top", prop5: _p.prop5 ?? "lg", l: _p.l ?? "툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 150자 내외의 텍스트만 제공되어야 합니다. ", prop6: _p.prop6 ?? "left" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--color-surface-inverse)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(0,0,0)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Pretendard GOV\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 15,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(28,32,42)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(28,32,42)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(28,32,42)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(28,32,42)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(28,32,42)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
      width: 201,
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--color-surface-inverse)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,9,0)",
        transformOrigin: "0 0",
        width: 28,
        height: 9,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg height={9} viewBox="0 0 14 9" fill="none" style={{
          position: "relative",
          height: 9,
          borderRadius: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 1.255 1.614 L 6.211 7.985 C 6.611 8.5 7.389 8.5 7.789 7.985 L 12.745 1.614 C 13.256 0.957 12.788 0 11.955 0 L 2.045 0 C 1.212 0 0.744 0.957 1.255 1.614 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 195,
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.s}</span>
        {props.prop2 && (
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
  const __body7 = () => (
    <div className={props.className} style={{
      width: 201,
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(28,32,42)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 195,
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.s}</span>
        {props.prop2 && (
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,1,0,192,0)",
        transformOrigin: "0 0",
        width: 28,
        height: 9,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg height={9} viewBox="0 0 14 9" fill="none" style={{
          position: "relative",
          height: 9,
          borderRadius: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 1.255 1.614 L 6.211 7.985 C 6.611 8.5 7.389 8.5 7.789 7.985 L 12.745 1.614 C 13.256 0.957 12.788 0 11.955 0 L 2.045 0 C 1.212 0 0.744 0.957 1.255 1.614 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(83,108,172)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(83,108,172)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic-inverse-2)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(83,108,172)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(83,108,172)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic-inverse-2)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(83,108,172)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(83,108,172)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic-inverse-2)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(83,108,172)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(83,108,172)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic-inverse-2)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(83,108,172)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(83,108,172)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic-inverse-2)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(83,108,172)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={16} height={8} viewBox="0 0 16 8" fill="none" style={{
          position: "relative",
          width: 16,
          height: 8,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.707 1.707 L 7.293 7.293 C 7.683 7.683 8.317 7.683 8.707 7.293 L 14.293 1.707 C 14.923 1.077 14.477 0 13.586 0 L 2.414 0 C 1.523 0 1.077 1.077 1.707 1.707 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(83,108,172)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic-inverse-2)",
          flexGrow: 1,
        }}>{props.s}</span>
        {props.prop2 && (
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
  const __body14 = () => (
    <div className={props.className} style={{
      width: 201,
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(83,108,172)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,9,0)",
        transformOrigin: "0 0",
        width: 28,
        height: 9,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg height={9} viewBox="0 0 14 9" fill="none" style={{
          position: "relative",
          height: 9,
          borderRadius: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 1.255 1.614 L 6.211 7.985 C 6.611 8.5 7.389 8.5 7.789 7.985 L 12.745 1.614 C 13.256 0.957 12.788 0 11.955 0 L 2.045 0 C 1.212 0 0.744 0.957 1.255 1.614 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 195,
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(83,108,172)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic-inverse-2)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.s}</span>
        {props.prop2 && (
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
  const __body15 = () => (
    <div className={props.className} style={{
      width: 201,
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      gap: -3,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(83,108,172)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 195,
        maxWidth: 360,
        maxHeight: null,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(83,108,172)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 12px 4px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          maxWidth: 308,
          maxHeight: null,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic-inverse-2)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.s}</span>
        {props.prop2 && (
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
        transform: "matrix(0,1,1,0,192,0)",
        transformOrigin: "0 0",
        width: 28,
        height: 9,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg height={9} viewBox="0 0 14 9" fill="none" style={{
          position: "relative",
          height: 9,
          borderRadius: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 1.255 1.614 L 6.211 7.985 C 6.611 8.5 7.389 8.5 7.789 7.985 L 12.745 1.614 C 13.256 0.957 12.788 0 11.955 0 L 2.045 0 C 1.212 0 0.744 0.957 1.255 1.614 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 371,
      display: "flex",
      flexDirection: "row",
      gap: -1,
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,12,0)",
        transformOrigin: "0 0",
        width: 192,
        height: 12,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg width={21} height={12} viewBox="0 0 21 12" fill="none" style={{
          position: "relative",
          width: 21,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.451 1.659 L 9.747 11.14 C 10.146 11.595 10.854 11.595 11.253 11.14 L 19.549 1.659 C 20.115 1.012 19.655 0 18.796 0 L 2.204 0 C 1.345 0 0.885 1.012 1.451 1.659 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 360,
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.l}</span>
        {props.prop2 && (
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
  const __body23 = () => (
    <div className={props.className} style={{
      width: 371,
      display: "flex",
      flexDirection: "row",
      gap: -1,
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,12,0)",
        transformOrigin: "0 0",
        width: 192,
        height: 12,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg width={21} height={12} viewBox="0 0 21 12" fill="none" style={{
          position: "relative",
          width: 21,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.451 1.659 L 9.747 11.14 C 10.146 11.595 10.854 11.595 11.253 11.14 L 19.549 1.659 C 20.115 1.012 19.655 0 18.796 0 L 2.204 0 C 1.345 0 0.885 1.012 1.451 1.659 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 360,
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.l}</span>
        {props.prop2 && (
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
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: -1,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        transform: "matrix(1,0,0,-1,0,0)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 24px 0px 24px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={22} height={12} viewBox="0 0 22 12" fill="none" style={{
          position: "relative",
          width: 22,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.536 1.676 L 10.263 11.196 C 10.659 11.628 11.341 11.628 11.737 11.196 L 20.464 1.676 C 21.052 1.034 20.597 0 19.727 0 L 2.273 0 C 1.403 0 0.948 1.034 1.536 1.676 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
        }}>{props.l}</span>
        {props.prop2 && (
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
  const __body30 = () => (
    <div className={props.className} style={{
      width: 371,
      display: "flex",
      flexDirection: "row",
      gap: -1,
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 360,
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.l}</span>
        {props.prop2 && (
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,1,0,359,0)",
        transformOrigin: "0 0",
        width: 192,
        height: 12,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg width={21} height={12} viewBox="0 0 21 12" fill="none" style={{
          position: "relative",
          width: 21,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.451 1.659 L 9.747 11.14 C 10.146 11.595 10.854 11.595 11.253 11.14 L 19.549 1.659 C 20.115 1.012 19.655 0 18.796 0 L 2.204 0 C 1.345 0 0.885 1.012 1.451 1.659 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 371,
      display: "flex",
      flexDirection: "row",
      gap: -1,
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(49,54,68)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 360,
        maxWidth: 360,
        maxHeight: 192,
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "rgb(49,54,68)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop && (
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
          }} />
        </div>
        )}
        <span style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 160,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(255,255,255)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.l}</span>
        {props.prop2 && (
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
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,1,0,359,0)",
        transformOrigin: "0 0",
        width: 192,
        height: 12,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg width={21} height={12} viewBox="0 0 21 12" fill="none" style={{
          position: "relative",
          width: 21,
          height: 12,
          borderRadius: 1,
          flexShrink: 0,
        }}>
          <path d={"M 1.451 1.659 L 9.747 11.14 C 10.146 11.595 10.854 11.595 11.253 11.14 L 19.549 1.659 C 20.115 1.012 19.655 0 18.796 0 L 2.204 0 C 1.345 0 0.885 1.012 1.451 1.659 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: 모드=Dark, 방향=bottom, 화살표 위치=left, 크기=small
    "prop3=dark|prop4=bottom|prop5=sm|prop6=left": __body0,
    // figma: 모드=Dark, 방향=Top, 화살표 위치=left, 크기=small
    "prop3=dark|prop4=top|prop5=sm|prop6=left": __body1,
    // figma: 모드=Dark, 방향=bottom, 화살표 위치=center, 크기=small
    "prop3=dark|prop4=bottom|prop5=sm|prop6=center": __body2,
    // figma: 모드=Dark, 방향=Top, 화살표 위치=center, 크기=small
    "prop3=dark|prop4=top|prop5=sm|prop6=center": __body3,
    // figma: 모드=Dark, 방향=bottom, 화살표 위치=right, 크기=small
    "prop3=dark|prop4=bottom|prop5=sm|prop6=right": __body4,
    // figma: 모드=Dark, 방향=Top, 화살표 위치=right, 크기=small
    "prop3=dark|prop4=top|prop5=sm|prop6=right": __body5,
    // figma: 모드=Dark, 방향=left, 화살표 위치=left, 크기=small
    "prop3=dark|prop4=left|prop5=sm|prop6=left": __body6,
    // figma: 모드=Dark, 방향=right, 화살표 위치=right, 크기=small
    "prop3=dark|prop4=right|prop5=sm|prop6=right": __body7,
    // figma: 모드=Light, 방향=bottom, 화살표 위치=left, 크기=small
    "prop3=light|prop4=bottom|prop5=sm|prop6=left": __body8,
    // figma: 모드=Light, 방향=Top, 화살표 위치=left, 크기=small
    "prop3=light|prop4=top|prop5=sm|prop6=left": __body9,
    // figma: 모드=Light, 방향=bottom, 화살표 위치=center, 크기=small
    "prop3=light|prop4=bottom|prop5=sm|prop6=center": __body10,
    // figma: 모드=Light, 방향=Top, 화살표 위치=center, 크기=small
    "prop3=light|prop4=top|prop5=sm|prop6=center": __body11,
    // figma: 모드=Light, 방향=bottom, 화살표 위치=right, 크기=small
    "prop3=light|prop4=bottom|prop5=sm|prop6=right": __body12,
    // figma: 모드=Light, 방향=Top, 화살표 위치=right, 크기=small
    "prop3=light|prop4=top|prop5=sm|prop6=right": __body13,
    // figma: 모드=Light, 방향=left, 화살표 위치=left, 크기=small
    "prop3=light|prop4=left|prop5=sm|prop6=left": __body14,
    // figma: 모드=Light, 방향=right, 화살표 위치=right, 크기=small
    "prop3=light|prop4=right|prop5=sm|prop6=right": __body15,
    // figma: 모드=Dark, 방향=bottom, 화살표 위치=left, 크기=large
    "prop3=dark|prop4=bottom|prop5=lg|prop6=left": __body16,
    // figma: 모드=Light, 방향=bottom, 화살표 위치=left, 크기=large
    "prop3=light|prop4=bottom|prop5=lg|prop6=left": __body17,
    // figma: 모드=Dark, 방향=bottom, 화살표 위치=center, 크기=large
    "prop3=dark|prop4=bottom|prop5=lg|prop6=center": __body18,
    // figma: 모드=Light, 방향=bottom, 화살표 위치=center, 크기=large
    "prop3=light|prop4=bottom|prop5=lg|prop6=center": __body19,
    // figma: 모드=Dark, 방향=bottom, 화살표 위치=right, 크기=large
    "prop3=dark|prop4=bottom|prop5=lg|prop6=right": __body20,
    // figma: 모드=Light, 방향=bottom, 화살표 위치=right, 크기=large
    "prop3=light|prop4=bottom|prop5=lg|prop6=right": __body21,
    // figma: 모드=Dark, 방향=left, 화살표 위치=left, 크기=large
    "prop3=dark|prop4=left|prop5=lg|prop6=left": __body22,
    // figma: 모드=Light, 방향=left, 화살표 위치=left, 크기=large
    "prop3=light|prop4=left|prop5=lg|prop6=left": __body23,
    // figma: 모드=Dark, 방향=Top, 화살표 위치=left, 크기=large
    "prop3=dark|prop4=top|prop5=lg|prop6=left": __body24,
    // figma: 모드=Light, 방향=Top, 화살표 위치=left, 크기=large
    "prop3=light|prop4=top|prop5=lg|prop6=left": __body25,
    // figma: 모드=Dark, 방향=Top, 화살표 위치=center, 크기=large
    "prop3=dark|prop4=top|prop5=lg|prop6=center": __body26,
    // figma: 모드=Light, 방향=Top, 화살표 위치=center, 크기=large
    "prop3=light|prop4=top|prop5=lg|prop6=center": __body27,
    // figma: 모드=Dark, 방향=Top, 화살표 위치=right, 크기=large
    "prop3=dark|prop4=top|prop5=lg|prop6=right": __body28,
    // figma: 모드=Light, 방향=Top, 화살표 위치=right, 크기=large
    "prop3=light|prop4=top|prop5=lg|prop6=right": __body29,
    // figma: 모드=Dark, 방향=right, 화살표 위치=right, 크기=large
    "prop3=dark|prop4=right|prop5=lg|prop6=right": __body30,
    // figma: 모드=Light, 방향=right, 화살표 위치=right, 크기=large
    "prop3=light|prop4=right|prop5=lg|prop6=right": __body31,
  };
  return (__impls[__vkey(props)] ?? __body24)();
}
export default TooltipBasic;
