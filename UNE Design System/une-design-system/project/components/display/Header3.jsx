import { Slot4 } from './Slot4.jsx';

// figma node: 2322:7570 Header (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function Header3(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "none" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 20px 12px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}>{props.slot ?? <Slot4 variant={"default"} />}</div>
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
      flexDirection: "row",
      gap: 8,
      padding: "12px 20px 12px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 280,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.slot ?? <Slot4 variant={"default"} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 20px 12px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}>{props.slot ?? <Slot4 variant={"default"} />}</div>
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
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Header3;
