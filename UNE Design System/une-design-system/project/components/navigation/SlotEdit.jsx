import { IconButton } from '../actions/IconButton.jsx';

// figma node: 2083:45 slot/edit
export function SlotEdit(_p = {}) {
  const props = { ..._p, prop: _p.prop ?? true, prop2: _p.prop2 ?? true, prop3: _p.prop3 ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconButton variant={"ghost"} color={"primary"} state={"default"} size={"3xs"} />}</div>
      )}
      {props.prop2 && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <IconButton variant={"ghost"} color={"primary"} state={"default"} size={"3xs"} />}</div>
      )}
      {props.prop3 && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <IconButton variant={"ghost"} color={"primary"} state={"default"} size={"3xs"} />}</div>
      )}
    </div>
  );
}
export default SlotEdit;
