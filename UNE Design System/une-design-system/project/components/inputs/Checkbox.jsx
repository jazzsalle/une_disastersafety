import { Component } from '../display/Component.jsx';

// figma node: 177:5452 Checkbox (48 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "checked=" + __venc(p.checked) + '|' + "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function Checkbox(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "dark", checked: _p.checked ?? true, state: _p.state ?? "default", size: _p.size ?? "lg" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(120,124,135)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(120,124,135)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(120,124,135)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(136,140,148)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(136,140,148)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(136,140,148)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(235,236,240)",
      boxShadow: "inset 0 0 0 1px rgb(104,109,120)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(235,236,240)",
      boxShadow: "inset 0 0 0 1px rgb(104,109,120)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(235,236,240)",
      boxShadow: "inset 0 0 0 1px rgb(104,109,120)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(60,105,252)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(52,92,224)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(44,78,196)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(60,105,252)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(60,105,252)",
      boxShadow: "0px 0px 0px 2px rgb(194,211,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(52,92,224)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(52,92,224)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(44,78,196)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(44,78,196)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "column",
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "column",
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(244,245,247)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "column",
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(120,124,135)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(120,124,135)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(120,124,135)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(104,109,120)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(104,109,120)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(104,109,120)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(68,74,87)",
      boxShadow: "inset 0 0 0 1px rgb(136,140,148)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(68,74,87)",
      boxShadow: "inset 0 0 0 1px rgb(136,140,148)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(68,74,87)",
      boxShadow: "inset 0 0 0 1px rgb(136,140,148)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(71,125,255)",
      boxShadow: "0px 0px 0px 2px rgba(132,168,255,0.5)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(102,147,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(132,168,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(71,125,255)",
      boxShadow: "0px 0px 0px 2px rgba(132,168,255,0.5)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(102,147,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(71,125,255)",
      boxShadow: "0px 0px 0px 2px rgba(132,168,255,0.5)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(132,168,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(102,147,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(132,168,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"16px"} />}</div>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          height: 12,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop2={"12px"} />}</div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "column",
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "column",
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 2,
      backgroundColor: "rgb(49,54,68)",
      boxShadow: "inset 0 0 0 1px rgb(86,91,105)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: mode=Light, checked=False, size=lg(24), state=Hover
    "mode=light|checked=false|state=hover|size=lg": __body0,
    // figma: mode=Light, checked=False, size=md(20), state=Hover
    "mode=light|checked=false|state=hover|size=md": __body1,
    // figma: mode=Light, checked=False, size=sm(16), state=Hover
    "mode=light|checked=false|state=hover|size=sm": __body2,
    // figma: mode=Light, checked=False, size=lg(24), state=Default
    "mode=light|checked=false|state=default|size=lg": __body3,
    // figma: mode=Light, checked=False, size=md(20), state=Default
    "mode=light|checked=false|state=default|size=md": __body4,
    // figma: mode=Light, checked=False, size=sm(16), state=Default
    "mode=light|checked=false|state=default|size=sm": __body5,
    // figma: mode=Light, checked=False, size=lg(24), state=Active
    "mode=light|checked=false|state=active|size=lg": __body6,
    // figma: mode=Light, checked=False, size=md(20), state=Active
    "mode=light|checked=false|state=active|size=md": __body7,
    // figma: mode=Light, checked=False, size=sm(16), state=Active
    "mode=light|checked=false|state=active|size=sm": __body8,
    // figma: mode=Light, checked=True, size=lg(24), state=Default
    "mode=light|checked=true|state=default|size=lg": __body9,
    // figma: mode=Light, checked=True, size=lg(24), state=Hover
    "mode=light|checked=true|state=hover|size=lg": __body10,
    // figma: mode=Light, checked=True, size=lg(24), state=Active
    "mode=light|checked=true|state=active|size=lg": __body11,
    // figma: mode=Light, checked=True, size=md(20), state=Default
    "mode=light|checked=true|state=default|size=md": __body12,
    // figma: mode=Light, checked=True, size=sm(16), state=Default
    "mode=light|checked=true|state=default|size=sm": __body13,
    // figma: mode=Light, checked=True, size=md(20), state=Hover
    "mode=light|checked=true|state=hover|size=md": __body14,
    // figma: mode=Light, checked=True, size=sm(16), state=Hover
    "mode=light|checked=true|state=hover|size=sm": __body15,
    // figma: mode=Light, checked=True, size=md(20), state=Active
    "mode=light|checked=true|state=active|size=md": __body16,
    // figma: mode=Light, checked=True, size=sm(16), state=Active
    "mode=light|checked=true|state=active|size=sm": __body17,
    // figma: mode=Light, checked=True, size=lg(24), state=Disabled
    "mode=light|checked=true|state=disabled|size=lg": __body18,
    // figma: mode=Light, checked=True, size=md(20), state=Disabled
    "mode=light|checked=true|state=disabled|size=md": __body19,
    // figma: mode=Light, checked=True, size=sm(16), state=Disabled
    "mode=light|checked=true|state=disabled|size=sm": __body20,
    // figma: mode=Light, checked=False, size=lg(24), state=Disabled
    "mode=light|checked=false|state=disabled|size=lg": __body21,
    // figma: mode=Light, checked=False, size=md(20), state=Disabled
    "mode=light|checked=false|state=disabled|size=md": __body22,
    // figma: mode=Light, checked=False, size=sm(16), state=Disabled
    "mode=light|checked=false|state=disabled|size=sm": __body23,
    // figma: mode=Dark, checked=False, size=lg(24), state=Hover
    "mode=dark|checked=false|state=hover|size=lg": __body24,
    // figma: mode=Dark, checked=False, size=md(20), state=Hover
    "mode=dark|checked=false|state=hover|size=md": __body25,
    // figma: mode=Dark, checked=False, size=sm(16), state=Hover
    "mode=dark|checked=false|state=hover|size=sm": __body26,
    // figma: mode=Dark, checked=False, size=lg(24), state=Default
    "mode=dark|checked=false|state=default|size=lg": __body27,
    // figma: mode=Dark, checked=False, size=md(20), state=Default
    "mode=dark|checked=false|state=default|size=md": __body28,
    // figma: mode=Dark, checked=False, size=sm(16), state=Default
    "mode=dark|checked=false|state=default|size=sm": __body29,
    // figma: mode=Dark, checked=False, size=lg(24), state=Active
    "mode=dark|checked=false|state=active|size=lg": __body30,
    // figma: mode=Dark, checked=False, size=md(20), state=Active
    "mode=dark|checked=false|state=active|size=md": __body31,
    // figma: mode=Dark, checked=False, size=sm(16), state=Active
    "mode=dark|checked=false|state=active|size=sm": __body32,
    // figma: mode=Dark, checked=True, size=lg(24), state=Default
    "mode=dark|checked=true|state=default|size=lg": __body33,
    // figma: mode=Dark, checked=True, size=lg(24), state=Hover
    "mode=dark|checked=true|state=hover|size=lg": __body34,
    // figma: mode=Dark, checked=True, size=lg(24), state=Active
    "mode=dark|checked=true|state=active|size=lg": __body35,
    // figma: mode=Dark, checked=True, size=md(20), state=Default
    "mode=dark|checked=true|state=default|size=md": __body36,
    // figma: mode=Dark, checked=True, size=md(20), state=Hover
    "mode=dark|checked=true|state=hover|size=md": __body37,
    // figma: mode=Dark, checked=True, size=sm(16), state=Default
    "mode=dark|checked=true|state=default|size=sm": __body38,
    // figma: mode=Dark, checked=True, size=md(20), state=Active
    "mode=dark|checked=true|state=active|size=md": __body39,
    // figma: mode=Dark, checked=True, size=sm(16), state=Hover
    "mode=dark|checked=true|state=hover|size=sm": __body40,
    // figma: mode=Dark, checked=True, size=sm(16), state=Active
    "mode=dark|checked=true|state=active|size=sm": __body41,
    // figma: mode=Dark, checked=True, size=md(20), state=Disabled
    "mode=dark|checked=true|state=disabled|size=md": __body42,
    // figma: mode=Dark, checked=True, size=lg(24), state=Disabled
    "mode=dark|checked=true|state=disabled|size=lg": __body43,
    // figma: mode=Dark, checked=True, size=sm(16), state=Disabled
    "mode=dark|checked=true|state=disabled|size=sm": __body44,
    // figma: mode=Dark, checked=False, size=md(20), state=Disabled
    "mode=dark|checked=false|state=disabled|size=md": __body45,
    // figma: mode=Dark, checked=False, size=lg(24), state=Disabled
    "mode=dark|checked=false|state=disabled|size=lg": __body46,
    // figma: mode=Dark, checked=False, size=sm(16), state=Disabled
    "mode=dark|checked=false|state=disabled|size=sm": __body47,
  };
  return (__impls[__vkey(props)] ?? __body33)();
}
export default Checkbox;
