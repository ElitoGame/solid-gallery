import { Accessor, createContext, createSignal, JSX, mergeProps, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { CommonProps, ImageOverlayPorps } from "../types";

interface ImageOverlayState {
    isVisible: boolean;
    overlay: JSX.Element;
}

const ImageOverlayContext = createContext<ImageOverlayContextValue>();

export const ImageOverlayProvider = (props: ImageOverlayPorps) => {

    const merged = mergeProps({
        overlayColor: "rgba(0, 0, 0, 0.5)",
        overlayOpacityFadeDuration: 0.1,
    }, props);

    const [state, setState] = createStore<ImageOverlayState>({
        isVisible: false,
        overlay: <></>,
    });

    const setOverlay = (el: JSX.Element) => {
        setState("overlay", el);
    }

    const context: ImageOverlayContextValue = {
        state,
        setOverlay
    }

    return (
        <ImageOverlayContext.Provider value={context}>
            <div style={{
                "height": "100%",
                "width": "100%",
                position: "relative",
            }} onMouseEnter={() => setState({ isVisible: true })} onMouseLeave={() => setState({ isVisible: false })}>
                <div class="image-overlay" style={{
                    opacity: context.state.isVisible ? 1 : 0,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    "background-color": merged.overlayColor,
                    "transition": `opacity ${merged.overlayOpacityFadeDuration}s`,
                }}>
                    {state.overlay}
                </div>
                {props.children}
            </div>
        </ImageOverlayContext.Provider>
    );
}

export const ImageOverlay = (props: CommonProps) => {

    const context = useImageOverlayContext();

    context.setOverlay(<>
        {props.children}
    </>
    );

    return (
        <></>
    );
}

interface ImageOverlayContextValue {
    state: ImageOverlayState;
    setOverlay: (el: JSX.Element) => void;
}

export function useImageOverlayContext() {
    const context = useContext(ImageOverlayContext);

    if (!context) {
        throw new Error(
            "[solid-gallery]: useImageOverlayContext must be used within a `<ImageOverlayProvider />` component",
        );
    }

    return context;
}
