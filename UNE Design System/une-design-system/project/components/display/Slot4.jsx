import { Badge2 } from './Badge2.jsx';
import { IconButton } from '../actions/IconButton.jsx';

// figma node: 2524:11683 Slot (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function Slot4(_p = {}) {
  const props = { ..._p, badges: _p.badges ?? true, badge1: _p.badge1 ?? true, subtitle: _p.subtitle ?? true, variant: _p.variant ?? "default", text: _p.text ?? "subtitle", button3: _p.button3 ?? true, buttons: _p.buttons ?? true, button2: _p.button2 ?? true, button1: _p.button1 ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 280,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.badges && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.badges && (
        <div style={{ position: "relative", height: 24, flexShrink: 0 }}>{props.icon1 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"sm"} color={"primary"} />}</div>
        )}
        {props.badge1 && (
        <div style={{ position: "relative", height: 24, flexShrink: 0 }}>{props.icon2 ?? <Badge2 variant={"soild-pastel"} shape={"round-square"} size={"sm"} color={"primary"} />}</div>
        )}
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-primary)",
            flexGrow: 1,
          }}>{props.text1 ?? "Title"}</span>
          {props.buttons && (
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            {props.button1 && (
            <div style={{
                position: "relative",
                width: 28,
                height: 28,
                flexShrink: 0,
              }}>{props.icon3 ?? <IconButton variant={"ghost"} color={"grayscale"} state={"default"} size={"2xs"} />}</div>
            )}
            {props.button2 && (
            <div style={{
                position: "relative",
                width: 28,
                height: 28,
                flexShrink: 0,
              }}>{props.icon4 ?? <IconButton variant={"ghost"} color={"grayscale"} state={"default"} size={"2xs"} />}</div>
            )}
            {props.button3 && (
            <IconButton
              style={{
                position: "relative",
                width: 28,
                height: 28,
                flexShrink: 0,
              }}
              variant={"ghost"}
              color={"grayscale"}
              state={"default"}
              size={"2xs"}
            />
            )}
            <IconButton
              style={{
                position: "relative",
                width: 28,
                height: 28,
                flexShrink: 0,
              }}
              variant={"ghost"}
              color={"grayscale"}
              state={"default"}
              size={"2xs"}
            />
          </div>
          )}
        </div>
        {props.subtitle && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text}</span>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: variant=default
    "variant=default": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Slot4;
