// figma node: 520:8154 Toast (토스트) (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "intent=" + __venc(p.intent);

export function Toast(_p = {}) {
  const props = { ..._p, intent: _p.intent ?? "info", iconButton: _p.iconButton ?? true, text: _p.text ?? "메시지 내용 최대 1줄" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 480,
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-raised)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-lg) * 1px)",
          height: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={16.667} height={16.667} viewBox="0 0 16.667 16.667" fill="none" style={{
              position: "absolute",
              left: 1.667,
              top: 1.667,
              width: 16.667,
              height: 16.667,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 8.333 12.5 C 8.569 12.5 8.767 12.42 8.927 12.26 C 9.087 12.101 9.167 11.903 9.167 11.667 L 9.167 8.313 C 9.167 8.076 9.087 7.882 8.927 7.729 C 8.767 7.576 8.569 7.5 8.333 7.5 C 8.097 7.5 7.899 7.58 7.74 7.739 C 7.58 7.899 7.5 8.097 7.5 8.333 L 7.5 11.687 C 7.5 11.924 7.58 12.118 7.74 12.271 C 7.899 12.424 8.097 12.5 8.333 12.5 Z M 8.333 5.833 C 8.569 5.833 8.767 5.753 8.927 5.593 C 9.087 5.434 9.167 5.236 9.167 5 C 9.167 4.764 9.087 4.566 8.927 4.406 C 8.767 4.246 8.569 4.167 8.333 4.167 C 8.097 4.167 7.899 4.246 7.74 4.406 C 7.58 4.566 7.5 4.764 7.5 5 C 7.5 5.236 7.58 5.434 7.74 5.593 C 7.899 5.753 8.097 5.833 8.333 5.833 Z M 8.333 16.667 C 7.181 16.667 6.097 16.448 5.083 16.01 C 4.069 15.573 3.188 14.979 2.438 14.229 C 1.688 13.479 1.094 12.597 0.657 11.583 C 0.219 10.569 0 9.486 0 8.333 C 0 7.181 0.219 6.097 0.657 5.083 C 1.094 4.069 1.688 3.188 2.438 2.438 C 3.188 1.688 4.069 1.094 5.083 0.656 C 6.097 0.219 7.181 0 8.333 0 C 9.486 0 10.569 0.219 11.583 0.656 C 12.597 1.094 13.479 1.688 14.229 2.438 C 14.979 3.188 15.573 4.069 16.01 5.083 C 16.448 6.097 16.667 7.181 16.667 8.333 C 16.667 9.486 16.448 10.569 16.01 11.583 C 15.573 12.597 14.979 13.479 14.229 14.229 C 13.479 14.979 12.597 15.573 11.583 16.01 C 10.569 16.448 9.486 16.667 8.333 16.667 Z M 8.333 15 C 10.181 15 11.754 14.351 13.052 13.052 C 14.351 11.754 15 10.181 15 8.333 C 15 6.486 14.351 4.913 13.052 3.614 C 11.754 2.316 10.181 1.667 8.333 1.667 C 6.486 1.667 4.913 2.316 3.615 3.614 C 2.316 4.913 1.667 6.486 1.667 8.333 C 1.667 10.181 2.316 11.754 3.615 13.052 C 4.913 14.351 6.486 15 8.333 15 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexGrow: 1,
        }}>{props.text}</span>
      </div>
      {props.iconButton && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-control-4xs) * 1px)",
        height: "calc(var(--sizing-control-4xs) * 1px)",
        overflow: "hidden",
        borderRadius: 4,
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
          width: "calc(var(--sizing-icon-sm) * 1px)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 480,
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-raised)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-lg) * 1px)",
          height: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
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
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexGrow: 1,
        }}>{props.text}</span>
      </div>
      {props.iconButton && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-control-4xs) * 1px)",
        height: "calc(var(--sizing-control-4xs) * 1px)",
        overflow: "hidden",
        borderRadius: 4,
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
          width: "calc(var(--sizing-icon-sm) * 1px)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 480,
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-raised)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-lg) * 1px)",
          height: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={17.104} height={15} viewBox="0 0 17.104 15" fill="none" style={{
              position: "absolute",
              left: 1.448,
              top: 2.5,
              width: 17.104,
              height: 15,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 0.823 15 C 0.503 15 0.267 14.861 0.115 14.583 C -0.038 14.306 -0.038 14.028 0.115 13.75 L 7.823 0.417 C 7.976 0.139 8.219 0 8.552 0 C 8.885 0 9.128 0.139 9.281 0.417 L 16.99 13.75 C 17.142 14.028 17.142 14.306 16.99 14.583 C 16.837 14.861 16.601 15 16.281 15 L 0.823 15 Z M 8.552 5.833 C 8.316 5.833 8.118 5.913 7.959 6.072 C 7.799 6.232 7.719 6.431 7.719 6.667 L 7.719 9.167 C 7.719 9.403 7.799 9.601 7.959 9.76 C 8.118 9.92 8.316 10 8.552 10 C 8.788 10 8.986 9.92 9.146 9.76 C 9.306 9.601 9.385 9.403 9.385 9.167 L 9.385 6.667 C 9.385 6.431 9.306 6.232 9.146 6.072 C 8.986 5.913 8.788 5.833 8.552 5.833 Z M 8.552 12.5 C 8.788 12.5 8.986 12.42 9.146 12.26 C 9.306 12.101 9.385 11.903 9.385 11.667 C 9.385 11.431 9.306 11.233 9.146 11.073 C 8.986 10.913 8.788 10.833 8.552 10.833 C 8.316 10.833 8.118 10.913 7.959 11.073 C 7.799 11.233 7.719 11.431 7.719 11.667 C 7.719 11.903 7.799 12.101 7.959 12.26 C 8.118 12.42 8.316 12.5 8.552 12.5 Z M 2.26 13.333 L 14.844 13.333 L 8.552 2.5 L 2.26 13.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexGrow: 1,
        }}>{props.text}</span>
      </div>
      {props.iconButton && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-control-4xs) * 1px)",
        height: "calc(var(--sizing-control-4xs) * 1px)",
        overflow: "hidden",
        borderRadius: 4,
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
          width: "calc(var(--sizing-icon-sm) * 1px)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 480,
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-raised)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          width: "calc(var(--sizing-icon-lg) * 1px)",
          height: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={16.708} height={16.708} viewBox="0 0 16.708 16.708" fill="none" style={{
              position: "absolute",
              left: 1.646,
              top: 1.646,
              width: 16.708,
              height: 16.708,
              color: "rgb(255,255,255)",
            }}>
              <path d={"M 9.542 16.229 C 9.375 16.396 9.191 16.517 8.989 16.593 C 8.788 16.67 8.576 16.708 8.354 16.708 C 8.132 16.708 7.92 16.67 7.719 16.593 C 7.517 16.517 7.333 16.396 7.167 16.229 L 0.479 9.542 C 0.312 9.375 0.191 9.191 0.114 8.989 C 0.038 8.788 0 8.576 0 8.354 C 0 8.132 0.038 7.92 0.114 7.719 C 0.191 7.517 0.312 7.333 0.479 7.167 L 7.167 0.479 C 7.333 0.312 7.517 0.191 7.719 0.114 C 7.92 0.038 8.132 0 8.354 0 C 8.576 0 8.788 0.038 8.989 0.114 C 9.191 0.191 9.375 0.312 9.542 0.479 L 16.229 7.167 C 16.396 7.333 16.517 7.517 16.594 7.719 C 16.67 7.92 16.708 8.132 16.708 8.354 C 16.708 8.576 16.67 8.788 16.594 8.989 C 16.517 9.191 16.396 9.375 16.229 9.542 L 9.542 16.229 Z M 8.354 15.042 L 15.042 8.354 L 8.354 1.667 L 1.667 8.354 L 8.354 15.042 Z M 8.354 9.187 C 8.59 9.187 8.788 9.107 8.948 8.947 C 9.108 8.788 9.187 8.59 9.187 8.354 L 9.187 5.021 C 9.187 4.785 9.108 4.587 8.948 4.427 C 8.788 4.267 8.59 4.188 8.354 4.188 C 8.118 4.188 7.92 4.267 7.761 4.427 C 7.601 4.587 7.521 4.785 7.521 5.021 L 7.521 8.354 C 7.521 8.59 7.601 8.788 7.761 8.947 C 7.92 9.107 8.118 9.187 8.354 9.187 Z M 8.354 11.687 C 8.59 11.687 8.788 11.607 8.948 11.447 C 9.108 11.288 9.187 11.09 9.187 10.854 C 9.187 10.618 9.108 10.42 8.948 10.26 C 8.788 10.101 8.59 10.021 8.354 10.021 C 8.118 10.021 7.92 10.101 7.761 10.26 C 7.601 10.42 7.521 10.618 7.521 10.854 C 7.521 11.09 7.601 11.288 7.761 11.447 C 7.92 11.607 8.118 11.687 8.354 11.687 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "var(--color-text-primary)",
          flexGrow: 1,
        }}>{props.text}</span>
      </div>
      {props.iconButton && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-control-4xs) * 1px)",
        height: "calc(var(--sizing-control-4xs) * 1px)",
        overflow: "hidden",
        borderRadius: 4,
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
          width: "calc(var(--sizing-icon-sm) * 1px)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 480,
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-raised)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-gap-lg) * 1px)",
      padding: "0px 20px 0px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
      paddingRight: "calc(var(--spacing-padding-h-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: "-0.030em",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.text}</span>
      {props.iconButton && (
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-control-4xs) * 1px)",
        height: "calc(var(--sizing-control-4xs) * 1px)",
        overflow: "hidden",
        borderRadius: 4,
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
          width: "calc(var(--sizing-icon-sm) * 1px)",
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
              color: "var(--color-icon-basic)",
            }}>
              <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: intent=Info
    "intent=info": __body0,
    // figma: intent=Success
    "intent=success": __body1,
    // figma: intent=Warning
    "intent=warning": __body2,
    // figma: intent=Error
    "intent=error": __body3,
    // figma: intent=None
    "intent=none": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Toast;
