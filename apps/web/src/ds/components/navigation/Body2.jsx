import { Slot5 } from '../display/Slot5.jsx';

// figma node: 2408:16509 Body (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "divider=" + __venc(p.divider);

export function Body2(_p = {}) {
  const props = { ..._p, divider: _p.divider ?? false };
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
      <Slot5
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"text"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
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
      <Slot5
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"text"}
      />
    </div>
  );
  const __impls = {
    // figma: divider=false
    "divider=false": __body0,
    // figma: divider=true
    "divider=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Body2;
