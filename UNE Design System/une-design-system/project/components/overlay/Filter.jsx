import { Checkbox2 } from '../display/Checkbox2.jsx';
import { ChoiceChip } from '../display/ChoiceChip.jsx';
import { Component12 } from '../inputs/Component12.jsx';
import { ComponentTitle } from './ComponentTitle.jsx';
import { Header5 } from './Header5.jsx';
import { InputChip } from '../display/InputChip.jsx';

// figma node: 2592:35961 filter
export function Filter(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 3080,
      height: 1028,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--color-border-subtle)",
      ...props.style,
    }}>
      <ComponentTitle
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text2={"Data input > Filter"}
        text4={"Filter (필터)"}
        text3={"V 1.0.0"}
      />
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 660,
          top: 108,
          width: 560,
          height: 602,
          maxWidth: 1536,
          maxHeight: 864,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--color-surface-primary)",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            borderTop: "1px solid var(--color-border-subtle)",
            borderRight: "1px solid var(--color-border-subtle)",
            borderBottom: "1px solid var(--color-border-subtle)",
            borderLeft: "1px solid var(--color-border-subtle)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-gap-xs) * 1px)",
            padding: "16px 24px 16px 24px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-padding-h-xl) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-xl) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 20,
                lineHeight: 1.600000023841858,
                letterSpacing: "-0.030em",
                color: "var(--color-text-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>필터</span>
            </div>
            <div style={{
              position: "relative",
              width: 65,
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
                  <svg width={8.728} height={10} viewBox="0 0 8.728 10" fill="none" style={{
                    position: "absolute",
                    left: 1.636,
                    top: 1,
                    width: 8.728,
                    height: 10,
                    color: "var(--color-icon-basic)",
                  }}>
                    <path d={"M 4.354 10 C 3.219 10 2.241 9.627 1.419 8.882 C 0.597 8.137 0.125 7.213 0.004 6.112 C -0.013 5.982 0.026 5.869 0.119 5.772 C 0.212 5.674 0.328 5.626 0.465 5.626 C 0.595 5.626 0.71 5.672 0.812 5.765 C 0.913 5.859 0.972 5.974 0.988 6.112 C 1.101 6.946 1.474 7.641 2.106 8.196 C 2.737 8.751 3.487 9.028 4.354 9.028 C 5.301 9.028 6.105 8.698 6.765 8.037 C 7.426 7.377 7.756 6.574 7.756 5.626 C 7.756 4.678 7.426 3.874 6.765 3.214 C 6.105 2.554 5.301 2.224 4.354 2.224 L 4.281 2.224 L 4.706 2.649 C 4.795 2.738 4.84 2.851 4.84 2.989 C 4.84 3.127 4.795 3.24 4.706 3.329 C 4.609 3.426 4.491 3.475 4.354 3.475 C 4.216 3.475 4.102 3.426 4.013 3.329 L 2.75 2.078 C 2.701 2.029 2.667 1.977 2.647 1.92 C 2.626 1.863 2.616 1.802 2.616 1.738 C 2.616 1.673 2.626 1.612 2.647 1.555 C 2.667 1.499 2.701 1.446 2.75 1.397 L 4.013 0.134 C 4.102 0.045 4.216 0 4.354 0 C 4.491 0 4.609 0.045 4.706 0.134 C 4.795 0.231 4.84 0.348 4.84 0.486 C 4.84 0.624 4.795 0.737 4.706 0.826 L 4.281 1.252 L 4.354 1.252 C 4.961 1.252 5.53 1.367 6.061 1.598 C 6.591 1.829 7.053 2.14 7.446 2.533 C 7.839 2.926 8.151 3.388 8.382 3.918 C 8.612 4.449 8.728 5.018 8.728 5.626 C 8.728 6.233 8.612 6.802 8.382 7.333 C 8.151 7.863 7.839 8.325 7.446 8.718 C 7.053 9.111 6.591 9.423 6.061 9.654 C 5.53 9.885 4.961 10 4.354 10 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
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
              }}>초기화</span>
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
            <div style={{
              position: "relative",
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
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: "16px 24px 16px 24px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--space-10) * 1px)",
            paddingTop: "calc(var(--space-8) * 1px)",
            paddingRight: "calc(var(--space-10) * 1px)",
            paddingBottom: "calc(var(--space-8) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "pre-wrap",
                lineHeight: 1.399999976158142,
                letterSpacing: "-0.030em",
                color: "var(--color-text-secondary-2)",
                flexShrink: 0,
              }}>{"서비스 여부 "}<span style={{ color: "rgb(60,105,252)" }}>{"/1"}</span></span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 37,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={true}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 62,
                    flexShrink: 0,
                  }}
                  label={"아니오"}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "pre-wrap",
                lineHeight: 1.399999976158142,
                letterSpacing: "-0.030em",
                color: "var(--color-text-secondary-2)",
                flexShrink: 0,
              }}>{"수정 일시 "}<span style={{ color: "rgb(60,105,252)" }}>{"/1"}</span></span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 62,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 75,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={true}
                    state={"default"}
                    size={"md"}
                  />
                </div>
                <div style={{
                  position: "relative",
                  height: 36,
                  display: "flex",
                  flexDirection: "column",
                  gap: "calc(var(--spacing-gap-xs) * 1px)",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
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
                    whiteSpace: "nowrap",
                    lineHeight: 1.5,
                    letterSpacing: "-0.030em",
                    color: "var(--field-text-label)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>label</span>
                  <div style={{
                    position: "relative",
                    height: "calc(var(--sizing-control-sm) * 1px)",
                    borderRadius: 8,
                    backgroundColor: "var(--field-bg-surface)",
                    boxShadow: "inset 0 0 0 1px var(--field-border-default)",
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--spacing-gap-xs) * 1px)",
                    padding: "0px 12px 0px 12px",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                    paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                    paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                    paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      width: 16,
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
                        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
                        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
                        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <svg width={13.333} height={13.333} viewBox="0 0 13.333 13.333" fill="none" style={{
                          position: "absolute",
                          left: 1.333,
                          top: 1.333,
                          width: 13.333,
                          height: 13.333,
                          color: "var(--color-icon-tertiary)",
                        }}>
                          <path d={"M 3.333 1.333 C 3.157 1.333 2.987 1.404 2.862 1.529 C 2.737 1.654 2.667 1.823 2.667 2 L 2.667 12 L 10.667 12 L 10.667 2 C 10.667 1.823 10.596 1.654 10.471 1.529 C 10.346 1.404 10.177 1.333 10 1.333 L 3.333 1.333 Z M 12 12 L 12 2 C 12 1.47 11.789 0.961 11.414 0.586 C 11.039 0.211 10.53 0 10 0 L 3.333 0 C 2.803 0 2.294 0.211 1.919 0.586 C 1.544 0.961 1.333 1.47 1.333 2 L 1.333 12 L 0.667 12 C 0.298 12 0 12.298 0 12.667 C 0 13.035 0.298 13.333 0.667 13.333 L 12.667 13.333 C 13.035 13.333 13.333 13.035 13.333 12.667 C 13.333 12.298 13.035 12 12.667 12 L 12 12 Z M 4 4 C 4 3.632 4.298 3.333 4.667 3.333 L 5.333 3.333 C 5.702 3.333 6 3.632 6 4 C 6 4.368 5.702 4.667 5.333 4.667 L 4.667 4.667 C 4.298 4.667 4 4.368 4 4 Z M 7.333 4 C 7.333 3.632 7.632 3.333 8 3.333 L 8.667 3.333 C 9.035 3.333 9.333 3.632 9.333 4 C 9.333 4.368 9.035 4.667 8.667 4.667 L 8 4.667 C 7.632 4.667 7.333 4.368 7.333 4 Z M 4 6.667 C 4 6.298 4.298 6 4.667 6 L 5.333 6 C 5.702 6 6 6.298 6 6.667 C 6 7.035 5.702 7.333 5.333 7.333 L 4.667 7.333 C 4.298 7.333 4 7.035 4 6.667 Z M 7.333 6.667 C 7.333 6.298 7.632 6 8 6 L 8.667 6 C 9.035 6 9.333 6.298 9.333 6.667 C 9.333 7.035 9.035 7.333 8.667 7.333 L 8 7.333 C 7.632 7.333 7.333 7.035 7.333 6.667 Z M 4 9.333 C 4 8.965 4.298 8.667 4.667 8.667 L 5.333 8.667 C 5.702 8.667 6 8.965 6 9.333 C 6 9.702 5.702 10 5.333 10 L 4.667 10 C 4.298 10 4 9.702 4 9.333 Z M 7.333 9.333 C 7.333 8.965 7.632 8.667 8 8.667 L 8.667 8.667 C 9.035 8.667 9.333 8.965 9.333 9.333 C 9.333 9.702 9.035 10 8.667 10 L 8 10 C 7.632 10 7.333 9.702 7.333 9.333 Z"} fill="currentColor" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
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
                      color: "var(--field-text-placeholder)",
                      flexGrow: 1,
                    }}>Input</span>
                    <div style={{
                      position: "relative",
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
                      flexShrink: 0,
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
                        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
                        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
                        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                        flexShrink: 0,
                      }}>
                        <div style={{
                          position: "relative",
                          width: 12,
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
                            color: "var(--color-icon-basic)",
                          }}>
                            <path d={"M 1.143 8.857 L 2.857 8.857 L 2.857 5.429 L 6.286 5.429 L 6.286 8.857 L 8 8.857 L 8 3.714 L 4.571 1.143 L 1.143 3.714 L 1.143 8.857 Z M 1.143 10 C 0.829 10 0.56 9.888 0.336 9.665 C 0.112 9.441 0 9.171 0 8.857 L 0 3.714 C 0 3.533 0.041 3.362 0.122 3.2 C 0.202 3.038 0.314 2.905 0.457 2.8 L 3.886 0.229 C 3.99 0.152 4.1 0.095 4.214 0.057 C 4.329 0.019 4.448 0 4.571 0 C 4.695 0 4.814 0.019 4.929 0.057 C 5.043 0.095 5.152 0.152 5.257 0.229 L 8.686 2.8 C 8.829 2.905 8.941 3.038 9.022 3.2 C 9.102 3.362 9.143 3.533 9.143 3.714 L 9.143 8.857 C 9.143 9.171 9.031 9.441 8.807 9.665 C 8.583 9.888 8.314 10 8 10 L 5.143 10 L 5.143 6.571 L 4 6.571 L 4 10 L 1.143 10 Z"} fill="currentColor" fillRule="nonzero" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "pre-wrap",
                lineHeight: 1.399999976158142,
                letterSpacing: "-0.030em",
                color: "var(--color-text-secondary-2)",
                flexShrink: 0,
              }}>{"생성 일시 "}<span style={{ color: "rgb(60,105,252)" }}>{"/1"}</span></span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 62,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={true}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 75,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
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
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>수정자</span>
                <div style={{
                  position: "relative",
                  height: "calc(var(--sizing-control-xs) * 1px)",
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--spacing-gap-2xs) * 1px)",
                  padding: "0px 12px 0px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                  paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                  flexShrink: 0,
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
                  }}>선택하기</span>
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
                      <svg width={13.333} height={6.850} viewBox="0 0 13.333 6.850" fill="none" style={{
                        position: "absolute",
                        left: 1.333,
                        top: 4.575,
                        width: 13.333,
                        height: 6.85,
                        color: "var(--color-icon-basic)",
                      }}>
                        <path d={"M 0.21 0.28 C 0.516 -0.064 1.043 -0.095 1.387 0.21 L 6.667 4.902 L 11.946 0.21 C 12.291 -0.095 12.817 -0.064 13.123 0.28 C 13.429 0.624 13.398 1.151 13.054 1.456 L 7.22 6.64 C 6.904 6.92 6.429 6.92 6.113 6.64 L 0.28 1.456 C -0.064 1.151 -0.095 0.624 0.21 0.28 Z"} fill="currentColor" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <svg height={1} viewBox="0 -0.500 512 1" fill="none" style={{
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -0.5 L 0.5 -1 Z M 511.5 0 C 511.776 0 512 -0.224 512 -0.5 C 512 -0.776 511.776 -1 511.5 -1 L 511.5 -0.5 L 511.5 0 Z M 0.5 -0.5 L 0.5 0 L 511.5 0 L 511.5 -0.5 L 511.5 -1 L 0.5 -1 L 0.5 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
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
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>생성자</span>
                <div style={{
                  position: "relative",
                  height: "calc(var(--sizing-control-xs) * 1px)",
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--spacing-gap-2xs) * 1px)",
                  padding: "0px 12px 0px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                  paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                  flexShrink: 0,
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
                  }}>선택하기</span>
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
                      <svg width={13.333} height={6.850} viewBox="0 0 13.333 6.850" fill="none" style={{
                        position: "absolute",
                        left: 1.333,
                        top: 4.575,
                        width: 13.333,
                        height: 6.85,
                        color: "var(--color-icon-basic)",
                      }}>
                        <path d={"M 0.21 0.28 C 0.516 -0.064 1.043 -0.095 1.387 0.21 L 6.667 4.902 L 11.946 0.21 C 12.291 -0.095 12.817 -0.064 13.123 0.28 C 13.429 0.624 13.398 1.151 13.054 1.456 L 7.22 6.64 C 6.904 6.92 6.429 6.92 6.113 6.64 L 0.28 1.456 C -0.064 1.151 -0.095 0.624 0.21 0.28 Z"} fill="currentColor" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <svg height={1} viewBox="0 -0.500 512 1" fill="none" style={{
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -0.5 L 0.5 -1 Z M 511.5 0 C 511.776 0 512 -0.224 512 -0.5 C 512 -0.776 511.776 -1 511.5 -1 L 511.5 -0.5 L 511.5 0 Z M 0.5 -0.5 L 0.5 0 L 511.5 0 L 511.5 -0.5 L 511.5 -1 L 0.5 -1 L 0.5 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 1860,
          top: 108,
          width: 560,
          height: 602,
          maxWidth: 1536,
          maxHeight: 864,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--color-surface-primary)",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            borderTop: "1px solid var(--color-border-subtle)",
            borderRight: "1px solid var(--color-border-subtle)",
            borderBottom: "1px solid var(--color-border-subtle)",
            borderLeft: "1px solid var(--color-border-subtle)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-gap-xs) * 1px)",
            padding: "16px 24px 16px 24px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-padding-h-xl) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-xl) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 20,
                lineHeight: 1.600000023841858,
                letterSpacing: "-0.030em",
                color: "var(--color-text-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>필터</span>
            </div>
            <div style={{
              position: "relative",
              width: 65,
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
                  <svg width={8.728} height={10} viewBox="0 0 8.728 10" fill="none" style={{
                    position: "absolute",
                    left: 1.636,
                    top: 1,
                    width: 8.728,
                    height: 10,
                    color: "var(--color-icon-basic)",
                  }}>
                    <path d={"M 4.354 10 C 3.219 10 2.241 9.627 1.419 8.882 C 0.597 8.137 0.125 7.213 0.004 6.112 C -0.013 5.982 0.026 5.869 0.119 5.772 C 0.212 5.674 0.328 5.626 0.465 5.626 C 0.595 5.626 0.71 5.672 0.812 5.765 C 0.913 5.859 0.972 5.974 0.988 6.112 C 1.101 6.946 1.474 7.641 2.106 8.196 C 2.737 8.751 3.487 9.028 4.354 9.028 C 5.301 9.028 6.105 8.698 6.765 8.037 C 7.426 7.377 7.756 6.574 7.756 5.626 C 7.756 4.678 7.426 3.874 6.765 3.214 C 6.105 2.554 5.301 2.224 4.354 2.224 L 4.281 2.224 L 4.706 2.649 C 4.795 2.738 4.84 2.851 4.84 2.989 C 4.84 3.127 4.795 3.24 4.706 3.329 C 4.609 3.426 4.491 3.475 4.354 3.475 C 4.216 3.475 4.102 3.426 4.013 3.329 L 2.75 2.078 C 2.701 2.029 2.667 1.977 2.647 1.92 C 2.626 1.863 2.616 1.802 2.616 1.738 C 2.616 1.673 2.626 1.612 2.647 1.555 C 2.667 1.499 2.701 1.446 2.75 1.397 L 4.013 0.134 C 4.102 0.045 4.216 0 4.354 0 C 4.491 0 4.609 0.045 4.706 0.134 C 4.795 0.231 4.84 0.348 4.84 0.486 C 4.84 0.624 4.795 0.737 4.706 0.826 L 4.281 1.252 L 4.354 1.252 C 4.961 1.252 5.53 1.367 6.061 1.598 C 6.591 1.829 7.053 2.14 7.446 2.533 C 7.839 2.926 8.151 3.388 8.382 3.918 C 8.612 4.449 8.728 5.018 8.728 5.626 C 8.728 6.233 8.612 6.802 8.382 7.333 C 8.151 7.863 7.839 8.325 7.446 8.718 C 7.053 9.111 6.591 9.423 6.061 9.654 C 5.53 9.885 4.961 10 4.354 10 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
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
              }}>초기화</span>
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
            <div style={{
              position: "relative",
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
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "16px 24px 16px 24px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--space-10) * 1px)",
            paddingTop: "calc(var(--space-8) * 1px)",
            paddingRight: "calc(var(--space-10) * 1px)",
            paddingBottom: "calc(var(--space-8) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: "calc(var(--space-10) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.399999976158142,
                  letterSpacing: "-0.030em",
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>{"서비스 여부 "}<span style={{ color: "rgb(60,105,252)" }}>{"/1"}</span></span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 37,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={true}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 62,
                      flexShrink: 0,
                    }}
                    label={"아니오"}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
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
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>수정 일시</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 62,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 75,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.399999976158142,
                  letterSpacing: "-0.030em",
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>{"생성 일시 "}<span style={{ color: "rgb(60,105,252)" }}>{"/1"}</span></span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 62,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={true}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 75,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                </div>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.399999976158142,
                    letterSpacing: "-0.030em",
                    color: "var(--color-text-secondary-2)",
                    flexShrink: 0,
                  }}>{"수정자 "}<span style={{ color: "rgb(60,105,252)" }}>{"/4"}</span></span>
                  <div style={{
                    position: "relative",
                    height: "calc(var(--sizing-control-xs) * 1px)",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--spacing-gap-2xs) * 1px)",
                    padding: "0px 12px 0px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                    paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                    paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                    paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                    flexShrink: 0,
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
                    }}>선택하기</span>
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
                        <svg width={13.333} height={6.850} viewBox="0 0 13.333 6.850" fill="none" style={{
                          position: "absolute",
                          left: 1.333,
                          top: 4.575,
                          width: 13.333,
                          height: 6.85,
                          color: "var(--color-icon-basic)",
                        }}>
                          <path d={"M 6.113 0.21 C 6.429 -0.07 6.904 -0.07 7.22 0.21 L 13.054 5.394 C 13.398 5.699 13.429 6.226 13.123 6.57 C 12.817 6.914 12.291 6.945 11.946 6.64 L 6.667 1.948 L 1.387 6.64 C 1.043 6.945 0.516 6.914 0.21 6.57 C -0.095 6.226 -0.064 5.699 0.28 5.394 L 6.113 0.21 Z"} fill="currentColor" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 308,
                  overflow: "hidden",
                  borderRadius: 8,
                  backgroundColor: "var(--color-surface-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  padding: "12px 12px 12px 12px",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <InputChip
                      style={{
                        position: "relative",
                        height: 28,
                        width: 66,
                        flexShrink: 0,
                      }}
                      leftIcon={false}
                      label={"이름"}
                      variant={"fill"}
                      size={"sm"}
                      state={"default"}
                    />
                    <InputChip
                      style={{
                        position: "relative",
                        height: 28,
                        width: 66,
                        flexShrink: 0,
                      }}
                      leftIcon={false}
                      label={"이름"}
                      variant={"fill"}
                      size={"sm"}
                      state={"default"}
                    />
                    <InputChip
                      style={{
                        position: "relative",
                        height: 28,
                        width: 66,
                        flexShrink: 0,
                      }}
                      leftIcon={false}
                      label={"이름"}
                      variant={"fill"}
                      size={"sm"}
                      state={"default"}
                    />
                    <InputChip
                      style={{
                        position: "relative",
                        height: 28,
                        width: 66,
                        flexShrink: 0,
                      }}
                      leftIcon={false}
                      label={"이름"}
                      variant={"fill"}
                      size={"sm"}
                      state={"default"}
                    />
                  </div>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <div style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        gap: "calc(var(--spacing-gap-xs) * 1px)",
                        alignItems: "flex-start",
                        flexWrap: "nowrap",
                        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
                        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
                        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          height: "calc(var(--sizing-control-sm) * 1px)",
                          borderRadius: 8,
                          backgroundColor: "var(--field-bg-surface)",
                          boxShadow: "inset 0 0 0 1px var(--field-border-default)",
                          display: "flex",
                          flexDirection: "row",
                          gap: "calc(var(--spacing-gap-xs) * 1px)",
                          padding: "0px 12px 0px 12px",
                          alignItems: "center",
                          flexWrap: "nowrap",
                          boxSizing: "border-box",
                          paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                          paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            width: 16,
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
                              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
                              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
                              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                              flexShrink: 0,
                              alignSelf: "stretch",
                            }}>
                              <svg width={13.333} height={13.314} viewBox="0 0 13.333 13.314" fill="none" style={{
                                position: "absolute",
                                left: 1.333,
                                top: 1.343,
                                width: 13.333,
                                height: 13.314,
                                color: "var(--color-icon-tertiary)",
                              }}>
                                <path d={"M 12.045 13.106 L 7.803 8.864 C 7.424 9.167 6.989 9.407 6.496 9.583 C 6.004 9.76 5.48 9.848 4.924 9.848 C 3.548 9.848 2.383 9.372 1.43 8.419 C 0.477 7.465 0 6.301 0 4.924 C 0 3.548 0.477 2.383 1.43 1.43 C 2.383 0.477 3.548 0 4.924 0 C 6.301 0 7.465 0.477 8.419 1.43 C 9.372 2.383 9.848 3.548 9.848 4.924 C 9.848 5.48 9.76 6.004 9.583 6.496 C 9.407 6.989 9.167 7.424 8.864 7.803 L 13.125 12.064 C 13.264 12.203 13.333 12.374 13.333 12.576 C 13.333 12.778 13.258 12.955 13.106 13.106 C 12.967 13.245 12.79 13.314 12.576 13.314 C 12.361 13.314 12.184 13.245 12.045 13.106 Z M 4.924 8.333 C 5.871 8.333 6.676 8.002 7.339 7.339 C 8.002 6.676 8.333 5.871 8.333 4.924 C 8.333 3.977 8.002 3.172 7.339 2.509 C 6.676 1.846 5.871 1.515 4.924 1.515 C 3.977 1.515 3.172 1.846 2.509 2.509 C 1.846 3.172 1.515 3.977 1.515 4.924 C 1.515 5.871 1.846 6.676 2.509 7.339 C 3.172 8.002 3.977 8.333 4.924 8.333 Z"} fill="currentColor" fillRule="nonzero" />
                              </svg>
                            </div>
                          </div>
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
                            color: "var(--field-text-placeholder)",
                            flexGrow: 1,
                          }}>이름을 입력하세요</span>
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        gap: 20,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: 20,
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            value={"checked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            value={"checked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                        </div>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: 20,
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            value={"checked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            value={"checked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                        </div>
                      </div>
                    </div>
                    <Component12
                      style={{
                        position: "relative",
                        width: 4,
                        height: 80,
                        flexShrink: 0,
                      }}
                      prop={"vertical"}
                      prop2={"default"}
                    />
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
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
                    color: "var(--color-text-secondary-2)",
                    flexShrink: 0,
                  }}>생성자</span>
                  <div style={{
                    position: "relative",
                    height: "calc(var(--sizing-control-xs) * 1px)",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--spacing-gap-2xs) * 1px)",
                    padding: "0px 12px 0px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                    paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                    paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                    paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                    flexShrink: 0,
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
                    }}>선택하기</span>
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
                        <svg width={13.333} height={6.850} viewBox="0 0 13.333 6.850" fill="none" style={{
                          position: "absolute",
                          left: 1.333,
                          top: 4.575,
                          width: 13.333,
                          height: 6.85,
                          color: "var(--color-icon-basic)",
                        }}>
                          <path d={"M 0.21 0.28 C 0.516 -0.064 1.043 -0.095 1.387 0.21 L 6.667 4.902 L 11.946 0.21 C 12.291 -0.095 12.817 -0.064 13.123 0.28 C 13.429 0.624 13.398 1.151 13.054 1.456 L 7.22 6.64 C 6.904 6.92 6.429 6.92 6.113 6.64 L 0.28 1.456 C -0.064 1.151 -0.095 0.624 0.21 0.28 Z"} fill="currentColor" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <svg height={1} viewBox="0 -0.500 504 1" fill="none" style={{
                  position: "relative",
                  height: 1,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <path d={"M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -0.5 L 0.5 -1 Z M 503.5 0 C 503.776 0 504 -0.224 504 -0.5 C 504 -0.776 503.776 -1 503.5 -1 L 503.5 -0.5 L 503.5 0 Z M 0.5 -0.5 L 0.5 0 L 503.5 0 L 503.5 -0.5 L 503.5 -1 L 0.5 -1 L 0.5 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
                position: "relative",
                width: 4,
                height: 176,
                flexShrink: 0,
              }}>
              <Component12
                style={{ transform: "scale(1, 2.200)", transformOrigin: "0 0" }}
                prop={"vertical"}
                prop2={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 2460,
          top: 108,
          width: 560,
          height: 602,
          maxWidth: 1536,
          maxHeight: 864,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--color-surface-primary)",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            borderTop: "1px solid var(--color-border-subtle)",
            borderRight: "1px solid var(--color-border-subtle)",
            borderBottom: "1px solid var(--color-border-subtle)",
            borderLeft: "1px solid var(--color-border-subtle)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-gap-xs) * 1px)",
            padding: "16px 24px 16px 24px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-padding-h-xl) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-xl) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 20,
                lineHeight: 1.600000023841858,
                letterSpacing: "-0.030em",
                color: "var(--color-text-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>필터</span>
            </div>
            <div style={{
              position: "relative",
              width: 65,
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
                  <svg width={8.728} height={10} viewBox="0 0 8.728 10" fill="none" style={{
                    position: "absolute",
                    left: 1.636,
                    top: 1,
                    width: 8.728,
                    height: 10,
                    color: "var(--color-icon-basic)",
                  }}>
                    <path d={"M 4.354 10 C 3.219 10 2.241 9.627 1.419 8.882 C 0.597 8.137 0.125 7.213 0.004 6.112 C -0.013 5.982 0.026 5.869 0.119 5.772 C 0.212 5.674 0.328 5.626 0.465 5.626 C 0.595 5.626 0.71 5.672 0.812 5.765 C 0.913 5.859 0.972 5.974 0.988 6.112 C 1.101 6.946 1.474 7.641 2.106 8.196 C 2.737 8.751 3.487 9.028 4.354 9.028 C 5.301 9.028 6.105 8.698 6.765 8.037 C 7.426 7.377 7.756 6.574 7.756 5.626 C 7.756 4.678 7.426 3.874 6.765 3.214 C 6.105 2.554 5.301 2.224 4.354 2.224 L 4.281 2.224 L 4.706 2.649 C 4.795 2.738 4.84 2.851 4.84 2.989 C 4.84 3.127 4.795 3.24 4.706 3.329 C 4.609 3.426 4.491 3.475 4.354 3.475 C 4.216 3.475 4.102 3.426 4.013 3.329 L 2.75 2.078 C 2.701 2.029 2.667 1.977 2.647 1.92 C 2.626 1.863 2.616 1.802 2.616 1.738 C 2.616 1.673 2.626 1.612 2.647 1.555 C 2.667 1.499 2.701 1.446 2.75 1.397 L 4.013 0.134 C 4.102 0.045 4.216 0 4.354 0 C 4.491 0 4.609 0.045 4.706 0.134 C 4.795 0.231 4.84 0.348 4.84 0.486 C 4.84 0.624 4.795 0.737 4.706 0.826 L 4.281 1.252 L 4.354 1.252 C 4.961 1.252 5.53 1.367 6.061 1.598 C 6.591 1.829 7.053 2.14 7.446 2.533 C 7.839 2.926 8.151 3.388 8.382 3.918 C 8.612 4.449 8.728 5.018 8.728 5.626 C 8.728 6.233 8.612 6.802 8.382 7.333 C 8.151 7.863 7.839 8.325 7.446 8.718 C 7.053 9.111 6.591 9.423 6.061 9.654 C 5.53 9.885 4.961 10 4.354 10 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
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
              }}>초기화</span>
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
            <div style={{
              position: "relative",
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
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: "16px 24px 16px 24px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--space-10) * 1px)",
            paddingTop: "calc(var(--space-8) * 1px)",
            paddingRight: "calc(var(--space-10) * 1px)",
            paddingBottom: "calc(var(--space-8) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "pre-wrap",
                lineHeight: 1.399999976158142,
                letterSpacing: "-0.030em",
                color: "var(--color-text-secondary-2)",
                flexShrink: 0,
              }}>{"서비스 여부 "}<span style={{ color: "rgb(60,105,252)" }}>{"/1"}</span></span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 37,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={true}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 62,
                    flexShrink: 0,
                  }}
                  label={"아니오"}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
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
                color: "var(--color-text-secondary-2)",
                flexShrink: 0,
              }}>수정 일시</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 62,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 75,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "pre-wrap",
                lineHeight: 1.399999976158142,
                letterSpacing: "-0.030em",
                color: "var(--color-text-secondary-2)",
                flexShrink: 0,
              }}>{"생성 일시 "}<span style={{ color: "rgb(60,105,252)" }}>{"/1"}</span></span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 62,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={true}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 75,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.399999976158142,
                  letterSpacing: "-0.030em",
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>{"수정자 "}<span style={{ color: "rgb(60,105,252)" }}>{"/8"}</span></span>
                <div style={{
                  position: "relative",
                  height: "calc(var(--sizing-control-xs) * 1px)",
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--spacing-gap-2xs) * 1px)",
                  padding: "0px 12px 0px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                  paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                  flexShrink: 0,
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
                  }}>선택하기</span>
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
                      <svg width={13.333} height={6.850} viewBox="0 0 13.333 6.850" fill="none" style={{
                        position: "absolute",
                        left: 1.333,
                        top: 4.575,
                        width: 13.333,
                        height: 6.85,
                        color: "var(--color-icon-basic)",
                      }}>
                        <path d={"M 0.21 0.28 C 0.516 -0.064 1.043 -0.095 1.387 0.21 L 6.667 4.902 L 11.946 0.21 C 12.291 -0.095 12.817 -0.064 13.123 0.28 C 13.429 0.624 13.398 1.151 13.054 1.456 L 7.22 6.64 C 6.904 6.92 6.429 6.92 6.113 6.64 L 0.28 1.456 C -0.064 1.151 -0.095 0.624 0.21 0.28 Z"} fill="currentColor" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "var(--color-surface-subtle)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                padding: "12px 12px 12px 12px",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  width: 464,
                  height: 28,
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                    alignSelf: "stretch",
                  }}>
                    <InputChip
                      style={{
                        position: "relative",
                        width: 66,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        height: "auto",
                      }}
                      label={"이름"}
                      variant={"fill"}
                      size={"sm"}
                      state={"default"}
                    />
                    <InputChip
                      style={{
                        position: "relative",
                        width: 66,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        height: "auto",
                      }}
                      label={"이름"}
                      variant={"fill"}
                      size={"sm"}
                      state={"default"}
                    />
                    <InputChip
                      style={{
                        position: "relative",
                        width: 66,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        height: "auto",
                      }}
                      label={"이름"}
                      variant={"fill"}
                      size={"sm"}
                      state={"default"}
                    />
                    <InputChip
                      style={{
                        position: "relative",
                        width: 66,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        height: "auto",
                      }}
                      label={"이름"}
                      variant={"fill"}
                      size={"sm"}
                      state={"default"}
                    />
                    <InputChip
                      style={{
                        position: "relative",
                        width: 66,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        height: "auto",
                      }}
                      label={"이름"}
                      variant={"fill"}
                      size={"sm"}
                      state={"default"}
                    />
                    <InputChip
                      style={{
                        position: "relative",
                        width: 66,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        height: "auto",
                      }}
                      label={"이름"}
                      variant={"fill"}
                      size={"sm"}
                      state={"default"}
                    />
                    <div style={{
                      position: "absolute",
                      left: 396,
                      top: 0,
                      width: 28,
                      height: 28,
                      background: "linear-gradient(90deg, rgba(249,249,251,0) 0.00%, rgb(249,249,251) 100.00%)",
                    }} />
                  </div>
                  <div style={{
                    position: "relative",
                    width: "calc(var(--sizing-control-2xs) * 1px)",
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
                    flexShrink: 0,
                    alignSelf: "stretch",
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
                        <svg width={6.850} height={13.333} viewBox="0 0 6.850 13.333" fill="none" style={{
                          position: "absolute",
                          left: 4.575,
                          top: 1.333,
                          width: 6.85,
                          height: 13.333,
                          color: "var(--color-icon-basic)",
                        }}>
                          <path d={"M 0.28 0.21 C 0.624 -0.095 1.151 -0.064 1.456 0.28 L 6.64 6.113 C 6.92 6.429 6.92 6.904 6.64 7.22 L 1.456 13.054 C 1.151 13.398 0.624 13.429 0.28 13.123 C -0.064 12.817 -0.095 12.291 0.21 11.946 L 4.902 6.667 L 0.21 1.387 C -0.095 1.043 -0.064 0.516 0.28 0.21 Z"} fill="currentColor" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
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
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>생성자</span>
                <div style={{
                  position: "relative",
                  height: "calc(var(--sizing-control-xs) * 1px)",
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--spacing-gap-2xs) * 1px)",
                  padding: "0px 12px 0px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                  paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                  flexShrink: 0,
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
                  }}>선택하기</span>
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
                      <svg width={13.333} height={6.850} viewBox="0 0 13.333 6.850" fill="none" style={{
                        position: "absolute",
                        left: 1.333,
                        top: 4.575,
                        width: 13.333,
                        height: 6.85,
                        color: "var(--color-icon-basic)",
                      }}>
                        <path d={"M 0.21 0.28 C 0.516 -0.064 1.043 -0.095 1.387 0.21 L 6.667 4.902 L 11.946 0.21 C 12.291 -0.095 12.817 -0.064 13.123 0.28 C 13.429 0.624 13.398 1.151 13.054 1.456 L 7.22 6.64 C 6.904 6.92 6.429 6.92 6.113 6.64 L 0.28 1.456 C -0.064 1.151 -0.095 0.624 0.21 0.28 Z"} fill="currentColor" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <svg height={1} viewBox="0 -0.500 512 1" fill="none" style={{
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -0.5 L 0.5 -1 Z M 511.5 0 C 511.776 0 512 -0.224 512 -0.5 C 512 -0.776 511.776 -1 511.5 -1 L 511.5 -0.5 L 511.5 0 Z M 0.5 -0.5 L 0.5 0 L 511.5 0 L 511.5 -0.5 L 511.5 -1 L 0.5 -1 L 0.5 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 1260,
          top: 108,
          width: 560,
          height: 602,
          maxWidth: 1536,
          maxHeight: 864,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--color-surface-primary)",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            borderTop: "1px solid var(--color-border-subtle)",
            borderRight: "1px solid var(--color-border-subtle)",
            borderBottom: "1px solid var(--color-border-subtle)",
            borderLeft: "1px solid var(--color-border-subtle)",
            display: "flex",
            flexDirection: "row",
            gap: "calc(var(--spacing-gap-xs) * 1px)",
            padding: "16px 24px 16px 24px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-padding-h-xl) * 1px)",
            paddingTop: "calc(var(--spacing-padding-v-md) * 1px)",
            paddingRight: "calc(var(--spacing-padding-h-xl) * 1px)",
            paddingBottom: "calc(var(--spacing-padding-v-md) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 20,
                lineHeight: 1.600000023841858,
                letterSpacing: "-0.030em",
                color: "var(--color-text-primary)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>필터</span>
            </div>
            <div style={{
              position: "relative",
              width: 65,
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
                  <svg width={8.728} height={10} viewBox="0 0 8.728 10" fill="none" style={{
                    position: "absolute",
                    left: 1.636,
                    top: 1,
                    width: 8.728,
                    height: 10,
                    color: "var(--color-icon-basic)",
                  }}>
                    <path d={"M 4.354 10 C 3.219 10 2.241 9.627 1.419 8.882 C 0.597 8.137 0.125 7.213 0.004 6.112 C -0.013 5.982 0.026 5.869 0.119 5.772 C 0.212 5.674 0.328 5.626 0.465 5.626 C 0.595 5.626 0.71 5.672 0.812 5.765 C 0.913 5.859 0.972 5.974 0.988 6.112 C 1.101 6.946 1.474 7.641 2.106 8.196 C 2.737 8.751 3.487 9.028 4.354 9.028 C 5.301 9.028 6.105 8.698 6.765 8.037 C 7.426 7.377 7.756 6.574 7.756 5.626 C 7.756 4.678 7.426 3.874 6.765 3.214 C 6.105 2.554 5.301 2.224 4.354 2.224 L 4.281 2.224 L 4.706 2.649 C 4.795 2.738 4.84 2.851 4.84 2.989 C 4.84 3.127 4.795 3.24 4.706 3.329 C 4.609 3.426 4.491 3.475 4.354 3.475 C 4.216 3.475 4.102 3.426 4.013 3.329 L 2.75 2.078 C 2.701 2.029 2.667 1.977 2.647 1.92 C 2.626 1.863 2.616 1.802 2.616 1.738 C 2.616 1.673 2.626 1.612 2.647 1.555 C 2.667 1.499 2.701 1.446 2.75 1.397 L 4.013 0.134 C 4.102 0.045 4.216 0 4.354 0 C 4.491 0 4.609 0.045 4.706 0.134 C 4.795 0.231 4.84 0.348 4.84 0.486 C 4.84 0.624 4.795 0.737 4.706 0.826 L 4.281 1.252 L 4.354 1.252 C 4.961 1.252 5.53 1.367 6.061 1.598 C 6.591 1.829 7.053 2.14 7.446 2.533 C 7.839 2.926 8.151 3.388 8.382 3.918 C 8.612 4.449 8.728 5.018 8.728 5.626 C 8.728 6.233 8.612 6.802 8.382 7.333 C 8.151 7.863 7.839 8.325 7.446 8.718 C 7.053 9.111 6.591 9.423 6.061 9.654 C 5.53 9.885 4.961 10 4.354 10 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
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
              }}>초기화</span>
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
            <div style={{
              position: "relative",
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
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "16px 24px 16px 24px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--space-10) * 1px)",
            paddingTop: "calc(var(--space-8) * 1px)",
            paddingRight: "calc(var(--space-10) * 1px)",
            paddingBottom: "calc(var(--space-8) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: "calc(var(--space-10) * 1px)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.399999976158142,
                  letterSpacing: "-0.030em",
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>{"서비스 여부 "}<span style={{ color: "rgb(60,105,252)" }}>{"/1"}</span></span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 37,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={true}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 62,
                      flexShrink: 0,
                    }}
                    label={"아니오"}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
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
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>수정 일시</span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 62,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 75,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.399999976158142,
                  letterSpacing: "-0.030em",
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>{"생성 일시 "}<span style={{ color: "rgb(60,105,252)" }}>{"/1"}</span></span>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  gap: 12,
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 62,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={true}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 58,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                  <ChoiceChip
                    style={{
                      position: "relative",
                      height: 32,
                      width: 75,
                      flexShrink: 0,
                    }}
                    variant={"outline"}
                    selected={false}
                    state={"default"}
                    size={"md"}
                  />
                </div>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
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
                    color: "var(--color-text-secondary-2)",
                    flexShrink: 0,
                  }}>수정자</span>
                  <div style={{
                    position: "relative",
                    height: "calc(var(--sizing-control-xs) * 1px)",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--spacing-gap-2xs) * 1px)",
                    padding: "0px 12px 0px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                    paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                    paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                    paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                    flexShrink: 0,
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
                    }}>선택하기</span>
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
                        <svg width={13.333} height={6.850} viewBox="0 0 13.333 6.850" fill="none" style={{
                          position: "absolute",
                          left: 1.333,
                          top: 4.575,
                          width: 13.333,
                          height: 6.85,
                          color: "var(--color-icon-basic)",
                        }}>
                          <path d={"M 6.113 0.21 C 6.429 -0.07 6.904 -0.07 7.22 0.21 L 13.054 5.394 C 13.398 5.699 13.429 6.226 13.123 6.57 C 12.817 6.914 12.291 6.945 11.946 6.64 L 6.667 1.948 L 1.387 6.64 C 1.043 6.945 0.516 6.914 0.21 6.57 C -0.095 6.226 -0.064 5.699 0.28 5.394 L 6.113 0.21 Z"} fill="currentColor" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "relative",
                  height: 308,
                  overflow: "hidden",
                  borderRadius: 8,
                  backgroundColor: "var(--color-surface-subtle)",
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                  padding: "12px 12px 12px 12px",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <div style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "flex-start",
                    flexWrap: "nowrap",
                    flexGrow: 1,
                  }}>
                    <div style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                      alignItems: "flex-start",
                      flexWrap: "nowrap",
                      flexGrow: 1,
                    }}>
                      <div style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        gap: "calc(var(--spacing-gap-xs) * 1px)",
                        alignItems: "flex-start",
                        flexWrap: "nowrap",
                        paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
                        paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                        paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
                        paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          height: "calc(var(--sizing-control-sm) * 1px)",
                          borderRadius: 8,
                          backgroundColor: "var(--field-bg-surface)",
                          boxShadow: "inset 0 0 0 1px var(--field-border-default)",
                          display: "flex",
                          flexDirection: "row",
                          gap: "calc(var(--spacing-gap-xs) * 1px)",
                          padding: "0px 12px 0px 12px",
                          alignItems: "center",
                          flexWrap: "nowrap",
                          boxSizing: "border-box",
                          paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                          paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                          paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                          paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                          flexShrink: 0,
                          alignSelf: "stretch",
                        }}>
                          <div style={{
                            position: "relative",
                            width: 16,
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
                              paddingLeft: "calc(var(--spacing-padding-h-none) * 1px)",
                              paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                              paddingRight: "calc(var(--spacing-padding-h-none) * 1px)",
                              paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                              flexShrink: 0,
                              alignSelf: "stretch",
                            }}>
                              <svg width={13.333} height={13.314} viewBox="0 0 13.333 13.314" fill="none" style={{
                                position: "absolute",
                                left: 1.333,
                                top: 1.343,
                                width: 13.333,
                                height: 13.314,
                                color: "var(--color-icon-tertiary)",
                              }}>
                                <path d={"M 12.045 13.106 L 7.803 8.864 C 7.424 9.167 6.989 9.407 6.496 9.583 C 6.004 9.76 5.48 9.848 4.924 9.848 C 3.548 9.848 2.383 9.372 1.43 8.419 C 0.477 7.465 0 6.301 0 4.924 C 0 3.548 0.477 2.383 1.43 1.43 C 2.383 0.477 3.548 0 4.924 0 C 6.301 0 7.465 0.477 8.419 1.43 C 9.372 2.383 9.848 3.548 9.848 4.924 C 9.848 5.48 9.76 6.004 9.583 6.496 C 9.407 6.989 9.167 7.424 8.864 7.803 L 13.125 12.064 C 13.264 12.203 13.333 12.374 13.333 12.576 C 13.333 12.778 13.258 12.955 13.106 13.106 C 12.967 13.245 12.79 13.314 12.576 13.314 C 12.361 13.314 12.184 13.245 12.045 13.106 Z M 4.924 8.333 C 5.871 8.333 6.676 8.002 7.339 7.339 C 8.002 6.676 8.333 5.871 8.333 4.924 C 8.333 3.977 8.002 3.172 7.339 2.509 C 6.676 1.846 5.871 1.515 4.924 1.515 C 3.977 1.515 3.172 1.846 2.509 2.509 C 1.846 3.172 1.515 3.977 1.515 4.924 C 1.515 5.871 1.846 6.676 2.509 7.339 C 3.172 8.002 3.977 8.333 4.924 8.333 Z"} fill="currentColor" fillRule="nonzero" />
                              </svg>
                            </div>
                          </div>
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
                            color: "var(--field-text-placeholder)",
                            flexGrow: 1,
                          }}>이름을 입력하세요</span>
                        </div>
                      </div>
                      <div style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        gap: 20,
                        alignItems: "center",
                        flexWrap: "nowrap",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: 20,
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                        </div>
                        <div style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: 20,
                          alignItems: "flex-start",
                          flexWrap: "nowrap",
                          flexGrow: 1,
                        }}>
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                          <Checkbox2
                            style={{ position: "relative", width: 50, flexShrink: 0 }}
                            label2={"이름"}
                            value={"unchecked"}
                            size={"sm"}
                            state={"default"}
                          />
                        </div>
                      </div>
                    </div>
                    <Component12
                      style={{
                        position: "relative",
                        width: 4,
                        height: 80,
                        flexShrink: 0,
                      }}
                      prop={"vertical"}
                      prop2={"default"}
                    />
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  flexShrink: 0,
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
                    color: "var(--color-text-secondary-2)",
                    flexShrink: 0,
                  }}>생성자</span>
                  <div style={{
                    position: "relative",
                    height: "calc(var(--sizing-control-xs) * 1px)",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "row",
                    gap: "calc(var(--spacing-gap-2xs) * 1px)",
                    padding: "0px 12px 0px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    boxSizing: "border-box",
                    paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                    paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                    paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                    paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                    flexShrink: 0,
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
                    }}>선택하기</span>
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
                        <svg width={13.333} height={6.850} viewBox="0 0 13.333 6.850" fill="none" style={{
                          position: "absolute",
                          left: 1.333,
                          top: 4.575,
                          width: 13.333,
                          height: 6.85,
                          color: "var(--color-icon-basic)",
                        }}>
                          <path d={"M 0.21 0.28 C 0.516 -0.064 1.043 -0.095 1.387 0.21 L 6.667 4.902 L 11.946 0.21 C 12.291 -0.095 12.817 -0.064 13.123 0.28 C 13.429 0.624 13.398 1.151 13.054 1.456 L 7.22 6.64 C 6.904 6.92 6.429 6.92 6.113 6.64 L 0.28 1.456 C -0.064 1.151 -0.095 0.624 0.21 0.28 Z"} fill="currentColor" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <svg height={1} viewBox="0 -0.500 504 1" fill="none" style={{
                  position: "relative",
                  height: 1,
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <path d={"M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -0.5 L 0.5 -1 Z M 503.5 0 C 503.776 0 504 -0.224 504 -0.5 C 504 -0.776 503.776 -1 503.5 -1 L 503.5 -0.5 L 503.5 0 Z M 0.5 -0.5 L 0.5 0 L 503.5 0 L 503.5 -0.5 L 503.5 -1 L 0.5 -1 L 0.5 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
                position: "relative",
                width: 4,
                height: 176,
                flexShrink: 0,
              }}>
              <Component12
                style={{ transform: "scale(1, 2.200)", transformOrigin: "0 0" }}
                prop={"vertical"}
                prop2={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 60,
          top: 108,
          width: 560,
          height: 602,
          maxWidth: 1536,
          maxHeight: 864,
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--color-surface-primary)",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.06), 0px 8px 15px 0px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <Header5
            style={{
              position: "relative",
              height: 56,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            icon={false}
            title={"필터"}
            description={false}
            divider={true}
            descriptionPosition={"bottom"}
            size={"md"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: "16px 24px 16px 24px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--space-10) * 1px)",
            paddingTop: "calc(var(--space-8) * 1px)",
            paddingRight: "calc(var(--space-10) * 1px)",
            paddingBottom: "calc(var(--space-8) * 1px)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
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
                color: "var(--color-text-secondary-2)",
                flexShrink: 0,
              }}>서비스 여부</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 37,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 62,
                    flexShrink: 0,
                  }}
                  label={"아니오"}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
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
                color: "var(--color-text-secondary-2)",
                flexShrink: 0,
              }}>수정 일시</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 62,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 75,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
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
                color: "var(--color-text-secondary-2)",
                flexShrink: 0,
              }}>생성 일시</span>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 12,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 62,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 58,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
                <ChoiceChip
                  style={{
                    position: "relative",
                    height: 32,
                    width: 75,
                    flexShrink: 0,
                  }}
                  variant={"outline"}
                  selected={false}
                  state={"default"}
                  size={"md"}
                />
              </div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
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
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>수정자</span>
                <div style={{
                  position: "relative",
                  height: "calc(var(--sizing-control-xs) * 1px)",
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--spacing-gap-2xs) * 1px)",
                  padding: "0px 12px 0px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                  paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                  flexShrink: 0,
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
                  }}>선택하기</span>
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
                      <svg width={13.333} height={6.850} viewBox="0 0 13.333 6.850" fill="none" style={{
                        position: "absolute",
                        left: 1.333,
                        top: 4.575,
                        width: 13.333,
                        height: 6.85,
                        color: "var(--color-icon-basic)",
                      }}>
                        <path d={"M 0.21 0.28 C 0.516 -0.064 1.043 -0.095 1.387 0.21 L 6.667 4.902 L 11.946 0.21 C 12.291 -0.095 12.817 -0.064 13.123 0.28 C 13.429 0.624 13.398 1.151 13.054 1.456 L 7.22 6.64 C 6.904 6.92 6.429 6.92 6.113 6.64 L 0.28 1.456 C -0.064 1.151 -0.095 0.624 0.21 0.28 Z"} fill="currentColor" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <svg height={1} viewBox="0 -0.500 512 1" fill="none" style={{
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -0.5 L 0.5 -1 Z M 511.5 0 C 511.776 0 512 -0.224 512 -0.5 C 512 -0.776 511.776 -1 511.5 -1 L 511.5 -0.5 L 511.5 0 Z M 0.5 -0.5 L 0.5 0 L 511.5 0 L 511.5 -0.5 L 511.5 -1 L 0.5 -1 L 0.5 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
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
                  color: "var(--color-text-secondary-2)",
                  flexShrink: 0,
                }}>생성자</span>
                <div style={{
                  position: "relative",
                  height: "calc(var(--sizing-control-xs) * 1px)",
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "row",
                  gap: "calc(var(--spacing-gap-2xs) * 1px)",
                  padding: "0px 12px 0px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  paddingLeft: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingTop: "calc(var(--spacing-padding-v-none) * 1px)",
                  paddingRight: "calc(var(--spacing-padding-h-sm) * 1px)",
                  paddingBottom: "calc(var(--spacing-padding-v-none) * 1px)",
                  flexShrink: 0,
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
                  }}>선택하기</span>
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
                      <svg width={13.333} height={6.850} viewBox="0 0 13.333 6.850" fill="none" style={{
                        position: "absolute",
                        left: 1.333,
                        top: 4.575,
                        width: 13.333,
                        height: 6.85,
                        color: "var(--color-icon-basic)",
                      }}>
                        <path d={"M 0.21 0.28 C 0.516 -0.064 1.043 -0.095 1.387 0.21 L 6.667 4.902 L 11.946 0.21 C 12.291 -0.095 12.817 -0.064 13.123 0.28 C 13.429 0.624 13.398 1.151 13.054 1.456 L 7.22 6.64 C 6.904 6.92 6.429 6.92 6.113 6.64 L 0.28 1.456 C -0.064 1.151 -0.095 0.624 0.21 0.28 Z"} fill="currentColor" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <svg height={1} viewBox="0 -0.500 512 1" fill="none" style={{
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0.5 -1 C 0.224 -1 0 -0.776 0 -0.5 C 0 -0.224 0.224 0 0.5 0 L 0.5 -0.5 L 0.5 -1 Z M 511.5 0 C 511.776 0 512 -0.224 512 -0.5 C 512 -0.776 511.776 -1 511.5 -1 L 511.5 -0.5 L 511.5 0 Z M 0.5 -0.5 L 0.5 0 L 511.5 0 L 511.5 -0.5 L 511.5 -1 L 0.5 -1 L 0.5 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <span style={{
          position: "absolute",
          left: 60,
          top: 60,
          width: 76,
          height: 32,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 20,
          whiteSpace: "nowrap",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(0,0,0)",
        }}>기본 화면</span>
        <span style={{
          position: "absolute",
          left: 660,
          top: 60,
          width: 269,
          height: 32,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 20,
          whiteSpace: "pre-wrap",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(0,0,0)",
          display: "inline-block",
        }}>{"필터 선택 "}{"(선택 시 필터 자동 적용)"}</span>
        <span style={{
          position: "absolute",
          left: 1260,
          top: 60,
          width: 130,
          height: 32,
          fontFamily: "\"Spoqa Han Sans Neo\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 20,
          whiteSpace: "nowrap",
          lineHeight: 1.600000023841858,
          letterSpacing: "-0.030em",
          color: "rgb(0,0,0)",
        }}>사용자 선택하기</span>
      </div>
    </div>
  );
}
export default Filter;
