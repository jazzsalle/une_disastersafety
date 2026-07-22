import { Component } from '../display/Component.jsx';
import { IconLine33 } from '../display/IconLine33.jsx';

// figma node: 123:17296 드롭리스트 (Droplist) (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "prop2=" + __venc(p.prop2) + '|' + "prop4=" + __venc(p.prop4);

export function Droplist(_p = {}) {
  const props = { ..._p, prop: _p.prop ?? true, prop2: _p.prop2 ?? "dark", prop3: _p.prop3 ?? "옵션", prop4: _p.prop4 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine33 />} prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(29,31,43)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.prop3}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      backgroundColor: "rgb(49,54,68)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine33 />} prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(249,249,251)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.prop3}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      backgroundColor: "rgb(49,54,68)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine33 />} prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(29,31,43)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.prop3}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"16px"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine33 />} prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(166,169,175)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.prop3}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine33 />} prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.7200000286102295,
        letterSpacing: "-0.030em",
        color: "rgb(68,74,87)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.prop3}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      backgroundColor: "rgb(244,245,247)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine33 />} prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(29,31,43)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.prop3}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 240,
      height: 40,
      backgroundColor: "rgb(244,245,247)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine33 />} prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "rgb(29,31,43)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.prop3}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop2={"16px"} />}</div>
    </div>
  );
  const __impls = {
    // figma: 모드=Dark, 상태=Default
    "prop2=dark|prop4=default": __body0,
    // figma: 모드=Dark, 상태=Hover
    "prop2=dark|prop4=hover": __body1,
    // figma: 모드=Dark, 상태=Selected
    "prop2=dark|prop4=selected": __body2,
    // figma: 모드=Dark, 상태=Disabled
    "prop2=dark|prop4=disabled": __body3,
    // figma: 모드=Light, 상태=Default
    "prop2=light|prop4=default": __body4,
    // figma: 모드=Light, 상태=Hover
    "prop2=light|prop4=hover": __body5,
    // figma: 모드=Light, 상태=Selected
    "prop2=light|prop4=selected": __body6,
    // figma: 모드=Light, 상태=Disabled
    "prop2=light|prop4=disabled": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Droplist;
