import { Component10 } from './Component10.jsx';
import { Component3 } from './Component3.jsx';
import { Component8 } from './Component8.jsx';

// figma node: 520:309 v0.3_텍스트 버튼(Text Button) (500 variants)
const __variants = {
  "prop=grayscale|prop2=8px|underline=false|prop3=medium_16px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=grayscale|prop2=8px|underline=false|prop3=regular_16px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=8px|underline=false|prop3=medium_16px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=8px|underline=false|prop3=medium_16px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=grayscale|prop2=4px|underline=false|prop3=medium_16px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=4px|underline=false|prop3=medium_16px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=4px|underline=false|prop3=medium_16px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=grayscale|prop2=4px|underline=false|prop3=regular_16px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=4px|underline=false|prop3=medium_20px|prop4=disabled": { gap: 4 },
  "prop=primary_white|prop2=4px|underline=false|prop3=medium_20px|prop4=disabled": { gap: 4 },
  "prop=primary|prop2=4px|underline=false|prop3=medium_18px|prop4=disabled": { gap: 4 },
  "prop=primary_white|prop2=4px|underline=false|prop3=medium_18px|prop4=disabled": { gap: 4 },
  "prop=primary|prop2=8px|underline=false|prop3=regular_16px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=8px|underline=false|prop3=regular_16px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=4px|underline=false|prop3=regular_16px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=4px|underline=false|prop3=regular_16px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=4px|underline=false|prop3=regular_20px|prop4=disabled": { gap: 4 },
  "prop=primary_white|prop2=4px|underline=false|prop3=regular_20px|prop4=disabled": { gap: 4 },
  "prop=primary|prop2=4px|underline=false|prop3=regular_18px|prop4=disabled": { gap: 4 },
  "prop=primary_white|prop2=4px|underline=false|prop3=regular_18px|prop4=disabled": { gap: 4 },
  "prop=grayscale|prop2=4px|underline=false|prop3=medium_20px|prop4=disabled": { gap: 4 },
  "prop=grayscale|prop2=4px|underline=false|prop3=regular_20px|prop4=disabled": { gap: 4 },
  "prop=primary|prop2=8px|underline=false|prop3=medium_14px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=8px|underline=false|prop3=medium_14px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=grayscale|prop2=4px|underline=false|prop3=medium_18px|prop4=disabled": { gap: 4 },
  "prop=primary|prop2=4px|underline=false|prop3=medium_14px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=4px|underline=false|prop3=medium_14px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=8px|underline=false|prop3=regular_14px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=8px|underline=false|prop3=regular_14px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=4px|underline=false|prop3=regular_14px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=4px|underline=false|prop3=regular_14px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=grayscale|prop2=4px|underline=false|prop3=regular_18px|prop4=disabled": { gap: 4 },
  "prop=primary|prop2=8px|underline=false|prop3=medium_12px|prop4=disabled": { borderRadius: 4, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=8px|underline=false|prop3=medium_12px|prop4=disabled": { borderRadius: 4, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=4px|underline=false|prop3=medium_12px|prop4=disabled": { borderRadius: 4, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=4px|underline=false|prop3=medium_12px|prop4=disabled": { borderRadius: 4, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=8px|underline=false|prop3=regular_12px|prop4=disabled": { borderRadius: 4, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=8px|underline=false|prop3=regular_12px|prop4=disabled": { borderRadius: 4, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=4px|underline=false|prop3=regular_12px|prop4=disabled": { borderRadius: 4, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=4px|underline=false|prop3=regular_12px|prop4=disabled": { borderRadius: 4, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=8px|underline=false|prop3=medium_16px|prop4=active": { borderRadius: 6, padding: "4px 6px 4px 6px", backgroundColor: "rgb(235,235,237)" },
  "prop=primary_white|prop2=8px|underline=false|prop3=medium_16px|prop4=active": { borderRadius: 6, padding: "4px 6px 4px 6px", backgroundColor: "rgb(16,37,135)" },
  "prop=primary|prop2=8px|underline=false|prop3=medium_16px|prop4=focus": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=8px|underline=false|prop3=medium_16px|prop4=focus": { borderRadius: 6, padding: "4px 6px 4px 6px", backgroundColor: "rgb(12,44,202)" },
  "prop=grayscale|prop2=8px|underline=false|prop3=medium_14px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=grayscale|prop2=8px|underline=false|prop3=regular_14px|prop4=disabled": { borderRadius: 6, padding: "4px 6px 4px 6px" },
  "prop=grayscale|prop2=4px|underline=false|prop3=medium_14px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary|prop2=4px|underline=false|prop3=medium_16px|prop4=active": {
    borderRadius: 6,
    gap: 4,
    padding: "4px 6px 4px 6px",
    backgroundColor: "rgb(235,235,237)",
  },
  "prop=primary_white|prop2=4px|underline=false|prop3=medium_16px|prop4=active": {
    borderRadius: 6,
    gap: 4,
    padding: "4px 6px 4px 6px",
    backgroundColor: "rgb(16,37,135)",
  },
  "prop=primary|prop2=4px|underline=false|prop3=medium_16px|prop4=focus": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  "prop=primary_white|prop2=4px|underline=false|prop3=medium_16px|prop4=focus": {
    borderRadius: 6,
    gap: 4,
    padding: "4px 6px 4px 6px",
    backgroundColor: "rgb(12,44,202)",
  },
  "prop=grayscale|prop2=4px|underline=false|prop3=regular_14px|prop4=disabled": { borderRadius: 6, gap: 4, padding: "4px 6px 4px 6px" },
  // …+435 more variants not captured: "prop=primary|prop2=8px|underline=false|prop3=medium_20px|prop4=active", "prop=primary_white|prop2=8px|underline=false|prop3=medium_20px|prop4=active", "prop=primary|prop2=8px|underline=false|prop3=medium_20px|prop4=focus", "prop=primary_white|prop2=8px|underline=false|prop3=medium_20px|prop4=focus", "prop=grayscale|prop2=8px|underline=false|prop3=medium_12px|prop4=disabled", "prop=grayscale|prop2=8px|underline=false|prop3=regular_12px|prop4=disabled", "prop=grayscale|prop2=4px|underline=false|prop3=medium_12px|prop4=disabled", "prop=primary|prop2=8px|underline=false|prop3=medium_18px|prop4=active", "prop=primary_white|prop2=8px|underline=false|prop3=medium_18px|prop4=active", "prop=primary|prop2=8px|underline=false|prop3=medium_18px|prop4=focus", …
};
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "prop=" + __venc(p.prop) + '|' + "prop2=" + __venc(p.prop2) + '|' + "underline=" + __venc(p.underline) + '|' + "prop3=" + __venc(p.prop3) + '|' + "prop4=" + __venc(p.prop4);

export function V03TextButton(_p = {}) {
  const props = { ..._p, lIcon: _p.lIcon ?? true, prop: _p.prop ?? "grayscale", prop2: _p.prop2 ?? "8px", rIcon: _p.rIcon ?? true, underline: _p.underline ?? false, prop3: _p.prop3 ?? "medium_20px", label: _p.label ?? "버튼이름", prop4: _p.prop4 ?? "default" };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "5px 6px 5px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...__vs, ...props.style,
    }}>
      {props.lIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component3 prop={<Component8 />} prop2={"16px"} prop3={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.7200000286102295,
        letterSpacing: "-0.030em",
        color: "rgb(86,91,105)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rIcon && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component3 prop={<Component10 />} prop2={"16px"} prop3={false} />}</div>
      )}
    </div>
  );
}
export default V03TextButton;
