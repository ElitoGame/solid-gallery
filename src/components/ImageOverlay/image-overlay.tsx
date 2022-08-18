import { CommonProps } from "../types";

export const ImageOverlay = (props: CommonProps) => {

    return (
        <div class="image-overlay" style={{
            "height": "inherit",
        }}>
            {props.children}
        </div>
    );
}