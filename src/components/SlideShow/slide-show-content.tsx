import { children, createEffect, For, JSX, Show } from "solid-js";
import { Transition } from "solid-transition-group";
import { CommonProps } from "../types";
import { useSlideShowContext } from "./slide-show";
import { SlideShowBullet } from "./slide-show-bullets";
import { SlideShowNextInternal } from "./slide-show-next";
import { SlideShowPrevInternal } from "./slide-show-prev";

export const SlideShowContent = (props: CommonProps) => {
  const slideShowContext = useSlideShowContext();

  const resolved = children(() => props.children);

  const resolvedChildren = () => {
    let list = resolved();
    if (!Array.isArray(list)) list = [list];
    slideShowContext.setSize(list.length);
    return list;
  };

  return (
    <>
      <div
        class="slideshow-content"
        style={{
          position: "relative",
          "flex-direction": "row",
          "column-gap": "1rem",
          "justify-content": "center",
          "align-items": "center",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Show
          when={
            slideShowContext.state.showThumbnails &&
            slideShowContext.state.thumbnailsPosition === "left"
          }
        >
          <div
            class="thumbnail-wrapper"
            style={{
              display: "flex",
              "flex-direction": "column",
              "justify-content": "center",
              "align-items": "center",
              "column-gap": "1rem",
              height: `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
              margin: "1rem 0",
            }}
          >
            <Show
              when={
                slideShowContext.state.showArrows &&
                slideShowContext.state.arrowsPosition === "bottom-thumbnails"
              }
            >
              <SlideShowPrevInternal
                style={{
                  transform: "rotate(90deg)",
                }}
              ></SlideShowPrevInternal>
            </Show>
            {slideShowContext.state.thumbnails}
            <Show
              when={
                slideShowContext.state.showArrows &&
                slideShowContext.state.arrowsPosition === "bottom-thumbnails"
              }
            >
              <SlideShowNextInternal
                style={{
                  transform: "rotate(90deg)",
                }}
              ></SlideShowNextInternal>
            </Show>
          </div>
        </Show>
        <Show when={slideShowContext.state.showPrevNextElement}>
          <div
            class="prev slide-content"
            style={{
              mask: `linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) ${
                slideShowContext.state.showPrevNextElementFade * 100
              }%)`,
              position: "relative",
              top: "0",
              left: `0%`,
              overflow: "hidden",
              height: slideShowContext.state.height ?? slideShowContext.state.h,
            }}
            onClick={() => {
              if (slideShowContext.state.prevNextElementClickable) slideShowContext.prev();
            }}
          >
            {resolvedChildren()[slideShowContext.getPrevIndex()]}
          </div>
        </Show>

        <Show
          when={
            slideShowContext.state.showArrows && slideShowContext.state.arrowsPosition === "side"
          }
        >
          <SlideShowPrevInternal></SlideShowPrevInternal>
        </Show>

        <div
          class="center"
          style={{
            position: "relative",
            height: slideShowContext.state.height ?? slideShowContext.state.h,
            width: slideShowContext.state.width ?? slideShowContext.state.w,
            overflow: "hidden",
            "flex-shrink": 0,
          }}
          onMouseOver={() => {
            if (slideShowContext.state.autoPlay && slideShowContext.state.autoPlayHoverPause) {
              slideShowContext.setAutoPlayPaused(true);
            }
          }}
          onMouseLeave={() => {
            if (slideShowContext.state.autoPlay && slideShowContext.state.autoPlayHoverPause) {
              slideShowContext.setAutoPlayPaused(false);
            }
          }}
        >
          <div
            class="current slide-content"
            style={
              {
                // "height": slideShowContext.state.height ?? slideShowContext.state.h,
              }
            }
          >
            {resolvedChildren()[slideShowContext.state.currentIndex]}
          </div>
          <Show
            when={
              slideShowContext.state.autoPlay &&
              slideShowContext.state.autoPlayProgressBar &&
              !slideShowContext.state.autoPlayProgressBarPosition.startsWith("thumbnail")
            }
          >
            <div
              class="progress-container"
              style={{
                position: "absolute",
                top: `${
                  slideShowContext.state.autoPlayProgressBarPosition === "top"
                    ? "0%"
                    : "calc(100% - " + slideShowContext.state.autoPlayProgressBarThickness + ")"
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

        <Show
          when={
            slideShowContext.state.showArrows && slideShowContext.state.arrowsPosition === "side"
          }
        >
          <SlideShowNextInternal></SlideShowNextInternal>
        </Show>

        <Show when={slideShowContext.state.showPrevNextElement}>
          <div
            class="next slide-content"
            style={{
              mask: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) ${
                slideShowContext.state.showPrevNextElementFade * 100
              }%)`,
              position: "relative",
              top: "0",
              right: `0%`,
              height: slideShowContext.state.height ?? slideShowContext.state.h,
              cursor: "pointer",
              overflow: "hidden",
            }}
            onClick={() => {
              if (slideShowContext.state.prevNextElementClickable) slideShowContext.next();
            }}
          >
            {resolvedChildren()[slideShowContext.getNextIndex()]}
          </div>
        </Show>

        <Show
          when={
            slideShowContext.state.showThumbnails &&
            slideShowContext.state.thumbnailsPosition === "right"
          }
        >
          <div
            class="thumbnail-wrapper"
            style={{
              display: "flex",
              "flex-direction": "column",
              "justify-content": "center",
              "align-items": "center",
              "column-gap": "1rem",
              height: `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
              margin: "1rem 0",
            }}
          >
            <Show
              when={
                slideShowContext.state.showArrows &&
                slideShowContext.state.arrowsPosition === "bottom-thumbnails"
              }
            >
              <SlideShowPrevInternal
                style={{
                  transform: "rotate(90deg)",
                }}
              ></SlideShowPrevInternal>
            </Show>
            {slideShowContext.state.thumbnails}
            <Show
              when={
                slideShowContext.state.showArrows &&
                slideShowContext.state.arrowsPosition === "bottom-thumbnails"
              }
            >
              <SlideShowNextInternal
                style={{
                  transform: "rotate(90deg)",
                }}
              ></SlideShowNextInternal>
            </Show>
          </div>
        </Show>
      </div>
      <Show
        when={
          slideShowContext.state.showThumbnails &&
          slideShowContext.state.thumbnailsPosition === "bottom"
        }
      >
        <div
          class="thumbnail-wrapper"
          style={{
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            "align-items": "center",
            "column-gap": "1rem",
            height: `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
            margin: "1rem 0",
          }}
        >
          <Show
            when={
              slideShowContext.state.showArrows &&
              slideShowContext.state.arrowsPosition === "bottom-thumbnails"
            }
          >
            <SlideShowPrevInternal></SlideShowPrevInternal>
          </Show>
          {slideShowContext.state.thumbnails}
          <Show
            when={
              slideShowContext.state.showArrows &&
              slideShowContext.state.arrowsPosition === "bottom-thumbnails"
            }
          >
            <SlideShowNextInternal></SlideShowNextInternal>
          </Show>
        </div>
      </Show>

      <div
        style={{
          display: "flex",
          "column-gap": "1rem",
          "justify-content": "center",
          "align-items": "center",
        }}
      >
        <Show
          when={
            slideShowContext.state.showArrows && slideShowContext.state.arrowsPosition === "bottom"
          }
        >
          <SlideShowPrevInternal></SlideShowPrevInternal>
        </Show>

        <Show when={slideShowContext.state.showBullets}>
          <div
            class="dots"
            style={{
              display: "flex",
              "flex-direction": "row",
              "column-gap": "1rem",
              "justify-content": "center",
              "align-items": "center",
              height: "2rem",
            }}
          >
            <For each={resolvedChildren()}>
              {(_child, index) => (
                <span
                  onClick={() => slideShowContext.setCurrentIndex(index())}
                  style={{
                    opacity: index() === slideShowContext.state.currentIndex ? 1 : 0.5,
                  }}
                >
                  {slideShowContext.state.bullets}
                </span>
              )}
            </For>
          </div>
        </Show>

        <Show
          when={
            slideShowContext.state.showArrows && slideShowContext.state.arrowsPosition === "bottom"
          }
        >
          <SlideShowNextInternal></SlideShowNextInternal>
        </Show>
      </div>
    </>
  );
};
