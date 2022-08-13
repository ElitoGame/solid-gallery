import { JSX } from "solid-js/jsx-runtime";

export interface CommonProps extends JSX.HTMLAttributes<HTMLElement> {
}

export interface CommonGalleryProps {
    w?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "full" | "min" | "max" | "screenW";
    h?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "full" | "min" | "max" | "screenH";
    width?: string;
    height?: string;
    children: JSX.Element[] | JSX.Element;
}

export interface SlideShowProps extends CommonGalleryProps {
    enlarge?: boolean;
    showArrows?: boolean;
    arrowPosition?: "side" | "bottom" | "side-inside" | "bottom-thumbnails";
    showBullets?: boolean;
    bulletsPosition?: "top" | "bottom";
    showCaptions?: boolean;
    captionPosition?: "top" | "bottom" | "bottom-inside" | "top-inside";
    captionBackgroundColor?: string;
    captionBackgroundOpacity?: number;
    captionTitleOnly?: boolean;
    showThumbnails?: boolean;
    thumbnailScale?: number;
    thumbnailsPosition?: "top" | "bottom" | "left" | "right";
    thumbnailAutoScroll?: boolean;
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
    autoPlayProgressBarThickness?: string;
    autoPlayProgressBarPosition?: "top" | "bottom";
}