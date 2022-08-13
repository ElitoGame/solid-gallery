import { Show } from "solid-js";
import { CommonProps } from "../types";
import { useSlideShowContext } from "./slide-show";
import "./slide-show.css";


export const SlideShowNextInternal = (props: CommonProps) => {
    const slideShowContext = useSlideShowContext();
    return (
        <Show when={slideShowContext.state.showArrows}>
            <span class="slideshow-next gallery-button" onClick={props.onClick ?? function () {
                slideShowContext.next();
            }}>
                {slideShowContext.state.nextButton}
            </span>
        </Show>
    );
}