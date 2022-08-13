import { createEffect, For, Show } from "solid-js";
import { convertSizeToCSS } from "../css";
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
                    if (isScrolledOutOfView(selected, container)) {
                        selected.scrollIntoView({ inline: "center" });
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

function isScrolledOutOfView(el: HTMLElement, c: HTMLDivElement) {
    let elemRight = el.scrollLeft + el.clientWidth;
    let elemLeft = el.scrollLeft;
    return (elemLeft <= 0) || (elemRight >= c.clientWidth);
}