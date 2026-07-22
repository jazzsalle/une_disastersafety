import { Slot2 } from './Slot2.jsx';

// figma node: 2462:10427 Body cell
export function BodyCell(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 200,
      minHeight: 32,
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-6) * 1px)",
      paddingTop: "calc(var(--space-4) * 1px)",
      paddingRight: "calc(var(--space-6) * 1px)",
      paddingBottom: "calc(var(--space-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <Slot2
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }}
        variant={"text"}
        align={"left"}
      />
    </div>
  );
}
export default BodyCell;
