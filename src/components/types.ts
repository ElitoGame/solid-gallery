import { JSX } from "solid-js/jsx-runtime";

export interface CommonProps extends JSX.HTMLAttributes<HTMLElement> {
}

export interface CommonGalleryProps {
    w?: "$xs" | "$xm" | "$md" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl";
    h?: "$xs" | "$xm" | "$md" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl";
    children: JSX.Element[] | JSX.Element;
}

export interface SlideShowProps extends CommonGalleryProps {
    enlarge?: boolean;
    showArrows?: boolean;
    arrowPosition?: "side" | "top" | "bottom" | "side-inside";
    showBullets?: boolean;
    bulletsPosition?: "top" | "bottom";
    showCaptions?: boolean;
    captionPosition?: "top" | "bottom" | "bottom-inside" | "top-inside";
    captionBackgroundColor?: string;
    captionBackgroundOpacity?: number;
    captionTitleOnly?: boolean;
    showThumbnails?: boolean;
    thumbnailsPosition?: "top" | "bottom";
    showPrevNextElement?: boolean;
    showPrevNextElementFade?: number;
    autoPlay?: boolean;
    autoPlaySpeed?: number;
    autoPlayDirection?: "forward" | "backward" | "random";
    autoPlayHoverPause?: boolean;
    autoPlayLoop?: boolean;
    autoPlayLoopType?: "jo-jo" | "back-to-start";
    autoPlayProgressBar?: boolean;
    autoPlayProgressBarColor?: string;
    autoPlayProgressBarOpacity?: number;
    autoPlayProgressBarThickness?: number;
    autoPlayProgressBarPosition?: "top" | "bottom";
}