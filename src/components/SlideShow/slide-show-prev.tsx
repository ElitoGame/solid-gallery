import { Show } from "solid-js";
import { CommonProps } from "../types";
import { useSlideShowContext } from "./slide-show";
import "./slide-show.css";



export const SlideShowPrevInternal = (props: CommonProps) => {
    const slideShowContext = useSlideShowContext();
    return (
        <Show when={slideShowContext.state.showArrows}>
            <span class="slideshow-prev gallery-button" onClick={props.onClick ?? function () {
                slideShowContext.prev();
            }}>
                {slideShowContext.state.prevButton}
            </span>
        </Show>
    );
}