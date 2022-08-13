import { children, createEffect, For, Show } from "solid-js";
import { convertSizeToCSS } from "../css";
import { CommonProps } from "../types";
import { useSlideShowContext } from "./slide-show";



export const SlideShowThumbnails = (props: { thumbnails: string[] }) => {
    const slideShowContext = useSlideShowContext();

    slideShowContext.setThumbnails(() => {

        let container: HTMLDivElement | undefined;
        let selected: HTMLImageElement | undefined;

        createEffect(() => {
            // This needs to stay here to trigger the effect:
            slideShowContext.state.currentIndex;
            if (slideShowContext.state.thumbnailAutoScroll) {
                if (container && selected) {
                    const offset = (selected?.offsetLeft ?? 0) - (container?.offsetLeft ?? 0);
                    const widthC = container?.clientWidth;
                    const widthS = selected?.clientWidth;

                    console.log(offset, widthC, widthS, container?.scrollLeft);

                    if (slideShowContext.state.autoPlayDirection === "forward") {
                        if (offset - container.scrollLeft > widthC - widthS) {
                            container?.scrollTo((widthC - widthS + (selected?.offsetLeft ?? 0)), 0);
                            console.log("scroll to right");
                        } else if (offset <= 0) {
                            container?.scrollTo(0, 0);
                        }
                    } else if (slideShowContext.state.autoPlayDirection === "backward") {
                        console.log(offset, widthS + container.scrollLeft);
                        if (container.scrollLeft < offset - widthC) {
                            container?.scrollTo((widthC - widthS + (selected?.offsetLeft ?? 0)), 0);
                            console.log("scroll to left");
                        }
                        else if (offset < widthS + container.scrollLeft) {
                            container?.scrollTo(offset - widthC + widthS, 0);
                        }
                    }
                }
            }
        });

        return (
            <div ref={container} style={{
                display: "flex",
                flexDirection: "row",
                "column-gap": "1rem",
                "width": slideShowContext.state.width ?? convertSizeToCSS(slideShowContext.state.w),
                "overflow-x": "auto",
                "scroll-behavior": "smooth",
            }}>
                <For each={props.thumbnails}>
                    {(child, index) => (
                        <Show when={index() === slideShowContext.state.currentIndex} fallback={
                            <img onClick={() => slideShowContext.setCurrentIndex(index())}
                                src={child}
                                style={{
                                    opacity: index() === slideShowContext.state.currentIndex ? 1 : 0.5,
                                    width: `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                                    "min-width": `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                                }}>
                            </img>
                        }>
                            <img ref={selected} onClick={() => slideShowContext.setCurrentIndex(index())}
                                src={child}
                                style={{
                                    opacity: index() === slideShowContext.state.currentIndex ? 1 : 0.5,
                                    width: `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                                    "min-width": `calc(${slideShowContext.state.thumbnailScale} * 100%)`,
                                }}>
                            </img>
                        </Show>
                    )}
                </For>
            </div>
        );
    });

    return (
        <></>
    );
}