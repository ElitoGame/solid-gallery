import { children, createEffect, createSignal, JSXElement, mergeProps } from "solid-js";
import { ImageScrollBarProps } from "../types";
import "./image-scroll-bar.css";

export const ImageScrollBar = (props: ImageScrollBarProps) => {

    const merged = mergeProps({
        width: "90%",
        height: "100px",
        elementWidth: "20vw",
        elementGap: "1rem",
        animationSpeed: "20s",
        animationDirection: "left-to-right",
        pauseOnHover: false,
        fadeBorders: false,
        fadeBordersPercent: 3,
    }, props);

    const c = children(() => merged.children);
    const c2 = children(() => merged.children);

    const [images, setImages] = createSignal<JSXElement[]>();
    const [images2, setImages2] = createSignal<JSXElement[]>();


    let slides1: HTMLDivElement | undefined;
    let slides2: HTMLDivElement | undefined;

    // Make sure all images have a object-fit: cover
    createEffect(() => {
        let elements: JSXElement[] = [];
        if (Array.isArray(c())) {
            elements = c() as JSXElement[];
        } else {
            elements = [c() as JSXElement];
        }
        setImages(elements?.map((jsxEl) => {
            if (jsxEl instanceof HTMLImageElement) {
                let el = (jsxEl as HTMLImageElement);
                el.style.objectFit = "cover"
                el.style.width = merged.elementWidth;
                return el as JSXElement;
            } else {
                return jsxEl;
            }
        }))
        let elements2: JSXElement[] = [];
        if (Array.isArray(c2())) {
            elements2 = c2() as JSXElement[];
        } else {
            elements2 = [c2() as JSXElement];
        }
        setImages2(elements2?.map((jsxEl) => {
            if (jsxEl instanceof HTMLImageElement) {
                let el = (jsxEl as HTMLImageElement);
                el.style.objectFit = "cover"
                el.style.width = merged.elementWidth;
                return el as JSXElement;
            } else {
                return jsxEl;
            }
        }))
    });

    return <div class="glider__viewport" style={{
        width: merged.width,
        height: merged.height,
    }} onMouseEnter={() => {
        if (merged.pauseOnHover && slides1 && slides2) {
            slides1.style.animationPlayState = "paused";
            slides2.style.animationPlayState = "paused";
        }
    }} onMouseLeave={() => {
        if (merged.pauseOnHover && slides1 && slides2) {
            slides1.style.animationPlayState = "running";
            slides2.style.animationPlayState = "running";
        }
    }}>
        <div class="glider" style={{
            mask: merged.fadeBorders ?
                `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) ${merged.fadeBordersPercent
                }%, rgba(0,0,0,1) ${100 - merged.fadeBordersPercent}%, rgba(0,0,0,0) 100%)` : "none",
        }}>
            <div class="glider__slides" style={{
                "padding-right": merged.elementGap,
                "column-gap": merged.elementGap,
                "animation-duration": `calc(${merged.animationSpeed} * 2)`,
                "animation-name": merged.animationDirection === "left-to-right" ? "glider_one" : "glider_one_reverse",
            }} ref={slides1}>
                {images()}
            </div>
            <div class="glider__slides--dupe" style={{
                "padding-right": merged.elementGap,
                "column-gap": merged.elementGap,
                "animation-duration": `calc(${merged.animationSpeed} * 2)`,
                "animation-name": merged.animationDirection === "left-to-right" ? "glider_two" : "glider_two_reverse",
            }} ref={slides2}>
                {images2()}
            </div>
        </div>
    </div>
}
