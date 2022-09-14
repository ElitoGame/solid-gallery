import { children, createSignal, JSXElement, createEffect, For, mergeProps, JSX } from "solid-js";
import { AutoColumnGalleryProps } from "../types";

export const AutoColumnGallery = (props: AutoColumnGalleryProps) => {

    const merged = mergeProps({
        columnGap: "1rem",
        rowGap: "1rem",
        columnWidth: "100%",
        columnMinWidth: "100px",
        columnMaxWidth: "300px",
        justifyContent: "center" as "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly" | "stretch" | JSX.CSSWideKeyword | undefined,

        width: "90vw",
    }, props);

    const c = children(() => props.children);

    const [images, setImages] = createSignal<JSXElement[]>();

    const [columnCount, setColumnCount] = createSignal<number>(3);

    const [columns, setColumns] = createSignal<Array<Array<JSXElement>>>([[]]);

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
                el.style.maxWidth = merged.columnMaxWidth;
                el.style.width = merged.columnWidth;
                el.style.minWidth = merged.columnMinWidth;
                return el as JSXElement;
            } else {
                return jsxEl;
            }
        }))
    });

    createEffect(() => {
        // Split the images() array into columns, so that the values are distributed evenly
        // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 becomes [[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9, 12]] if there are 3 columns
        // The number of columns is determined by columnCount
        // If there are 4 columns, the array becomes [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
        let columns: Array<Array<JSXElement>> = [];
        let count = columnCount();
        for (let i = 0; i < count; i++) {
            columns.push([]);
        }
        let elements = images();
        if (elements) {
            elements.forEach((img, index) => {
                columns[index % count].push(img);
            });
        }
        setColumns(columns);
    });

    // createEffect(() => {
    //     // Split the images() array into columns, so that the columns are roughly the same height. 
    //     // This is done by calculating the height of each column, and then adding the images to the column with the lowest height
    //     // The height can be calculated by scaling all images to the same width, like 100px, and by keeping the aspect ratio, the height can be calculated
    //     let columns: Array<Array<JSXElement>> = [];
    //     let count = columnCount();
    //     for (let i = 0; i < count; i++) {
    //         columns.push([[]]);
    //     }
    //     let elements = images();
    //     if (elements) {
    //         console.log("elements", elements);
    //         elements.forEach((img, index) => {
    //             let columnHeights = columns.map((column) => {
    //                 let height = 0;
    //                 column.forEach((el) => {
    //                     if (el instanceof HTMLImageElement) {
    //                         console.log("el", el.clientWidth, el.naturalHeight);
    //                         // get the height of the image, if the width is 100px
    //                         let width = 100;
    //                         let aspectRatio = el.width / el.height;
    //                         console.log("aspectRatio", aspectRatio);
    //                         height += width / aspectRatio;
    //                     }
    //                 });
    //                 return height;
    //             });
    //             let lowestHeight = Math.min(...columnHeights);
    //             let lowestHeightIndex = columnHeights.indexOf(lowestHeight);
    //             console.log("Heights", columnHeights);
    //             console.log("lowestHeight", lowestHeight);
    //             console.log("lowestHeightIndex", lowestHeightIndex);
    //             console.log("columns", columns);
    //             columns[lowestHeightIndex].push(img);
    //         });
    //     }
    //     setColumns(columns);
    // });







    return <div style={{
        width: merged.width,
        display: "flex",
        "flex-direction": "row",
        "justify-content": merged.justifyContent,
        "gap": merged.columnGap,
    }}>
        <For each={columns()}>{(column) =>
            <div style={{
                display: "flex",
                "flex-direction": "column",
                "gap": merged.rowGap,
            }}>
                <For each={column}>{(img) =>
                    <div>
                        {img}
                    </div>
                }</For>
            </div>
        }</For>
    </div>;
};