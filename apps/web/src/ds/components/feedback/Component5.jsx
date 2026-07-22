import { Logo } from './Logo.jsx';

// figma node: 944:13380 가변 아이콘 (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "prop2=" + __venc(p.prop2);

export function Component5(_p = {}) {
  const props = { ..._p, prop2: _p.prop2 ?? "40px" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.prop ?? <Logo />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 36,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.prop ?? <Logo />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.prop ?? <Logo />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.prop ?? <Logo />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.prop ?? <Logo />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.prop ?? <Logo />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.prop ?? <Logo />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.prop ?? <Logo />}</div>
    </div>
  );
  const __impls = {
    // figma: 사이즈=40px
    "prop2=40px": __body0,
    // figma: 사이즈=36px
    "prop2=36px": __body1,
    // figma: 사이즈=32px
    "prop2=32px": __body2,
    // figma: 사이즈=28px
    "prop2=28px": __body3,
    // figma: 사이즈=24px
    "prop2=24px": __body4,
    // figma: 사이즈=20px
    "prop2=20px": __body5,
    // figma: 사이즈=16px
    "prop2=16px": __body6,
    // figma: 사이즈=12px
    "prop2=12px": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Component5;
