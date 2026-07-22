import { DotBadge } from './DotBadge.jsx';

// figma node: 118:13569 IconButton (300 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "color=" + __venc(p.color) + '|' + "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function IconButton(_p = {}) {
  const props = { ..._p, badge: _p.badge ?? false, variant: _p.variant ?? "fill", color: _p.color ?? "primary", state: _p.state ?? "default", size: _p.size ?? "3xl" };
  const __body0 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body91 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body96 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body97 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body98 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body99 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body100 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body101 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body102 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body103 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body104 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body105 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body106 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body107 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body108 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body109 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body110 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body111 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body112 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body113 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body114 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body115 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body116 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body117 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body118 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body119 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body120 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body121 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body122 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body123 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body124 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body125 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body126 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body127 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body128 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body129 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body130 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body131 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body132 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body133 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body134 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body135 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body136 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body137 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body138 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body139 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body140 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body141 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body142 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body143 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body144 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-on-brand)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body145 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body146 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body147 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body148 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body149 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body150 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body151 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body152 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body153 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body154 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body155 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body156 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body157 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body158 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body159 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body160 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body161 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body162 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body163 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body164 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body165 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body166 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body167 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body168 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body169 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body170 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body171 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body172 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body173 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body174 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body175 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body176 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body177 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body178 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body179 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body180 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body181 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body182 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body183 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body184 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body185 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body186 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body187 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body188 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body189 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body190 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body191 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body192 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body193 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body194 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-muted-default)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body195 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body196 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body197 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body198 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body199 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body200 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body201 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body202 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body203 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body204 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body205 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body206 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body207 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body208 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body209 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body210 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body211 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body212 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body213 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body214 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body215 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body216 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body217 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body218 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body219 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body220 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body221 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body222 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body223 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body224 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body225 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body226 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body227 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body228 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body229 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body230 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body231 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body232 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body233 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body234 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-hover)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body235 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body236 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body237 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body238 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body239 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-primary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-active)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body240 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body241 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body242 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body243 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body244 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-default)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body245 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body246 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body247 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body248 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body249 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-primary-border-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-primary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body250 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body251 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body252 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body253 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body254 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-4xs) * 1px)",
      height: "calc(var(--sizing-control-4xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 14,
          top: 4,
          width: 2,
          height: 2,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"sm"} />}</div>
      )}
    </div>
  );
  const __body255 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body256 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body257 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body258 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body259 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xs) * 1px)",
      height: "calc(var(--sizing-control-3xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 16,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body260 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body261 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body262 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body263 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body264 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xs) * 1px)",
      height: "calc(var(--sizing-control-2xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 20,
          top: 4,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body265 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body266 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body267 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body268 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body269 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xs) * 1px)",
      height: "calc(var(--sizing-control-xs) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-md) * 1px)",
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.524 11.81 L 3.81 11.81 L 3.81 7.238 L 8.381 7.238 L 8.381 11.81 L 10.667 11.81 L 10.667 4.952 L 6.095 1.524 L 1.524 4.952 L 1.524 11.81 Z M 1.524 13.333 C 1.105 13.333 0.746 13.184 0.448 12.886 C 0.149 12.587 0 12.229 0 11.81 L 0 4.952 C 0 4.711 0.054 4.483 0.162 4.267 C 0.27 4.051 0.419 3.873 0.61 3.733 L 5.181 0.305 C 5.321 0.203 5.467 0.127 5.619 0.076 C 5.771 0.025 5.93 0 6.095 0 C 6.26 0 6.419 0.025 6.571 0.076 C 6.724 0.127 6.87 0.203 7.01 0.305 L 11.581 3.733 C 11.771 3.873 11.921 4.051 12.029 4.267 C 12.137 4.483 12.19 4.711 12.19 4.952 L 12.19 11.81 C 12.19 12.229 12.041 12.587 11.743 12.886 C 11.445 13.184 11.086 13.333 10.667 13.333 L 6.857 13.333 L 6.857 8.762 L 5.333 8.762 L 5.333 13.333 L 1.524 13.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 22,
          top: 6,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body270 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body271 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body272 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body273 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body274 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-sm) * 1px)",
      height: "calc(var(--sizing-control-sm) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 25,
          top: 7,
          width: 4,
          height: 4,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"md"} />}</div>
      )}
    </div>
  );
  const __body275 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body276 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body277 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body278 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body279 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body280 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body281 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body282 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body283 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body284 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-hover)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-hover)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body285 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body286 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body287 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body288 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body289 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-interaction-secondary-bg-subtle-active)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-active)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-primary)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body290 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body291 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body292 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body293 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body294 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgba(255,255,255,0.001)",
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-default), 0px 0px 0px 2px rgb(194,211,255)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-icon-basic)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body295 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-md) * 1px)",
      height: "calc(var(--sizing-control-md) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 27,
          top: 7,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body296 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-lg) * 1px)",
      height: "calc(var(--sizing-control-lg) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
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
      position: "relative",
      ...props.style,
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
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 1.905 14.762 L 4.762 14.762 L 4.762 9.048 L 10.476 9.048 L 10.476 14.762 L 13.333 14.762 L 13.333 6.19 L 7.619 1.905 L 1.905 6.19 L 1.905 14.762 Z M 1.905 16.667 C 1.381 16.667 0.933 16.48 0.56 16.108 C 0.187 15.734 0 15.286 0 14.762 L 0 6.19 C 0 5.889 0.068 5.603 0.203 5.333 C 0.337 5.063 0.524 4.841 0.762 4.667 L 6.476 0.381 C 6.651 0.254 6.833 0.159 7.024 0.095 C 7.214 0.032 7.413 0 7.619 0 C 7.825 0 8.024 0.032 8.214 0.095 C 8.405 0.159 8.587 0.254 8.762 0.381 L 14.476 4.667 C 14.714 4.841 14.901 5.063 15.036 5.333 C 15.171 5.603 15.238 5.889 15.238 6.19 L 15.238 14.762 C 15.238 15.286 15.052 15.734 14.679 16.108 C 14.306 16.48 13.857 16.667 13.333 16.667 L 8.571 16.667 L 8.571 10.952 L 6.667 10.952 L 6.667 16.667 L 1.905 16.667 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 30,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __body297 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-3xl) * 1px)",
      height: "calc(var(--sizing-control-3xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-2xl) * 1px)",
        height: 28,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 28,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={21.333} height={23.333} viewBox="0 0 21.333 23.333" fill="none" style={{
            position: "absolute",
            left: 3.333,
            top: 2.333,
            width: 21.333,
            height: 23.333,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 2.667 20.667 L 6.667 20.667 L 6.667 12.667 L 14.667 12.667 L 14.667 20.667 L 18.667 20.667 L 18.667 8.667 L 10.667 2.667 L 2.667 8.667 L 2.667 20.667 Z M 2.667 23.333 C 1.933 23.333 1.306 23.072 0.784 22.551 C 0.261 22.028 0 21.4 0 20.667 L 0 8.667 C 0 8.244 0.095 7.844 0.284 7.467 C 0.472 7.089 0.733 6.778 1.067 6.533 L 9.067 0.533 C 9.311 0.356 9.567 0.222 9.833 0.133 C 10.1 0.044 10.378 0 10.667 0 C 10.956 0 11.233 0.044 11.5 0.133 C 11.767 0.222 12.022 0.356 12.267 0.533 L 20.267 6.533 C 20.6 6.778 20.861 7.089 21.051 7.467 C 21.239 7.844 21.333 8.244 21.333 8.667 L 21.333 20.667 C 21.333 21.4 21.072 22.028 20.551 22.551 C 20.028 23.072 19.4 23.333 18.667 23.333 L 12 23.333 L 12 15.333 L 9.333 15.333 L 9.333 23.333 L 2.667 23.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 40,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body298 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-2xl) * 1px)",
      height: "calc(var(--sizing-control-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 36,
          top: 8,
          width: 8,
          height: 8,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"xl"} />}</div>
      )}
    </div>
  );
  const __body299 = () => (
    <div className={props.className} style={{
      width: "calc(var(--sizing-control-xl) * 1px)",
      height: "calc(var(--sizing-control-xl) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--color-interaction-secondary-border-disabled)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "calc(var(--sizing-icon-xl) * 1px)",
        height: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={18.286} height={20} viewBox="0 0 18.286 20" fill="none" style={{
            position: "absolute",
            left: 2.857,
            top: 2,
            width: 18.286,
            height: 20,
            color: "var(--color-interaction-secondary-icon-disabled)",
          }}>
            <path d={"M 2.286 17.714 L 5.714 17.714 L 5.714 10.857 L 12.571 10.857 L 12.571 17.714 L 16 17.714 L 16 7.429 L 9.143 2.286 L 2.286 7.429 L 2.286 17.714 Z M 2.286 20 C 1.657 20 1.119 19.776 0.672 19.329 C 0.224 18.881 0 18.343 0 17.714 L 0 7.429 C 0 7.067 0.081 6.724 0.243 6.4 C 0.405 6.076 0.629 5.81 0.914 5.6 L 7.771 0.457 C 7.981 0.305 8.2 0.19 8.429 0.114 C 8.657 0.038 8.895 0 9.143 0 C 9.39 0 9.629 0.038 9.857 0.114 C 10.086 0.19 10.305 0.305 10.514 0.457 L 17.371 5.6 C 17.657 5.81 17.881 6.076 18.043 6.4 C 18.205 6.724 18.286 7.067 18.286 7.429 L 18.286 17.714 C 18.286 18.343 18.062 18.881 17.615 19.329 C 17.167 19.776 16.629 20 16 20 L 10.286 20 L 10.286 13.143 L 8 13.143 L 8 20 L 2.286 20 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.badge && (
      <div style={{
          position: "absolute",
          left: 34,
          top: 8,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <DotBadge variant={"new"} size={"lg"} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: variant=ghost, color=primary, size=4XS(20), state=Default
    "variant=ghost|color=primary|state=default|size=4xs": __body0,
    // figma: variant=ghost, color=primary, size=4XS(20), state=Hover
    "variant=ghost|color=primary|state=hover|size=4xs": __body1,
    // figma: variant=ghost, color=primary, size=4XS(20), state=Active
    "variant=ghost|color=primary|state=active|size=4xs": __body2,
    // figma: variant=ghost, color=primary, size=4XS(20), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=4xs": __body3,
    // figma: variant=ghost, color=primary, size=4XS(20), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=4xs": __body4,
    // figma: variant=ghost, color=primary, size=3xs(24), state=Default
    "variant=ghost|color=primary|state=default|size=3xs": __body5,
    // figma: variant=ghost, color=primary, size=3xs(24), state=Hover
    "variant=ghost|color=primary|state=hover|size=3xs": __body6,
    // figma: variant=ghost, color=primary, size=3xs(24), state=Active
    "variant=ghost|color=primary|state=active|size=3xs": __body7,
    // figma: variant=ghost, color=primary, size=3xs(24), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=3xs": __body8,
    // figma: variant=ghost, color=primary, size=3xs(24), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=3xs": __body9,
    // figma: variant=ghost, color=primary, size=2xs(28), state=Default
    "variant=ghost|color=primary|state=default|size=2xs": __body10,
    // figma: variant=ghost, color=primary, size=2xs(28), state=Hover
    "variant=ghost|color=primary|state=hover|size=2xs": __body11,
    // figma: variant=ghost, color=primary, size=2xs(28), state=Active
    "variant=ghost|color=primary|state=active|size=2xs": __body12,
    // figma: variant=ghost, color=primary, size=2xs(28), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=2xs": __body13,
    // figma: variant=ghost, color=primary, size=2xs(28), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=2xs": __body14,
    // figma: variant=ghost, color=primary, size=xs(32), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=xs": __body15,
    // figma: variant=ghost, color=primary, size=xs(32), state=Default
    "variant=ghost|color=primary|state=default|size=xs": __body16,
    // figma: variant=ghost, color=primary, size=xs(32), state=Hover
    "variant=ghost|color=primary|state=hover|size=xs": __body17,
    // figma: variant=ghost, color=primary, size=xs(32), state=Active
    "variant=ghost|color=primary|state=active|size=xs": __body18,
    // figma: variant=ghost, color=primary, size=xs(32), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=xs": __body19,
    // figma: variant=ghost, color=primary, size=sm(36), state=Default
    "variant=ghost|color=primary|state=default|size=sm": __body20,
    // figma: variant=ghost, color=primary, size=sm(36), state=Hover
    "variant=ghost|color=primary|state=hover|size=sm": __body21,
    // figma: variant=ghost, color=primary, size=sm(36), state=Active
    "variant=ghost|color=primary|state=active|size=sm": __body22,
    // figma: variant=ghost, color=primary, size=sm(36), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=sm": __body23,
    // figma: variant=ghost, color=primary, size=sm(36), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=sm": __body24,
    // figma: variant=ghost, color=primary, size=md(40), state=Default
    "variant=ghost|color=primary|state=default|size=md": __body25,
    // figma: variant=ghost, color=primary, size=lg(44), state=Default
    "variant=ghost|color=primary|state=default|size=lg": __body26,
    // figma: variant=ghost, color=primary, size=3xl(56), state=Default
    "variant=ghost|color=primary|state=default|size=3xl": __body27,
    // figma: variant=ghost, color=primary, size=2xl(52), state=Default
    "variant=ghost|color=primary|state=default|size=2xl": __body28,
    // figma: variant=ghost, color=primary, size=xl(48), state=Default
    "variant=ghost|color=primary|state=default|size=xl": __body29,
    // figma: variant=ghost, color=primary, size=md(40), state=Hover
    "variant=ghost|color=primary|state=hover|size=md": __body30,
    // figma: variant=ghost, color=primary, size=lg(44), state=Hover
    "variant=ghost|color=primary|state=hover|size=lg": __body31,
    // figma: variant=ghost, color=primary, size=3xl(56), state=Hover
    "variant=ghost|color=primary|state=hover|size=3xl": __body32,
    // figma: variant=ghost, color=primary, size=2xl(52), state=Hover
    "variant=ghost|color=primary|state=hover|size=2xl": __body33,
    // figma: variant=ghost, color=primary, size=xl(48), state=Hover
    "variant=ghost|color=primary|state=hover|size=xl": __body34,
    // figma: variant=ghost, color=primary, size=md(40), state=Active
    "variant=ghost|color=primary|state=active|size=md": __body35,
    // figma: variant=ghost, color=primary, size=lg(44), state=Active
    "variant=ghost|color=primary|state=active|size=lg": __body36,
    // figma: variant=ghost, color=primary, size=3xl(56), state=Active
    "variant=ghost|color=primary|state=active|size=3xl": __body37,
    // figma: variant=ghost, color=primary, size=2xl(52), state=Active
    "variant=ghost|color=primary|state=active|size=2xl": __body38,
    // figma: variant=ghost, color=primary, size=xl(48), state=Active
    "variant=ghost|color=primary|state=active|size=xl": __body39,
    // figma: variant=ghost, color=primary, size=md(40), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=md": __body40,
    // figma: variant=ghost, color=primary, size=lg(44), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=lg": __body41,
    // figma: variant=ghost, color=primary, size=3xl(56), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=3xl": __body42,
    // figma: variant=ghost, color=primary, size=2xl(52), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=2xl": __body43,
    // figma: variant=ghost, color=primary, size=xl(48), state=Focus-visible
    "variant=ghost|color=primary|state=focus-visible|size=xl": __body44,
    // figma: variant=ghost, color=primary, size=md(40), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=md": __body45,
    // figma: variant=ghost, color=primary, size=lg(44), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=lg": __body46,
    // figma: variant=ghost, color=primary, size=3xl(56), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=3xl": __body47,
    // figma: variant=ghost, color=primary, size=2xl(52), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=2xl": __body48,
    // figma: variant=ghost, color=primary, size=xl(48), state=Disabled
    "variant=ghost|color=primary|state=disabled|size=xl": __body49,
    // figma: variant=ghost, color=grayscale, size=4XS(20), state=Default
    "variant=ghost|color=grayscale|state=default|size=4xs": __body50,
    // figma: variant=ghost, color=grayscale, size=4XS(20), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=4xs": __body51,
    // figma: variant=ghost, color=grayscale, size=4XS(20), state=Active
    "variant=ghost|color=grayscale|state=active|size=4xs": __body52,
    // figma: variant=ghost, color=grayscale, size=4XS(20), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=4xs": __body53,
    // figma: variant=ghost, color=grayscale, size=4XS(20), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=4xs": __body54,
    // figma: variant=ghost, color=grayscale, size=3xs(24), state=Default
    "variant=ghost|color=grayscale|state=default|size=3xs": __body55,
    // figma: variant=ghost, color=grayscale, size=3xs(24), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=3xs": __body56,
    // figma: variant=ghost, color=grayscale, size=3xs(24), state=Active
    "variant=ghost|color=grayscale|state=active|size=3xs": __body57,
    // figma: variant=ghost, color=grayscale, size=3xs(24), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=3xs": __body58,
    // figma: variant=ghost, color=grayscale, size=3xs(24), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=3xs": __body59,
    // figma: variant=ghost, color=grayscale, size=2xs(28), state=Default
    "variant=ghost|color=grayscale|state=default|size=2xs": __body60,
    // figma: variant=ghost, color=grayscale, size=2xs(28), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=2xs": __body61,
    // figma: variant=ghost, color=grayscale, size=2xs(28), state=Active
    "variant=ghost|color=grayscale|state=active|size=2xs": __body62,
    // figma: variant=ghost, color=grayscale, size=2xs(28), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=2xs": __body63,
    // figma: variant=ghost, color=grayscale, size=2xs(28), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=2xs": __body64,
    // figma: variant=ghost, color=grayscale, size=xs(32), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=xs": __body65,
    // figma: variant=ghost, color=grayscale, size=xs(32), state=Default
    "variant=ghost|color=grayscale|state=default|size=xs": __body66,
    // figma: variant=ghost, color=grayscale, size=xs(32), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=xs": __body67,
    // figma: variant=ghost, color=grayscale, size=xs(32), state=Active
    "variant=ghost|color=grayscale|state=active|size=xs": __body68,
    // figma: variant=ghost, color=grayscale, size=xs(32), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=xs": __body69,
    // figma: variant=ghost, color=grayscale, size=sm(36), state=Default
    "variant=ghost|color=grayscale|state=default|size=sm": __body70,
    // figma: variant=ghost, color=grayscale, size=sm(36), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=sm": __body71,
    // figma: variant=ghost, color=grayscale, size=sm(36), state=Active
    "variant=ghost|color=grayscale|state=active|size=sm": __body72,
    // figma: variant=ghost, color=grayscale, size=sm(36), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=sm": __body73,
    // figma: variant=ghost, color=grayscale, size=sm(36), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=sm": __body74,
    // figma: variant=ghost, color=grayscale, size=md(40), state=Default
    "variant=ghost|color=grayscale|state=default|size=md": __body75,
    // figma: variant=ghost, color=grayscale, size=lg(44), state=Default
    "variant=ghost|color=grayscale|state=default|size=lg": __body76,
    // figma: variant=ghost, color=grayscale, size=3xl(56), state=Default
    "variant=ghost|color=grayscale|state=default|size=3xl": __body77,
    // figma: variant=ghost, color=grayscale, size=2xl(52), state=Default
    "variant=ghost|color=grayscale|state=default|size=2xl": __body78,
    // figma: variant=ghost, color=grayscale, size=xl(48), state=Default
    "variant=ghost|color=grayscale|state=default|size=xl": __body79,
    // figma: variant=ghost, color=grayscale, size=md(40), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=md": __body80,
    // figma: variant=ghost, color=grayscale, size=lg(44), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=lg": __body81,
    // figma: variant=ghost, color=grayscale, size=3xl(56), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=3xl": __body82,
    // figma: variant=ghost, color=grayscale, size=2xl(52), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=2xl": __body83,
    // figma: variant=ghost, color=grayscale, size=xl(48), state=Hover
    "variant=ghost|color=grayscale|state=hover|size=xl": __body84,
    // figma: variant=ghost, color=grayscale, size=md(40), state=Active
    "variant=ghost|color=grayscale|state=active|size=md": __body85,
    // figma: variant=ghost, color=grayscale, size=lg(44), state=Active
    "variant=ghost|color=grayscale|state=active|size=lg": __body86,
    // figma: variant=ghost, color=grayscale, size=3xl(56), state=Active
    "variant=ghost|color=grayscale|state=active|size=3xl": __body87,
    // figma: variant=ghost, color=grayscale, size=2xl(52), state=Active
    "variant=ghost|color=grayscale|state=active|size=2xl": __body88,
    // figma: variant=ghost, color=grayscale, size=xl(48), state=Active
    "variant=ghost|color=grayscale|state=active|size=xl": __body89,
    // figma: variant=ghost, color=grayscale, size=md(40), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=md": __body90,
    // figma: variant=ghost, color=grayscale, size=lg(44), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=lg": __body91,
    // figma: variant=ghost, color=grayscale, size=3xl(56), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=3xl": __body92,
    // figma: variant=ghost, color=grayscale, size=2xl(52), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=2xl": __body93,
    // figma: variant=ghost, color=grayscale, size=xl(48), state=Focus-visible
    "variant=ghost|color=grayscale|state=focus-visible|size=xl": __body94,
    // figma: variant=ghost, color=grayscale, size=md(40), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=md": __body95,
    // figma: variant=ghost, color=grayscale, size=lg(44), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=lg": __body96,
    // figma: variant=ghost, color=grayscale, size=3xl(56), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=3xl": __body97,
    // figma: variant=ghost, color=grayscale, size=2xl(52), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=2xl": __body98,
    // figma: variant=ghost, color=grayscale, size=xl(48), state=Disabled
    "variant=ghost|color=grayscale|state=disabled|size=xl": __body99,
    // figma: variant=fill, color=primary, size=4XS(20), state=Default
    "variant=fill|color=primary|state=default|size=4xs": __body100,
    // figma: variant=fill, color=primary, size=4XS(20), state=Hover
    "variant=fill|color=primary|state=hover|size=4xs": __body101,
    // figma: variant=fill, color=primary, size=4XS(20), state=Active
    "variant=fill|color=primary|state=active|size=4xs": __body102,
    // figma: variant=fill, color=primary, size=4XS(20), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=4xs": __body103,
    // figma: variant=fill, color=primary, size=4XS(20), state=Disabled
    "variant=fill|color=primary|state=disabled|size=4xs": __body104,
    // figma: variant=fill, color=primary, size=3xs(24), state=Default
    "variant=fill|color=primary|state=default|size=3xs": __body105,
    // figma: variant=fill, color=primary, size=3xs(24), state=Hover
    "variant=fill|color=primary|state=hover|size=3xs": __body106,
    // figma: variant=fill, color=primary, size=3xs(24), state=Active
    "variant=fill|color=primary|state=active|size=3xs": __body107,
    // figma: variant=fill, color=primary, size=3xs(24), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=3xs": __body108,
    // figma: variant=fill, color=primary, size=3xs(24), state=Disabled
    "variant=fill|color=primary|state=disabled|size=3xs": __body109,
    // figma: variant=fill, color=primary, size=2xs(28), state=Default
    "variant=fill|color=primary|state=default|size=2xs": __body110,
    // figma: variant=fill, color=primary, size=2xs(28), state=Hover
    "variant=fill|color=primary|state=hover|size=2xs": __body111,
    // figma: variant=fill, color=primary, size=2xs(28), state=Active
    "variant=fill|color=primary|state=active|size=2xs": __body112,
    // figma: variant=fill, color=primary, size=2xs(28), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=2xs": __body113,
    // figma: variant=fill, color=primary, size=2xs(28), state=Disabled
    "variant=fill|color=primary|state=disabled|size=2xs": __body114,
    // figma: variant=fill, color=primary, size=xs(32), state=Disabled
    "variant=fill|color=primary|state=disabled|size=xs": __body115,
    // figma: variant=fill, color=primary, size=xs(32), state=Default
    "variant=fill|color=primary|state=default|size=xs": __body116,
    // figma: variant=fill, color=primary, size=xs(32), state=Hover
    "variant=fill|color=primary|state=hover|size=xs": __body117,
    // figma: variant=fill, color=primary, size=xs(32), state=Active
    "variant=fill|color=primary|state=active|size=xs": __body118,
    // figma: variant=fill, color=primary, size=xs(32), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=xs": __body119,
    // figma: variant=fill, color=primary, size=sm(36), state=Default
    "variant=fill|color=primary|state=default|size=sm": __body120,
    // figma: variant=fill, color=primary, size=sm(36), state=Hover
    "variant=fill|color=primary|state=hover|size=sm": __body121,
    // figma: variant=fill, color=primary, size=sm(36), state=Active
    "variant=fill|color=primary|state=active|size=sm": __body122,
    // figma: variant=fill, color=primary, size=sm(36), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=sm": __body123,
    // figma: variant=fill, color=primary, size=sm(36), state=Disabled
    "variant=fill|color=primary|state=disabled|size=sm": __body124,
    // figma: variant=fill, color=primary, size=md(40), state=Default
    "variant=fill|color=primary|state=default|size=md": __body125,
    // figma: variant=fill, color=primary, size=3xl(56), state=Default
    "variant=fill|color=primary|state=default|size=3xl": __body126,
    // figma: variant=fill, color=primary, size=2xl(52), state=Default
    "variant=fill|color=primary|state=default|size=2xl": __body127,
    // figma: variant=fill, color=primary, size=xl(48), state=Default
    "variant=fill|color=primary|state=default|size=xl": __body128,
    // figma: variant=fill, color=primary, size=lg(44), state=Default
    "variant=fill|color=primary|state=default|size=lg": __body129,
    // figma: variant=fill, color=primary, size=md(40), state=Hover
    "variant=fill|color=primary|state=hover|size=md": __body130,
    // figma: variant=fill, color=primary, size=3xl(56), state=Hover
    "variant=fill|color=primary|state=hover|size=3xl": __body131,
    // figma: variant=fill, color=primary, size=2xl(52), state=Hover
    "variant=fill|color=primary|state=hover|size=2xl": __body132,
    // figma: variant=fill, color=primary, size=xl(48), state=Hover
    "variant=fill|color=primary|state=hover|size=xl": __body133,
    // figma: variant=fill, color=primary, size=lg(44), state=Hover
    "variant=fill|color=primary|state=hover|size=lg": __body134,
    // figma: variant=fill, color=primary, size=md(40), state=Active
    "variant=fill|color=primary|state=active|size=md": __body135,
    // figma: variant=fill, color=primary, size=3xl(56), state=Active
    "variant=fill|color=primary|state=active|size=3xl": __body136,
    // figma: variant=fill, color=primary, size=2xl(52), state=Active
    "variant=fill|color=primary|state=active|size=2xl": __body137,
    // figma: variant=fill, color=primary, size=xl(48), state=Active
    "variant=fill|color=primary|state=active|size=xl": __body138,
    // figma: variant=fill, color=primary, size=lg(44), state=Active
    "variant=fill|color=primary|state=active|size=lg": __body139,
    // figma: variant=fill, color=primary, size=md(40), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=md": __body140,
    // figma: variant=fill, color=primary, size=3xl(56), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=3xl": __body141,
    // figma: variant=fill, color=primary, size=2xl(52), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=2xl": __body142,
    // figma: variant=fill, color=primary, size=xl(48), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=xl": __body143,
    // figma: variant=fill, color=primary, size=lg(44), state=Focus-visible
    "variant=fill|color=primary|state=focus-visible|size=lg": __body144,
    // figma: variant=fill, color=primary, size=md(40), state=Disabled
    "variant=fill|color=primary|state=disabled|size=md": __body145,
    // figma: variant=fill, color=primary, size=3xl(56), state=Disabled
    "variant=fill|color=primary|state=disabled|size=3xl": __body146,
    // figma: variant=fill, color=primary, size=2xl(52), state=Disabled
    "variant=fill|color=primary|state=disabled|size=2xl": __body147,
    // figma: variant=fill, color=primary, size=xl(48), state=Disabled
    "variant=fill|color=primary|state=disabled|size=xl": __body148,
    // figma: variant=fill, color=primary, size=lg(44), state=Disabled
    "variant=fill|color=primary|state=disabled|size=lg": __body149,
    // figma: variant=fill, color=grayscale, size=4XS(20), state=Default
    "variant=fill|color=grayscale|state=default|size=4xs": __body150,
    // figma: variant=fill, color=grayscale, size=4XS(20), state=Hover
    "variant=fill|color=grayscale|state=hover|size=4xs": __body151,
    // figma: variant=fill, color=grayscale, size=4XS(20), state=Active
    "variant=fill|color=grayscale|state=active|size=4xs": __body152,
    // figma: variant=fill, color=grayscale, size=4XS(20), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=4xs": __body153,
    // figma: variant=fill, color=grayscale, size=4XS(20), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=4xs": __body154,
    // figma: variant=fill, color=grayscale, size=3xs(24), state=Default
    "variant=fill|color=grayscale|state=default|size=3xs": __body155,
    // figma: variant=fill, color=grayscale, size=3xs(24), state=Hover
    "variant=fill|color=grayscale|state=hover|size=3xs": __body156,
    // figma: variant=fill, color=grayscale, size=3xs(24), state=Active
    "variant=fill|color=grayscale|state=active|size=3xs": __body157,
    // figma: variant=fill, color=grayscale, size=3xs(24), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=3xs": __body158,
    // figma: variant=fill, color=grayscale, size=3xs(24), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=3xs": __body159,
    // figma: variant=fill, color=grayscale, size=2xs(28), state=Default
    "variant=fill|color=grayscale|state=default|size=2xs": __body160,
    // figma: variant=fill, color=grayscale, size=2xs(28), state=Hover
    "variant=fill|color=grayscale|state=hover|size=2xs": __body161,
    // figma: variant=fill, color=grayscale, size=2xs(28), state=Active
    "variant=fill|color=grayscale|state=active|size=2xs": __body162,
    // figma: variant=fill, color=grayscale, size=2xs(28), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=2xs": __body163,
    // figma: variant=fill, color=grayscale, size=2xs(28), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=2xs": __body164,
    // figma: variant=fill, color=grayscale, size=xs(32), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=xs": __body165,
    // figma: variant=fill, color=grayscale, size=xs(32), state=Default
    "variant=fill|color=grayscale|state=default|size=xs": __body166,
    // figma: variant=fill, color=grayscale, size=xs(32), state=Hover
    "variant=fill|color=grayscale|state=hover|size=xs": __body167,
    // figma: variant=fill, color=grayscale, size=xs(32), state=Active
    "variant=fill|color=grayscale|state=active|size=xs": __body168,
    // figma: variant=fill, color=grayscale, size=xs(32), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=xs": __body169,
    // figma: variant=fill, color=grayscale, size=sm(36), state=Default
    "variant=fill|color=grayscale|state=default|size=sm": __body170,
    // figma: variant=fill, color=grayscale, size=sm(36), state=Hover
    "variant=fill|color=grayscale|state=hover|size=sm": __body171,
    // figma: variant=fill, color=grayscale, size=sm(36), state=Active
    "variant=fill|color=grayscale|state=active|size=sm": __body172,
    // figma: variant=fill, color=grayscale, size=sm(36), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=sm": __body173,
    // figma: variant=fill, color=grayscale, size=sm(36), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=sm": __body174,
    // figma: variant=fill, color=grayscale, size=md(40), state=Default
    "variant=fill|color=grayscale|state=default|size=md": __body175,
    // figma: variant=fill, color=grayscale, size=lg(44), state=Default
    "variant=fill|color=grayscale|state=default|size=lg": __body176,
    // figma: variant=fill, color=grayscale, size=3xl(56), state=Default
    "variant=fill|color=grayscale|state=default|size=3xl": __body177,
    // figma: variant=fill, color=grayscale, size=2xl(52), state=Default
    "variant=fill|color=grayscale|state=default|size=2xl": __body178,
    // figma: variant=fill, color=grayscale, size=xl(48), state=Default
    "variant=fill|color=grayscale|state=default|size=xl": __body179,
    // figma: variant=fill, color=grayscale, size=md(40), state=Hover
    "variant=fill|color=grayscale|state=hover|size=md": __body180,
    // figma: variant=fill, color=grayscale, size=lg(44), state=Hover
    "variant=fill|color=grayscale|state=hover|size=lg": __body181,
    // figma: variant=fill, color=grayscale, size=3xl(56), state=Hover
    "variant=fill|color=grayscale|state=hover|size=3xl": __body182,
    // figma: variant=fill, color=grayscale, size=2xl(52), state=Hover
    "variant=fill|color=grayscale|state=hover|size=2xl": __body183,
    // figma: variant=fill, color=grayscale, size=xl(48), state=Hover
    "variant=fill|color=grayscale|state=hover|size=xl": __body184,
    // figma: variant=fill, color=grayscale, size=md(40), state=Active
    "variant=fill|color=grayscale|state=active|size=md": __body185,
    // figma: variant=fill, color=grayscale, size=lg(44), state=Active
    "variant=fill|color=grayscale|state=active|size=lg": __body186,
    // figma: variant=fill, color=grayscale, size=3xl(56), state=Active
    "variant=fill|color=grayscale|state=active|size=3xl": __body187,
    // figma: variant=fill, color=grayscale, size=2xl(52), state=Active
    "variant=fill|color=grayscale|state=active|size=2xl": __body188,
    // figma: variant=fill, color=grayscale, size=xl(48), state=Active
    "variant=fill|color=grayscale|state=active|size=xl": __body189,
    // figma: variant=fill, color=grayscale, size=md(40), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=md": __body190,
    // figma: variant=fill, color=grayscale, size=lg(44), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=lg": __body191,
    // figma: variant=fill, color=grayscale, size=3xl(56), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=3xl": __body192,
    // figma: variant=fill, color=grayscale, size=2xl(52), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=2xl": __body193,
    // figma: variant=fill, color=grayscale, size=xl(48), state=Focus-visible
    "variant=fill|color=grayscale|state=focus-visible|size=xl": __body194,
    // figma: variant=fill, color=grayscale, size=md(40), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=md": __body195,
    // figma: variant=fill, color=grayscale, size=lg(44), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=lg": __body196,
    // figma: variant=fill, color=grayscale, size=3xl(56), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=3xl": __body197,
    // figma: variant=fill, color=grayscale, size=2xl(52), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=2xl": __body198,
    // figma: variant=fill, color=grayscale, size=xl(48), state=Disabled
    "variant=fill|color=grayscale|state=disabled|size=xl": __body199,
    // figma: variant=outline, color=primary, size=4XS(20), state=Default
    "variant=outline|color=primary|state=default|size=4xs": __body200,
    // figma: variant=outline, color=primary, size=4XS(20), state=Hover
    "variant=outline|color=primary|state=hover|size=4xs": __body201,
    // figma: variant=outline, color=primary, size=4XS(20), state=Active
    "variant=outline|color=primary|state=active|size=4xs": __body202,
    // figma: variant=outline, color=primary, size=4XS(20), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=4xs": __body203,
    // figma: variant=outline, color=primary, size=4XS(20), state=Disabled
    "variant=outline|color=primary|state=disabled|size=4xs": __body204,
    // figma: variant=outline, color=primary, size=3xs(24), state=Default
    "variant=outline|color=primary|state=default|size=3xs": __body205,
    // figma: variant=outline, color=primary, size=3xs(24), state=Hover
    "variant=outline|color=primary|state=hover|size=3xs": __body206,
    // figma: variant=outline, color=primary, size=3xs(24), state=Active
    "variant=outline|color=primary|state=active|size=3xs": __body207,
    // figma: variant=outline, color=primary, size=3xs(24), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=3xs": __body208,
    // figma: variant=outline, color=primary, size=3xs(24), state=Disabled
    "variant=outline|color=primary|state=disabled|size=3xs": __body209,
    // figma: variant=outline, color=primary, size=2xs(28), state=Default
    "variant=outline|color=primary|state=default|size=2xs": __body210,
    // figma: variant=outline, color=primary, size=2xs(28), state=Hover
    "variant=outline|color=primary|state=hover|size=2xs": __body211,
    // figma: variant=outline, color=primary, size=2xs(28), state=Active
    "variant=outline|color=primary|state=active|size=2xs": __body212,
    // figma: variant=outline, color=primary, size=2xs(28), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=2xs": __body213,
    // figma: variant=outline, color=primary, size=2xs(28), state=Disabled
    "variant=outline|color=primary|state=disabled|size=2xs": __body214,
    // figma: variant=outline, color=primary, size=xs(32), state=Disabled
    "variant=outline|color=primary|state=disabled|size=xs": __body215,
    // figma: variant=outline, color=primary, size=xs(32), state=Default
    "variant=outline|color=primary|state=default|size=xs": __body216,
    // figma: variant=outline, color=primary, size=xs(32), state=Hover
    "variant=outline|color=primary|state=hover|size=xs": __body217,
    // figma: variant=outline, color=primary, size=xs(32), state=Active
    "variant=outline|color=primary|state=active|size=xs": __body218,
    // figma: variant=outline, color=primary, size=xs(32), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=xs": __body219,
    // figma: variant=outline, color=primary, size=sm(36), state=Default
    "variant=outline|color=primary|state=default|size=sm": __body220,
    // figma: variant=outline, color=primary, size=sm(36), state=Hover
    "variant=outline|color=primary|state=hover|size=sm": __body221,
    // figma: variant=outline, color=primary, size=sm(36), state=Active
    "variant=outline|color=primary|state=active|size=sm": __body222,
    // figma: variant=outline, color=primary, size=sm(36), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=sm": __body223,
    // figma: variant=outline, color=primary, size=sm(36), state=Disabled
    "variant=outline|color=primary|state=disabled|size=sm": __body224,
    // figma: variant=outline, color=primary, size=md(40), state=Default
    "variant=outline|color=primary|state=default|size=md": __body225,
    // figma: variant=outline, color=primary, size=lg(44), state=Default
    "variant=outline|color=primary|state=default|size=lg": __body226,
    // figma: variant=outline, color=primary, size=3xl(56), state=Default
    "variant=outline|color=primary|state=default|size=3xl": __body227,
    // figma: variant=outline, color=primary, size=2xl(52), state=Default
    "variant=outline|color=primary|state=default|size=2xl": __body228,
    // figma: variant=outline, color=primary, size=xl(48), state=Default
    "variant=outline|color=primary|state=default|size=xl": __body229,
    // figma: variant=outline, color=primary, size=md(40), state=Hover
    "variant=outline|color=primary|state=hover|size=md": __body230,
    // figma: variant=outline, color=primary, size=lg(44), state=Hover
    "variant=outline|color=primary|state=hover|size=lg": __body231,
    // figma: variant=outline, color=primary, size=3xl(56), state=Hover
    "variant=outline|color=primary|state=hover|size=3xl": __body232,
    // figma: variant=outline, color=primary, size=2xl(52), state=Hover
    "variant=outline|color=primary|state=hover|size=2xl": __body233,
    // figma: variant=outline, color=primary, size=xl(48), state=Hover
    "variant=outline|color=primary|state=hover|size=xl": __body234,
    // figma: variant=outline, color=primary, size=md(40), state=Active
    "variant=outline|color=primary|state=active|size=md": __body235,
    // figma: variant=outline, color=primary, size=lg(44), state=Active
    "variant=outline|color=primary|state=active|size=lg": __body236,
    // figma: variant=outline, color=primary, size=3xl(56), state=Active
    "variant=outline|color=primary|state=active|size=3xl": __body237,
    // figma: variant=outline, color=primary, size=2xl(52), state=Active
    "variant=outline|color=primary|state=active|size=2xl": __body238,
    // figma: variant=outline, color=primary, size=xl(48), state=Active
    "variant=outline|color=primary|state=active|size=xl": __body239,
    // figma: variant=outline, color=primary, size=md(40), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=md": __body240,
    // figma: variant=outline, color=primary, size=lg(44), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=lg": __body241,
    // figma: variant=outline, color=primary, size=3xl(56), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=3xl": __body242,
    // figma: variant=outline, color=primary, size=2xl(52), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=2xl": __body243,
    // figma: variant=outline, color=primary, size=xl(48), state=Focus-visible
    "variant=outline|color=primary|state=focus-visible|size=xl": __body244,
    // figma: variant=outline, color=primary, size=md(40), state=Disabled
    "variant=outline|color=primary|state=disabled|size=md": __body245,
    // figma: variant=outline, color=primary, size=lg(44), state=Disabled
    "variant=outline|color=primary|state=disabled|size=lg": __body246,
    // figma: variant=outline, color=primary, size=3xl(56), state=Disabled
    "variant=outline|color=primary|state=disabled|size=3xl": __body247,
    // figma: variant=outline, color=primary, size=2xl(52), state=Disabled
    "variant=outline|color=primary|state=disabled|size=2xl": __body248,
    // figma: variant=outline, color=primary, size=xl(48), state=Disabled
    "variant=outline|color=primary|state=disabled|size=xl": __body249,
    // figma: variant=outline, color=grayscale, size=4XS(20), state=Default
    "variant=outline|color=grayscale|state=default|size=4xs": __body250,
    // figma: variant=outline, color=grayscale, size=4XS(20), state=Hover
    "variant=outline|color=grayscale|state=hover|size=4xs": __body251,
    // figma: variant=outline, color=grayscale, size=4XS(20), state=Active
    "variant=outline|color=grayscale|state=active|size=4xs": __body252,
    // figma: variant=outline, color=grayscale, size=4XS(20), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=4xs": __body253,
    // figma: variant=outline, color=grayscale, size=4XS(20), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=4xs": __body254,
    // figma: variant=outline, color=grayscale, size=3xs(24), state=Default
    "variant=outline|color=grayscale|state=default|size=3xs": __body255,
    // figma: variant=outline, color=grayscale, size=3xs(24), state=Hover
    "variant=outline|color=grayscale|state=hover|size=3xs": __body256,
    // figma: variant=outline, color=grayscale, size=3xs(24), state=Active
    "variant=outline|color=grayscale|state=active|size=3xs": __body257,
    // figma: variant=outline, color=grayscale, size=3xs(24), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=3xs": __body258,
    // figma: variant=outline, color=grayscale, size=3xs(24), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=3xs": __body259,
    // figma: variant=outline, color=grayscale, size=2xs(28), state=Default
    "variant=outline|color=grayscale|state=default|size=2xs": __body260,
    // figma: variant=outline, color=grayscale, size=2xs(28), state=Hover
    "variant=outline|color=grayscale|state=hover|size=2xs": __body261,
    // figma: variant=outline, color=grayscale, size=2xs(28), state=Active
    "variant=outline|color=grayscale|state=active|size=2xs": __body262,
    // figma: variant=outline, color=grayscale, size=2xs(28), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=2xs": __body263,
    // figma: variant=outline, color=grayscale, size=2xs(28), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=2xs": __body264,
    // figma: variant=outline, color=grayscale, size=xs(32), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=xs": __body265,
    // figma: variant=outline, color=grayscale, size=xs(32), state=Default
    "variant=outline|color=grayscale|state=default|size=xs": __body266,
    // figma: variant=outline, color=grayscale, size=xs(32), state=Hover
    "variant=outline|color=grayscale|state=hover|size=xs": __body267,
    // figma: variant=outline, color=grayscale, size=xs(32), state=Active
    "variant=outline|color=grayscale|state=active|size=xs": __body268,
    // figma: variant=outline, color=grayscale, size=xs(32), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=xs": __body269,
    // figma: variant=outline, color=grayscale, size=sm(36), state=Default
    "variant=outline|color=grayscale|state=default|size=sm": __body270,
    // figma: variant=outline, color=grayscale, size=sm(36), state=Hover
    "variant=outline|color=grayscale|state=hover|size=sm": __body271,
    // figma: variant=outline, color=grayscale, size=sm(36), state=Active
    "variant=outline|color=grayscale|state=active|size=sm": __body272,
    // figma: variant=outline, color=grayscale, size=sm(36), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=sm": __body273,
    // figma: variant=outline, color=grayscale, size=sm(36), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=sm": __body274,
    // figma: variant=outline, color=grayscale, size=md(40), state=Default
    "variant=outline|color=grayscale|state=default|size=md": __body275,
    // figma: variant=outline, color=grayscale, size=lg(44), state=Default
    "variant=outline|color=grayscale|state=default|size=lg": __body276,
    // figma: variant=outline, color=grayscale, size=3xl(56), state=Default
    "variant=outline|color=grayscale|state=default|size=3xl": __body277,
    // figma: variant=outline, color=grayscale, size=2xl(52), state=Default
    "variant=outline|color=grayscale|state=default|size=2xl": __body278,
    // figma: variant=outline, color=grayscale, size=xl(48), state=Default
    "variant=outline|color=grayscale|state=default|size=xl": __body279,
    // figma: variant=outline, color=grayscale, size=md(40), state=Hover
    "variant=outline|color=grayscale|state=hover|size=md": __body280,
    // figma: variant=outline, color=grayscale, size=lg(44), state=Hover
    "variant=outline|color=grayscale|state=hover|size=lg": __body281,
    // figma: variant=outline, color=grayscale, size=3xl(56), state=Hover
    "variant=outline|color=grayscale|state=hover|size=3xl": __body282,
    // figma: variant=outline, color=grayscale, size=2xl(52), state=Hover
    "variant=outline|color=grayscale|state=hover|size=2xl": __body283,
    // figma: variant=outline, color=grayscale, size=xl(48), state=Hover
    "variant=outline|color=grayscale|state=hover|size=xl": __body284,
    // figma: variant=outline, color=grayscale, size=md(40), state=Active
    "variant=outline|color=grayscale|state=active|size=md": __body285,
    // figma: variant=outline, color=grayscale, size=lg(44), state=Active
    "variant=outline|color=grayscale|state=active|size=lg": __body286,
    // figma: variant=outline, color=grayscale, size=3xl(56), state=Active
    "variant=outline|color=grayscale|state=active|size=3xl": __body287,
    // figma: variant=outline, color=grayscale, size=2xl(52), state=Active
    "variant=outline|color=grayscale|state=active|size=2xl": __body288,
    // figma: variant=outline, color=grayscale, size=xl(48), state=Active
    "variant=outline|color=grayscale|state=active|size=xl": __body289,
    // figma: variant=outline, color=grayscale, size=md(40), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=md": __body290,
    // figma: variant=outline, color=grayscale, size=lg(44), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=lg": __body291,
    // figma: variant=outline, color=grayscale, size=3xl(56), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=3xl": __body292,
    // figma: variant=outline, color=grayscale, size=2xl(52), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=2xl": __body293,
    // figma: variant=outline, color=grayscale, size=xl(48), state=Focus-visible
    "variant=outline|color=grayscale|state=focus-visible|size=xl": __body294,
    // figma: variant=outline, color=grayscale, size=md(40), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=md": __body295,
    // figma: variant=outline, color=grayscale, size=lg(44), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=lg": __body296,
    // figma: variant=outline, color=grayscale, size=3xl(56), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=3xl": __body297,
    // figma: variant=outline, color=grayscale, size=2xl(52), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=2xl": __body298,
    // figma: variant=outline, color=grayscale, size=xl(48), state=Disabled
    "variant=outline|color=grayscale|state=disabled|size=xl": __body299,
  };
  return (__impls[__vkey(props)] ?? __body126)();
}
export default IconButton;
