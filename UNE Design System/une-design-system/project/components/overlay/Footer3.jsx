import { Button } from '../actions/Button.jsx';
import { Checkbox2 } from '../display/Checkbox2.jsx';

// figma node: 2524:10847 Footer (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "divider=" + __venc(p.divider) + '|' + "size=" + __venc(p.size);

export function Footer3(_p = {}) {
  const props = { ..._p, divider: _p.divider ?? false, secondary: _p.secondary ?? true, primary: _p.primary ?? true, size: _p.size ?? "lg", option: _p.option ?? true, actions: _p.actions ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 16px 12px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.option && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <Checkbox2
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label2={"(예시) 다시보지않기"}
          value={"unchecked"}
          size={"sm"}
          state={"default"}
        />
      </div>
      )}
      {props.actions && (
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
        {props.secondary && (
        <Button
          style={{
            position: "relative",
            width: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"grayscale"}
          state={"default"}
          size={"xs"}
        />
        )}
        {props.primary && (
        <Button
          style={{
            position: "relative",
            width: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"primary"}
          state={"default"}
          size={"xs"}
        />
        )}
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 400,
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "12px 16px 12px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-sm) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.option && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <Checkbox2
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label2={"(예시) 다시보지않기"}
          value={"unchecked"}
          size={"sm"}
          state={"default"}
        />
      </div>
      )}
      {props.actions && (
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
        {props.secondary && (
        <Button
          style={{
            position: "relative",
            width: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"grayscale"}
          state={"default"}
          size={"xs"}
        />
        )}
        {props.primary && (
        <Button
          style={{
            position: "relative",
            width: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"primary"}
          state={"default"}
          size={"xs"}
        />
        )}
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 24px 16px 24px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xl) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.option && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <Checkbox2
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label2={"(예시) 다시보지않기"}
          value={"unchecked"}
          size={"sm"}
          state={"default"}
        />
      </div>
      )}
      {props.actions && (
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
        {props.secondary && (
        <Button
          style={{
            position: "relative",
            width: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"grayscale"}
          state={"default"}
          size={"sm"}
        />
        )}
        {props.primary && (
        <Button
          style={{
            position: "relative",
            width: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"primary"}
          state={"default"}
          size={"sm"}
        />
        )}
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 400,
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "16px 24px 16px 24px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xl) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.option && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <Checkbox2
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label2={"(예시) 다시보지않기"}
          value={"unchecked"}
          size={"sm"}
          state={"default"}
        />
      </div>
      )}
      {props.actions && (
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
        {props.secondary && (
        <Button
          style={{
            position: "relative",
            width: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"grayscale"}
          state={"default"}
          size={"sm"}
        />
        )}
        {props.primary && (
        <Button
          style={{
            position: "relative",
            width: 75,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"primary"}
          state={"default"}
          size={"sm"}
        />
        )}
      </div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 400,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 32px 24px 32px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-2xl) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-2xl) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.option && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <Checkbox2
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label2={"(예시) 다시보지않기"}
          value={"unchecked"}
          size={"sm"}
          state={"default"}
        />
      </div>
      )}
      {props.actions && (
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
        {props.secondary && (
        <Button
          style={{
            position: "relative",
            width: 83,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"grayscale"}
          state={"default"}
          size={"md"}
        />
        )}
        {props.primary && (
        <Button
          style={{
            position: "relative",
            width: 83,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"primary"}
          state={"default"}
          size={"md"}
        />
        )}
      </div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 400,
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "24px 32px 24px 32px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-2xl) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-xl) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-2xl) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.option && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <Checkbox2
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label2={"(예시) 다시보지않기"}
          value={"unchecked"}
          size={"sm"}
          state={"default"}
        />
      </div>
      )}
      {props.actions && (
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
        {props.secondary && (
        <Button
          style={{
            position: "relative",
            width: 83,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"grayscale"}
          state={"default"}
          size={"md"}
        />
        )}
        {props.primary && (
        <Button
          style={{
            position: "relative",
            width: 83,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          variant={"fill"}
          color={"primary"}
          state={"default"}
          size={"md"}
        />
        )}
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: divider=false, size=sm
    "divider=false|size=sm": __body0,
    // figma: divider=true, size=sm
    "divider=true|size=sm": __body1,
    // figma: divider=false, size=md
    "divider=false|size=md": __body2,
    // figma: divider=true, size=md
    "divider=true|size=md": __body3,
    // figma: divider=false, size=lg
    "divider=false|size=lg": __body4,
    // figma: divider=true, size=lg
    "divider=true|size=lg": __body5,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default Footer3;
