// figma node: 2315:8790 Checkbox (45 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "value=" + __venc(p.value) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);

export function Checkbox2(_p = {}) {
  const props = { ..._p, label: _p.label ?? true, value: _p.value ?? "unchecked", size: _p.size ?? "lg", label2: _p.label2 ?? "체크박스", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-default)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 20 C 24 22.209 22.209 24 20 24 L 4 24 C 1.791 24 0 22.209 0 20 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1 L 20 1 L 20 0 L 20 -1 L 4 -1 L 4 0 Z M 24 4 L 23 4 L 23 20 L 24 20 L 25 20 L 25 4 L 24 4 Z M 20 24 L 20 23 L 4 23 L 4 24 L 4 25 L 20 25 L 20 24 Z M 0 20 L 1 20 L 1 4 L 0 4 L -1 4 L -1 20 L 0 20 Z M 4 24 L 4 23 C 2.343 23 1 21.657 1 20 L 0 20 L -1 20 C -1 22.761 1.239 25 4 25 L 4 24 Z M 24 20 L 23 20 C 23 21.657 21.657 23 20 23 L 20 24 L 20 25 C 22.761 25 25 22.761 25 20 L 24 20 Z M 20 0 L 20 1 C 21.657 1 23 2.343 23 4 L 24 4 L 25 4 C 25 1.239 22.761 -1 20 -1 L 20 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="rgb(136,140,148)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-default)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 16 0 C 18.209 0 20 1.791 20 4 L 20 16 C 20 18.209 18.209 20 16 20 L 4 20 C 1.791 20 0 18.209 0 16 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1 L 16 1 L 16 0 L 16 -1 L 4 -1 L 4 0 Z M 20 4 L 19 4 L 19 16 L 20 16 L 21 16 L 21 4 L 20 4 Z M 16 20 L 16 19 L 4 19 L 4 20 L 4 21 L 16 21 L 16 20 Z M 0 16 L 1 16 L 1 4 L 0 4 L -1 4 L -1 16 L 0 16 Z M 4 20 L 4 19 C 2.343 19 1 17.657 1 16 L 0 16 L -1 16 C -1 18.761 1.239 21 4 21 L 4 20 Z M 20 16 L 19 16 C 19 17.657 17.657 19 16 19 L 16 20 L 16 21 C 18.761 21 21 18.761 21 16 L 20 16 Z M 16 0 L 16 1 C 17.657 1 19 2.343 19 4 L 20 4 L 21 4 C 21 1.239 18.761 -1 16 -1 L 16 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="rgb(136,140,148)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        minHeight: 24,
        overflow: "hidden",
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-16) * 1px)",
          height: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        overflow: "hidden",
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-16) * 1px)",
          height: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={13.333} height={1.905} viewBox="0 0 13.333 1.905" fill="none" style={{
              position: "absolute",
              left: 1.333,
              top: 7.048,
              width: 13.333,
              height: 1.905,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.952 1.905 C 0.683 1.905 0.456 1.813 0.273 1.63 C 0.091 1.448 0 1.222 0 0.952 C 0 0.683 0.091 0.456 0.273 0.273 C 0.456 0.091 0.683 0 0.952 0 L 12.381 0 C 12.651 0 12.877 0.091 13.059 0.273 C 13.242 0.456 13.333 0.683 13.333 0.952 C 13.333 1.222 13.242 1.448 13.059 1.63 C 12.877 1.813 12.651 1.905 12.381 1.905 L 0.952 1.905 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "32px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        overflow: "hidden",
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        overflow: "hidden",
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={1.429} viewBox="0 0 10 1.429" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 5.286,
              width: 10,
              height: 1.429,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.714 1.429 C 0.512 1.429 0.342 1.36 0.205 1.223 C 0.068 1.086 0 0.917 0 0.714 C 0 0.512 0.068 0.342 0.205 0.205 C 0.342 0.068 0.512 0 0.714 0 L 9.286 0 C 9.488 0 9.658 0.068 9.794 0.205 C 9.931 0.342 10 0.512 10 0.714 C 10 0.917 9.931 1.086 9.794 1.223 C 9.658 1.36 9.488 1.429 9.286 1.429 L 0.714 1.429 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-hover)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 20 C 24 22.209 22.209 24 20 24 L 4 24 C 1.791 24 0 22.209 0 20 L 0 4 Z"} fill="rgb(244,245,247)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1 L 20 1 L 20 0 L 20 -1 L 4 -1 L 4 0 Z M 24 4 L 23 4 L 23 20 L 24 20 L 25 20 L 25 4 L 24 4 Z M 20 24 L 20 23 L 4 23 L 4 24 L 4 25 L 20 25 L 20 24 Z M 0 20 L 1 20 L 1 4 L 0 4 L -1 4 L -1 20 L 0 20 Z M 4 24 L 4 23 C 2.343 23 1 21.657 1 20 L 0 20 L -1 20 C -1 22.761 1.239 25 4 25 L 4 24 Z M 24 20 L 23 20 C 23 21.657 21.657 23 20 23 L 20 24 L 20 25 C 22.761 25 25 22.761 25 20 L 24 20 Z M 20 0 L 20 1 C 21.657 1 23 2.343 23 4 L 24 4 L 25 4 C 25 1.239 22.761 -1 20 -1 L 20 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="rgb(120,124,135)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-hover)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 16 0 C 18.209 0 20 1.791 20 4 L 20 16 C 20 18.209 18.209 20 16 20 L 4 20 C 1.791 20 0 18.209 0 16 L 0 4 Z"} fill="rgb(244,245,247)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1 L 16 1 L 16 0 L 16 -1 L 4 -1 L 4 0 Z M 20 4 L 19 4 L 19 16 L 20 16 L 21 16 L 21 4 L 20 4 Z M 16 20 L 16 19 L 4 19 L 4 20 L 4 21 L 16 21 L 16 20 Z M 0 16 L 1 16 L 1 4 L 0 4 L -1 4 L -1 16 L 0 16 Z M 4 20 L 4 19 C 2.343 19 1 17.657 1 16 L 0 16 L -1 16 C -1 18.761 1.239 21 4 21 L 4 20 Z M 20 16 L 19 16 C 19 17.657 17.657 19 16 19 L 16 20 L 16 21 C 18.761 21 21 18.761 21 16 L 20 16 Z M 16 0 L 16 1 C 17.657 1 19 2.343 19 4 L 20 4 L 21 4 C 21 1.239 18.761 -1 16 -1 L 16 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="rgb(120,124,135)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-16) * 1px)",
          height: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-16) * 1px)",
          height: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={13.333} height={1.905} viewBox="0 0 13.333 1.905" fill="none" style={{
              position: "absolute",
              left: 1.333,
              top: 7.048,
              width: 13.333,
              height: 1.905,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.952 1.905 C 0.683 1.905 0.456 1.813 0.273 1.63 C 0.091 1.448 0 1.222 0 0.952 C 0 0.683 0.091 0.456 0.273 0.273 C 0.456 0.091 0.683 0 0.952 0 L 12.381 0 C 12.651 0 12.877 0.091 13.059 0.273 C 13.242 0.456 13.333 0.683 13.333 0.952 C 13.333 1.222 13.242 1.448 13.059 1.63 C 12.877 1.813 12.651 1.905 12.381 1.905 L 0.952 1.905 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "32px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={1.429} viewBox="0 0 10 1.429" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 5.286,
              width: 10,
              height: 1.429,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.714 1.429 C 0.512 1.429 0.342 1.36 0.205 1.223 C 0.068 1.086 0 0.917 0 0.714 C 0 0.512 0.068 0.342 0.205 0.205 C 0.342 0.068 0.512 0 0.714 0 L 9.286 0 C 9.488 0 9.658 0.068 9.794 0.205 C 9.931 0.342 10 0.512 10 0.714 C 10 0.917 9.931 1.086 9.794 1.223 C 9.658 1.36 9.488 1.429 9.286 1.429 L 0.714 1.429 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-active)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 20 C 24 22.209 22.209 24 20 24 L 4 24 C 1.791 24 0 22.209 0 20 L 0 4 Z"} fill="rgb(235,236,240)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1 L 20 1 L 20 0 L 20 -1 L 4 -1 L 4 0 Z M 24 4 L 23 4 L 23 20 L 24 20 L 25 20 L 25 4 L 24 4 Z M 20 24 L 20 23 L 4 23 L 4 24 L 4 25 L 20 25 L 20 24 Z M 0 20 L 1 20 L 1 4 L 0 4 L -1 4 L -1 20 L 0 20 Z M 4 24 L 4 23 C 2.343 23 1 21.657 1 20 L 0 20 L -1 20 C -1 22.761 1.239 25 4 25 L 4 24 Z M 24 20 L 23 20 C 23 21.657 21.657 23 20 23 L 20 24 L 20 25 C 22.761 25 25 22.761 25 20 L 24 20 Z M 20 0 L 20 1 C 21.657 1 23 2.343 23 4 L 24 4 L 25 4 C 25 1.239 22.761 -1 20 -1 L 20 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="rgb(104,109,120)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-default)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 20 C 24 22.209 22.209 24 20 24 L 4 24 C 1.791 24 0 22.209 0 20 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1 L 20 1 L 20 0 L 20 -1 L 4 -1 L 4 0 Z M 24 4 L 23 4 L 23 20 L 24 20 L 25 20 L 25 4 L 24 4 Z M 20 24 L 20 23 L 4 23 L 4 24 L 4 25 L 20 25 L 20 24 Z M 0 20 L 1 20 L 1 4 L 0 4 L -1 4 L -1 20 L 0 20 Z M 4 24 L 4 23 C 2.343 23 1 21.657 1 20 L 0 20 L -1 20 C -1 22.761 1.239 25 4 25 L 4 24 Z M 24 20 L 23 20 C 23 21.657 21.657 23 20 23 L 20 24 L 20 25 C 22.761 25 25 22.761 25 20 L 24 20 Z M 20 0 L 20 1 C 21.657 1 23 2.343 23 4 L 24 4 L 25 4 C 25 1.239 22.761 -1 20 -1 L 20 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="rgb(136,140,148)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-active)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 16 0 C 18.209 0 20 1.791 20 4 L 20 16 C 20 18.209 18.209 20 16 20 L 4 20 C 1.791 20 0 18.209 0 16 L 0 4 Z"} fill="rgb(235,236,240)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1 L 16 1 L 16 0 L 16 -1 L 4 -1 L 4 0 Z M 20 4 L 19 4 L 19 16 L 20 16 L 21 16 L 21 4 L 20 4 Z M 16 20 L 16 19 L 4 19 L 4 20 L 4 21 L 16 21 L 16 20 Z M 0 16 L 1 16 L 1 4 L 0 4 L -1 4 L -1 16 L 0 16 Z M 4 20 L 4 19 C 2.343 19 1 17.657 1 16 L 0 16 L -1 16 C -1 18.761 1.239 21 4 21 L 4 20 Z M 20 16 L 19 16 C 19 17.657 17.657 19 16 19 L 16 20 L 16 21 C 18.761 21 21 18.761 21 16 L 20 16 Z M 16 0 L 16 1 C 17.657 1 19 2.343 19 4 L 20 4 L 21 4 C 21 1.239 18.761 -1 16 -1 L 16 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="rgb(104,109,120)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-default)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 16 0 C 18.209 0 20 1.791 20 4 L 20 16 C 20 18.209 18.209 20 16 20 L 4 20 C 1.791 20 0 18.209 0 16 L 0 4 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1 L 16 1 L 16 0 L 16 -1 L 4 -1 L 4 0 Z M 20 4 L 19 4 L 19 16 L 20 16 L 21 16 L 21 4 L 20 4 Z M 16 20 L 16 19 L 4 19 L 4 20 L 4 21 L 16 21 L 16 20 Z M 0 16 L 1 16 L 1 4 L 0 4 L -1 4 L -1 16 L 0 16 Z M 4 20 L 4 19 C 2.343 19 1 17.657 1 16 L 0 16 L -1 16 C -1 18.761 1.239 21 4 21 L 4 20 Z M 20 16 L 19 16 C 19 17.657 17.657 19 16 19 L 16 20 L 16 21 C 18.761 21 21 18.761 21 16 L 20 16 Z M 16 0 L 16 1 C 17.657 1 19 2.343 19 4 L 20 4 L 21 4 C 21 1.239 18.761 -1 16 -1 L 16 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="rgb(136,140,148)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-16) * 1px)",
          height: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-16) * 1px)",
          height: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={13.333} height={1.905} viewBox="0 0 13.333 1.905" fill="none" style={{
              position: "absolute",
              left: 1.333,
              top: 7.048,
              width: 13.333,
              height: 1.905,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.952 1.905 C 0.683 1.905 0.456 1.813 0.273 1.63 C 0.091 1.448 0 1.222 0 0.952 C 0 0.683 0.091 0.456 0.273 0.273 C 0.456 0.091 0.683 0 0.952 0 L 12.381 0 C 12.651 0 12.877 0.091 13.059 0.273 C 13.242 0.456 13.333 0.683 13.333 0.952 C 13.333 1.222 13.242 1.448 13.059 1.63 C 12.877 1.813 12.651 1.905 12.381 1.905 L 0.952 1.905 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "32px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-16) * 1px)",
          height: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-16) * 1px)",
          height: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={13.333} height={1.905} viewBox="0 0 13.333 1.905" fill="none" style={{
              position: "absolute",
              left: 1.333,
              top: 7.048,
              width: 13.333,
              height: 1.905,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.952 1.905 C 0.683 1.905 0.456 1.813 0.273 1.63 C 0.091 1.448 0 1.222 0 0.952 C 0 0.683 0.091 0.456 0.273 0.273 C 0.456 0.091 0.683 0 0.952 0 L 12.381 0 C 12.651 0 12.877 0.091 13.059 0.273 C 13.242 0.456 13.333 0.683 13.333 0.952 C 13.333 1.222 13.242 1.448 13.059 1.63 C 12.877 1.813 12.651 1.905 12.381 1.905 L 0.952 1.905 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "32px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        borderRadius: 4,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={1.429} viewBox="0 0 10 1.429" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 5.286,
              width: 10,
              height: 1.429,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.714 1.429 C 0.512 1.429 0.342 1.36 0.205 1.223 C 0.068 1.086 0 0.917 0 0.714 C 0 0.512 0.068 0.342 0.205 0.205 C 0.342 0.068 0.512 0 0.714 0 L 9.286 0 C 9.488 0 9.658 0.068 9.794 0.205 C 9.931 0.342 10 0.512 10 0.714 C 10 0.917 9.931 1.086 9.794 1.223 C 9.658 1.36 9.488 1.429 9.286 1.429 L 0.714 1.429 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={1.429} viewBox="0 0 10 1.429" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 5.286,
              width: 10,
              height: 1.429,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.714 1.429 C 0.512 1.429 0.342 1.36 0.205 1.223 C 0.068 1.086 0 0.917 0 0.714 C 0 0.512 0.068 0.342 0.205 0.205 C 0.342 0.068 0.512 0 0.714 0 L 9.286 0 C 9.488 0 9.658 0.068 9.794 0.205 C 9.931 0.342 10 0.512 10 0.714 C 10 0.917 9.931 1.086 9.794 1.223 C 9.658 1.36 9.488 1.429 9.286 1.429 L 0.714 1.429 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-disabled)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 20 0 C 22.209 0 24 1.791 24 4 L 24 20 C 24 22.209 22.209 24 20 24 L 4 24 C 1.791 24 0 22.209 0 20 L 0 4 Z"} fill="rgb(244,245,247)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1 L 20 1 L 20 0 L 20 -1 L 4 -1 L 4 0 Z M 24 4 L 23 4 L 23 20 L 24 20 L 25 20 L 25 4 L 24 4 Z M 20 24 L 20 23 L 4 23 L 4 24 L 4 25 L 20 25 L 20 24 Z M 0 20 L 1 20 L 1 4 L 0 4 L -1 4 L -1 20 L 0 20 Z M 4 24 L 4 23 C 2.343 23 1 21.657 1 20 L 0 20 L -1 20 C -1 22.761 1.239 25 4 25 L 4 24 Z M 24 20 L 23 20 C 23 21.657 21.657 23 20 23 L 20 24 L 20 25 C 22.761 25 25 22.761 25 20 L 24 20 Z M 20 0 L 20 1 C 21.657 1 23 2.343 23 4 L 24 4 L 25 4 C 25 1.239 22.761 -1 20 -1 L 20 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="rgb(206,207,210)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-disabled)",
      }}>
        <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 16 0 C 18.209 0 20 1.791 20 4 L 20 16 C 20 18.209 18.209 20 16 20 L 4 20 C 1.791 20 0 18.209 0 16 L 0 4 Z"} fill="rgb(244,245,247)" fillRule="nonzero" />
        <path d={"M 4 0 L 4 1 L 16 1 L 16 0 L 16 -1 L 4 -1 L 4 0 Z M 20 4 L 19 4 L 19 16 L 20 16 L 21 16 L 21 4 L 20 4 Z M 16 20 L 16 19 L 4 19 L 4 20 L 4 21 L 16 21 L 16 20 Z M 0 16 L 1 16 L 1 4 L 0 4 L -1 4 L -1 16 L 0 16 Z M 4 20 L 4 19 C 2.343 19 1 17.657 1 16 L 0 16 L -1 16 C -1 18.761 1.239 21 4 21 L 4 20 Z M 20 16 L 19 16 C 19 17.657 17.657 19 16 19 L 16 20 L 16 21 C 18.761 21 21 18.761 21 16 L 20 16 Z M 16 0 L 16 1 C 17.657 1 19 2.343 19 4 L 20 4 L 21 4 C 21 1.239 18.761 -1 16 -1 L 16 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="rgb(206,207,210)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        borderRadius: 4,
        backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-16) * 1px)",
          height: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        borderRadius: 4,
        backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-16) * 1px)",
          height: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={13.333} height={1.905} viewBox="0 0 13.333 1.905" fill="none" style={{
              position: "absolute",
              left: 1.333,
              top: 7.048,
              width: 13.333,
              height: 1.905,
              color: "var(--color-interaction-primary-icon-disabled)",
            }}>
              <path d={"M 0.952 1.905 C 0.683 1.905 0.456 1.813 0.273 1.63 C 0.091 1.448 0 1.222 0 0.952 C 0 0.683 0.091 0.456 0.273 0.273 C 0.456 0.091 0.683 0 0.952 0 L 12.381 0 C 12.651 0 12.877 0.091 13.059 0.273 C 13.242 0.456 13.333 0.683 13.333 0.952 C 13.333 1.222 13.242 1.448 13.059 1.63 C 12.877 1.813 12.651 1.905 12.381 1.905 L 0.952 1.905 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "32px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        borderRadius: 4,
        backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: 1.600000023841858,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-lg) * 1px)",
        height: 20,
        borderRadius: 4,
        backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={1.429} viewBox="0 0 10 1.429" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 5.286,
              width: 10,
              height: 1.429,
              color: "var(--color-interaction-primary-icon-disabled)",
            }}>
              <path d={"M 0.714 1.429 C 0.512 1.429 0.342 1.36 0.205 1.223 C 0.068 1.086 0 0.917 0 0.714 C 0 0.512 0.068 0.342 0.205 0.205 C 0.342 0.068 0.512 0 0.714 0 L 9.286 0 C 9.488 0 9.658 0.068 9.794 0.205 C 9.931 0.342 10 0.512 10 0.714 C 10 0.917 9.931 1.086 9.794 1.223 C 9.658 1.36 9.488 1.429 9.286 1.429 L 0.714 1.429 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-default)",
      }}>
        <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 14 0 C 15.105 0 16 0.895 16 2 L 16 14 C 16 15.105 15.105 16 14 16 L 2 16 C 0.895 16 0 15.105 0 14 L 0 2 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 2 0 L 2 1 L 14 1 L 14 0 L 14 -1 L 2 -1 L 2 0 Z M 16 2 L 15 2 L 15 14 L 16 14 L 17 14 L 17 2 L 16 2 Z M 14 16 L 14 15 L 2 15 L 2 16 L 2 17 L 14 17 L 14 16 Z M 0 14 L 1 14 L 1 2 L 0 2 L -1 2 L -1 14 L 0 14 Z M 2 16 L 2 15 C 1.448 15 1 14.552 1 14 L 0 14 L -1 14 C -1 15.657 0.343 17 2 17 L 2 16 Z M 16 14 L 15 14 C 15 14.552 14.552 15 14 15 L 14 16 L 14 17 C 15.657 17 17 15.657 17 14 L 16 14 Z M 14 0 L 14 1 C 14.552 1 15 1.448 15 2 L 16 2 L 17 2 C 17 0.343 15.657 -1 14 -1 L 14 0 Z M 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 Z"} fill="rgb(136,140,148)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        overflow: "hidden",
        borderRadius: 2,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        overflow: "hidden",
        borderRadius: 2,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={1.429} viewBox="0 0 10 1.429" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 5.286,
              width: 10,
              height: 1.429,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.714 1.429 C 0.512 1.429 0.342 1.36 0.205 1.223 C 0.068 1.086 0 0.917 0 0.714 C 0 0.512 0.068 0.342 0.205 0.205 C 0.342 0.068 0.512 0 0.714 0 L 9.286 0 C 9.488 0 9.658 0.068 9.794 0.205 C 9.931 0.342 10 0.512 10 0.714 C 10 0.917 9.931 1.086 9.794 1.223 C 9.658 1.36 9.488 1.429 9.286 1.429 L 0.714 1.429 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-hover)",
      }}>
        <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 14 0 C 15.105 0 16 0.895 16 2 L 16 14 C 16 15.105 15.105 16 14 16 L 2 16 C 0.895 16 0 15.105 0 14 L 0 2 Z"} fill="rgb(244,245,247)" fillRule="nonzero" />
        <path d={"M 2 0 L 2 1 L 14 1 L 14 0 L 14 -1 L 2 -1 L 2 0 Z M 16 2 L 15 2 L 15 14 L 16 14 L 17 14 L 17 2 L 16 2 Z M 14 16 L 14 15 L 2 15 L 2 16 L 2 17 L 14 17 L 14 16 Z M 0 14 L 1 14 L 1 2 L 0 2 L -1 2 L -1 14 L 0 14 Z M 2 16 L 2 15 C 1.448 15 1 14.552 1 14 L 0 14 L -1 14 C -1 15.657 0.343 17 2 17 L 2 16 Z M 16 14 L 15 14 C 15 14.552 14.552 15 14 15 L 14 16 L 14 17 C 15.657 17 17 15.657 17 14 L 16 14 Z M 14 0 L 14 1 C 14.552 1 15 1.448 15 2 L 16 2 L 17 2 C 17 0.343 15.657 -1 14 -1 L 14 0 Z M 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 Z"} fill="rgb(120,124,135)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        borderRadius: 2,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        borderRadius: 2,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={1.429} viewBox="0 0 10 1.429" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 5.286,
              width: 10,
              height: 1.429,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.714 1.429 C 0.512 1.429 0.342 1.36 0.205 1.223 C 0.068 1.086 0 0.917 0 0.714 C 0 0.512 0.068 0.342 0.205 0.205 C 0.342 0.068 0.512 0 0.714 0 L 9.286 0 C 9.488 0 9.658 0.068 9.794 0.205 C 9.931 0.342 10 0.512 10 0.714 C 10 0.917 9.931 1.086 9.794 1.223 C 9.658 1.36 9.488 1.429 9.286 1.429 L 0.714 1.429 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-active)",
      }}>
        <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 14 0 C 15.105 0 16 0.895 16 2 L 16 14 C 16 15.105 15.105 16 14 16 L 2 16 C 0.895 16 0 15.105 0 14 L 0 2 Z"} fill="rgb(235,236,240)" fillRule="nonzero" />
        <path d={"M 2 0 L 2 1 L 14 1 L 14 0 L 14 -1 L 2 -1 L 2 0 Z M 16 2 L 15 2 L 15 14 L 16 14 L 17 14 L 17 2 L 16 2 Z M 14 16 L 14 15 L 2 15 L 2 16 L 2 17 L 14 17 L 14 16 Z M 0 14 L 1 14 L 1 2 L 0 2 L -1 2 L -1 14 L 0 14 Z M 2 16 L 2 15 C 1.448 15 1 14.552 1 14 L 0 14 L -1 14 C -1 15.657 0.343 17 2 17 L 2 16 Z M 16 14 L 15 14 C 15 14.552 14.552 15 14 15 L 14 16 L 14 17 C 15.657 17 17 15.657 17 14 L 16 14 Z M 14 0 L 14 1 C 14.552 1 15 1.448 15 2 L 16 2 L 17 2 C 17 0.343 15.657 -1 14 -1 L 14 0 Z M 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 Z"} fill="rgb(104,109,120)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        overflow: "hidden",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-subtle-default)",
      }}>
        <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 14 0 C 15.105 0 16 0.895 16 2 L 16 14 C 16 15.105 15.105 16 14 16 L 2 16 C 0.895 16 0 15.105 0 14 L 0 2 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
        <path d={"M 2 0 L 2 1 L 14 1 L 14 0 L 14 -1 L 2 -1 L 2 0 Z M 16 2 L 15 2 L 15 14 L 16 14 L 17 14 L 17 2 L 16 2 Z M 14 16 L 14 15 L 2 15 L 2 16 L 2 17 L 14 17 L 14 16 Z M 0 14 L 1 14 L 1 2 L 0 2 L -1 2 L -1 14 L 0 14 Z M 2 16 L 2 15 C 1.448 15 1 14.552 1 14 L 0 14 L -1 14 C -1 15.657 0.343 17 2 17 L 2 16 Z M 16 14 L 15 14 C 15 14.552 14.552 15 14 15 L 14 16 L 14 17 C 15.657 17 17 15.657 17 14 L 16 14 Z M 14 0 L 14 1 C 14.552 1 15 1.448 15 2 L 16 2 L 17 2 C 17 0.343 15.657 -1 14 -1 L 14 0 Z M 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 Z"} fill="rgb(136,140,148)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        borderRadius: 2,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        borderRadius: 2,
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={1.429} viewBox="0 0 10 1.429" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 5.286,
              width: 10,
              height: 1.429,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.714 1.429 C 0.512 1.429 0.342 1.36 0.205 1.223 C 0.068 1.086 0 0.917 0 0.714 C 0 0.512 0.068 0.342 0.205 0.205 C 0.342 0.068 0.512 0 0.714 0 L 9.286 0 C 9.488 0 9.658 0.068 9.794 0.205 C 9.931 0.342 10 0.512 10 0.714 C 10 0.917 9.931 1.086 9.794 1.223 C 9.658 1.36 9.488 1.429 9.286 1.429 L 0.714 1.429 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "var(--color-interaction-primary-bg-default)",
        boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={1.429} viewBox="0 0 10 1.429" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 5.286,
              width: 10,
              height: 1.429,
              color: "var(--color-icon-on-brand)",
            }}>
              <path d={"M 0.714 1.429 C 0.512 1.429 0.342 1.36 0.205 1.223 C 0.068 1.086 0 0.917 0 0.714 C 0 0.512 0.068 0.342 0.205 0.205 C 0.342 0.068 0.512 0 0.714 0 L 9.286 0 C 9.488 0 9.658 0.068 9.794 0.205 C 9.931 0.342 10 0.512 10 0.714 C 10 0.917 9.931 1.086 9.794 1.223 C 9.658 1.36 9.488 1.429 9.286 1.429 L 0.714 1.429 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
        flexShrink: 0,
        color: "var(--color-interaction-secondary-bg-disabled)",
      }}>
        <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 14 0 C 15.105 0 16 0.895 16 2 L 16 14 C 16 15.105 15.105 16 14 16 L 2 16 C 0.895 16 0 15.105 0 14 L 0 2 Z"} fill="rgb(244,245,247)" fillRule="nonzero" />
        <path d={"M 2 0 L 2 1 L 14 1 L 14 0 L 14 -1 L 2 -1 L 2 0 Z M 16 2 L 15 2 L 15 14 L 16 14 L 17 14 L 17 2 L 16 2 Z M 14 16 L 14 15 L 2 15 L 2 16 L 2 17 L 14 17 L 14 16 Z M 0 14 L 1 14 L 1 2 L 0 2 L -1 2 L -1 14 L 0 14 Z M 2 16 L 2 15 C 1.448 15 1 14.552 1 14 L 0 14 L -1 14 C -1 15.657 0.343 17 2 17 L 2 16 Z M 16 14 L 15 14 C 15 14.552 14.552 15 14 15 L 14 16 L 14 17 C 15.657 17 17 15.657 17 14 L 16 14 Z M 14 0 L 14 1 C 14.552 1 15 1.448 15 2 L 16 2 L 17 2 C 17 0.343 15.657 -1 14 -1 L 14 0 Z M 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 Z"} fill="rgb(206,207,210)" fillRule="nonzero" />
      </svg>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        borderRadius: 2,
        backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
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
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-xs) * 1px)",
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
        width: "calc(var(--sizing-icon-md) * 1px)",
        height: 16,
        borderRadius: 2,
        backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-12) * 1px)",
          height: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={10} height={1.429} viewBox="0 0 10 1.429" fill="none" style={{
              position: "absolute",
              left: 1,
              top: 5.286,
              width: 10,
              height: 1.429,
              color: "var(--color-interaction-primary-icon-disabled)",
            }}>
              <path d={"M 0.714 1.429 C 0.512 1.429 0.342 1.36 0.205 1.223 C 0.068 1.086 0 0.917 0 0.714 C 0 0.512 0.068 0.342 0.205 0.205 C 0.342 0.068 0.512 0 0.714 0 L 9.286 0 C 9.488 0 9.658 0.068 9.794 0.205 C 9.931 0.342 10 0.512 10 0.714 C 10 0.917 9.931 1.086 9.794 1.223 C 9.658 1.36 9.488 1.429 9.286 1.429 L 0.714 1.429 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      {props.label && (
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label2}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: value=unchecked, size=lg(24), state=Default
    "value=unchecked|size=lg|state=default": __body0,
    // figma: value=unchecked, size=md(20), state=Default
    "value=unchecked|size=md|state=default": __body1,
    // figma: value=checked, size=lg(24), state=Default
    "value=checked|size=lg|state=default": __body2,
    // figma: value=indeterminate, size=lg(24), state=Default
    "value=indeterminate|size=lg|state=default": __body3,
    // figma: value=checked, size=md(20), state=Default
    "value=checked|size=md|state=default": __body4,
    // figma: value=indeterminate, size=md(20), state=Default
    "value=indeterminate|size=md|state=default": __body5,
    // figma: value=unchecked, size=lg(24), state=Hover
    "value=unchecked|size=lg|state=hover": __body6,
    // figma: value=unchecked, size=md(20), state=Hover
    "value=unchecked|size=md|state=hover": __body7,
    // figma: value=checked, size=lg(24), state=Hover
    "value=checked|size=lg|state=hover": __body8,
    // figma: value=indeterminate, size=lg(24), state=Hover
    "value=indeterminate|size=lg|state=hover": __body9,
    // figma: value=checked, size=md(20), state=Hover
    "value=checked|size=md|state=hover": __body10,
    // figma: value=indeterminate, size=md(20), state=Hover
    "value=indeterminate|size=md|state=hover": __body11,
    // figma: value=unchecked, size=lg(24), state=Active
    "value=unchecked|size=lg|state=active": __body12,
    // figma: value=unchecked, size=lg(24), state=Focus-visible
    "value=unchecked|size=lg|state=focus-visible": __body13,
    // figma: value=unchecked, size=md(20), state=Active
    "value=unchecked|size=md|state=active": __body14,
    // figma: value=unchecked, size=md(20), state=Focus-visible
    "value=unchecked|size=md|state=focus-visible": __body15,
    // figma: value=checked, size=lg(24), state=Active
    "value=checked|size=lg|state=active": __body16,
    // figma: value=indeterminate, size=lg(24), state=Active
    "value=indeterminate|size=lg|state=active": __body17,
    // figma: value=checked, size=lg(24), state=Focus-visible
    "value=checked|size=lg|state=focus-visible": __body18,
    // figma: value=indeterminate, size=lg(24), state=Focus-visible
    "value=indeterminate|size=lg|state=focus-visible": __body19,
    // figma: value=checked, size=md(20), state=Active
    "value=checked|size=md|state=active": __body20,
    // figma: value=indeterminate, size=md(20), state=Active
    "value=indeterminate|size=md|state=active": __body21,
    // figma: value=checked, size=md(20), state=Focus-visible
    "value=checked|size=md|state=focus-visible": __body22,
    // figma: value=indeterminate, size=md(20), state=Focus-visible
    "value=indeterminate|size=md|state=focus-visible": __body23,
    // figma: value=unchecked, size=lg(24), state=Disabled
    "value=unchecked|size=lg|state=disabled": __body24,
    // figma: value=unchecked, size=md(20), state=Disabled
    "value=unchecked|size=md|state=disabled": __body25,
    // figma: value=checked, size=lg(24), state=Disabled
    "value=checked|size=lg|state=disabled": __body26,
    // figma: value=indeterminate, size=lg(24), state=Disabled
    "value=indeterminate|size=lg|state=disabled": __body27,
    // figma: value=checked, size=md(20), state=Disabled
    "value=checked|size=md|state=disabled": __body28,
    // figma: value=indeterminate, size=md(20), state=Disabled
    "value=indeterminate|size=md|state=disabled": __body29,
    // figma: value=unchecked, size=sm(16), state=Default
    "value=unchecked|size=sm|state=default": __body30,
    // figma: value=checked, size=sm(16), state=Default
    "value=checked|size=sm|state=default": __body31,
    // figma: value=indeterminate, size=sm(16), state=Default
    "value=indeterminate|size=sm|state=default": __body32,
    // figma: value=unchecked, size=sm(16), state=Hover
    "value=unchecked|size=sm|state=hover": __body33,
    // figma: value=checked, size=sm(16), state=Hover
    "value=checked|size=sm|state=hover": __body34,
    // figma: value=indeterminate, size=sm(16), state=Hover
    "value=indeterminate|size=sm|state=hover": __body35,
    // figma: value=unchecked, size=sm(16), state=Active
    "value=unchecked|size=sm|state=active": __body36,
    // figma: value=unchecked, size=sm(16), state=Focus-visible
    "value=unchecked|size=sm|state=focus-visible": __body37,
    // figma: value=checked, size=sm(16), state=Active
    "value=checked|size=sm|state=active": __body38,
    // figma: value=indeterminate, size=sm(16), state=Active
    "value=indeterminate|size=sm|state=active": __body39,
    // figma: value=checked, size=sm(16), state=Focus-visible
    "value=checked|size=sm|state=focus-visible": __body40,
    // figma: value=indeterminate, size=sm(16), state=Focus-visible
    "value=indeterminate|size=sm|state=focus-visible": __body41,
    // figma: value=unchecked, size=sm(16), state=Disabled
    "value=unchecked|size=sm|state=disabled": __body42,
    // figma: value=checked, size=sm(16), state=Disabled
    "value=checked|size=sm|state=disabled": __body43,
    // figma: value=indeterminate, size=sm(16), state=Disabled
    "value=indeterminate|size=sm|state=disabled": __body44,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Checkbox2;
