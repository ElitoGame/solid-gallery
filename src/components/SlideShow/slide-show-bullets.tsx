import { Show } from "solid-js";
import { CommonProps } from "../types";
import { useSlideShowContext } from "./slide-show";



export const SlideShowBullet = (props: CommonProps) => {

    const slideShowContext = useSlideShowContext();
    slideShowContext.setBullets(() => {
        return (
            <Show when={props.children} fallback={
                <div class="slideshow-dot" style={{
                    "cursor": "pointer",
                    width: "1rem",
                    height: "1rem",
                    "background-color": "gray",
                    "border-radius": "50%",
                }}>
                </div>
            }>
                <span class="slideshow-dot" style={{
                    "cursor": "pointer",
                }}>
                    {props.children}
                </span>
            </Show>
        );
    })

    return (
        <></>
    );
}