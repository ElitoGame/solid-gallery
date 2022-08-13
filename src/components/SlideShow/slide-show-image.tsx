import { JSX } from "solid-js";
import { convertSizeToCSS } from "../css";
import { useSlideShowContext } from "./slide-show";



export const SlideShowImage = (props: { src: string, alt: string, children?: JSX.Element | JSX.Element[], title?: string, class?: string }) => {
    const slideShowContext = useSlideShowContext();

    return (
        <img src={props.src} alt={props.alt} title={props.title} class={props.class} style={{
            width: slideShowContext.state.width ?? convertSizeToCSS(slideShowContext.state.w),
            height: slideShowContext.state.height ?? convertSizeToCSS(slideShowContext.state.h),
        }} />
    );
}