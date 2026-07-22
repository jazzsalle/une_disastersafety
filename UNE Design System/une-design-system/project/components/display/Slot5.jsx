// figma node: 2524:11711 Slot (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function Slot5(_p = {}) {
  const props = { ..._p, description4: _p.description4 ?? "리스트 내용", name4: _p.name4 ?? "리스트명", list4: _p.list4 ?? true, list1: _p.list1 ?? true, variant: _p.variant ?? "text", description1: _p.description1 ?? "리스트 내용", name1: _p.name1 ?? "리스트명", description3: _p.description3 ?? "리스트 내용", list2: _p.list2 ?? true, description2: _p.description2 ?? "리스트 내용", name2: _p.name2 ?? "리스트명", name3: _p.name3 ?? "리스트명", list3: _p.list3 ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 216,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Contents 주요 콘텐츠 영역 (text, lists, metadata, or any composition.)"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.list1 && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 20,
        padding: "4px 0px 4px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-muted)",
          flexShrink: 0,
        }}>{props.name1}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-tertiary)",
          flexShrink: 0,
        }}>{props.description1}</span>
      </div>
      )}
      {props.list2 && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 20,
        padding: "4px 0px 4px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-muted)",
          flexShrink: 0,
        }}>{props.name2}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-tertiary)",
          flexShrink: 0,
        }}>{props.description2}</span>
      </div>
      )}
      {props.list3 && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 20,
        padding: "4px 0px 4px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-muted)",
          flexShrink: 0,
        }}>{props.name3}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-tertiary)",
          flexShrink: 0,
        }}>{props.description3}</span>
      </div>
      )}
      {props.list4 && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 20,
        padding: "4px 0px 4px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-muted)",
          flexShrink: 0,
        }}>{props.name4}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-tertiary)",
          flexShrink: 0,
        }}>{props.description4}</span>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: variant=text
    "variant=text": __body0,
    // figma: variant=lists
    "variant=lists": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Slot5;
