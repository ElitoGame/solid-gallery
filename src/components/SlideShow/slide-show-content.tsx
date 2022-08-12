import { children, createEffect, For, JSX } from "solid-js";
import { CommonProps } from "../types";
import { useSlideShowContext } from "./slide-show";



export const SlideShowContent = (props: CommonProps) => {

    const slideShowContext = useSlideShowContext();

    const resolved = children(() => props.children);

    const resolvedChildren = () => {
        let list = resolved();
        if (!Array.isArray(list)) list = [list];
        slideShowContext.setSize(list.length);
        return list;
    }

    // Currently the indexes are messed up when around 0. -2 = 2, -1 = 1, 0 = 0, 1 = 1, 2 = 2, 3 = 0 -> it should be -2 = 1, -1 = 2, 0 = 0, 1 = 1, 2 = 2, 3 = 0
    createEffect(() => {
        console.log(resolvedChildren().length, Math.abs(slideShowContext.state.currentIndex) % resolvedChildren().length, slideShowContext.state.currentIndex);
    });

    return (
        <div class="slideshow-content">
            {resolvedChildren()[Math.abs(slideShowContext.state.currentIndex) % resolvedChildren().length]}
        </div>
    );
}