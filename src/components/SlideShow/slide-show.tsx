import { createContext, useContext } from "solid-js";
import { SlideShowProps } from "../types";
import { createStore } from "solid-js/store";

/**
    <SlideShow
        enlarge={true}
        showArrows={true}
        arrowsPosition="side" // side, top, bottom, side-inside
        showBullets={true}
        bulletsPosition="bottom" // bottom, top, inside
        showCaptions={true}
        captionPosition="bottom" // bottom, top, bottom-inside, top-inside
        captionBackgroundColor="#000"
        captionBackgroundOpacity={0.5}
        captionTitleOnly={false}
        showThumbnails={true}
        thumbnailsPosition="bottom" // bottom, top
        showPrevNextElement={true}
        showPrevNextElementFade={0.05} // 0 - 1
        autoPlay={true}
        autoPlaySpeed={3000}
        autoPlayDirection="forward" // forward, backward, random
        autoPlayHoverPause={true}
        autoPlayLoop={true}
        autoPlayLoopType="jo-jo" // jo-jo, back-to-start
        autoPlayProgressBar={true}
        autoPlayProgressBarColor="#fff"
        autoPlayProgressBarOpacity={0.5} // 0 - 1
        autoPlayProgressBarThickness={5} // 0 - 10
        autoPlayProgressBarPosition="top" // top, bottom
        w="$xs" // $xs, $sm, $md, $lg, $xl, $2xl, $3xl, $4xl
        h="$xs" // $xs, $sm, $md, $lg, $xl, $2xl, $3xl, $4xl
    >
        <SlideShowContent>
            <SlideShowImage src="https://picsum.photos/200/300" title="" description=""/>
            <SlideShowImage src="https://picsum.photos/200/300" title="" description=""/>
        </SlideShowContent>
        <SlidePrev>&#10094;</SlidePrev>
        <SlideNext>&#10095;</SlideNext>
        <SlideDots></SlideDots>
    </SlideShow>

 */

interface SlideShowState {
    currentIndex: number;
    size: number;
}

export const SlideShow = (props: SlideShowProps) => {

    const [state, setState] = createStore<SlideShowState>({
        currentIndex: 0,
        size: 0,
        // get opened() {
        //     return props.opened;
        // },
    });

    const prev = () => { setState({ currentIndex: state.currentIndex - 1 }); console.log(state.size); };
    const next = () => { setState({ currentIndex: state.currentIndex + 1 }); };
    const setSize = (size: number) => { setState({ size: size }); };


    const context: SlideShowContextValue = {
        state,
        prev,
        next,
        setSize,
    };

    return (
        <SlideShowContext.Provider value={context}>
            <div class="slideshow">
                {props.children}
            </div>
        </SlideShowContext.Provider>
    );
}

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

export interface SlideShowContextValue {
    state: SlideShowState;

    /**
     * Callback invoked to go to the previous slide.
     */
    prev: () => void;

    /**
     * Callback invoked to go to the next slide.
     */
    next: () => void;

    /**
     * Callback invoked to set the size of the slide show.
     */
    setSize: (size: number) => void;

}

const SlideShowContext = createContext<SlideShowContextValue>();

export function useSlideShowContext() {
    const context = useContext(SlideShowContext);

    if (!context) {
        throw new Error("[solid-gallery]: useSlideShowContext must be used within a `<SlideShow />` component");
    }

    return context;
}
