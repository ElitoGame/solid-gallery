import { Show } from "solid-js";
import { CommonProps } from "../types";
import { useSlideShowContext } from "./slide-show";



export const SlideShowNext = (props: CommonProps) => {
    const slideShowContext = useSlideShowContext();
    return (
        <span class="slideshow-next" onClick={props.onClick ?? function () {
            slideShowContext.next();
        }}>
            <Show when={props.children !== undefined} fallback={
                <>
                    &#10095;
                </>
            }>
                <>
                    {props.children}
                </>
            </Show>
        </span>
    );
}