// figma node: 293:352 DotBadge (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "size=" + __venc(p.size);

export function DotBadge(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "primary", size: _p.size ?? "xl" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 6,
      height: 6,
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 4,
      height: 4,
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 2,
      height: 2,
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 6,
      height: 6,
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 4,
      height: 4,
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 2,
      height: 2,
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: variant=primary, size=lg(6)
    "variant=primary|size=lg": __body0,
    // figma: variant=primary, size=xl(8)
    "variant=primary|size=xl": __body1,
    // figma: variant=primary, size=md(4)
    "variant=primary|size=md": __body2,
    // figma: variant=primary, size=sm(2)
    "variant=primary|size=sm": __body3,
    // figma: variant=new, size=lg(6)
    "variant=new|size=lg": __body4,
    // figma: variant=new, size=xl(8)
    "variant=new|size=xl": __body5,
    // figma: variant=new, size=md(4)
    "variant=new|size=md": __body6,
    // figma: variant=new, size=sm(2)
    "variant=new|size=sm": __body7,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default DotBadge;
