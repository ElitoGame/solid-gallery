import { children, createSignal, JSXElement, createEffect, For, mergeProps } from "solid-js";
import { RowGalleryProps } from "../types";
import "./row-gallery.css";


export const RowGallery = (props: RowGalleryProps) => {

    const merged = mergeProps({
        elementHeight: "300px",
    }, props);

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
                return el as JSXElement;
            } else {
                return jsxEl;
            }
        }))
    });

    return (
        <ul style={{
            "list-style": "none",
            "padding": "0",
            "margin": "0",
            width: "90%",
        }} class="image-gallery">
            <For each={images()}>{(item, index) =>
                <li data-index={index()} style={{
                    height: merged.elementHeight,
                }}>
                    {item}
                </li>}
            </For>
        </ul>
    );
};