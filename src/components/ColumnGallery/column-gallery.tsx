import { createEffect, JSXElement, For, children, createSignal } from "solid-js";
import { ColumnGalleryProps } from "../types";

export const ColumnGallery = (props: ColumnGalleryProps) => {
    const c = children(() => props.children);

    return <div style={{
        width: "90vw",
        display: "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "gap": "1rem",
    }}>{c()}</div>
};



// The columns that will be shown in the ColumnGallery.
export const ColumnGalleryColumn = (props: ColumnGalleryProps) => {

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
                el.style.maxWidth = "300px";
                el.style.width = "100%";
                return <div>{el as JSXElement}</div>;
            } else {
                return <div>{jsxEl}</div>;
            }
        }))
    });

    return <div style={{
        display: "flex",
        "flex-direction": "column",
        "gap": "1rem",
    }}>
        {images()}
    </div>
}