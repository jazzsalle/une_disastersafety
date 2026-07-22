import { Slot5 } from './Slot5.jsx';

// figma node: 2344:13710 Body (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function Body(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "fill" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 20px 12px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.slot ?? <Slot5 variant={"text"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      borderTop: "1px solid rgb(0,0,0)",
      borderRight: "1px solid rgb(0,0,0)",
      borderBottom: "1px solid rgb(0,0,0)",
      borderLeft: "1px solid rgb(0,0,0)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 20px 12px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.slot ?? <Slot5 variant={"text"} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 20px 12px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.slot ?? <Slot5 variant={"text"} />}</div>
    </div>
  );
  const __impls = {
    // figma: variant=none
    "variant=none": __body0,
    // figma: variant=line
    "variant=line": __body1,
    // figma: variant=fill
    "variant=fill": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Body;
