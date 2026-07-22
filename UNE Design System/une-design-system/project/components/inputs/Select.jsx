import { Component6 } from './Component6.jsx';
import { Icon140 } from './Icon140.jsx';
import { IconFill42 } from './IconFill42.jsx';
import { IconFill43 } from './IconFill43.jsx';
import { IconLine40 } from './IconLine40.jsx';

// figma node: 1586:4601 셀렉트 (Select) (72 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "prop2=" + __venc(p.prop2) + '|' + "prop7=" + __venc(p.prop7) + '|' + "prop8=" + __venc(p.prop8) + '|' + "prop9=" + __venc(p.prop9);

export function Select(_p = {}) {
  const props = { ..._p, prop: _p.prop ?? true, prop2: _p.prop2 ?? "dark", prop3: _p.prop3 ?? true, prop4: _p.prop4 ?? "선택하세요", prop5: _p.prop5 ?? "레이블", prop6: _p.prop6 ?? true, prop7: _p.prop7 ?? "standard", prop8: _p.prop8 ?? "default", prop9: _p.prop9 ?? "xl" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(28,32,42)",
      boxShadow: "inset 0 0 0 1px rgb(71,125,255), 0px 0px 0px 2px rgba(132,168,255,0.5)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(49,54,68)",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "레이블"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.text2 ?? "선택하세요"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 36,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(28,32,42)",
      boxShadow: "inset 0 0 0 1px rgb(71,125,255), 0px 0px 0px 2px rgba(132,168,255,0.5)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(49,54,68)",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "레이블"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.text2 ?? "선택하세요"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(28,32,42)",
      boxShadow: "inset 0 0 0 1px rgb(71,125,255), 0px 0px 0px 2px rgba(132,168,255,0.5)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(49,54,68)",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "레이블"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.text2 ?? "선택하세요"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(244,245,247)",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "레이블"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.text2 ?? "선택하세요"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 36,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(244,245,247)",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "레이블"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.text2 ?? "선택하세요"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(60,105,252), 0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(244,245,247)",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "레이블"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.text2 ?? "선택하세요"}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 241,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(244,245,247)",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(244,245,247)",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      <div style={{
        position: "relative",
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(244,245,247)",
          borderTop: "1px solid rgb(206,207,210)",
          borderRight: "1px solid rgb(206,207,210)",
          borderBottom: "1px solid rgb(206,207,210)",
          borderLeft: "1px solid rgb(206,207,210)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(68,74,87)",
            flexGrow: 1,
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
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
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
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
            }}>{props.prop4}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 36,
      overflow: "hidden",
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(244,245,247)",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 36,
      overflow: "hidden",
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(244,245,247)",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 36,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(244,245,247)",
          borderTop: "1px solid rgb(206,207,210)",
          borderRight: "1px solid rgb(206,207,210)",
          borderBottom: "1px solid rgb(206,207,210)",
          borderLeft: "1px solid rgb(206,207,210)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(68,74,87)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
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
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
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
            }}>{props.prop4}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(244,245,247)",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(60,105,252)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(244,245,247)",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        borderTop: "1px solid rgb(206,207,210)",
        borderRight: "1px solid rgb(206,207,210)",
        borderBottom: "1px solid rgb(206,207,210)",
        borderLeft: "1px solid rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(68,74,87)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(217,45,32)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(244,245,247)",
          borderTop: "1px solid rgb(206,207,210)",
          borderRight: "1px solid rgb(206,207,210)",
          borderBottom: "1px solid rgb(206,207,210)",
          borderLeft: "1px solid rgb(206,207,210)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(68,74,87)",
            flexGrow: 1,
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
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
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
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
            }}>{props.prop4}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
        )}
        <span style={{
          position: "relative",
          width: 156,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      <div style={{
        position: "relative",
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(244,245,247)",
          borderTop: "1px solid rgb(206,207,210)",
          borderRight: "1px solid rgb(206,207,210)",
          borderBottom: "1px solid rgb(206,207,210)",
          borderLeft: "1px solid rgb(206,207,210)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(68,74,87)",
            flexGrow: 1,
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
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
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
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
            }}>{props.prop4}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
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
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(244,245,247)",
          borderTop: "1px solid rgb(206,207,210)",
          borderRight: "1px solid rgb(206,207,210)",
          borderBottom: "1px solid rgb(206,207,210)",
          borderLeft: "1px solid rgb(206,207,210)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(68,74,87)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
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
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
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
            }}>{props.prop4}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
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
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(244,245,247)",
          borderTop: "1px solid rgb(206,207,210)",
          borderRight: "1px solid rgb(206,207,210)",
          borderBottom: "1px solid rgb(206,207,210)",
          borderLeft: "1px solid rgb(206,207,210)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(68,74,87)",
            flexGrow: 1,
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
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
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
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
            }}>{props.prop4}</span>
          </div>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(28,32,42)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(49,54,68)",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(28,32,42)",
      boxShadow: "inset 0 0 0 1px rgb(71,125,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(49,54,68)",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
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
          color: "rgb(86,91,105)",
          flexGrow: 1,
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(240,68,56)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(49,54,68)",
          borderTop: "1px solid rgb(86,91,105)",
          borderRight: "1px solid rgb(86,91,105)",
          borderBottom: "1px solid rgb(86,91,105)",
          borderLeft: "1px solid rgb(86,91,105)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexGrow: 1,
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
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
          }}>{props.prop4}</span>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 36,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(28,32,42)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(49,54,68)",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 36,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(28,32,42)",
      boxShadow: "inset 0 0 0 1px rgb(71,125,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(49,54,68)",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 36,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
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
          color: "rgb(86,91,105)",
          flexGrow: 1,
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(240,68,56)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(49,54,68)",
          borderTop: "1px solid rgb(86,91,105)",
          borderRight: "1px solid rgb(86,91,105)",
          borderBottom: "1px solid rgb(86,91,105)",
          borderLeft: "1px solid rgb(86,91,105)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
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
          }}>{props.prop4}</span>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(28,32,42)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(49,54,68)",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(28,32,42)",
      boxShadow: "inset 0 0 0 1px rgb(71,125,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        backgroundColor: "rgb(49,54,68)",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
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
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
          }}>{props.prop4}</span>
        </div>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 100,
        overflow: "hidden",
        borderTop: "1px solid rgb(86,91,105)",
        borderRight: "1px solid rgb(86,91,105)",
        borderBottom: "1px solid rgb(86,91,105)",
        borderLeft: "1px solid rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        padding: "8px 12px 8px 12px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(206,207,210)",
          flexGrow: 1,
        }}>{props.prop5}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
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
          color: "rgb(86,91,105)",
          flexGrow: 1,
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      <div style={{
        position: "relative",
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(240,68,56)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(49,54,68)",
          borderTop: "1px solid rgb(86,91,105)",
          borderRight: "1px solid rgb(86,91,105)",
          borderBottom: "1px solid rgb(86,91,105)",
          borderLeft: "1px solid rgb(86,91,105)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexGrow: 1,
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
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
          }}>{props.prop4}</span>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 32,
        borderRadius: 4,
        backgroundColor: "rgb(49,54,68)",
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
          color: "rgb(86,91,105)",
          flexGrow: 1,
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body58 = () => (
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "rgb(49,54,68)",
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
          color: "rgb(86,91,105)",
          flexGrow: 1,
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
    </div>
  );
  const __body63 = () => (
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill43 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "rgb(49,54,68)",
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
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
          color: "rgb(86,91,105)",
          flexGrow: 1,
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
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
      {props.prop && (
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
      }}>{props.prop5}</span>
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
        padding: "0px 16px 0px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.prop6 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Component6 prop={<IconLine40 />} prop2={"16px"} />}</div>
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
        }}>{props.prop4}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon3 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
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
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(49,54,68)",
          borderTop: "1px solid rgb(86,91,105)",
          borderRight: "1px solid rgb(86,91,105)",
          borderBottom: "1px solid rgb(86,91,105)",
          borderLeft: "1px solid rgb(86,91,105)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexGrow: 1,
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
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
          }}>{props.prop4}</span>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
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
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(49,54,68)",
          borderTop: "1px solid rgb(86,91,105)",
          borderRight: "1px solid rgb(86,91,105)",
          borderBottom: "1px solid rgb(86,91,105)",
          borderLeft: "1px solid rgb(86,91,105)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
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
          }}>{props.prop4}</span>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
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
      <div style={{
        position: "relative",
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(28,32,42)",
        boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 100,
          overflow: "hidden",
          backgroundColor: "rgb(49,54,68)",
          borderTop: "1px solid rgb(86,91,105)",
          borderRight: "1px solid rgb(86,91,105)",
          borderBottom: "1px solid rgb(86,91,105)",
          borderLeft: "1px solid rgb(86,91,105)",
          display: "flex",
          flexDirection: "row",
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "rgb(206,207,210)",
            flexGrow: 1,
          }}>{props.prop5}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
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
          }}>{props.prop4}</span>
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <Component6 prop={<Icon140 />} prop2={"16px"} />}</div>
        </div>
      </div>
      {props.prop3 && (
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
          }}>{props.icon2 ?? <Component6 prop={<IconFill42 />} prop2={"12px"} />}</div>
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
        }}>{props.text1 ?? "메시지를 입력하세요"}</span>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: 모드=Dark, 유형=Inline, 크기=Medium(32), 상태=Focus
    "prop2=dark|prop7=inline|prop8=focus|prop9=md": __body0,
    // figma: 모드=Dark, 유형=Inline, 크기=Large(36), 상태=Focus
    "prop2=dark|prop7=inline|prop8=focus|prop9=lg": __body1,
    // figma: 모드=Dark, 유형=Inline, 크기=XLarge(40), 상태=Focus
    "prop2=dark|prop7=inline|prop8=focus|prop9=xl": __body2,
    // figma: 모드=Light, 유형=Inline, 크기=XLarge(40), 상태=Focus
    "prop2=light|prop7=inline|prop8=focus|prop9=xl": __body3,
    // figma: 모드=Light, 유형=Inline, 크기=Large(36), 상태=Focus
    "prop2=light|prop7=inline|prop8=focus|prop9=lg": __body4,
    // figma: 모드=Light, 유형=Inline, 크기=Medium(32), 상태=Focus
    "prop2=light|prop7=inline|prop8=focus|prop9=md": __body5,
    // figma: 모드=Light, 유형=Standard, 크기=Medium(32), 상태=Default
    "prop2=light|prop7=standard|prop8=default|prop9=md": __body6,
    // figma: 모드=Light, 유형=Standard, 크기=Medium(32), 상태=Hover
    "prop2=light|prop7=standard|prop8=hover|prop9=md": __body7,
    // figma: 모드=Light, 유형=Standard, 크기=Medium(32), 상태=Complete
    "prop2=light|prop7=standard|prop8=complete|prop9=md": __body8,
    // figma: 모드=Light, 유형=Standard, 크기=Medium(32), 상태=Disabled
    "prop2=light|prop7=standard|prop8=disabled|prop9=md": __body9,
    // figma: 모드=Light, 유형=Standard, 크기=Medium(32), 상태=Error
    "prop2=light|prop7=standard|prop8=error|prop9=md": __body10,
    // figma: 모드=Light, 유형=Standard, 크기=Large(36), 상태=Default
    "prop2=light|prop7=standard|prop8=default|prop9=lg": __body11,
    // figma: 모드=Light, 유형=Standard, 크기=Large(36), 상태=Hover
    "prop2=light|prop7=standard|prop8=hover|prop9=lg": __body12,
    // figma: 모드=Light, 유형=Standard, 크기=Large(36), 상태=Complete
    "prop2=light|prop7=standard|prop8=complete|prop9=lg": __body13,
    // figma: 모드=Light, 유형=Standard, 크기=Large(36), 상태=Disabled
    "prop2=light|prop7=standard|prop8=disabled|prop9=lg": __body14,
    // figma: 모드=Light, 유형=Standard, 크기=Large(36), 상태=Error
    "prop2=light|prop7=standard|prop8=error|prop9=lg": __body15,
    // figma: 모드=Light, 유형=Standard, 크기=XLarge(40), 상태=Default
    "prop2=light|prop7=standard|prop8=default|prop9=xl": __body16,
    // figma: 모드=Light, 유형=Standard, 크기=XLarge(40), 상태=Hover
    "prop2=light|prop7=standard|prop8=hover|prop9=xl": __body17,
    // figma: 모드=Light, 유형=Standard, 크기=XLarge(40), 상태=Disabled
    "prop2=light|prop7=standard|prop8=disabled|prop9=xl": __body18,
    // figma: 모드=Light, 유형=Standard, 크기=XLarge(40), 상태=Complete
    "prop2=light|prop7=standard|prop8=complete|prop9=xl": __body19,
    // figma: 모드=Light, 유형=Standard, 크기=XLarge(40), 상태=Error
    "prop2=light|prop7=standard|prop8=error|prop9=xl": __body20,
    // figma: 모드=Light, 유형=Inline, 크기=XLarge(40), 상태=Default
    "prop2=light|prop7=inline|prop8=default|prop9=xl": __body21,
    // figma: 모드=Light, 유형=Inline, 크기=XLarge(40), 상태=Hover
    "prop2=light|prop7=inline|prop8=hover|prop9=xl": __body22,
    // figma: 모드=Light, 유형=Inline, 크기=XLarge(40), 상태=Disabled
    "prop2=light|prop7=inline|prop8=disabled|prop9=xl": __body23,
    // figma: 모드=Light, 유형=Inline, 크기=XLarge(40), 상태=Error
    "prop2=light|prop7=inline|prop8=error|prop9=xl": __body24,
    // figma: 모드=Light, 유형=Inline, 크기=Large(36), 상태=Default
    "prop2=light|prop7=inline|prop8=default|prop9=lg": __body25,
    // figma: 모드=Light, 유형=Inline, 크기=Large(36), 상태=Hover
    "prop2=light|prop7=inline|prop8=hover|prop9=lg": __body26,
    // figma: 모드=Light, 유형=Inline, 크기=Large(36), 상태=Disabled
    "prop2=light|prop7=inline|prop8=disabled|prop9=lg": __body27,
    // figma: 모드=Light, 유형=Inline, 크기=Large(36), 상태=Error
    "prop2=light|prop7=inline|prop8=error|prop9=lg": __body28,
    // figma: 모드=Light, 유형=Inline, 크기=Medium(32), 상태=Default
    "prop2=light|prop7=inline|prop8=default|prop9=md": __body29,
    // figma: 모드=Light, 유형=Inline, 크기=Medium(32), 상태=Hover
    "prop2=light|prop7=inline|prop8=hover|prop9=md": __body30,
    // figma: 모드=Light, 유형=Inline, 크기=Medium(32), 상태=Disabled
    "prop2=light|prop7=inline|prop8=disabled|prop9=md": __body31,
    // figma: 모드=Light, 유형=Inline, 크기=Medium(32), 상태=Error
    "prop2=light|prop7=inline|prop8=error|prop9=md": __body32,
    // figma: 모드=Light, 유형=Standard, 크기=Medium(32), 상태=Focus
    "prop2=light|prop7=standard|prop8=focus|prop9=md": __body33,
    // figma: 모드=Light, 유형=Standard, 크기=Large(36), 상태=Focus
    "prop2=light|prop7=standard|prop8=focus|prop9=lg": __body34,
    // figma: 모드=Light, 유형=Standard, 크기=XLarge(40), 상태=Focus
    "prop2=light|prop7=standard|prop8=focus|prop9=xl": __body35,
    // figma: 모드=Light, 유형=Inline, 크기=XLarge(40), 상태=Complete
    "prop2=light|prop7=inline|prop8=complete|prop9=xl": __body36,
    // figma: 모드=Light, 유형=Inline, 크기=Large(36), 상태=Complete
    "prop2=light|prop7=inline|prop8=complete|prop9=lg": __body37,
    // figma: 모드=Light, 유형=Inline, 크기=Medium(32), 상태=Complete
    "prop2=light|prop7=inline|prop8=complete|prop9=md": __body38,
    // figma: 모드=Dark, 유형=Inline, 크기=Medium(32), 상태=Default
    "prop2=dark|prop7=inline|prop8=default|prop9=md": __body39,
    // figma: 모드=Dark, 유형=Inline, 크기=Medium(32), 상태=Hover
    "prop2=dark|prop7=inline|prop8=hover|prop9=md": __body40,
    // figma: 모드=Dark, 유형=Inline, 크기=Medium(32), 상태=Disabled
    "prop2=dark|prop7=inline|prop8=disabled|prop9=md": __body41,
    // figma: 모드=Dark, 유형=Inline, 크기=Medium(32), 상태=Error
    "prop2=dark|prop7=inline|prop8=error|prop9=md": __body42,
    // figma: 모드=Dark, 유형=Inline, 크기=Large(36), 상태=Default
    "prop2=dark|prop7=inline|prop8=default|prop9=lg": __body43,
    // figma: 모드=Dark, 유형=Inline, 크기=Large(36), 상태=Hover
    "prop2=dark|prop7=inline|prop8=hover|prop9=lg": __body44,
    // figma: 모드=Dark, 유형=Inline, 크기=Large(36), 상태=Disabled
    "prop2=dark|prop7=inline|prop8=disabled|prop9=lg": __body45,
    // figma: 모드=Dark, 유형=Inline, 크기=Large(36), 상태=Error
    "prop2=dark|prop7=inline|prop8=error|prop9=lg": __body46,
    // figma: 모드=Dark, 유형=Inline, 크기=XLarge(40), 상태=Default
    "prop2=dark|prop7=inline|prop8=default|prop9=xl": __body47,
    // figma: 모드=Dark, 유형=Inline, 크기=XLarge(40), 상태=Hover
    "prop2=dark|prop7=inline|prop8=hover|prop9=xl": __body48,
    // figma: 모드=Dark, 유형=Inline, 크기=XLarge(40), 상태=Disabled
    "prop2=dark|prop7=inline|prop8=disabled|prop9=xl": __body49,
    // figma: 모드=Dark, 유형=Inline, 크기=XLarge(40), 상태=Error
    "prop2=dark|prop7=inline|prop8=error|prop9=xl": __body50,
    // figma: 모드=Dark, 유형=Standard, 크기=Medium(32), 상태=Default
    "prop2=dark|prop7=standard|prop8=default|prop9=md": __body51,
    // figma: 모드=Dark, 유형=Standard, 크기=Medium(32), 상태=Hover
    "prop2=dark|prop7=standard|prop8=hover|prop9=md": __body52,
    // figma: 모드=Dark, 유형=Standard, 크기=Medium(32), 상태=Focus
    "prop2=dark|prop7=standard|prop8=focus|prop9=md": __body53,
    // figma: 모드=Dark, 유형=Standard, 크기=Medium(32), 상태=Error
    "prop2=dark|prop7=standard|prop8=error|prop9=md": __body54,
    // figma: 모드=Dark, 유형=Standard, 크기=Medium(32), 상태=Disabled
    "prop2=dark|prop7=standard|prop8=disabled|prop9=md": __body55,
    // figma: 모드=Dark, 유형=Standard, 크기=Large(36), 상태=Default
    "prop2=dark|prop7=standard|prop8=default|prop9=lg": __body56,
    // figma: 모드=Dark, 유형=Standard, 크기=Large(36), 상태=Hover
    "prop2=dark|prop7=standard|prop8=hover|prop9=lg": __body57,
    // figma: 모드=Dark, 유형=Standard, 크기=Large(36), 상태=Focus
    "prop2=dark|prop7=standard|prop8=focus|prop9=lg": __body58,
    // figma: 모드=Dark, 유형=Standard, 크기=Large(36), 상태=Error
    "prop2=dark|prop7=standard|prop8=error|prop9=lg": __body59,
    // figma: 모드=Dark, 유형=Standard, 크기=Large(36), 상태=Disabled
    "prop2=dark|prop7=standard|prop8=disabled|prop9=lg": __body60,
    // figma: 모드=Dark, 유형=Standard, 크기=XLarge(40), 상태=Default
    "prop2=dark|prop7=standard|prop8=default|prop9=xl": __body61,
    // figma: 모드=Dark, 유형=Standard, 크기=XLarge(40), 상태=Hover
    "prop2=dark|prop7=standard|prop8=hover|prop9=xl": __body62,
    // figma: 모드=Dark, 유형=Standard, 크기=XLarge(40), 상태=Focus
    "prop2=dark|prop7=standard|prop8=focus|prop9=xl": __body63,
    // figma: 모드=Dark, 유형=Standard, 크기=XLarge(40), 상태=Error
    "prop2=dark|prop7=standard|prop8=error|prop9=xl": __body64,
    // figma: 모드=Dark, 유형=Standard, 크기=XLarge(40), 상태=Disabled
    "prop2=dark|prop7=standard|prop8=disabled|prop9=xl": __body65,
    // figma: 모드=Dark, 유형=Standard, 크기=Medium(32), 상태=Complete
    "prop2=dark|prop7=standard|prop8=complete|prop9=md": __body66,
    // figma: 모드=Dark, 유형=Standard, 크기=Large(36), 상태=Complete
    "prop2=dark|prop7=standard|prop8=complete|prop9=lg": __body67,
    // figma: 모드=Dark, 유형=Standard, 크기=XLarge(40), 상태=Complete
    "prop2=dark|prop7=standard|prop8=complete|prop9=xl": __body68,
    // figma: 모드=Dark, 유형=Inline, 크기=Medium(32), 상태=Complete
    "prop2=dark|prop7=inline|prop8=complete|prop9=md": __body69,
    // figma: 모드=Dark, 유형=Inline, 크기=Large(36), 상태=Complete
    "prop2=dark|prop7=inline|prop8=complete|prop9=lg": __body70,
    // figma: 모드=Dark, 유형=Inline, 크기=XLarge(40), 상태=Complete
    "prop2=dark|prop7=inline|prop8=complete|prop9=xl": __body71,
  };
  return (__impls[__vkey(props)] ?? __body61)();
}
export default Select;
