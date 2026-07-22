// figma node: 149:6553 Pagination_Buttons (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "selected=" + __venc(p.selected) + '|' + "state=" + __venc(p.state);

export function PaginationButtons(_p = {}) {
  const props = { ..._p, text: _p.text ?? "1", selected: _p.selected ?? true, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.420px",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
    </div>
  );
  const __impls = {
    // figma: selected=false, state=default
    "selected=false|state=default": __body0,
    // figma: selected=false, state=focus-visible
    "selected=false|state=focus-visible": __body1,
    // figma: selected=false, state=hover
    "selected=false|state=hover": __body2,
    // figma: selected=false, state=active
    "selected=false|state=active": __body3,
    // figma: selected=true, state=default
    "selected=true|state=default": __body4,
    // figma: selected=true, state=hover
    "selected=true|state=hover": __body5,
    // figma: selected=true, state=active
    "selected=true|state=active": __body6,
    // figma: selected=true, state=focus-visible
    "selected=true|state=focus-visible": __body7,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default PaginationButtons;
