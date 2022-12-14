import { children, createEffect, createSignal, For, JSXElement, Show } from "solid-js";
import { convertSizeToCSS } from "../css";
import { useSlideShowContext } from "./slide-show";

export const SlideShowThumbnails = (props: {
  thumbnails?: string[];
  children?: JSXElement | JSXElement[];
}) => {
  const slideShowContext = useSlideShowContext();

  const c = children(() => props.children);
  // make sure c() returns an array of JSXElements
  const [thumbnails, setThumbnails] = createSignal<JSXElement[]>();

  if (!props.thumbnails || props.thumbnails.length === 0) {
    if (props.children) {
      setThumbnails(() => {
        if (Array.isArray(c())) {
          return c() as JSXElement[];
        } else {
          return [c() as JSXElement];
        }
      });
    } else {
      setThumbnails([]);
    }
  } else {
    setThumbnails(
      props.thumbnails.map((thumbnail, index) => {
        return (
          <img
            src={thumbnail}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></img>
        );
      }),
    );
  }

  const [getSelected, setSelected] = createSignal<HTMLDivElement>();

  slideShowContext.setThumbnails(() => {
    let container: HTMLDivElement | undefined;

    createEffect(async () => {
      // This needs to stay here to trigger the effect:
      if (slideShowContext.state.thumbnailAutoScroll) {
        if (container && getSelected()) {
          if (isScrolledOutOfView(getSelected(), container)) {
            // scroll only the containers scrollbar to center on the selected thumbnail
            container.scrollTo(
              (getSelected()?.offsetLeft ?? 0) -
                container.offsetWidth / 2 +
                (getSelected()?.offsetWidth ?? 0) / 2,
              (getSelected()?.offsetTop ?? 0) -
                container.offsetHeight / 2 +
                (getSelected()?.offsetHeight ?? 0) / 2,
            );
          }
        }
      }
    });

    return (
      <Show
        when={slideShowContext.state.thumbnailsPosition === "bottom"}
        fallback={
          <div
            ref={container}
            style={{
              display: "flex",
              position: "relative",
              "flex-direction": "column",
              "column-gap": slideShowContext.state.thumbnailGap,
              "row-gap": slideShowContext.state.thumbnailGap,
              height: slideShowContext.state.height ?? convertSizeToCSS(slideShowContext.state.h),
              "overflow-y": getScrollBarVisibility(slideShowContext.state.thumbnailScrollbar),
              "overflow-x": "hidden",
              "scroll-behavior": "smooth",
            }}
          >
            <For each={thumbnails()}>
              {(child, index) => (
                <Show
                  when={index() === slideShowContext.state.currentIndex}
                  fallback={
                    <div
                      onClick={() => slideShowContext.setCurrentIndex(index())}
                      style={{
                        opacity: index() === slideShowContext.state.currentIndex ? 1 : 0.5,
                        height: `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                        "min-height": `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                      }}
                    >
                      {child}
                    </div>
                  }
                >
                  <div
                    ref={setSelected}
                    style={{
                      opacity: index() === slideShowContext.state.currentIndex ? 1 : 0.5,
                      height: `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                      "min-height": `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                      position: "relative",
                    }}
                  >
                    <div
                      onClick={() => slideShowContext.setCurrentIndex(index())}
                      style={{
                        opacity: index() === slideShowContext.state.currentIndex ? 1 : 0.5,
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      {child}
                    </div>
                    <Show
                      when={
                        slideShowContext.state.autoPlay &&
                        slideShowContext.state.autoPlayProgressBar &&
                        slideShowContext.state.autoPlayProgressBarPosition.startsWith("thumbnail")
                      }
                    >
                      <div
                        class="progress-container"
                        style={{
                          position: "absolute",
                          top: `${
                            slideShowContext.state.autoPlayProgressBarPosition === "top"
                              ? "0%"
                              : "calc(100% - " +
                                slideShowContext.state.autoPlayProgressBarThickness +
                                ")"
                          }`,
                          left: "0",
                          height: slideShowContext.state.autoPlayProgressBarThickness,
                          border: "none",
                          "text-align": "end",
                          width: "100%",
                          "font-size": 0,
                        }}
                      >
                        <div
                          class="progress-bar"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: `${slideShowContext.state.autoPlayProgressBarWidth}%`,
                            "background-color": slideShowContext.state.autoPlayProgressBarColor,
                            opacity: slideShowContext.state.autoPlayProgressBarOpacity,
                            transition: "all .15s linear",
                          }}
                        ></div>
                      </div>
                    </Show>
                  </div>
                </Show>
              )}
            </For>
          </div>
        }
      >
        <div
          ref={container}
          style={{
            display: "flex",
            position: "relative",
            "flex-direction": "row",
            "column-gap": slideShowContext.state.thumbnailGap,
            "row-gap": slideShowContext.state.thumbnailGap,
            width: slideShowContext.state.width ?? convertSizeToCSS(slideShowContext.state.w),
            "overflow-x": getScrollBarVisibility(slideShowContext.state.thumbnailScrollbar),
            "overflow-y": "hidden",
            "scroll-behavior": "smooth",
          }}
        >
          <For each={thumbnails()}>
            {(child, index) => (
              <Show
                when={index() === slideShowContext.state.currentIndex}
                fallback={
                  <div
                    onClick={() => slideShowContext.setCurrentIndex(index())}
                    style={{
                      opacity: index() === slideShowContext.state.currentIndex ? 1 : 0.5,
                      width: `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                      "min-width": `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                    }}
                  >
                    {child}
                  </div>
                }
              >
                <div
                  ref={setSelected}
                  style={{
                    opacity: index() === slideShowContext.state.currentIndex ? 1 : 0.5,
                    width: `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                    "min-width": `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                  }}
                >
                  <div
                    onClick={() => slideShowContext.setCurrentIndex(index())}
                    style={{
                      opacity: index() === slideShowContext.state.currentIndex ? 1 : 0.5,
                      width: `calc(100%)`,
                      height: `calc(100%)`,
                    }}
                  >
                    {child}
                  </div>
                  <Show
                    when={
                      slideShowContext.state.autoPlay &&
                      slideShowContext.state.autoPlayProgressBar &&
                      slideShowContext.state.autoPlayProgressBarPosition.startsWith("thumbnail")
                    }
                  >
                    <div
                      class="progress-container"
                      style={{
                        position: "absolute",
                        top: `${
                          slideShowContext.state.autoPlayProgressBarPosition === "top"
                            ? "0%"
                            : "calc(100% - " +
                              slideShowContext.state.autoPlayProgressBarThickness +
                              ")"
                        }`,
                        left: "0",
                        height: slideShowContext.state.autoPlayProgressBarThickness,
                        border: "none",
                        "text-align": "end",
                        width: "100%",
                        "font-size": 0,
                      }}
                    >
                      <div
                        class="progress-bar"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: `${slideShowContext.state.autoPlayProgressBarWidth}%`,
                          "background-color": slideShowContext.state.autoPlayProgressBarColor,
                          opacity: slideShowContext.state.autoPlayProgressBarOpacity,
                          transition: "all .15s linear",
                        }}
                      ></div>
                    </div>
                  </Show>
                </div>
              </Show>
            )}
          </For>
        </div>
      </Show>
    );
  });

  return <></>;
};

function isScrolledOutOfView(el: HTMLElement | undefined, c: HTMLDivElement) {
  if (!el) return false;
  let elemRight = el.scrollLeft + el.clientWidth;
  let elemLeft = el.scrollLeft;
  return elemLeft <= 0 || elemRight >= c.clientWidth;
}

function getScrollBarVisibility(behavior: string): "auto" | "hidden" | "scroll" {
  switch (behavior) {
    case "auto":
      return "auto";
    case "never":
      return "hidden";
    case "always":
      return "scroll";
    default:
      return "auto";
  }
}
