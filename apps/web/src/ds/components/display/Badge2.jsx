// figma node: 2342:10794 Badge (300 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "shape=" + __venc(p.shape) + '|' + "size=" + __venc(p.size) + '|' + "color=" + __venc(p.color);

export function Badge2(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Badge", variant: _p.variant ?? "solid", leftIcon: _p.leftIcon ?? true, shape: _p.shape ?? "round-square", size: _p.size ?? "xl", color: _p.color ?? "primary" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-brand-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={12.190} height={13.333} viewBox="0 0 12.190 13.333" fill="none" style={{
            position: "absolute",
            left: 1.905,
            top: 1.333,
            width: 12.19,
            height: 13.333,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15.238} height={16.667} viewBox="0 0 15.238 16.667" fill="none" style={{
            position: "absolute",
            left: 2.381,
            top: 1.667,
            width: 15.238,
            height: 16.667,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body91 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body96 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body97 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body98 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body99 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body100 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body101 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-secondary-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body102 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body103 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body104 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body105 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body106 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body107 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body108 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body109 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body110 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body111 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body112 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-border-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body113 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body114 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body115 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body116 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body117 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body118 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-border-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body119 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body120 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body121 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body122 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body123 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body124 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body125 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body126 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body127 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body128 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body129 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body130 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-border-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body131 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body132 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-gray-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body133 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-gray-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body134 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-gray-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body135 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-gray-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body136 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-border-gray-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body137 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-gray-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body138 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body139 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body140 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body141 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body142 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body143 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body144 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body145 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body146 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body147 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body148 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body149 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body150 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body151 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body152 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body153 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body154 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body155 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body156 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body157 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body158 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-gray-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body159 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-gray-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body160 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-border-gray-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body161 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      boxShadow: "inset 0 0 0 1px var(--color-border-gray-2)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body162 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-brand-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body163 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body164 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-brand-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body165 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body166 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-brand-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body167 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body168 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-success-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body169 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-success-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body170 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-success-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body171 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-success-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body172 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-success-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body173 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-success-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body174 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-error-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body175 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-error-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body176 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-error-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body177 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-error-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body178 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-error-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body179 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-error-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body180 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body181 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body182 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body183 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body184 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body185 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body186 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-light-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body187 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-light-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body188 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-light-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body189 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-light-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body190 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-light-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body191 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-light-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body192 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-gray-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body193 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-gray-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body194 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-gray-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body195 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-gray-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body196 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-gray-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body197 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-gray-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body198 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-brand-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body199 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body200 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-success-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body201 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-success-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body202 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-success-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body203 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-success-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-success)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-success)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body204 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-error-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body205 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-error-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body206 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-error-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body207 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-error-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-error)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-error)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body208 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body209 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body210 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body211 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body212 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-light-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body213 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-light-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body214 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-light-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body215 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-light-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-light-warning)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-light-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body216 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-gray-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body217 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-gray-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body218 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-gray-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body219 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-gray-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-tertiary)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-tertiary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body220 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body221 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body222 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body223 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body224 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body225 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body226 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body227 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body228 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body229 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body230 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body231 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body232 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body233 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body234 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body235 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body236 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body237 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body238 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body239 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body240 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body241 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body242 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body243 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body244 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body245 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body246 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body247 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body248 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body249 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body250 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-gray)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body251 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-gray)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body252 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-gray)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body253 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-gray)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body254 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-gray)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body255 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-sm) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-gray)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body256 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body257 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body258 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body259 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-brand)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body260 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body261 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body262 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body263 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-success)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body264 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body265 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body266 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body267 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-error)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body268 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body269 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body270 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body271 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body272 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body273 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body274 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body275 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-light-warning)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body276 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-gray)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body277 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-gray)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body278 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 4,
      backgroundColor: "var(--color-surface-gray)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body279 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      borderRadius: 1000,
      backgroundColor: "var(--color-surface-gray)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-2xs) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-sm) * 1px)",
        height: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "var(--color-icon-on-brand)",
          }} />
        </div>
      </div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-on-brand)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: variant=soild-pastel, shape=round-square, color=primary, size=xs(20)
    "variant=soild-pastel|shape=round-square|size=xs|color=primary": __body0,
    // figma: variant=soild-pastel, shape=cylinder, color=primary, size=xs(20)
    "variant=soild-pastel|shape=cylinder|size=xs|color=primary": __body1,
    // figma: variant=Dot-accent, shape=round-square, color=primary, size=md(28)
    "variant=dot-accent|shape=round-square|size=md|color=primary": __body2,
    // figma: variant=Dot-accent, shape=cylinder, color=primary, size=md(28)
    "variant=dot-accent|shape=cylinder|size=md|color=primary": __body3,
    // figma: variant=Dot-netural, shape=round-square, color=primary, size=md(28)
    "variant=dot-netural|shape=round-square|size=md|color=primary": __body4,
    // figma: variant=Dot-netural, shape=cylinder, color=primary, size=md(28)
    "variant=dot-netural|shape=cylinder|size=md|color=primary": __body5,
    // figma: variant=Dot-accent, shape=round-square, color=primary, size=lg(32)
    "variant=dot-accent|shape=round-square|size=lg|color=primary": __body6,
    // figma: variant=Dot-accent, shape=cylinder, color=primary, size=lg(32)
    "variant=dot-accent|shape=cylinder|size=lg|color=primary": __body7,
    // figma: variant=Dot-netural, shape=round-square, color=primary, size=lg(32)
    "variant=dot-netural|shape=round-square|size=lg|color=primary": __body8,
    // figma: variant=Dot-netural, shape=cylinder, color=primary, size=lg(32)
    "variant=dot-netural|shape=cylinder|size=lg|color=primary": __body9,
    // figma: variant=Dot-accent, shape=round-square, color=primary, size=xl(36)
    "variant=dot-accent|shape=round-square|size=xl|color=primary": __body10,
    // figma: variant=Dot-accent, shape=cylinder, color=primary, size=xl(36)
    "variant=dot-accent|shape=cylinder|size=xl|color=primary": __body11,
    // figma: variant=Dot-netural, shape=round-square, color=primary, size=xl(36)
    "variant=dot-netural|shape=round-square|size=xl|color=primary": __body12,
    // figma: variant=Dot-netural, shape=cylinder, color=primary, size=xl(36)
    "variant=dot-netural|shape=cylinder|size=xl|color=primary": __body13,
    // figma: variant=Dot-accent, shape=round-square, color=success, size=md(28)
    "variant=dot-accent|shape=round-square|size=md|color=success": __body14,
    // figma: variant=Dot-accent, shape=cylinder, color=success, size=md(28)
    "variant=dot-accent|shape=cylinder|size=md|color=success": __body15,
    // figma: variant=Dot-netural, shape=round-square, color=success, size=md(28)
    "variant=dot-netural|shape=round-square|size=md|color=success": __body4,
    // figma: variant=Dot-netural, shape=cylinder, color=success, size=md(28)
    "variant=dot-netural|shape=cylinder|size=md|color=success": __body5,
    // figma: variant=Dot-accent, shape=round-square, color=success, size=lg(32)
    "variant=dot-accent|shape=round-square|size=lg|color=success": __body16,
    // figma: variant=Dot-accent, shape=cylinder, color=success, size=lg(32)
    "variant=dot-accent|shape=cylinder|size=lg|color=success": __body17,
    // figma: variant=Dot-netural, shape=round-square, color=success, size=lg(32)
    "variant=dot-netural|shape=round-square|size=lg|color=success": __body18,
    // figma: variant=Dot-netural, shape=cylinder, color=success, size=lg(32)
    "variant=dot-netural|shape=cylinder|size=lg|color=success": __body19,
    // figma: variant=Dot-accent, shape=round-square, color=success, size=xl(36)
    "variant=dot-accent|shape=round-square|size=xl|color=success": __body20,
    // figma: variant=Dot-accent, shape=cylinder, color=success, size=xl(36)
    "variant=dot-accent|shape=cylinder|size=xl|color=success": __body21,
    // figma: variant=Dot-netural, shape=round-square, color=success, size=xl(36)
    "variant=dot-netural|shape=round-square|size=xl|color=success": __body12,
    // figma: variant=Dot-netural, shape=cylinder, color=success, size=xl(36)
    "variant=dot-netural|shape=cylinder|size=xl|color=success": __body13,
    // figma: variant=Dot-accent, shape=round-square, color=error, size=md(28)
    "variant=dot-accent|shape=round-square|size=md|color=error": __body22,
    // figma: variant=Dot-accent, shape=cylinder, color=error, size=md(28)
    "variant=dot-accent|shape=cylinder|size=md|color=error": __body23,
    // figma: variant=Dot-netural, shape=round-square, color=error, size=md(28)
    "variant=dot-netural|shape=round-square|size=md|color=error": __body4,
    // figma: variant=Dot-netural, shape=cylinder, color=error, size=md(28)
    "variant=dot-netural|shape=cylinder|size=md|color=error": __body5,
    // figma: variant=Dot-accent, shape=round-square, color=error, size=lg(32)
    "variant=dot-accent|shape=round-square|size=lg|color=error": __body24,
    // figma: variant=Dot-accent, shape=cylinder, color=error, size=lg(32)
    "variant=dot-accent|shape=cylinder|size=lg|color=error": __body25,
    // figma: variant=Dot-netural, shape=round-square, color=error, size=lg(32)
    "variant=dot-netural|shape=round-square|size=lg|color=error": __body26,
    // figma: variant=Dot-netural, shape=cylinder, color=error, size=lg(32)
    "variant=dot-netural|shape=cylinder|size=lg|color=error": __body27,
    // figma: variant=Dot-accent, shape=round-square, color=error, size=xl(36)
    "variant=dot-accent|shape=round-square|size=xl|color=error": __body28,
    // figma: variant=Dot-accent, shape=cylinder, color=error, size=xl(36)
    "variant=dot-accent|shape=cylinder|size=xl|color=error": __body29,
    // figma: variant=Dot-netural, shape=round-square, color=error, size=xl(36)
    "variant=dot-netural|shape=round-square|size=xl|color=error": __body12,
    // figma: variant=Dot-netural, shape=cylinder, color=error, size=xl(36)
    "variant=dot-netural|shape=cylinder|size=xl|color=error": __body13,
    // figma: variant=Dot-accent, shape=round-square, color=warning, size=md(28)
    "variant=dot-accent|shape=round-square|size=md|color=warning": __body30,
    // figma: variant=Dot-accent, shape=cylinder, color=warning, size=md(28)
    "variant=dot-accent|shape=cylinder|size=md|color=warning": __body31,
    // figma: variant=Dot-netural, shape=round-square, color=warning, size=md(28)
    "variant=dot-netural|shape=round-square|size=md|color=warning": __body4,
    // figma: variant=Dot-netural, shape=cylinder, color=warning, size=md(28)
    "variant=dot-netural|shape=cylinder|size=md|color=warning": __body5,
    // figma: variant=Dot-accent, shape=round-square, color=warning, size=lg(32)
    "variant=dot-accent|shape=round-square|size=lg|color=warning": __body32,
    // figma: variant=Dot-accent, shape=cylinder, color=warning, size=lg(32)
    "variant=dot-accent|shape=cylinder|size=lg|color=warning": __body33,
    // figma: variant=Dot-netural, shape=round-square, color=warning, size=lg(32)
    "variant=dot-netural|shape=round-square|size=lg|color=warning": __body34,
    // figma: variant=Dot-netural, shape=cylinder, color=warning, size=lg(32)
    "variant=dot-netural|shape=cylinder|size=lg|color=warning": __body35,
    // figma: variant=Dot-accent, shape=round-square, color=warning, size=xl(36)
    "variant=dot-accent|shape=round-square|size=xl|color=warning": __body36,
    // figma: variant=Dot-accent, shape=cylinder, color=warning, size=xl(36)
    "variant=dot-accent|shape=cylinder|size=xl|color=warning": __body37,
    // figma: variant=Dot-netural, shape=round-square, color=warning, size=xl(36)
    "variant=dot-netural|shape=round-square|size=xl|color=warning": __body12,
    // figma: variant=Dot-netural, shape=cylinder, color=warning, size=xl(36)
    "variant=dot-netural|shape=cylinder|size=xl|color=warning": __body13,
    // figma: variant=Dot-accent, shape=round-square, color=light-warning, size=md(28)
    "variant=dot-accent|shape=round-square|size=md|color=light-warning": __body38,
    // figma: variant=Dot-accent, shape=cylinder, color=light-warning, size=md(28)
    "variant=dot-accent|shape=cylinder|size=md|color=light-warning": __body39,
    // figma: variant=Dot-netural, shape=round-square, color=light-warning, size=md(28)
    "variant=dot-netural|shape=round-square|size=md|color=light-warning": __body4,
    // figma: variant=Dot-netural, shape=cylinder, color=light-warning, size=md(28)
    "variant=dot-netural|shape=cylinder|size=md|color=light-warning": __body5,
    // figma: variant=Dot-accent, shape=round-square, color=light-warning, size=lg(32)
    "variant=dot-accent|shape=round-square|size=lg|color=light-warning": __body40,
    // figma: variant=Dot-accent, shape=cylinder, color=light-warning, size=lg(32)
    "variant=dot-accent|shape=cylinder|size=lg|color=light-warning": __body41,
    // figma: variant=Dot-netural, shape=round-square, color=light-warning, size=lg(32)
    "variant=dot-netural|shape=round-square|size=lg|color=light-warning": __body42,
    // figma: variant=Dot-netural, shape=cylinder, color=light-warning, size=lg(32)
    "variant=dot-netural|shape=cylinder|size=lg|color=light-warning": __body43,
    // figma: variant=Dot-accent, shape=round-square, color=light-warning, size=xl(36)
    "variant=dot-accent|shape=round-square|size=xl|color=light-warning": __body44,
    // figma: variant=Dot-accent, shape=cylinder, color=light-warning, size=xl(36)
    "variant=dot-accent|shape=cylinder|size=xl|color=light-warning": __body45,
    // figma: variant=Dot-netural, shape=round-square, color=light-warning, size=xl(36)
    "variant=dot-netural|shape=round-square|size=xl|color=light-warning": __body12,
    // figma: variant=Dot-netural, shape=cylinder, color=light-warning, size=xl(36)
    "variant=dot-netural|shape=cylinder|size=xl|color=light-warning": __body13,
    // figma: variant=Dot-accent, shape=round-square, color=grayscale, size=md(28)
    "variant=dot-accent|shape=round-square|size=md|color=grayscale": __body46,
    // figma: variant=Dot-accent, shape=cylinder, color=grayscale, size=md(28)
    "variant=dot-accent|shape=cylinder|size=md|color=grayscale": __body47,
    // figma: variant=Dot-netural, shape=round-square, color=grayscale, size=md(28)
    "variant=dot-netural|shape=round-square|size=md|color=grayscale": __body4,
    // figma: variant=Dot-netural, shape=cylinder, color=grayscale, size=md(28)
    "variant=dot-netural|shape=cylinder|size=md|color=grayscale": __body5,
    // figma: variant=Dot-accent, shape=round-square, color=grayscale, size=lg(32)
    "variant=dot-accent|shape=round-square|size=lg|color=grayscale": __body48,
    // figma: variant=Dot-accent, shape=cylinder, color=grayscale, size=lg(32)
    "variant=dot-accent|shape=cylinder|size=lg|color=grayscale": __body49,
    // figma: variant=Dot-netural, shape=round-square, color=grayscale, size=lg(32)
    "variant=dot-netural|shape=round-square|size=lg|color=grayscale": __body50,
    // figma: variant=Dot-netural, shape=cylinder, color=grayscale, size=lg(32)
    "variant=dot-netural|shape=cylinder|size=lg|color=grayscale": __body51,
    // figma: variant=Dot-accent, shape=round-square, color=grayscale, size=xl(36)
    "variant=dot-accent|shape=round-square|size=xl|color=grayscale": __body52,
    // figma: variant=Dot-accent, shape=cylinder, color=grayscale, size=xl(36)
    "variant=dot-accent|shape=cylinder|size=xl|color=grayscale": __body53,
    // figma: variant=Dot-netural, shape=round-square, color=grayscale, size=xl(36)
    "variant=dot-netural|shape=round-square|size=xl|color=grayscale": __body12,
    // figma: variant=Dot-netural, shape=cylinder, color=grayscale, size=xl(36)
    "variant=dot-netural|shape=cylinder|size=xl|color=grayscale": __body13,
    // figma: variant=Dot-accent, shape=round-square, color=primary, size=sm(24)
    "variant=dot-accent|shape=round-square|size=sm|color=primary": __body54,
    // figma: variant=Dot-accent, shape=cylinder, color=primary, size=sm(24)
    "variant=dot-accent|shape=cylinder|size=sm|color=primary": __body55,
    // figma: variant=Dot-netural, shape=round-square, color=primary, size=sm(24)
    "variant=dot-netural|shape=round-square|size=sm|color=primary": __body56,
    // figma: variant=Dot-netural, shape=cylinder, color=primary, size=sm(24)
    "variant=dot-netural|shape=cylinder|size=sm|color=primary": __body57,
    // figma: variant=Dot-accent, shape=round-square, color=primary, size=xs(20)
    "variant=dot-accent|shape=round-square|size=xs|color=primary": __body58,
    // figma: variant=Dot-accent, shape=cylinder, color=primary, size=xs(20)
    "variant=dot-accent|shape=cylinder|size=xs|color=primary": __body59,
    // figma: variant=Dot-netural, shape=round-square, color=primary, size=xs(20)
    "variant=dot-netural|shape=round-square|size=xs|color=primary": __body60,
    // figma: variant=Dot-netural, shape=cylinder, color=primary, size=xs(20)
    "variant=dot-netural|shape=cylinder|size=xs|color=primary": __body61,
    // figma: variant=Dot-accent, shape=round-square, color=success, size=sm(24)
    "variant=dot-accent|shape=round-square|size=sm|color=success": __body62,
    // figma: variant=Dot-accent, shape=cylinder, color=success, size=sm(24)
    "variant=dot-accent|shape=cylinder|size=sm|color=success": __body63,
    // figma: variant=Dot-netural, shape=round-square, color=success, size=sm(24)
    "variant=dot-netural|shape=round-square|size=sm|color=success": __body64,
    // figma: variant=Dot-netural, shape=cylinder, color=success, size=sm(24)
    "variant=dot-netural|shape=cylinder|size=sm|color=success": __body65,
    // figma: variant=Dot-accent, shape=round-square, color=success, size=xs(20)
    "variant=dot-accent|shape=round-square|size=xs|color=success": __body66,
    // figma: variant=Dot-accent, shape=cylinder, color=success, size=xs(20)
    "variant=dot-accent|shape=cylinder|size=xs|color=success": __body67,
    // figma: variant=Dot-netural, shape=round-square, color=success, size=xs(20)
    "variant=dot-netural|shape=round-square|size=xs|color=success": __body68,
    // figma: variant=Dot-netural, shape=cylinder, color=success, size=xs(20)
    "variant=dot-netural|shape=cylinder|size=xs|color=success": __body69,
    // figma: variant=Dot-accent, shape=round-square, color=error, size=sm(24)
    "variant=dot-accent|shape=round-square|size=sm|color=error": __body70,
    // figma: variant=Dot-accent, shape=cylinder, color=error, size=sm(24)
    "variant=dot-accent|shape=cylinder|size=sm|color=error": __body71,
    // figma: variant=Dot-netural, shape=round-square, color=error, size=sm(24)
    "variant=dot-netural|shape=round-square|size=sm|color=error": __body72,
    // figma: variant=Dot-netural, shape=cylinder, color=error, size=sm(24)
    "variant=dot-netural|shape=cylinder|size=sm|color=error": __body73,
    // figma: variant=Dot-accent, shape=round-square, color=error, size=xs(20)
    "variant=dot-accent|shape=round-square|size=xs|color=error": __body74,
    // figma: variant=Dot-accent, shape=cylinder, color=error, size=xs(20)
    "variant=dot-accent|shape=cylinder|size=xs|color=error": __body75,
    // figma: variant=Dot-netural, shape=round-square, color=error, size=xs(20)
    "variant=dot-netural|shape=round-square|size=xs|color=error": __body76,
    // figma: variant=Dot-netural, shape=cylinder, color=error, size=xs(20)
    "variant=dot-netural|shape=cylinder|size=xs|color=error": __body77,
    // figma: variant=Dot-accent, shape=round-square, color=warning, size=sm(24)
    "variant=dot-accent|shape=round-square|size=sm|color=warning": __body78,
    // figma: variant=Dot-accent, shape=cylinder, color=warning, size=sm(24)
    "variant=dot-accent|shape=cylinder|size=sm|color=warning": __body79,
    // figma: variant=Dot-netural, shape=round-square, color=warning, size=sm(24)
    "variant=dot-netural|shape=round-square|size=sm|color=warning": __body80,
    // figma: variant=Dot-netural, shape=cylinder, color=warning, size=sm(24)
    "variant=dot-netural|shape=cylinder|size=sm|color=warning": __body81,
    // figma: variant=Dot-accent, shape=round-square, color=warning, size=xs(20)
    "variant=dot-accent|shape=round-square|size=xs|color=warning": __body82,
    // figma: variant=Dot-accent, shape=cylinder, color=warning, size=xs(20)
    "variant=dot-accent|shape=cylinder|size=xs|color=warning": __body83,
    // figma: variant=Dot-netural, shape=round-square, color=warning, size=xs(20)
    "variant=dot-netural|shape=round-square|size=xs|color=warning": __body84,
    // figma: variant=Dot-netural, shape=cylinder, color=warning, size=xs(20)
    "variant=dot-netural|shape=cylinder|size=xs|color=warning": __body85,
    // figma: variant=Dot-accent, shape=round-square, color=light-warning, size=sm(24)
    "variant=dot-accent|shape=round-square|size=sm|color=light-warning": __body86,
    // figma: variant=Dot-accent, shape=cylinder, color=light-warning, size=sm(24)
    "variant=dot-accent|shape=cylinder|size=sm|color=light-warning": __body87,
    // figma: variant=Dot-netural, shape=round-square, color=light-warning, size=sm(24)
    "variant=dot-netural|shape=round-square|size=sm|color=light-warning": __body88,
    // figma: variant=Dot-netural, shape=cylinder, color=light-warning, size=sm(24)
    "variant=dot-netural|shape=cylinder|size=sm|color=light-warning": __body89,
    // figma: variant=Dot-accent, shape=round-square, color=light-warning, size=xs(20)
    "variant=dot-accent|shape=round-square|size=xs|color=light-warning": __body90,
    // figma: variant=Dot-accent, shape=cylinder, color=light-warning, size=xs(20)
    "variant=dot-accent|shape=cylinder|size=xs|color=light-warning": __body91,
    // figma: variant=Dot-netural, shape=round-square, color=light-warning, size=xs(20)
    "variant=dot-netural|shape=round-square|size=xs|color=light-warning": __body92,
    // figma: variant=Dot-netural, shape=cylinder, color=light-warning, size=xs(20)
    "variant=dot-netural|shape=cylinder|size=xs|color=light-warning": __body93,
    // figma: variant=Dot-accent, shape=round-square, color=grayscale, size=sm(24)
    "variant=dot-accent|shape=round-square|size=sm|color=grayscale": __body94,
    // figma: variant=Dot-accent, shape=cylinder, color=grayscale, size=sm(24)
    "variant=dot-accent|shape=cylinder|size=sm|color=grayscale": __body95,
    // figma: variant=Dot-netural, shape=round-square, color=grayscale, size=sm(24)
    "variant=dot-netural|shape=round-square|size=sm|color=grayscale": __body96,
    // figma: variant=Dot-netural, shape=cylinder, color=grayscale, size=sm(24)
    "variant=dot-netural|shape=cylinder|size=sm|color=grayscale": __body97,
    // figma: variant=Dot-accent, shape=round-square, color=grayscale, size=xs(20)
    "variant=dot-accent|shape=round-square|size=xs|color=grayscale": __body98,
    // figma: variant=Dot-accent, shape=cylinder, color=grayscale, size=xs(20)
    "variant=dot-accent|shape=cylinder|size=xs|color=grayscale": __body99,
    // figma: variant=Dot-netural, shape=round-square, color=grayscale, size=xs(20)
    "variant=dot-netural|shape=round-square|size=xs|color=grayscale": __body100,
    // figma: variant=Dot-netural, shape=cylinder, color=grayscale, size=xs(20)
    "variant=dot-netural|shape=cylinder|size=xs|color=grayscale": __body101,
    // figma: variant=outline, shape=round-square, color=primary, size=md(28)
    "variant=outline|shape=round-square|size=md|color=primary": __body102,
    // figma: variant=outline, shape=cylinder, color=primary, size=md(28)
    "variant=outline|shape=cylinder|size=md|color=primary": __body103,
    // figma: variant=outline, shape=round-square, color=primary, size=lg(32)
    "variant=outline|shape=round-square|size=lg|color=primary": __body104,
    // figma: variant=outline, shape=cylinder, color=primary, size=lg(32)
    "variant=outline|shape=cylinder|size=lg|color=primary": __body105,
    // figma: variant=outline, shape=round-square, color=primary, size=xl(36)
    "variant=outline|shape=round-square|size=xl|color=primary": __body106,
    // figma: variant=outline, shape=cylinder, color=primary, size=xl(36)
    "variant=outline|shape=cylinder|size=xl|color=primary": __body107,
    // figma: variant=outline, shape=round-square, color=success, size=md(28)
    "variant=outline|shape=round-square|size=md|color=success": __body108,
    // figma: variant=outline, shape=cylinder, color=success, size=md(28)
    "variant=outline|shape=cylinder|size=md|color=success": __body109,
    // figma: variant=outline, shape=round-square, color=success, size=lg(32)
    "variant=outline|shape=round-square|size=lg|color=success": __body110,
    // figma: variant=outline, shape=cylinder, color=success, size=lg(32)
    "variant=outline|shape=cylinder|size=lg|color=success": __body111,
    // figma: variant=outline, shape=round-square, color=success, size=xl(36)
    "variant=outline|shape=round-square|size=xl|color=success": __body112,
    // figma: variant=outline, shape=cylinder, color=success, size=xl(36)
    "variant=outline|shape=cylinder|size=xl|color=success": __body113,
    // figma: variant=outline, shape=round-square, color=error, size=md(28)
    "variant=outline|shape=round-square|size=md|color=error": __body114,
    // figma: variant=outline, shape=cylinder, color=error, size=md(28)
    "variant=outline|shape=cylinder|size=md|color=error": __body115,
    // figma: variant=outline, shape=round-square, color=error, size=lg(32)
    "variant=outline|shape=round-square|size=lg|color=error": __body116,
    // figma: variant=outline, shape=cylinder, color=error, size=lg(32)
    "variant=outline|shape=cylinder|size=lg|color=error": __body117,
    // figma: variant=outline, shape=round-square, color=error, size=xl(36)
    "variant=outline|shape=round-square|size=xl|color=error": __body118,
    // figma: variant=outline, shape=cylinder, color=error, size=xl(36)
    "variant=outline|shape=cylinder|size=xl|color=error": __body119,
    // figma: variant=outline, shape=round-square, color=warning, size=md(28)
    "variant=outline|shape=round-square|size=md|color=warning": __body120,
    // figma: variant=outline, shape=cylinder, color=warning, size=md(28)
    "variant=outline|shape=cylinder|size=md|color=warning": __body121,
    // figma: variant=outline, shape=round-square, color=warning, size=lg(32)
    "variant=outline|shape=round-square|size=lg|color=warning": __body122,
    // figma: variant=outline, shape=cylinder, color=warning, size=lg(32)
    "variant=outline|shape=cylinder|size=lg|color=warning": __body123,
    // figma: variant=outline, shape=round-square, color=warning, size=xl(36)
    "variant=outline|shape=round-square|size=xl|color=warning": __body124,
    // figma: variant=outline, shape=cylinder, color=warning, size=xl(36)
    "variant=outline|shape=cylinder|size=xl|color=warning": __body125,
    // figma: variant=outline, shape=round-square, color=light-warning, size=md(28)
    "variant=outline|shape=round-square|size=md|color=light-warning": __body126,
    // figma: variant=outline, shape=cylinder, color=light-warning, size=md(28)
    "variant=outline|shape=cylinder|size=md|color=light-warning": __body127,
    // figma: variant=outline, shape=round-square, color=light-warning, size=lg(32)
    "variant=outline|shape=round-square|size=lg|color=light-warning": __body128,
    // figma: variant=outline, shape=cylinder, color=light-warning, size=lg(32)
    "variant=outline|shape=cylinder|size=lg|color=light-warning": __body129,
    // figma: variant=outline, shape=round-square, color=light-warning, size=xl(36)
    "variant=outline|shape=round-square|size=xl|color=light-warning": __body130,
    // figma: variant=outline, shape=cylinder, color=light-warning, size=xl(36)
    "variant=outline|shape=cylinder|size=xl|color=light-warning": __body131,
    // figma: variant=outline, shape=round-square, color=grayscale, size=md(28)
    "variant=outline|shape=round-square|size=md|color=grayscale": __body132,
    // figma: variant=outline, shape=cylinder, color=grayscale, size=md(28)
    "variant=outline|shape=cylinder|size=md|color=grayscale": __body133,
    // figma: variant=outline, shape=round-square, color=grayscale, size=lg(32)
    "variant=outline|shape=round-square|size=lg|color=grayscale": __body134,
    // figma: variant=outline, shape=cylinder, color=grayscale, size=lg(32)
    "variant=outline|shape=cylinder|size=lg|color=grayscale": __body135,
    // figma: variant=outline, shape=round-square, color=grayscale, size=xl(36)
    "variant=outline|shape=round-square|size=xl|color=grayscale": __body136,
    // figma: variant=outline, shape=cylinder, color=grayscale, size=xl(36)
    "variant=outline|shape=cylinder|size=xl|color=grayscale": __body137,
    // figma: variant=outline, shape=round-square, color=primary, size=sm(24)
    "variant=outline|shape=round-square|size=sm|color=primary": __body138,
    // figma: variant=outline, shape=cylinder, color=primary, size=sm(24)
    "variant=outline|shape=cylinder|size=sm|color=primary": __body139,
    // figma: variant=outline, shape=round-square, color=primary, size=xs(20)
    "variant=outline|shape=round-square|size=xs|color=primary": __body140,
    // figma: variant=outline, shape=cylinder, color=primary, size=xs(20)
    "variant=outline|shape=cylinder|size=xs|color=primary": __body141,
    // figma: variant=outline, shape=round-square, color=success, size=sm(24)
    "variant=outline|shape=round-square|size=sm|color=success": __body142,
    // figma: variant=outline, shape=cylinder, color=success, size=sm(24)
    "variant=outline|shape=cylinder|size=sm|color=success": __body143,
    // figma: variant=outline, shape=round-square, color=success, size=xs(20)
    "variant=outline|shape=round-square|size=xs|color=success": __body144,
    // figma: variant=outline, shape=cylinder, color=success, size=xs(20)
    "variant=outline|shape=cylinder|size=xs|color=success": __body145,
    // figma: variant=outline, shape=round-square, color=error, size=sm(24)
    "variant=outline|shape=round-square|size=sm|color=error": __body146,
    // figma: variant=outline, shape=cylinder, color=error, size=sm(24)
    "variant=outline|shape=cylinder|size=sm|color=error": __body147,
    // figma: variant=outline, shape=round-square, color=error, size=xs(20)
    "variant=outline|shape=round-square|size=xs|color=error": __body148,
    // figma: variant=outline, shape=cylinder, color=error, size=xs(20)
    "variant=outline|shape=cylinder|size=xs|color=error": __body149,
    // figma: variant=outline, shape=round-square, color=warning, size=sm(24)
    "variant=outline|shape=round-square|size=sm|color=warning": __body150,
    // figma: variant=outline, shape=cylinder, color=warning, size=sm(24)
    "variant=outline|shape=cylinder|size=sm|color=warning": __body151,
    // figma: variant=outline, shape=round-square, color=warning, size=xs(20)
    "variant=outline|shape=round-square|size=xs|color=warning": __body152,
    // figma: variant=outline, shape=cylinder, color=warning, size=xs(20)
    "variant=outline|shape=cylinder|size=xs|color=warning": __body153,
    // figma: variant=outline, shape=round-square, color=light-warning, size=sm(24)
    "variant=outline|shape=round-square|size=sm|color=light-warning": __body154,
    // figma: variant=outline, shape=cylinder, color=light-warning, size=sm(24)
    "variant=outline|shape=cylinder|size=sm|color=light-warning": __body155,
    // figma: variant=outline, shape=round-square, color=light-warning, size=xs(20)
    "variant=outline|shape=round-square|size=xs|color=light-warning": __body156,
    // figma: variant=outline, shape=cylinder, color=light-warning, size=xs(20)
    "variant=outline|shape=cylinder|size=xs|color=light-warning": __body157,
    // figma: variant=outline, shape=round-square, color=grayscale, size=sm(24)
    "variant=outline|shape=round-square|size=sm|color=grayscale": __body158,
    // figma: variant=outline, shape=cylinder, color=grayscale, size=sm(24)
    "variant=outline|shape=cylinder|size=sm|color=grayscale": __body159,
    // figma: variant=outline, shape=round-square, color=grayscale, size=xs(20)
    "variant=outline|shape=round-square|size=xs|color=grayscale": __body160,
    // figma: variant=outline, shape=cylinder, color=grayscale, size=xs(20)
    "variant=outline|shape=cylinder|size=xs|color=grayscale": __body161,
    // figma: variant=soild-pastel, shape=round-square, color=primary, size=md(28)
    "variant=soild-pastel|shape=round-square|size=md|color=primary": __body162,
    // figma: variant=soild-pastel, shape=cylinder, color=primary, size=md(28)
    "variant=soild-pastel|shape=cylinder|size=md|color=primary": __body163,
    // figma: variant=soild-pastel, shape=round-square, color=primary, size=lg(32)
    "variant=soild-pastel|shape=round-square|size=lg|color=primary": __body164,
    // figma: variant=soild-pastel, shape=cylinder, color=primary, size=lg(32)
    "variant=soild-pastel|shape=cylinder|size=lg|color=primary": __body165,
    // figma: variant=soild-pastel, shape=round-square, color=primary, size=xl(36)
    "variant=soild-pastel|shape=round-square|size=xl|color=primary": __body166,
    // figma: variant=soild-pastel, shape=cylinder, color=primary, size=xl(36)
    "variant=soild-pastel|shape=cylinder|size=xl|color=primary": __body167,
    // figma: variant=soild-pastel, shape=round-square, color=success, size=md(28)
    "variant=soild-pastel|shape=round-square|size=md|color=success": __body168,
    // figma: variant=soild-pastel, shape=cylinder, color=success, size=md(28)
    "variant=soild-pastel|shape=cylinder|size=md|color=success": __body169,
    // figma: variant=soild-pastel, shape=round-square, color=success, size=lg(32)
    "variant=soild-pastel|shape=round-square|size=lg|color=success": __body170,
    // figma: variant=soild-pastel, shape=cylinder, color=success, size=lg(32)
    "variant=soild-pastel|shape=cylinder|size=lg|color=success": __body171,
    // figma: variant=soild-pastel, shape=round-square, color=success, size=xl(36)
    "variant=soild-pastel|shape=round-square|size=xl|color=success": __body172,
    // figma: variant=soild-pastel, shape=cylinder, color=success, size=xl(36)
    "variant=soild-pastel|shape=cylinder|size=xl|color=success": __body173,
    // figma: variant=soild-pastel, shape=round-square, color=error, size=md(28)
    "variant=soild-pastel|shape=round-square|size=md|color=error": __body174,
    // figma: variant=soild-pastel, shape=cylinder, color=error, size=md(28)
    "variant=soild-pastel|shape=cylinder|size=md|color=error": __body175,
    // figma: variant=soild-pastel, shape=round-square, color=error, size=lg(32)
    "variant=soild-pastel|shape=round-square|size=lg|color=error": __body176,
    // figma: variant=soild-pastel, shape=cylinder, color=error, size=lg(32)
    "variant=soild-pastel|shape=cylinder|size=lg|color=error": __body177,
    // figma: variant=soild-pastel, shape=round-square, color=error, size=xl(36)
    "variant=soild-pastel|shape=round-square|size=xl|color=error": __body178,
    // figma: variant=soild-pastel, shape=cylinder, color=error, size=xl(36)
    "variant=soild-pastel|shape=cylinder|size=xl|color=error": __body179,
    // figma: variant=soild-pastel, shape=round-square, color=warning, size=md(28)
    "variant=soild-pastel|shape=round-square|size=md|color=warning": __body180,
    // figma: variant=soild-pastel, shape=cylinder, color=warning, size=md(28)
    "variant=soild-pastel|shape=cylinder|size=md|color=warning": __body181,
    // figma: variant=soild-pastel, shape=round-square, color=warning, size=lg(32)
    "variant=soild-pastel|shape=round-square|size=lg|color=warning": __body182,
    // figma: variant=soild-pastel, shape=cylinder, color=warning, size=lg(32)
    "variant=soild-pastel|shape=cylinder|size=lg|color=warning": __body183,
    // figma: variant=soild-pastel, shape=round-square, color=warning, size=xl(36)
    "variant=soild-pastel|shape=round-square|size=xl|color=warning": __body184,
    // figma: variant=soild-pastel, shape=cylinder, color=warning, size=xl(36)
    "variant=soild-pastel|shape=cylinder|size=xl|color=warning": __body185,
    // figma: variant=soild-pastel, shape=round-square, color=light-warning, size=md(28)
    "variant=soild-pastel|shape=round-square|size=md|color=light-warning": __body186,
    // figma: variant=soild-pastel, shape=cylinder, color=light-warning, size=md(28)
    "variant=soild-pastel|shape=cylinder|size=md|color=light-warning": __body187,
    // figma: variant=soild-pastel, shape=round-square, color=light-warning, size=lg(32)
    "variant=soild-pastel|shape=round-square|size=lg|color=light-warning": __body188,
    // figma: variant=soild-pastel, shape=cylinder, color=light-warning, size=lg(32)
    "variant=soild-pastel|shape=cylinder|size=lg|color=light-warning": __body189,
    // figma: variant=soild-pastel, shape=round-square, color=light-warning, size=xl(36)
    "variant=soild-pastel|shape=round-square|size=xl|color=light-warning": __body190,
    // figma: variant=soild-pastel, shape=cylinder, color=light-warning, size=xl(36)
    "variant=soild-pastel|shape=cylinder|size=xl|color=light-warning": __body191,
    // figma: variant=soild-pastel, shape=round-square, color=grayscale, size=md(28)
    "variant=soild-pastel|shape=round-square|size=md|color=grayscale": __body192,
    // figma: variant=soild-pastel, shape=cylinder, color=grayscale, size=md(28)
    "variant=soild-pastel|shape=cylinder|size=md|color=grayscale": __body193,
    // figma: variant=soild-pastel, shape=round-square, color=grayscale, size=lg(32)
    "variant=soild-pastel|shape=round-square|size=lg|color=grayscale": __body194,
    // figma: variant=soild-pastel, shape=cylinder, color=grayscale, size=lg(32)
    "variant=soild-pastel|shape=cylinder|size=lg|color=grayscale": __body195,
    // figma: variant=soild-pastel, shape=round-square, color=grayscale, size=xl(36)
    "variant=soild-pastel|shape=round-square|size=xl|color=grayscale": __body196,
    // figma: variant=soild-pastel, shape=cylinder, color=grayscale, size=xl(36)
    "variant=soild-pastel|shape=cylinder|size=xl|color=grayscale": __body197,
    // figma: variant=soild-pastel, shape=round-square, color=primary, size=sm(24)
    "variant=soild-pastel|shape=round-square|size=sm|color=primary": __body198,
    // figma: variant=soild-pastel, shape=cylinder, color=primary, size=sm(24)
    "variant=soild-pastel|shape=cylinder|size=sm|color=primary": __body199,
    // figma: variant=soild-pastel, shape=round-square, color=success, size=sm(24)
    "variant=soild-pastel|shape=round-square|size=sm|color=success": __body200,
    // figma: variant=soild-pastel, shape=cylinder, color=success, size=sm(24)
    "variant=soild-pastel|shape=cylinder|size=sm|color=success": __body201,
    // figma: variant=soild-pastel, shape=round-square, color=success, size=xs(20)
    "variant=soild-pastel|shape=round-square|size=xs|color=success": __body202,
    // figma: variant=soild-pastel, shape=cylinder, color=success, size=xs(20)
    "variant=soild-pastel|shape=cylinder|size=xs|color=success": __body203,
    // figma: variant=soild-pastel, shape=round-square, color=error, size=sm(24)
    "variant=soild-pastel|shape=round-square|size=sm|color=error": __body204,
    // figma: variant=soild-pastel, shape=cylinder, color=error, size=sm(24)
    "variant=soild-pastel|shape=cylinder|size=sm|color=error": __body205,
    // figma: variant=soild-pastel, shape=round-square, color=error, size=xs(20)
    "variant=soild-pastel|shape=round-square|size=xs|color=error": __body206,
    // figma: variant=soild-pastel, shape=cylinder, color=error, size=xs(20)
    "variant=soild-pastel|shape=cylinder|size=xs|color=error": __body207,
    // figma: variant=soild-pastel, shape=round-square, color=warning, size=sm(24)
    "variant=soild-pastel|shape=round-square|size=sm|color=warning": __body208,
    // figma: variant=soild-pastel, shape=cylinder, color=warning, size=sm(24)
    "variant=soild-pastel|shape=cylinder|size=sm|color=warning": __body209,
    // figma: variant=soild-pastel, shape=round-square, color=warning, size=xs(20)
    "variant=soild-pastel|shape=round-square|size=xs|color=warning": __body210,
    // figma: variant=soild-pastel, shape=cylinder, color=warning, size=xs(20)
    "variant=soild-pastel|shape=cylinder|size=xs|color=warning": __body211,
    // figma: variant=soild-pastel, shape=round-square, color=light-warning, size=sm(24)
    "variant=soild-pastel|shape=round-square|size=sm|color=light-warning": __body212,
    // figma: variant=soild-pastel, shape=cylinder, color=light-warning, size=sm(24)
    "variant=soild-pastel|shape=cylinder|size=sm|color=light-warning": __body213,
    // figma: variant=soild-pastel, shape=round-square, color=light-warning, size=xs(20)
    "variant=soild-pastel|shape=round-square|size=xs|color=light-warning": __body214,
    // figma: variant=soild-pastel, shape=cylinder, color=light-warning, size=xs(20)
    "variant=soild-pastel|shape=cylinder|size=xs|color=light-warning": __body215,
    // figma: variant=soild-pastel, shape=round-square, color=grayscale, size=sm(24)
    "variant=soild-pastel|shape=round-square|size=sm|color=grayscale": __body216,
    // figma: variant=soild-pastel, shape=cylinder, color=grayscale, size=sm(24)
    "variant=soild-pastel|shape=cylinder|size=sm|color=grayscale": __body217,
    // figma: variant=soild-pastel, shape=round-square, color=grayscale, size=xs(20)
    "variant=soild-pastel|shape=round-square|size=xs|color=grayscale": __body218,
    // figma: variant=soild-pastel, shape=cylinder, color=grayscale, size=xs(20)
    "variant=soild-pastel|shape=cylinder|size=xs|color=grayscale": __body219,
    // figma: variant=solid, shape=round-square, color=primary, size=md(28)
    "variant=solid|shape=round-square|size=md|color=primary": __body220,
    // figma: variant=solid, shape=cylinder, color=primary, size=md(28)
    "variant=solid|shape=cylinder|size=md|color=primary": __body221,
    // figma: variant=solid, shape=round-square, color=primary, size=lg(32)
    "variant=solid|shape=round-square|size=lg|color=primary": __body222,
    // figma: variant=solid, shape=cylinder, color=primary, size=lg(32)
    "variant=solid|shape=cylinder|size=lg|color=primary": __body223,
    // figma: variant=solid, shape=round-square, color=primary, size=xl(36)
    "variant=solid|shape=round-square|size=xl|color=primary": __body224,
    // figma: variant=solid, shape=cylinder, color=primary, size=xl(36)
    "variant=solid|shape=cylinder|size=xl|color=primary": __body225,
    // figma: variant=solid, shape=round-square, color=success, size=md(28)
    "variant=solid|shape=round-square|size=md|color=success": __body226,
    // figma: variant=solid, shape=cylinder, color=success, size=md(28)
    "variant=solid|shape=cylinder|size=md|color=success": __body227,
    // figma: variant=solid, shape=round-square, color=success, size=lg(32)
    "variant=solid|shape=round-square|size=lg|color=success": __body228,
    // figma: variant=solid, shape=cylinder, color=success, size=lg(32)
    "variant=solid|shape=cylinder|size=lg|color=success": __body229,
    // figma: variant=solid, shape=round-square, color=success, size=xl(36)
    "variant=solid|shape=round-square|size=xl|color=success": __body230,
    // figma: variant=solid, shape=cylinder, color=success, size=xl(36)
    "variant=solid|shape=cylinder|size=xl|color=success": __body231,
    // figma: variant=solid, shape=round-square, color=error, size=md(28)
    "variant=solid|shape=round-square|size=md|color=error": __body232,
    // figma: variant=solid, shape=cylinder, color=error, size=md(28)
    "variant=solid|shape=cylinder|size=md|color=error": __body233,
    // figma: variant=solid, shape=round-square, color=error, size=lg(32)
    "variant=solid|shape=round-square|size=lg|color=error": __body234,
    // figma: variant=solid, shape=cylinder, color=error, size=lg(32)
    "variant=solid|shape=cylinder|size=lg|color=error": __body235,
    // figma: variant=solid, shape=round-square, color=error, size=xl(36)
    "variant=solid|shape=round-square|size=xl|color=error": __body236,
    // figma: variant=solid, shape=cylinder, color=error, size=xl(36)
    "variant=solid|shape=cylinder|size=xl|color=error": __body237,
    // figma: variant=solid, shape=round-square, color=warning, size=md(28)
    "variant=solid|shape=round-square|size=md|color=warning": __body238,
    // figma: variant=solid, shape=cylinder, color=warning, size=md(28)
    "variant=solid|shape=cylinder|size=md|color=warning": __body239,
    // figma: variant=solid, shape=round-square, color=warning, size=lg(32)
    "variant=solid|shape=round-square|size=lg|color=warning": __body240,
    // figma: variant=solid, shape=cylinder, color=warning, size=lg(32)
    "variant=solid|shape=cylinder|size=lg|color=warning": __body241,
    // figma: variant=solid, shape=round-square, color=warning, size=xl(36)
    "variant=solid|shape=round-square|size=xl|color=warning": __body242,
    // figma: variant=solid, shape=cylinder, color=warning, size=xl(36)
    "variant=solid|shape=cylinder|size=xl|color=warning": __body243,
    // figma: variant=solid, shape=round-square, color=light-warning, size=md(28)
    "variant=solid|shape=round-square|size=md|color=light-warning": __body244,
    // figma: variant=solid, shape=cylinder, color=light-warning, size=md(28)
    "variant=solid|shape=cylinder|size=md|color=light-warning": __body245,
    // figma: variant=solid, shape=round-square, color=light-warning, size=lg(32)
    "variant=solid|shape=round-square|size=lg|color=light-warning": __body246,
    // figma: variant=solid, shape=cylinder, color=light-warning, size=lg(32)
    "variant=solid|shape=cylinder|size=lg|color=light-warning": __body247,
    // figma: variant=solid, shape=round-square, color=light-warning, size=xl(36)
    "variant=solid|shape=round-square|size=xl|color=light-warning": __body248,
    // figma: variant=solid, shape=cylinder, color=light-warning, size=xl(36)
    "variant=solid|shape=cylinder|size=xl|color=light-warning": __body249,
    // figma: variant=solid, shape=round-square, color=grayscale, size=md(28)
    "variant=solid|shape=round-square|size=md|color=grayscale": __body250,
    // figma: variant=solid, shape=cylinder, color=grayscale, size=md(28)
    "variant=solid|shape=cylinder|size=md|color=grayscale": __body251,
    // figma: variant=solid, shape=round-square, color=grayscale, size=lg(32)
    "variant=solid|shape=round-square|size=lg|color=grayscale": __body252,
    // figma: variant=solid, shape=cylinder, color=grayscale, size=lg(32)
    "variant=solid|shape=cylinder|size=lg|color=grayscale": __body253,
    // figma: variant=solid, shape=round-square, color=grayscale, size=xl(36)
    "variant=solid|shape=round-square|size=xl|color=grayscale": __body254,
    // figma: variant=solid, shape=cylinder, color=grayscale, size=xl(36)
    "variant=solid|shape=cylinder|size=xl|color=grayscale": __body255,
    // figma: variant=solid, shape=round-square, color=primary, size=sm(24)
    "variant=solid|shape=round-square|size=sm|color=primary": __body256,
    // figma: variant=solid, shape=cylinder, color=primary, size=sm(24)
    "variant=solid|shape=cylinder|size=sm|color=primary": __body257,
    // figma: variant=solid, shape=round-square, color=primary, size=xs(20)
    "variant=solid|shape=round-square|size=xs|color=primary": __body258,
    // figma: variant=solid, shape=cylinder, color=primary, size=xs(20)
    "variant=solid|shape=cylinder|size=xs|color=primary": __body259,
    // figma: variant=solid, shape=round-square, color=success, size=sm(24)
    "variant=solid|shape=round-square|size=sm|color=success": __body260,
    // figma: variant=solid, shape=cylinder, color=success, size=sm(24)
    "variant=solid|shape=cylinder|size=sm|color=success": __body261,
    // figma: variant=solid, shape=round-square, color=success, size=xs(20)
    "variant=solid|shape=round-square|size=xs|color=success": __body262,
    // figma: variant=solid, shape=cylinder, color=success, size=xs(20)
    "variant=solid|shape=cylinder|size=xs|color=success": __body263,
    // figma: variant=solid, shape=round-square, color=error, size=sm(24)
    "variant=solid|shape=round-square|size=sm|color=error": __body264,
    // figma: variant=solid, shape=cylinder, color=error, size=sm(24)
    "variant=solid|shape=cylinder|size=sm|color=error": __body265,
    // figma: variant=solid, shape=round-square, color=error, size=xs(20)
    "variant=solid|shape=round-square|size=xs|color=error": __body266,
    // figma: variant=solid, shape=cylinder, color=error, size=xs(20)
    "variant=solid|shape=cylinder|size=xs|color=error": __body267,
    // figma: variant=solid, shape=round-square, color=warning, size=sm(24)
    "variant=solid|shape=round-square|size=sm|color=warning": __body268,
    // figma: variant=solid, shape=cylinder, color=warning, size=sm(24)
    "variant=solid|shape=cylinder|size=sm|color=warning": __body269,
    // figma: variant=solid, shape=round-square, color=warning, size=xs(20)
    "variant=solid|shape=round-square|size=xs|color=warning": __body270,
    // figma: variant=solid, shape=cylinder, color=warning, size=xs(20)
    "variant=solid|shape=cylinder|size=xs|color=warning": __body271,
    // figma: variant=solid, shape=round-square, color=light-warning, size=sm(24)
    "variant=solid|shape=round-square|size=sm|color=light-warning": __body272,
    // figma: variant=solid, shape=cylinder, color=light-warning, size=sm(24)
    "variant=solid|shape=cylinder|size=sm|color=light-warning": __body273,
    // figma: variant=solid, shape=round-square, color=light-warning, size=xs(20)
    "variant=solid|shape=round-square|size=xs|color=light-warning": __body274,
    // figma: variant=solid, shape=cylinder, color=light-warning, size=xs(20)
    "variant=solid|shape=cylinder|size=xs|color=light-warning": __body275,
    // figma: variant=solid, shape=round-square, color=grayscale, size=sm(24)
    "variant=solid|shape=round-square|size=sm|color=grayscale": __body276,
    // figma: variant=solid, shape=cylinder, color=grayscale, size=sm(24)
    "variant=solid|shape=cylinder|size=sm|color=grayscale": __body277,
    // figma: variant=solid, shape=round-square, color=grayscale, size=xs(20)
    "variant=solid|shape=round-square|size=xs|color=grayscale": __body278,
    // figma: variant=solid, shape=cylinder, color=grayscale, size=xs(20)
    "variant=solid|shape=cylinder|size=xs|color=grayscale": __body279,
  };
  return (__impls[__vkey(props)] ?? __body224)();
}
export default Badge2;
