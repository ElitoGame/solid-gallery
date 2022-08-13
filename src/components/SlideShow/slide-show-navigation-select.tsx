import { Show } from "solid-js";
import { CommonProps } from "../types";
import { useSlideShowContext } from "./slide-show";



export const SlideShowNext = (props: CommonProps) => {
    const slideShowContext = useSlideShowContext();
    slideShowContext.setNextButton(() => {
        return (
            <Show when={props.children !== undefined} fallback={
                <>
                    &#10095;
                </>
            }>
                <>
                    {props.children}
                </>
            </Show>
        );
    });
    return (
        <></>
    );
}

export const SlideShowPrev = (props: CommonProps) => {
    const slideShowContext = useSlideShowContext();
    slideShowContext.setPrevButton(() => {
        return (
            <Show when={props.children !== undefined} fallback={
                <>
                    &#10094;
                </>
            }>
                <>
                    {props.children}
                </>
            </Show>
        );
    });
    return (
        <></>
    );
}