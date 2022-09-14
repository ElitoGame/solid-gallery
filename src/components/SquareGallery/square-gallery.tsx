import { children, createEffect, createSignal, For, JSXElement } from "solid-js";
import { SquareGalleryProps } from "../types";

export const SquareGallery = (props: SquareGalleryProps) => {

    const c = children(() => props.children);

    const [images, setImages] = createSignal<JSXElement[]>();


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
                return el as JSXElement;
            } else {
                return jsxEl;
            }
        }))
    });

    return (
        <div style={{
            display: "flex",
            "flex-wrap": "wrap",
            gap: props.squareGap,
            "justify-content": "center",
            "max-width": "90%",
        }}>
            <For each={images()} fallback={<div>No items</div>}>
                {(item, index) => <div data-index={index()} style={{
                    "width": props.squareSize,
                    "height": props.squareSize,
                    "min-width": props.minSquareSize,
                    "min-height": props.minSquareSize,
                    "max-width": props.maxSquareSize,
                    "max-height": props.maxSquareSize,
                }}>
                    {item}
                </div>}
            </For>
        </div>
    );
};