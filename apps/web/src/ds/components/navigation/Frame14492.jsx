// figma node: 575:76 Frame 14492 (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "icon=" + __venc(p.icon);

export function Frame14492(_p = {}) {
  const props = { ..._p, icon: _p.icon ?? "화재" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "rgba(217,45,32,0.2)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "7px 7px 7px 7px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 33.6,
          borderRadius: "50%",
          backgroundColor: "var(--color-icon-error)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 14,
        top: 14,
        width: "calc(var(--sizing-icon-lg) * 1px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }} />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "rgba(217,45,32,0.2)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "7px 7px 7px 7px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 33.6,
          borderRadius: "50%",
          backgroundColor: "var(--color-icon-error)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "absolute",
        left: 14,
        top: 14,
        width: "calc(var(--sizing-icon-lg) * 1px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
        }} />
      </div>
    </div>
  );
  const __impls = {
    // figma: Icon=화재
    "icon=화재": __body0,
    // figma: Icon=대기오염
    "icon=대기오염": __body1,
    // figma: Icon=수질
    "icon=수질": __body1,
    // figma: Icon=누출
    "icon=누출": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Frame14492;
