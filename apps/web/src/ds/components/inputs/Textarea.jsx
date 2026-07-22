import { Component12 } from './Component12.jsx';

// figma node: 470:4249 Textarea (21 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);

export function Textarea(_p = {}) {
  const props = { ..._p, label: _p.label ?? true, size: _p.size ?? "lg", label2: _p.label2 ?? "label", placeholder: _p.placeholder ?? "Placeholder", helperText: _p.helperText ?? true, state: _p.state ?? "default", helperText2: _p.helperText2 ?? "helper text", showCounter: _p.showCounter ?? true, showScrollbar: _p.showScrollbar ?? true, showResize: _p.showResize ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 152,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-default)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.600000023841858,
            letterSpacing: "-0.030em",
            color: "var(--field-text-placeholder)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.showCounter && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-brand)",
          flexShrink: 0,
        }}>{props.text1 ?? "00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "/100"}</span>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-default)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 16px 8px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-placeholder)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.showCounter && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-brand)",
          flexShrink: 0,
        }}>{props.text1 ?? "00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "/100"}</span>
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 152,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-default)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 8px 8px 8px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-placeholder)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.showCounter && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-brand)",
          flexShrink: 0,
        }}>{props.text1 ?? "00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "/100"}</span>
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-hover)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-placeholder)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 86,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.showCounter && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-brand)",
          flexShrink: 0,
        }}>{props.text1 ?? "00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "/100"}</span>
      </div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-hover)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 16px 8px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-placeholder)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.showCounter && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-brand)",
          flexShrink: 0,
        }}>{props.text1 ?? "00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "/100"}</span>
      </div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 152,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-hover)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 8px 8px 8px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-placeholder)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.showCounter && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-brand)",
          flexShrink: 0,
        }}>{props.text1 ?? "00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "/100"}</span>
      </div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-default)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 86,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
                position: "absolute",
                left: 1.429,
                top: 1,
                width: 9.143,
                height: 10,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-success)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexShrink: 0,
          }}>{props.text1 ?? "00"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-default)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 16px 8px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
                position: "absolute",
                left: 1.429,
                top: 1,
                width: 9.143,
                height: 10,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-success)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexShrink: 0,
          }}>{props.text1 ?? "00"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 152,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-default)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 8px 8px 8px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={9.143} height={10} viewBox="0 0 9.143 10" fill="none" style={{
                position: "absolute",
                left: 1.429,
                top: 1,
                width: 9.143,
                height: 10,
                color: "rgb(255,255,255)",
              }}>
                <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-success)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexShrink: 0,
          }}>{props.text1 ?? "00"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-error)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 86,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={10.025} height={10.025} viewBox="0 0 10.025 10.025" fill="none" style={{
                position: "absolute",
                left: 0.988,
                top: 0.988,
                width: 10.025,
                height: 10.025,
                color: "var(--color-icon-error)",
              }}>
                <path d={"M 5.725 9.738 C 5.625 9.838 5.514 9.91 5.393 9.956 C 5.273 10.002 5.146 10.025 5.012 10.025 C 4.879 10.025 4.752 10.002 4.631 9.956 C 4.51 9.91 4.4 9.838 4.3 9.738 L 0.287 5.725 C 0.187 5.625 0.114 5.514 0.068 5.393 C 0.023 5.273 0 5.146 0 5.012 C 0 4.879 0.023 4.752 0.068 4.631 C 0.114 4.51 0.187 4.4 0.287 4.3 L 4.3 0.287 C 4.4 0.187 4.51 0.114 4.631 0.068 C 4.752 0.023 4.879 0 5.012 0 C 5.146 0 5.273 0.023 5.393 0.068 C 5.514 0.114 5.625 0.187 5.725 0.287 L 9.738 4.3 C 9.838 4.4 9.911 4.51 9.957 4.631 C 10.002 4.752 10.025 4.879 10.025 5.012 C 10.025 5.146 10.002 5.273 9.957 5.393 C 9.911 5.514 9.838 5.625 9.738 5.725 L 5.725 9.738 Z M 5.012 5.512 C 5.154 5.512 5.273 5.464 5.369 5.368 C 5.465 5.273 5.512 5.154 5.512 5.012 L 5.512 3.013 C 5.512 2.871 5.465 2.752 5.369 2.656 C 5.273 2.56 5.154 2.513 5.012 2.513 C 4.871 2.513 4.752 2.56 4.656 2.656 C 4.56 2.752 4.512 2.871 4.512 3.013 L 4.512 5.012 C 4.512 5.154 4.56 5.273 4.656 5.368 C 4.752 5.464 4.871 5.512 5.012 5.512 Z M 5.012 7.012 C 5.154 7.012 5.273 6.964 5.369 6.868 C 5.465 6.773 5.512 6.654 5.512 6.512 C 5.512 6.371 5.465 6.252 5.369 6.156 C 5.273 6.06 5.154 6.012 5.012 6.012 C 4.871 6.012 4.752 6.06 4.656 6.156 C 4.56 6.252 4.512 6.371 4.512 6.512 C 4.512 6.654 4.56 6.773 4.656 6.868 C 4.752 6.964 4.871 7.012 5.012 7.012 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-error)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-error)",
            flexShrink: 0,
          }}>{props.text1 ?? "100"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-error)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 16px 8px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={10.025} height={10.025} viewBox="0 0 10.025 10.025" fill="none" style={{
                position: "absolute",
                left: 0.988,
                top: 0.988,
                width: 10.025,
                height: 10.025,
                color: "var(--color-icon-error)",
              }}>
                <path d={"M 5.725 9.738 C 5.625 9.838 5.514 9.91 5.393 9.956 C 5.273 10.002 5.146 10.025 5.012 10.025 C 4.879 10.025 4.752 10.002 4.631 9.956 C 4.51 9.91 4.4 9.838 4.3 9.738 L 0.287 5.725 C 0.187 5.625 0.114 5.514 0.068 5.393 C 0.023 5.273 0 5.146 0 5.012 C 0 4.879 0.023 4.752 0.068 4.631 C 0.114 4.51 0.187 4.4 0.287 4.3 L 4.3 0.287 C 4.4 0.187 4.51 0.114 4.631 0.068 C 4.752 0.023 4.879 0 5.012 0 C 5.146 0 5.273 0.023 5.393 0.068 C 5.514 0.114 5.625 0.187 5.725 0.287 L 9.738 4.3 C 9.838 4.4 9.911 4.51 9.957 4.631 C 10.002 4.752 10.025 4.879 10.025 5.012 C 10.025 5.146 10.002 5.273 9.957 5.393 C 9.911 5.514 9.838 5.625 9.738 5.725 L 5.725 9.738 Z M 5.012 5.512 C 5.154 5.512 5.273 5.464 5.369 5.368 C 5.465 5.273 5.512 5.154 5.512 5.012 L 5.512 3.013 C 5.512 2.871 5.465 2.752 5.369 2.656 C 5.273 2.56 5.154 2.513 5.012 2.513 C 4.871 2.513 4.752 2.56 4.656 2.656 C 4.56 2.752 4.512 2.871 4.512 3.013 L 4.512 5.012 C 4.512 5.154 4.56 5.273 4.656 5.368 C 4.752 5.464 4.871 5.512 5.012 5.512 Z M 5.012 7.012 C 5.154 7.012 5.273 6.964 5.369 6.868 C 5.465 6.773 5.512 6.654 5.512 6.512 C 5.512 6.371 5.465 6.252 5.369 6.156 C 5.273 6.06 5.154 6.012 5.012 6.012 C 4.871 6.012 4.752 6.06 4.656 6.156 C 4.56 6.252 4.512 6.371 4.512 6.512 C 4.512 6.654 4.56 6.773 4.656 6.868 C 4.752 6.964 4.871 7.012 5.012 7.012 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-error)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-error)",
            flexShrink: 0,
          }}>{props.text1 ?? "100"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 152,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-error)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 8px 8px 8px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={10.025} height={10.025} viewBox="0 0 10.025 10.025" fill="none" style={{
                position: "absolute",
                left: 0.988,
                top: 0.988,
                width: 10.025,
                height: 10.025,
                color: "var(--color-icon-error)",
              }}>
                <path d={"M 5.725 9.738 C 5.625 9.838 5.514 9.91 5.393 9.956 C 5.273 10.002 5.146 10.025 5.012 10.025 C 4.879 10.025 4.752 10.002 4.631 9.956 C 4.51 9.91 4.4 9.838 4.3 9.738 L 0.287 5.725 C 0.187 5.625 0.114 5.514 0.068 5.393 C 0.023 5.273 0 5.146 0 5.012 C 0 4.879 0.023 4.752 0.068 4.631 C 0.114 4.51 0.187 4.4 0.287 4.3 L 4.3 0.287 C 4.4 0.187 4.51 0.114 4.631 0.068 C 4.752 0.023 4.879 0 5.012 0 C 5.146 0 5.273 0.023 5.393 0.068 C 5.514 0.114 5.625 0.187 5.725 0.287 L 9.738 4.3 C 9.838 4.4 9.911 4.51 9.957 4.631 C 10.002 4.752 10.025 4.879 10.025 5.012 C 10.025 5.146 10.002 5.273 9.957 5.393 C 9.911 5.514 9.838 5.625 9.738 5.725 L 5.725 9.738 Z M 5.012 5.512 C 5.154 5.512 5.273 5.464 5.369 5.368 C 5.465 5.273 5.512 5.154 5.512 5.012 L 5.512 3.013 C 5.512 2.871 5.465 2.752 5.369 2.656 C 5.273 2.56 5.154 2.513 5.012 2.513 C 4.871 2.513 4.752 2.56 4.656 2.656 C 4.56 2.752 4.512 2.871 4.512 3.013 L 4.512 5.012 C 4.512 5.154 4.56 5.273 4.656 5.368 C 4.752 5.464 4.871 5.512 5.012 5.512 Z M 5.012 7.012 C 5.154 7.012 5.273 6.964 5.369 6.868 C 5.465 6.773 5.512 6.654 5.512 6.512 C 5.512 6.371 5.465 6.252 5.369 6.156 C 5.273 6.06 5.154 6.012 5.012 6.012 C 4.871 6.012 4.752 6.06 4.656 6.156 C 4.56 6.252 4.512 6.371 4.512 6.512 C 4.512 6.654 4.56 6.773 4.656 6.868 C 4.752 6.964 4.871 7.012 5.012 7.012 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-error)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-error)",
            flexShrink: 0,
          }}>{props.text1 ?? "100"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-disabled)",
        boxShadow: "inset 0 0 0 1px var(--field-border-disabled)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-disabled)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 86,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.showCounter && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-brand)",
          flexShrink: 0,
        }}>{props.text1 ?? "00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "/100"}</span>
      </div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-disabled)",
        boxShadow: "inset 0 0 0 1px var(--field-border-disabled)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 16px 8px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-disabled)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.showCounter && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-brand)",
          flexShrink: 0,
        }}>{props.text1 ?? "00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "/100"}</span>
      </div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 152,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--field-bg-disabled)",
        boxShadow: "inset 0 0 0 1px var(--field-border-disabled)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 8px 8px 8px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-disabled)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.showCounter && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-brand)",
          flexShrink: 0,
        }}>{props.text1 ?? "00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "right",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "var(--color-text-secondary-2)",
          flexShrink: 0,
        }}>{props.text2 ?? "/100"}</span>
      </div>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-active)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 86,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
                position: "absolute",
                left: 1,
                top: 1,
                width: 10,
                height: 10,
                color: "var(--color-icon-brand)",
              }}>
                <path d={"M 5 7.5 C 5.142 7.5 5.26 7.452 5.357 7.356 C 5.452 7.26 5.5 7.142 5.5 7 L 5.5 4.988 C 5.5 4.846 5.452 4.729 5.357 4.637 C 5.26 4.546 5.142 4.5 5 4.5 C 4.858 4.5 4.74 4.548 4.644 4.643 C 4.548 4.74 4.5 4.858 4.5 5 L 4.5 7.012 C 4.5 7.154 4.548 7.271 4.644 7.363 C 4.74 7.454 4.858 7.5 5 7.5 Z M 5 3.5 C 5.142 3.5 5.26 3.452 5.357 3.356 C 5.452 3.26 5.5 3.142 5.5 3 C 5.5 2.858 5.452 2.74 5.357 2.644 C 5.26 2.548 5.142 2.5 5 2.5 C 4.858 2.5 4.74 2.548 4.644 2.644 C 4.548 2.74 4.5 2.858 4.5 3 C 4.5 3.142 4.548 3.26 4.644 3.356 C 4.74 3.452 4.858 3.5 5 3.5 Z M 5 10 C 4.308 10 3.658 9.869 3.05 9.606 C 2.442 9.344 1.913 8.988 1.463 8.538 C 1.013 8.088 0.656 7.558 0.394 6.95 C 0.131 6.342 0 5.692 0 5 C 0 4.308 0.131 3.658 0.394 3.05 C 0.656 2.442 1.013 1.913 1.463 1.463 C 1.913 1.013 2.442 0.656 3.05 0.393 C 3.658 0.131 4.308 0 5 0 C 5.692 0 6.342 0.131 6.95 0.393 C 7.558 0.656 8.088 1.013 8.538 1.463 C 8.988 1.913 9.344 2.442 9.606 3.05 C 9.869 3.658 10 4.308 10 5 C 10 5.692 9.869 6.342 9.606 6.95 C 9.344 7.558 8.988 8.088 8.538 8.538 C 8.088 8.988 7.558 9.344 6.95 9.606 C 6.342 9.869 5.692 10 5 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexShrink: 0,
          }}>{props.text1 ?? "00"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-hover), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 8px 12px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 86,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
                position: "absolute",
                left: 1,
                top: 1,
                width: 10,
                height: 10,
                color: "var(--color-icon-brand)",
              }}>
                <path d={"M 5 7.5 C 5.142 7.5 5.26 7.452 5.357 7.356 C 5.452 7.26 5.5 7.142 5.5 7 L 5.5 4.988 C 5.5 4.846 5.452 4.729 5.357 4.637 C 5.26 4.546 5.142 4.5 5 4.5 C 4.858 4.5 4.74 4.548 4.644 4.643 C 4.548 4.74 4.5 4.858 4.5 5 L 4.5 7.012 C 4.5 7.154 4.548 7.271 4.644 7.363 C 4.74 7.454 4.858 7.5 5 7.5 Z M 5 3.5 C 5.142 3.5 5.26 3.452 5.357 3.356 C 5.452 3.26 5.5 3.142 5.5 3 C 5.5 2.858 5.452 2.74 5.357 2.644 C 5.26 2.548 5.142 2.5 5 2.5 C 4.858 2.5 4.74 2.548 4.644 2.644 C 4.548 2.74 4.5 2.858 4.5 3 C 4.5 3.142 4.548 3.26 4.644 3.356 C 4.74 3.452 4.858 3.5 5 3.5 Z M 5 10 C 4.308 10 3.658 9.869 3.05 9.606 C 2.442 9.344 1.913 8.988 1.463 8.538 C 1.013 8.088 0.656 7.558 0.394 6.95 C 0.131 6.342 0 5.692 0 5 C 0 4.308 0.131 3.658 0.394 3.05 C 0.656 2.442 1.013 1.913 1.463 1.463 C 1.913 1.013 2.442 0.656 3.05 0.393 C 3.658 0.131 4.308 0 5 0 C 5.692 0 6.342 0.131 6.95 0.393 C 7.558 0.656 8.088 1.013 8.538 1.463 C 8.988 1.913 9.344 2.442 9.606 3.05 C 9.869 3.658 10 4.308 10 5 C 10 5.692 9.869 6.342 9.606 6.95 C 9.344 7.558 8.988 8.088 8.538 8.538 C 8.088 8.988 7.558 9.344 6.95 9.606 C 6.342 9.869 5.692 10 5 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexShrink: 0,
          }}>{props.text1 ?? "00"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-active)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 16px 8px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
                position: "absolute",
                left: 1,
                top: 1,
                width: 10,
                height: 10,
                color: "var(--color-icon-brand)",
              }}>
                <path d={"M 5 7.5 C 5.142 7.5 5.26 7.452 5.357 7.356 C 5.452 7.26 5.5 7.142 5.5 7 L 5.5 4.988 C 5.5 4.846 5.452 4.729 5.357 4.637 C 5.26 4.546 5.142 4.5 5 4.5 C 4.858 4.5 4.74 4.548 4.644 4.643 C 4.548 4.74 4.5 4.858 4.5 5 L 4.5 7.012 C 4.5 7.154 4.548 7.271 4.644 7.363 C 4.74 7.454 4.858 7.5 5 7.5 Z M 5 3.5 C 5.142 3.5 5.26 3.452 5.357 3.356 C 5.452 3.26 5.5 3.142 5.5 3 C 5.5 2.858 5.452 2.74 5.357 2.644 C 5.26 2.548 5.142 2.5 5 2.5 C 4.858 2.5 4.74 2.548 4.644 2.644 C 4.548 2.74 4.5 2.858 4.5 3 C 4.5 3.142 4.548 3.26 4.644 3.356 C 4.74 3.452 4.858 3.5 5 3.5 Z M 5 10 C 4.308 10 3.658 9.869 3.05 9.606 C 2.442 9.344 1.913 8.988 1.463 8.538 C 1.013 8.088 0.656 7.558 0.394 6.95 C 0.131 6.342 0 5.692 0 5 C 0 4.308 0.131 3.658 0.394 3.05 C 0.656 2.442 1.013 1.913 1.463 1.463 C 1.913 1.013 2.442 0.656 3.05 0.393 C 3.658 0.131 4.308 0 5 0 C 5.692 0 6.342 0.131 6.95 0.393 C 7.558 0.656 8.088 1.013 8.538 1.463 C 8.988 1.913 9.344 2.442 9.606 3.05 C 9.869 3.658 10 4.308 10 5 C 10 5.692 9.869 6.342 9.606 6.95 C 9.344 7.558 8.988 8.088 8.538 8.538 C 8.088 8.988 7.558 9.344 6.95 9.606 C 6.342 9.869 5.692 10 5 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexShrink: 0,
          }}>{props.text1 ?? "00"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-hover), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 16px 8px 16px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-md) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
                position: "absolute",
                left: 1,
                top: 1,
                width: 10,
                height: 10,
                color: "var(--color-icon-brand)",
              }}>
                <path d={"M 5 7.5 C 5.142 7.5 5.26 7.452 5.357 7.356 C 5.452 7.26 5.5 7.142 5.5 7 L 5.5 4.988 C 5.5 4.846 5.452 4.729 5.357 4.637 C 5.26 4.546 5.142 4.5 5 4.5 C 4.858 4.5 4.74 4.548 4.644 4.643 C 4.548 4.74 4.5 4.858 4.5 5 L 4.5 7.012 C 4.5 7.154 4.548 7.271 4.644 7.363 C 4.74 7.454 4.858 7.5 5 7.5 Z M 5 3.5 C 5.142 3.5 5.26 3.452 5.357 3.356 C 5.452 3.26 5.5 3.142 5.5 3 C 5.5 2.858 5.452 2.74 5.357 2.644 C 5.26 2.548 5.142 2.5 5 2.5 C 4.858 2.5 4.74 2.548 4.644 2.644 C 4.548 2.74 4.5 2.858 4.5 3 C 4.5 3.142 4.548 3.26 4.644 3.356 C 4.74 3.452 4.858 3.5 5 3.5 Z M 5 10 C 4.308 10 3.658 9.869 3.05 9.606 C 2.442 9.344 1.913 8.988 1.463 8.538 C 1.013 8.088 0.656 7.558 0.394 6.95 C 0.131 6.342 0 5.692 0 5 C 0 4.308 0.131 3.658 0.394 3.05 C 0.656 2.442 1.013 1.913 1.463 1.463 C 1.913 1.013 2.442 0.656 3.05 0.393 C 3.658 0.131 4.308 0 5 0 C 5.692 0 6.342 0.131 6.95 0.393 C 7.558 0.656 8.088 1.013 8.538 1.463 C 8.988 1.913 9.344 2.442 9.606 3.05 C 9.869 3.658 10 4.308 10 5 C 10 5.692 9.869 6.342 9.606 6.95 C 9.344 7.558 8.988 8.088 8.538 8.538 C 8.088 8.988 7.558 9.344 6.95 9.606 C 6.342 9.869 5.692 10 5 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexShrink: 0,
          }}>{props.text1 ?? "00"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 152,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-active)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 8px 8px 8px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: 1.399999976158142,
            letterSpacing: "-0.030em",
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
                position: "absolute",
                left: 1,
                top: 1,
                width: 10,
                height: 10,
                color: "var(--color-icon-brand)",
              }}>
                <path d={"M 5 7.5 C 5.142 7.5 5.26 7.452 5.357 7.356 C 5.452 7.26 5.5 7.142 5.5 7 L 5.5 4.988 C 5.5 4.846 5.452 4.729 5.357 4.637 C 5.26 4.546 5.142 4.5 5 4.5 C 4.858 4.5 4.74 4.548 4.644 4.643 C 4.548 4.74 4.5 4.858 4.5 5 L 4.5 7.012 C 4.5 7.154 4.548 7.271 4.644 7.363 C 4.74 7.454 4.858 7.5 5 7.5 Z M 5 3.5 C 5.142 3.5 5.26 3.452 5.357 3.356 C 5.452 3.26 5.5 3.142 5.5 3 C 5.5 2.858 5.452 2.74 5.357 2.644 C 5.26 2.548 5.142 2.5 5 2.5 C 4.858 2.5 4.74 2.548 4.644 2.644 C 4.548 2.74 4.5 2.858 4.5 3 C 4.5 3.142 4.548 3.26 4.644 3.356 C 4.74 3.452 4.858 3.5 5 3.5 Z M 5 10 C 4.308 10 3.658 9.869 3.05 9.606 C 2.442 9.344 1.913 8.988 1.463 8.538 C 1.013 8.088 0.656 7.558 0.394 6.95 C 0.131 6.342 0 5.692 0 5 C 0 4.308 0.131 3.658 0.394 3.05 C 0.656 2.442 1.013 1.913 1.463 1.463 C 1.913 1.013 2.442 0.656 3.05 0.393 C 3.658 0.131 4.308 0 5 0 C 5.692 0 6.342 0.131 6.95 0.393 C 7.558 0.656 8.088 1.013 8.538 1.463 C 8.988 1.913 9.344 2.442 9.606 3.05 C 9.869 3.658 10 4.308 10 5 C 10 5.692 9.869 6.342 9.606 6.95 C 9.344 7.558 8.988 8.088 8.538 8.538 C 8.088 8.988 7.558 9.344 6.95 9.606 C 6.342 9.869 5.692 10 5 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexShrink: 0,
          }}>{props.text1 ?? "00"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 152,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--field-text-label)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
      <div style={{
        position: "relative",
        minHeight: 100,
        maxWidth: null,
        maxHeight: 176,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--field-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--field-border-hover), 0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "column",
        padding: "8px 8px 8px 8px",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none) * 1px)",
        paddingLeft: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-xs) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-xs) * 1px)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-xs) * 1px)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
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
            color: "var(--field-text-value)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
        {props.showScrollbar && (
        <div style={{
            position: "absolute",
            left: 292,
            top: 8,
            width: 4,
            height: 35,
          }}>{props.icon1 ?? <Component12 prop={"vertical"} prop2={"default"} style={{ transform: "scale(1, 0.438)", transformOrigin: "0 0" }} />}</div>
        )}
        {props.showResize && (
        <div style={{
          position: "absolute",
          left: 284,
          top: 84,
          width: 12,
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        }}>
          <div style={{
            position: "relative",
            width: 12,
            overflow: "hidden",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 1,
              width: 10,
              height: 10,
              color: "var(--color-icon-tertiary)",
            }}>
              <path d={"M 8.933 0.183 C 9.177 -0.061 9.573 -0.061 9.817 0.183 C 10.061 0.427 10.061 0.823 9.817 1.067 L 1.067 9.817 C 0.823 10.061 0.427 10.061 0.183 9.817 C -0.061 9.573 -0.061 9.177 0.183 8.933 L 8.933 0.183 Z"} fill="currentColor" fillRule="nonzero" />
              <path d={"M 8.933 6.308 C 9.177 6.064 9.573 6.064 9.817 6.308 C 10.061 6.552 10.061 6.948 9.817 7.192 L 7.192 9.817 C 6.948 10.061 6.552 10.061 6.308 9.817 C 6.064 9.573 6.064 9.177 6.308 8.933 L 8.933 6.308 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-gap-sm) * 1px)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.helperText && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "calc(var(--spacing-gap-2xs) * 1px)",
          alignItems: "center",
          flexWrap: "nowrap",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            height: 12,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "calc(var(--spacing-none) * 1px)",
            paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 12,
              gap: "calc(var(--spacing-none) * 1px)",
              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={10} height={10} viewBox="0 0 10 10" fill="none" style={{
                position: "absolute",
                left: 1,
                top: 1,
                width: 10,
                height: 10,
                color: "var(--color-icon-brand)",
              }}>
                <path d={"M 5 7.5 C 5.142 7.5 5.26 7.452 5.357 7.356 C 5.452 7.26 5.5 7.142 5.5 7 L 5.5 4.988 C 5.5 4.846 5.452 4.729 5.357 4.637 C 5.26 4.546 5.142 4.5 5 4.5 C 4.858 4.5 4.74 4.548 4.644 4.643 C 4.548 4.74 4.5 4.858 4.5 5 L 4.5 7.012 C 4.5 7.154 4.548 7.271 4.644 7.363 C 4.74 7.454 4.858 7.5 5 7.5 Z M 5 3.5 C 5.142 3.5 5.26 3.452 5.357 3.356 C 5.452 3.26 5.5 3.142 5.5 3 C 5.5 2.858 5.452 2.74 5.357 2.644 C 5.26 2.548 5.142 2.5 5 2.5 C 4.858 2.5 4.74 2.548 4.644 2.644 C 4.548 2.74 4.5 2.858 4.5 3 C 4.5 3.142 4.548 3.26 4.644 3.356 C 4.74 3.452 4.858 3.5 5 3.5 Z M 5 10 C 4.308 10 3.658 9.869 3.05 9.606 C 2.442 9.344 1.913 8.988 1.463 8.538 C 1.013 8.088 0.656 7.558 0.394 6.95 C 0.131 6.342 0 5.692 0 5 C 0 4.308 0.131 3.658 0.394 3.05 C 0.656 2.442 1.013 1.913 1.463 1.463 C 1.913 1.013 2.442 0.656 3.05 0.393 C 3.658 0.131 4.308 0 5 0 C 5.692 0 6.342 0.131 6.95 0.393 C 7.558 0.656 8.088 1.013 8.538 1.463 C 8.988 1.913 9.344 2.442 9.606 3.05 C 9.869 3.658 10 4.308 10 5 C 10 5.692 9.869 6.342 9.606 6.95 C 9.344 7.558 8.988 8.088 8.538 8.538 C 8.088 8.988 7.558 9.344 6.95 9.606 C 6.342 9.869 5.692 10 5 10 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexGrow: 1,
          }}>{props.helperText2}</span>
        </div>
        )}
        {props.showCounter && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "calc(var(--spacing-none) * 1px)",
          paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
          paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-brand)",
            flexShrink: 0,
          }}>{props.text1 ?? "00"}</span>
          <span style={{
            position: "relative",
            fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: 1.5,
            letterSpacing: "-0.030em",
            color: "var(--color-text-secondary-2)",
            flexShrink: 0,
          }}>{props.text2 ?? "/100"}</span>
        </div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: size=md(14), state=Default
    "size=md|state=default": __body0,
    // figma: size=lg(16), state=Default
    "size=lg|state=default": __body1,
    // figma: size=sm(12), state=Default
    "size=sm|state=default": __body2,
    // figma: size=md(14), state=Hover
    "size=md|state=hover": __body3,
    // figma: size=lg(16), state=Hover
    "size=lg|state=hover": __body4,
    // figma: size=sm(12), state=Hover
    "size=sm|state=hover": __body5,
    // figma: size=md(14), state=Complete
    "size=md|state=complete": __body6,
    // figma: size=lg(16), state=Complete
    "size=lg|state=complete": __body7,
    // figma: size=sm(12), state=Complete
    "size=sm|state=complete": __body8,
    // figma: size=md(14), state=Error
    "size=md|state=error": __body9,
    // figma: size=lg(16), state=Error
    "size=lg|state=error": __body10,
    // figma: size=sm(12), state=Error
    "size=sm|state=error": __body11,
    // figma: size=md(14), state=Disabled
    "size=md|state=disabled": __body12,
    // figma: size=lg(16), state=Disabled
    "size=lg|state=disabled": __body13,
    // figma: size=sm(12), state=Disabled
    "size=sm|state=disabled": __body14,
    // figma: size=md(14), state=Active
    "size=md|state=active": __body15,
    // figma: size=md(14), state=Focus
    "size=md|state=focus": __body16,
    // figma: size=lg(16), state=Active
    "size=lg|state=active": __body17,
    // figma: size=lg(16), state=Focus
    "size=lg|state=focus": __body18,
    // figma: size=sm(12), state=Active
    "size=sm|state=active": __body19,
    // figma: size=sm(12), state=Focus
    "size=sm|state=focus": __body20,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Textarea;
