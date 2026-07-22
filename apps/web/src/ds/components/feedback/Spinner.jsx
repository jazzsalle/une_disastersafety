// figma node: 2478:6506 Spinner (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function Spinner(_p = {}) {
  const props = { ..._p, size: _p.size ?? "lg" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 40,
        height: 40,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4px var(--color-border-muted)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 40,
        height: 40,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 4px var(--color-border-brand)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 3px var(--color-border-muted)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 3px var(--color-border-brand)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 2px var(--color-border-muted)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        boxShadow: "inset 0 0 0 2px var(--color-border-brand)",
      }} />
    </div>
  );
  const __impls = {
    // figma: size=lg
    "size=lg": __body0,
    // figma: size=md
    "size=md": __body1,
    // figma: size=sm
    "size=sm": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Spinner;
