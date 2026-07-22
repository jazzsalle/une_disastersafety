import { DotBadge } from '../actions/DotBadge.jsx';

// figma node: 200:4373 Datepicker (50 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "today=" + __venc(p.today) + '|' + "selected=" + __venc(p.selected) + '|' + "state=" + __venc(p.state) + '|' + "range=" + __venc(p.range);

export function Datepicker(_p = {}) {
  const props = { ..._p, badge: _p.badge ?? true, today: _p.today ?? false, text: _p.text ?? "1", selected: _p.selected ?? true, state: _p.state ?? "default", range: _p.range ?? "none" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "1000px 0px 0px 1000px",
      backgroundColor: "var(--color-interaction-primary-bg-medium-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "1000px 0px 0px 1000px",
      backgroundColor: "var(--color-interaction-primary-bg-medium-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "1000px 0px 0px 1000px",
      backgroundColor: "var(--color-interaction-primary-bg-medium-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "1000px 0px 0px 1000px",
      backgroundColor: "var(--color-interaction-primary-bg-strong-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      backgroundColor: "var(--color-interaction-primary-bg-muted-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      backgroundColor: "var(--color-interaction-primary-bg-muted-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      backgroundColor: "var(--color-interaction-primary-bg-muted-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      backgroundColor: "var(--color-interaction-primary-bg-strong-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "0px 1000px 1000px 0px",
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "0px 1000px 1000px 0px",
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "0px 1000px 1000px 0px",
      backgroundColor: "var(--color-interaction-primary-bg-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "0px 1000px 1000px 0px",
      backgroundColor: "var(--color-interaction-primary-bg-strong-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-strong-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-primary-text-disabled)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-basic)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-interaction-secondary-text-disabled)",
        flexShrink: 0,
      }}>{props.text}</span>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-on-brand)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "1000px 0px 0px 1000px",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-mideum-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-medium-default)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-on-brand)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "1000px 0px 0px 1000px",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-mideum-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-medium-hover)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-on-brand)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "1000px 0px 0px 1000px",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-mideum-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-medium-active)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-on-brand)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "1000px 0px 0px 1000px",
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-mideum-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-medium-default)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-on-brand)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "1000px 0px 0px 1000px",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-strong-disabled)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-disabled)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "0px 1000px 1000px 0px",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-bg-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-on-brand)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "0px 1000px 1000px 0px",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-bg-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-hover)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-on-brand)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "0px 1000px 1000px 0px",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-bg-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-active)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-on-brand)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "0px 1000px 1000px 0px",
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-bg-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-on-brand)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: "0px 1000px 1000px 0px",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-strong-disabled)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-disabled)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-subtle-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        backgroundColor: "var(--color-interaction-primary-bg-muted-default)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-subtle-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        backgroundColor: "var(--color-interaction-primary-bg-muted-hover)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-subtle-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        backgroundColor: "var(--color-interaction-primary-bg-muted-active)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-subtle-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        backgroundColor: "var(--color-interaction-primary-bg-muted-default)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-basic)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        backgroundColor: "var(--color-interaction-primary-bg-strong-disabled)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-disabled)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-strong-disabled)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-interaction-primary-text-disabled)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-hover)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-on-brand)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: 32,
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: 16,
        backgroundColor: "var(--color-interaction-primary-bg-active)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-on-brand)",
          flexShrink: 0,
        }}>{props.text}</span>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 15,
          top: 26,
          width: 2,
          height: 2,
        }}>{props.icon1 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: today=false, selected=false, range=none, state=default
    "today=false|selected=false|state=default|range=none": __body0,
    // figma: today=false, selected=false, range=none, state=focus-visible
    "today=false|selected=false|state=focus-visible|range=none": __body1,
    // figma: today=false, selected=false, range=none, state=hover
    "today=false|selected=false|state=hover|range=none": __body2,
    // figma: today=false, selected=false, range=none, state=active
    "today=false|selected=false|state=active|range=none": __body3,
    // figma: today=false, selected=true, range=none, state=default
    "today=false|selected=true|state=default|range=none": __body4,
    // figma: today=false, selected=true, range=start, state=default
    "today=false|selected=true|state=default|range=start": __body5,
    // figma: today=false, selected=true, range=start, state=hover
    "today=false|selected=true|state=hover|range=start": __body6,
    // figma: today=false, selected=true, range=start, state=active
    "today=false|selected=true|state=active|range=start": __body7,
    // figma: today=false, selected=true, range=start, state=focus-visible
    "today=false|selected=true|state=focus-visible|range=start": __body5,
    // figma: today=false, selected=true, range=start, state=disabled
    "today=false|selected=true|state=disabled|range=start": __body8,
    // figma: today=false, selected=false, range=middle, state=default
    "today=false|selected=false|state=default|range=middle": __body9,
    // figma: today=false, selected=false, range=middle, state=hover
    "today=false|selected=false|state=hover|range=middle": __body10,
    // figma: today=false, selected=false, range=middle, state=active
    "today=false|selected=false|state=active|range=middle": __body11,
    // figma: today=false, selected=false, range=middle, state=focus-visible
    "today=false|selected=false|state=focus-visible|range=middle": __body9,
    // figma: today=false, selected=false, range=middle, state=disabled
    "today=false|selected=false|state=disabled|range=middle": __body12,
    // figma: today=false, selected=true, range=end, state=default
    "today=false|selected=true|state=default|range=end": __body13,
    // figma: today=false, selected=true, range=end, state=hover
    "today=false|selected=true|state=hover|range=end": __body14,
    // figma: today=false, selected=true, range=end, state=active
    "today=false|selected=true|state=active|range=end": __body15,
    // figma: today=false, selected=true, range=end, state=focus-visible
    "today=false|selected=true|state=focus-visible|range=end": __body13,
    // figma: today=false, selected=true, range=end, state=disabled
    "today=false|selected=true|state=disabled|range=end": __body16,
    // figma: today=false, selected=true, range=none, state=disabled
    "today=false|selected=true|state=disabled|range=none": __body17,
    // figma: today=false, selected=true, range=none, state=focus-visible
    "today=false|selected=true|state=focus-visible|range=none": __body18,
    // figma: today=false, selected=true, range=none, state=hover
    "today=false|selected=true|state=hover|range=none": __body19,
    // figma: today=false, selected=true, range=none, state=active
    "today=false|selected=true|state=active|range=none": __body20,
    // figma: today=false, selected=false, range=none, state=disabled
    "today=false|selected=false|state=disabled|range=none": __body21,
    // figma: today=true, selected=false, range=none, state=default
    "today=true|selected=false|state=default|range=none": __body22,
    // figma: today=true, selected=false, range=none, state=focus-visible
    "today=true|selected=false|state=focus-visible|range=none": __body23,
    // figma: today=true, selected=false, range=none, state=disabled
    "today=true|selected=false|state=disabled|range=none": __body24,
    // figma: today=true, selected=false, range=none, state=hover
    "today=true|selected=false|state=hover|range=none": __body25,
    // figma: today=true, selected=false, range=none, state=active
    "today=true|selected=false|state=active|range=none": __body26,
    // figma: today=true, selected=true, range=none, state=focus-visible
    "today=true|selected=true|state=focus-visible|range=none": __body27,
    // figma: today=true, selected=true, range=none, state=default
    "today=true|selected=true|state=default|range=none": __body28,
    // figma: today=true, selected=true, range=start, state=default
    "today=true|selected=true|state=default|range=start": __body29,
    // figma: today=true, selected=true, range=start, state=hover
    "today=true|selected=true|state=hover|range=start": __body30,
    // figma: today=true, selected=true, range=start, state=active
    "today=true|selected=true|state=active|range=start": __body31,
    // figma: today=true, selected=true, range=start, state=focus-visible
    "today=true|selected=true|state=focus-visible|range=start": __body32,
    // figma: today=true, selected=true, range=start, state=disabled
    "today=true|selected=true|state=disabled|range=start": __body33,
    // figma: today=true, selected=true, range=end, state=default
    "today=true|selected=true|state=default|range=end": __body34,
    // figma: today=true, selected=true, range=end, state=hover
    "today=true|selected=true|state=hover|range=end": __body35,
    // figma: today=true, selected=true, range=end, state=active
    "today=true|selected=true|state=active|range=end": __body36,
    // figma: today=true, selected=true, range=end, state=focus-visible
    "today=true|selected=true|state=focus-visible|range=end": __body37,
    // figma: today=true, selected=true, range=end, state=disabled
    "today=true|selected=true|state=disabled|range=end": __body38,
    // figma: today=true, selected=false, range=middle, state=default
    "today=true|selected=false|state=default|range=middle": __body39,
    // figma: today=true, selected=false, range=middle, state=hover
    "today=true|selected=false|state=hover|range=middle": __body40,
    // figma: today=true, selected=false, range=middle, state=active
    "today=true|selected=false|state=active|range=middle": __body41,
    // figma: today=true, selected=false, range=middle, state=focus-visible
    "today=true|selected=false|state=focus-visible|range=middle": __body42,
    // figma: today=true, selected=false, range=middle, state=disabled
    "today=true|selected=false|state=disabled|range=middle": __body43,
    // figma: today=true, selected=true, range=none, state=disabled
    "today=true|selected=true|state=disabled|range=none": __body44,
    // figma: today=true, selected=true, range=none, state=hover
    "today=true|selected=true|state=hover|range=none": __body45,
    // figma: today=true, selected=true, range=none, state=active
    "today=true|selected=true|state=active|range=none": __body46,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default Datepicker;
