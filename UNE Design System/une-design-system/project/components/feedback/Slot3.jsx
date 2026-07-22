import { Light } from '../../assets/illustrations/Light.jsx';

// figma node: 2517:3263 Slot (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function Slot3(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "image" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-3xl) * 1px)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 32,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={26.667} height={26.667} viewBox="0 0 26.667 26.667" fill="none" style={{
            position: "absolute",
            left: 2.667,
            top: 2.667,
            width: 26.667,
            height: 26.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 13.333 20 C 13.711 20 14.028 19.872 14.284 19.616 C 14.539 19.361 14.667 19.044 14.667 18.667 L 14.667 13.3 C 14.667 12.922 14.539 12.611 14.284 12.367 C 14.028 12.122 13.711 12 13.333 12 C 12.956 12 12.639 12.128 12.384 12.383 C 12.128 12.639 12 12.956 12 13.333 L 12 18.7 C 12 19.078 12.128 19.389 12.384 19.633 C 12.639 19.878 12.956 20 13.333 20 Z M 13.333 9.333 C 13.711 9.333 14.028 9.205 14.284 8.949 C 14.539 8.694 14.667 8.378 14.667 8 C 14.667 7.622 14.539 7.305 14.284 7.049 C 14.028 6.794 13.711 6.667 13.333 6.667 C 12.956 6.667 12.639 6.794 12.384 7.049 C 12.128 7.305 12 7.622 12 8 C 12 8.378 12.128 8.694 12.384 8.949 C 12.639 9.205 12.956 9.333 13.333 9.333 Z M 13.333 26.667 C 11.489 26.667 9.756 26.316 8.133 25.616 C 6.511 24.916 5.1 23.967 3.9 22.767 C 2.7 21.567 1.75 20.156 1.051 18.533 C 0.35 16.911 0 15.178 0 13.333 C 0 11.489 0.35 9.756 1.051 8.133 C 1.75 6.511 2.7 5.1 3.9 3.9 C 5.1 2.7 6.511 1.75 8.133 1.049 C 9.756 0.35 11.489 0 13.333 0 C 15.178 0 16.911 0.35 18.533 1.049 C 20.156 1.75 21.567 2.7 22.767 3.9 C 23.967 5.1 24.916 6.511 25.616 8.133 C 26.316 9.756 26.667 11.489 26.667 13.333 C 26.667 15.178 26.316 16.911 25.616 18.533 C 24.916 20.156 23.967 21.567 22.767 22.767 C 21.567 23.967 20.156 24.916 18.533 25.616 C 16.911 26.316 15.178 26.667 13.333 26.667 Z M 13.333 24 C 16.289 24 18.806 22.961 20.884 20.884 C 22.961 18.806 24 16.289 24 13.333 C 24 10.378 22.961 7.861 20.884 5.783 C 18.806 3.705 16.289 2.667 13.333 2.667 C 10.378 2.667 7.861 3.705 5.784 5.783 C 3.706 7.861 2.667 10.378 2.667 13.333 C 2.667 16.289 3.706 18.806 5.784 20.884 C 7.861 22.961 10.378 24 13.333 24 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-4) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Light style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          width: "auto",
          height: "auto",
        }} />
    </div>
  );
  const __impls = {
    // figma: variant=icon
    "variant=icon": __body0,
    // figma: variant=image
    "variant=image": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Slot3;
