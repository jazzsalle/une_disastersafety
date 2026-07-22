import { Slot6 } from './Slot6.jsx';

// figma node: 2344:13473 Footer (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function Footer(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "none" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "row",
      padding: "12px 20px 12px 20px",
      justifyContent: "space-between",
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
        }}>{props.slot ?? <Slot6 variant={"default"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 20px 12px 20px",
      justifyContent: "space-between",
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
        }}>{props.slot ?? <Slot6 variant={"default"} />}</div>
    </div>
  );
  const __impls = {
    // figma: variant=none
    "variant=none": __body0,
    // figma: variant=fill
    "variant=fill": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Footer;
