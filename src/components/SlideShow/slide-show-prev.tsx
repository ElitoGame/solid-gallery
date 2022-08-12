import { Show } from "solid-js";
import { CommonProps } from "../types";
import { useSlideShowContext } from "./slide-show";



export const SlideShowPrev = (props: CommonProps) => {
    const slideShowContext = useSlideShowContext();
    return (
        <span class="slideshow-prev" onClick={props.onClick ?? function () {
            slideShowContext.prev();
        }}>
            <Show when={props.children !== undefined} fallback={
                <>
                    &#10094;
                </>
            }>
                <>
                    {props.children}
                </>
            </Show>
        </span>
    );
}