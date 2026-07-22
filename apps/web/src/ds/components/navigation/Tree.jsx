import { Component } from '../display/Component.jsx';
import { Icon54 } from './Icon54.jsx';
import { Icon80 } from './Icon80.jsx';
import { IconLine12 } from './IconLine12.jsx';
import { SlotEdit } from './SlotEdit.jsx';

// figma node: 2077:3823 Tree (39 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "prop2=" + __venc(p.prop2) + '|' + "prop3=" + __venc(p.prop3) + '|' + "prop5=" + __venc(p.prop5);

export function Tree(_p = {}) {
  const props = { ..._p, prop: _p.prop ?? true, prop2: _p.prop2 ?? "1뎁스", prop3: _p.prop3 ?? "open", prop4: _p.prop4 ?? "(00)", label: _p.label ?? "항목명", slot: _p.slot ?? false, prop5: _p.prop5 ?? "default", prop6: _p.prop6 ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 12px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon54 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 12px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon54 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(244,245,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 12px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon54 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 12px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon80 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 12px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon80 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(244,245,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 12px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon80 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 12px",
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }} />
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 12px",
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }} />
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(244,245,247)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 12px",
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }} />
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 32px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon54 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 32px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon54 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 32px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon80 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 32px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon80 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 32px",
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }} />
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 32px",
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }} />
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 52px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon54 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 52px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon54 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 52px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon80 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 52px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon80 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 52px",
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }} />
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 52px",
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }} />
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 72px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon54 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 72px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon54 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 72px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon80 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 72px",
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
        overflow: "hidden",
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
            height: "auto",
          }}>{props.icon1 ?? <Component prop={<Icon80 />} prop2={"12px"} />}</div>
      </div>
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon2 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
        {props.prop6 && (
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: 1.5,
          letterSpacing: "-0.030em",
          color: "rgb(104,109,120)",
          flexShrink: 0,
        }}>{props.prop4}</span>
        )}
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 72px",
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }} />
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 72px",
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }} />
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 92px",
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }} />
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(235,236,240)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 92px",
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }} />
      {props.prop && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <Component prop={<IconLine12 />} prop2={"16px"} />}</div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.399999976158142,
          letterSpacing: "-0.030em",
          color: "rgb(28,32,42)",
          flexGrow: 1,
        }}>{props.label}</span>
      </div>
      {props.slot && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.slot2 ?? <SlotEdit />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: 뎁스=1뎁스, 하위=open, 상태=Default
    "prop2=1뎁스|prop3=open|prop5=default": __body0,
    // figma: 뎁스=1뎁스, 하위=open, 상태=Hover
    "prop2=1뎁스|prop3=open|prop5=hover": __body1,
    // figma: 뎁스=1뎁스, 하위=open, 상태=Selected
    "prop2=1뎁스|prop3=open|prop5=selected": __body2,
    // figma: 뎁스=1뎁스, 하위=collapsed, 상태=Default
    "prop2=1뎁스|prop3=collapsed|prop5=default": __body3,
    // figma: 뎁스=1뎁스, 하위=collapsed, 상태=Hover
    "prop2=1뎁스|prop3=collapsed|prop5=hover": __body4,
    // figma: 뎁스=1뎁스, 하위=collapsed, 상태=Selected
    "prop2=1뎁스|prop3=collapsed|prop5=selected": __body5,
    // figma: 뎁스=1뎁스, 하위=leaf, 상태=Default
    "prop2=1뎁스|prop3=leaf|prop5=default": __body6,
    // figma: 뎁스=1뎁스, 하위=leaf, 상태=Hover
    "prop2=1뎁스|prop3=leaf|prop5=hover": __body7,
    // figma: 뎁스=1뎁스, 하위=leaf, 상태=Selected
    "prop2=1뎁스|prop3=leaf|prop5=selected": __body8,
    // figma: 뎁스=2뎁스, 하위=open, 상태=Default
    "prop2=2뎁스|prop3=open|prop5=default": __body9,
    // figma: 뎁스=2뎁스, 하위=open, 상태=Hover
    "prop2=2뎁스|prop3=open|prop5=hover": __body10,
    // figma: 뎁스=2뎁스, 하위=open, 상태=Selected
    "prop2=2뎁스|prop3=open|prop5=selected": __body10,
    // figma: 뎁스=2뎁스, 하위=collapsed, 상태=Default
    "prop2=2뎁스|prop3=collapsed|prop5=default": __body11,
    // figma: 뎁스=2뎁스, 하위=collapsed, 상태=Hover
    "prop2=2뎁스|prop3=collapsed|prop5=hover": __body12,
    // figma: 뎁스=2뎁스, 하위=collapsed, 상태=Selected
    "prop2=2뎁스|prop3=collapsed|prop5=selected": __body12,
    // figma: 뎁스=2뎁스, 하위=leaf, 상태=Default
    "prop2=2뎁스|prop3=leaf|prop5=default": __body13,
    // figma: 뎁스=2뎁스, 하위=leaf, 상태=Hover
    "prop2=2뎁스|prop3=leaf|prop5=hover": __body14,
    // figma: 뎁스=2뎁스, 하위=leaf, 상태=Selected
    "prop2=2뎁스|prop3=leaf|prop5=selected": __body14,
    // figma: 뎁스=3뎁스, 하위=open, 상태=Default
    "prop2=3뎁스|prop3=open|prop5=default": __body15,
    // figma: 뎁스=3뎁스, 하위=open, 상태=Hover
    "prop2=3뎁스|prop3=open|prop5=hover": __body16,
    // figma: 뎁스=3뎁스, 하위=open, 상태=Selected
    "prop2=3뎁스|prop3=open|prop5=selected": __body16,
    // figma: 뎁스=3뎁스, 하위=collapsed, 상태=Default
    "prop2=3뎁스|prop3=collapsed|prop5=default": __body17,
    // figma: 뎁스=3뎁스, 하위=collapsed, 상태=Hover
    "prop2=3뎁스|prop3=collapsed|prop5=hover": __body18,
    // figma: 뎁스=3뎁스, 하위=collapsed, 상태=Selected
    "prop2=3뎁스|prop3=collapsed|prop5=selected": __body18,
    // figma: 뎁스=3뎁스, 하위=leaf, 상태=Default
    "prop2=3뎁스|prop3=leaf|prop5=default": __body19,
    // figma: 뎁스=3뎁스, 하위=leaf, 상태=Hover
    "prop2=3뎁스|prop3=leaf|prop5=hover": __body20,
    // figma: 뎁스=3뎁스, 하위=leaf, 상태=Selected
    "prop2=3뎁스|prop3=leaf|prop5=selected": __body20,
    // figma: 뎁스=4뎁스, 하위=open, 상태=Default
    "prop2=4뎁스|prop3=open|prop5=default": __body21,
    // figma: 뎁스=4뎁스, 하위=open, 상태=Hover
    "prop2=4뎁스|prop3=open|prop5=hover": __body22,
    // figma: 뎁스=4뎁스, 하위=open, 상태=Selected
    "prop2=4뎁스|prop3=open|prop5=selected": __body22,
    // figma: 뎁스=4뎁스, 하위=collapsed, 상태=Default
    "prop2=4뎁스|prop3=collapsed|prop5=default": __body23,
    // figma: 뎁스=4뎁스, 하위=collapsed, 상태=Hover
    "prop2=4뎁스|prop3=collapsed|prop5=hover": __body24,
    // figma: 뎁스=4뎁스, 하위=collapsed, 상태=Selected
    "prop2=4뎁스|prop3=collapsed|prop5=selected": __body24,
    // figma: 뎁스=4뎁스, 하위=leaf, 상태=Default
    "prop2=4뎁스|prop3=leaf|prop5=default": __body25,
    // figma: 뎁스=4뎁스, 하위=leaf, 상태=Hover
    "prop2=4뎁스|prop3=leaf|prop5=hover": __body26,
    // figma: 뎁스=4뎁스, 하위=leaf, 상태=Selected
    "prop2=4뎁스|prop3=leaf|prop5=selected": __body26,
    // figma: 뎁스=5뎁스, 하위=leaf, 상태=Default
    "prop2=5뎁스|prop3=leaf|prop5=default": __body27,
    // figma: 뎁스=5뎁스, 하위=leaf, 상태=Hover
    "prop2=5뎁스|prop3=leaf|prop5=hover": __body28,
    // figma: 뎁스=5뎁스, 하위=leaf, 상태=Selected
    "prop2=5뎁스|prop3=leaf|prop5=selected": __body28,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Tree;
