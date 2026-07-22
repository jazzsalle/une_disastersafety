import { Component6 } from '../inputs/Component6.jsx';
import { IconLine39 } from '../inputs/IconLine39.jsx';

// figma node: 1630:468 드롭리스트 (Droplist)/Light/Default/False
export function DroplistLightDefaultFalse(_p = {}) {
  const props = { ..._p, prop: _p.prop ?? true, prop2: _p.prop2 ?? "옵션" };
  return (
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
        }}>{props.icon1 ?? <Component6 prop={<IconLine39 />} prop2={"16px"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "rgb(28,32,42)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.prop2}</span>
    </div>
  );
}
export default DroplistLightDefaultFalse;
