import { Badge } from './Badge.jsx';
import { Button } from '../actions/Button.jsx';

// figma node: 2524:11712 Slot (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function Slot6(_p = {}) {
  const props = { ..._p, option: _p.option ?? true, variant: _p.variant ?? "default", buttons: _p.buttons ?? true, sub: _p.sub ?? true, main: _p.main ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 280,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.option && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.option && (
        <div style={{ position: "relative", height: 28, flexShrink: 0 }}>{props.icon1 ?? <Badge mode={"light"} size={"md"} variant={"dot-accent"} color={"grayscale"} shape={"round-square"} />}</div>
        )}
      </div>
      )}
      {props.buttons && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.sub && (
        <div style={{
            position: "relative",
            width: 68,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Button variant={"ghost"} color={"grayscale"} state={"default"} size={"2xs"} />}</div>
        )}
        {props.main && (
        <div style={{
            position: "relative",
            width: 68,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <Button variant={"ghost"} color={"primary"} state={"default"} size={"2xs"} />}</div>
        )}
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: variant=default
    "variant=default": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Slot6;
