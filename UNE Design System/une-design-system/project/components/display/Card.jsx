import { Body } from './Body.jsx';
import { Footer } from './Footer.jsx';
import { Header3 } from './Header3.jsx';

// figma node: 2317:5867 Card (카드) (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "prop3=" + __venc(p.prop3) + '|' + "prop5=" + __venc(p.prop5);

export function Card(_p = {}) {
  const props = { ..._p, prop: _p.prop ?? true, prop2: _p.prop2 ?? true, prop3: _p.prop3 ?? "vertical", prop4: _p.prop4 ?? true, prop5: _p.prop5 ?? "elevated", prop6: _p.prop6 ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
        position: "relative",
        height: 160,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-054dfe02e425078f-6ce8d276" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 320,
          height: 160,
        }} />
      </div>
      )}
      {props.prop2 && (
      <Header3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"none"}
      />
      )}
      {props.prop6 && (
      <Body
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"none"}
      />
      )}
      {props.prop4 && (
      <Footer
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"none"}
      />
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
        position: "relative",
        height: 160,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-054dfe02e425078f-6ce8d276" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 320,
          height: 160,
        }} />
      </div>
      )}
      {props.prop2 && (
      <Header3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"none"}
      />
      )}
      {props.prop6 && (
      <Body
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"none"}
      />
      )}
      {props.prop4 && (
      <Footer
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"none"}
      />
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
        position: "relative",
        height: 160,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-054dfe02e425078f-6ce8d276" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 320,
          height: 160,
        }} />
      </div>
      )}
      {props.prop2 && (
      <Header3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"none"}
      />
      )}
      {props.prop6 && (
      <Body
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"none"}
      />
      )}
      {props.prop4 && (
      <Footer
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"none"}
      />
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 502,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
        position: "relative",
        width: 210,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-054dfe02e425078f-6ce8d276" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 210,
        }} />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prop2 && (
        <Header3
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          variant={"none"}
        />
        )}
        {props.prop6 && (
        <Body
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          variant={"none"}
        />
        )}
        {props.prop4 && (
        <Footer
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          variant={"none"}
        />
        )}
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 502,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
        position: "relative",
        width: 210,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-054dfe02e425078f-6ce8d276" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 210,
        }} />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prop2 && (
        <Header3
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          variant={"none"}
        />
        )}
        {props.prop6 && (
        <Body
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          variant={"none"}
        />
        )}
        {props.prop4 && (
        <Footer
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          variant={"none"}
        />
        )}
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 502,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(206,207,210)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.prop && (
      <div style={{
        position: "relative",
        width: 210,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-054dfe02e425078f-6ce8d276" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 210,
          height: 210,
        }} />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        {props.prop2 && (
        <Header3
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          variant={"none"}
        />
        )}
        {props.prop6 && (
        <Body
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          variant={"none"}
        />
        )}
        {props.prop4 && (
        <Footer
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          variant={"none"}
        />
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: 유형=vertical, 스타일=elevated
    "prop3=vertical|prop5=elevated": __body0,
    // figma: 유형=vertical, 스타일=outline
    "prop3=vertical|prop5=outline": __body1,
    // figma: 유형=vertical, 스타일=fill
    "prop3=vertical|prop5=fill": __body2,
    // figma: 유형=horizontal, 스타일=elevated
    "prop3=horizontal|prop5=elevated": __body3,
    // figma: 유형=horizontal, 스타일=fill
    "prop3=horizontal|prop5=fill": __body4,
    // figma: 유형=horizontal, 스타일=outline
    "prop3=horizontal|prop5=outline": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Card;
