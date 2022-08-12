import { CommonProps } from "../types";



export const SlideShowDots = (props: CommonProps) => {
    return (
        <div class="slideshow-dots">
            {props.children}
        </div>
    );
}