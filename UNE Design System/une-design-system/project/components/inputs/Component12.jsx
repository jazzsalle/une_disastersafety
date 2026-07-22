// figma node: 345:5484 Component 1 (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "prop=" + __venc(p.prop) + '|' + "prop2=" + __venc(p.prop2);

export function Component12(_p = {}) {
  const props = { ..._p, prop: _p.prop ?? "vertical", prop2: _p.prop2 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 4,
      height: 80,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--color-scroll-thumb-defualt)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 4,
      height: 80,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--color-scroll-thumb-hover)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 4,
      height: 80,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--color-scroll-thumb-active)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 4,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--color-scroll-thumb-defualt)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 4,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--color-scroll-thumb-hover)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 4,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "var(--color-scroll-thumb-active)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: 유형=Vertical, 상태=Default
    "prop=vertical|prop2=default": __body0,
    // figma: 유형=Vertical, 상태=Hover
    "prop=vertical|prop2=hover": __body1,
    // figma: 유형=Vertical, 상태=Active
    "prop=vertical|prop2=active": __body2,
    // figma: 유형=Horizontal, 상태=Default
    "prop=horizontal|prop2=default": __body3,
    // figma: 유형=Horizontal, 상태=Hover
    "prop=horizontal|prop2=hover": __body4,
    // figma: 유형=Horizontal, 상태=Active
    "prop=horizontal|prop2=active": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Component12;
