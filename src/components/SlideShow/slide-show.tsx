import { createContext, JSX, mergeProps, useContext } from "solid-js";
import { SlideShowProps } from "../types";
import { createStore } from "solid-js/store";

/**
    <SlideShow //TODO look into transitions, uhh pain :P
        enlarge={true}
        ✅showArrows={true}
        🔄arrowsPosition="side" // side, top, bottom, side-inside
        ✅showBullets={true}
        🔄bulletsPosition="bottom" // bottom, top, inside
        showCaptions={true}
        captionPosition="bottom" // bottom, top, bottom-inside, top-inside
        captionBackgroundColor="#000"
        captionBackgroundOpacity={0.5}
        captionTitleOnly={false}
        ✅showThumbnails={true}
        ✅thumbnailScale={0.3} // only effective below 0.4
        ✅thumbnailAutoScroll={true}
        🔄thumbnailsPosition="bottom" // bottom, top, left, right
        ✅showPrevNextElement={true}
        ✅showPrevNextElementFade={0.05} // 0 - 1
        ✅autoPlay={true}
        ✅autoPlaySpeed={3000}
        ✅autoPlayDirection="forward" // forward, backward, random
        ✅autoPlayHoverPause={true}
        autoPlayLoop={true}
        autoPlayLoopType="jo-jo" // jo-jo, back-to-start
        ✅autoPlayProgressBar={true}
        ✅autoPlayProgressBarColor="#fff"
        ✅autoPlayProgressBarOpacity={0.5} // 0 - 1
        ✅autoPlayProgressBarThickness={5} // 0 - 10
        ✅autoPlayProgressBarPosition="top" // top, bottom
        ✅w="$xs" // $xs, $sm, $md, $lg, $xl, $2xl, $3xl, $4xl
        ✅h="$xs" // $xs, $sm, $md, $lg, $xl, $2xl, $3xl, $4xl
        ✅width="100%" // normal css
        ✅height="100%" // normal css
    >
        <SlideShowContent>
            <SlideShowImage src="https://picsum.photos/200/300" title="" description=""/> //TODO make this more customizable with custom components
            <SlideShowImage src="https://picsum.photos/200/300" title="" description=""/>
        </SlideShowContent><SlideShowThumbnails thumbnails={[ //TODO make this more customizable with custom components
            "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
            "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
            "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
          ]} />
        <SlidePrev>&#10094;</SlidePrev>
        <SlideNext>&#10095;</SlideNext>
        <SlideDots></SlideDots>
    </SlideShow>

 */

interface SlideShowState {
    enlarge: boolean;
    showArrows: boolean;
    arrowsPosition: string;
    nextButton: JSX.Element;
    prevButton: JSX.Element;
    bullets: JSX.Element;
    thumbnails: JSX.Element;
    showBullets: boolean;

    currentIndex: number;
    size: number;
    showPrevNextElement: boolean;
    showPrevNextElementFade: number;

    thumbnailScale: number;
    thumbnailAutoScroll: boolean;
    showThumbnails: boolean;

    autoPlay: boolean;
    autoPlayPaused: boolean;
    autoPlayDirection: string;
    autoPlayHoverPause: boolean;
    autoPlayProgressBar: boolean;
    autoPlayProgressBarWidth: number;
    autoPlayProgressBarColor: string;
    autoPlayProgressBarOpacity: number;
    autoPlayProgressBarThickness: string;
    autoPlayProgressBarPosition: string;

    w: string;
    h: string;
    width?: string;
    height?: string;
}

export const SlideShow = (props: SlideShowProps) => {

    const merged = mergeProps({
        enlarge: true,
        showArrows: true,
        arrowsPosition: "side", // side, top, bottom, side-inside
        showBullets: true,
        bulletsPosition: "bottom", // bottom, top, inside
        showCaptions: true,
        captionPosition: "bottom", // bottom, top, bottom-inside, top-inside
        captionBackgroundColor: "#000",
        captionBackgroundOpacity: 0.5,
        captionTitleOnly: false,
        showThumbnails: true,
        thumbnailScale: 0.3,
        thumbnailsPosition: "bottom", // bottom, top, left, right
        thumbnailAutoScroll: true,
        showPrevNextElement: true,
        showPrevNextElementFade: 0.3, // 0 - 1
        autoPlay: true,
        autoPlaySpeed: 3000,
        autoPlayDirection: "forward", // forward, backward, random
        autoPlayHoverPause: true,
        autoPlayLoop: true,
        autoPlayLoopType: "jo-jo", // jo-jo, back-to-start
        autoPlayProgressBar: true,
        autoPlayProgressBarColor: "#fff",
        autoPlayProgressBarOpacity: 0.5, // 0 - 1
        autoPlayProgressBarThickness: "5px", // 0 - 10
        autoPlayProgressBarPosition: "top", // top, bottom
        w: "$xl", // $xs, $sm, $md, $lg, $xl, $2xl, $3xl, $4xl
        h: "$sm", // $xs, $sm, $md, $lg, $xl, $2xl, $3xl, $4xl
        width: undefined,
        height: undefined,
    }, props);

    const [state, setState] = createStore<SlideShowState>({
        enlarge: merged.enlarge,
        showArrows: merged.showArrows,
        arrowsPosition: props.arrowPosition ?? merged.arrowsPosition,
        nextButton: <></>,
        prevButton: <></>,
        bullets: <></>,
        thumbnails: <></>,
        showBullets: merged.showBullets,
        currentIndex: 0,
        size: 0,
        showPrevNextElement: merged.showPrevNextElement,
        showPrevNextElementFade: merged.showPrevNextElementFade,
        thumbnailScale: merged.thumbnailScale,
        thumbnailAutoScroll: merged.thumbnailAutoScroll,
        showThumbnails: merged.showThumbnails,
        autoPlay: merged.autoPlay,
        autoPlayDirection: merged.autoPlayDirection,
        autoPlayPaused: false,
        autoPlayHoverPause: merged.autoPlayHoverPause,
        autoPlayProgressBar: merged.autoPlayProgressBar,
        autoPlayProgressBarWidth: 0,
        autoPlayProgressBarColor: merged.autoPlayProgressBarColor,
        autoPlayProgressBarOpacity: merged.autoPlayProgressBarOpacity,
        autoPlayProgressBarThickness: merged.autoPlayProgressBarThickness,
        autoPlayProgressBarPosition: merged.autoPlayProgressBarPosition,
        w: merged.w,
        h: merged.h,
        width: merged.width,
        height: merged.height,
    });
    let interval: number;
    let width = 0;

    const prev = () => { setState({ currentIndex: state.currentIndex - 1 < 0 ? state.size - 1 : state.currentIndex - 1, autoPlayProgressBarWidth: 0 }); };
    const next = () => { setState({ currentIndex: state.currentIndex + 1 == state.size ? 0 : state.currentIndex + 1, autoPlayProgressBarWidth: 0 }); };
    const setCurrentIndex = (index: number) => { setState({ currentIndex: index, autoPlayProgressBarWidth: 0 }); };
    const setSize = (size: number) => { setState({ size: size }); };
    const getPrevIndex = () => { return state.currentIndex - 1 < 0 ? state.size - 1 : state.currentIndex - 1 };
    const getNextIndex = () => { return state.currentIndex + 1 == state.size ? 0 : state.currentIndex + 1 };

    const setNextButton = (el: JSX.Element) => { setState({ nextButton: el }); };
    const setPrevButton = (el: JSX.Element) => { setState({ prevButton: el }); };
    const setBullets = (el: JSX.Element) => { setState({ bullets: el }); };
    const setThumbnails = (el: JSX.Element) => { setState({ thumbnails: el }); };

    const setAutoPlayPaused = (paused: boolean) => {
        setState({ autoPlayPaused: paused });
        paused ? clearInterval(interval) : autoPlay();
    }


    if (merged.autoPlay) {
        autoPlay();
    }

    function autoPlay() {
        interval = setInterval(() => {
            width = state.autoPlayProgressBarWidth + 10000 / (merged.autoPlaySpeed ?? 3000);
            if (width >= 100) {
                width = 0;
                if (merged.autoPlayDirection === "forward") {
                    next();
                } else if (merged.autoPlayDirection === "backward") {
                    prev();
                } else if (merged.autoPlayDirection === "random") {
                    setCurrentIndex(Math.floor(Math.random() * state.size));
                }
            }
            setState({ autoPlayProgressBarWidth: width });
        }, 100);
    }


    const context: SlideShowContextValue = {
        state,
        prev,
        next,
        setCurrentIndex,
        getPrevIndex,
        getNextIndex,
        setPrevButton,
        setNextButton,
        setBullets,
        setThumbnails,
        setSize,
        setAutoPlayPaused,
    };


    return (
        <SlideShowContext.Provider value={context}>
            <div class="slideshow" style={{
                "text-align": "center",
                "width": "100%",
            }}>
                {merged.children}
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
     * Callback invoked to go to the specified slide.
     */
    setCurrentIndex: (index: number) => void;

    /**
     * Returns the index of the previous slide.
     */
    getPrevIndex: () => number;

    /**
     * Returns the index of the next slide.
     */
    getNextIndex: () => number;

    /**
     * Sets the previous button.
     */
    setPrevButton: (el: JSX.Element) => void;

    /**
     * Sets the next button.
     */
    setNextButton: (el: JSX.Element) => void;

    /**
     * Sets the bullets.
     */
    setBullets: (el: JSX.Element) => void;

    /**
     * Sets the thumbnails.
     */
    setThumbnails: (el: JSX.Element) => void;

    /**
     * Callback invoked to set the size of the slide show.
     */
    setSize: (size: number) => void;

    /**
     * Callback invoked to set the auto play paused state.
     */
    setAutoPlayPaused: (paused: boolean) => void;

}

const SlideShowContext = createContext<SlideShowContextValue>();

export function useSlideShowContext() {
    const context = useContext(SlideShowContext);

    if (!context) {
        throw new Error("[solid-gallery]: useSlideShowContext must be used within a `<SlideShow />` component");
    }

    return context;
}
