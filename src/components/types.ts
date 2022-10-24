import { AutoColumnGallery } from "./ColumnGallery/auto-column-gallery";
import { JSX } from "solid-js/jsx-runtime";

export interface CommonProps extends JSX.HTMLAttributes<HTMLElement> {}

export interface CommonGalleryProps {
  w?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "full"
    | "min"
    | "max"
    | "screenW";
  h?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "full"
    | "min"
    | "max"
    | "screenH";
  width?: string;
  height?: string;
  children?: JSX.Element[] | JSX.Element;
  // class?: string;
  // style?: string | JSX.CSSProperties | undefined;
}

export interface SlideShowProps extends CommonGalleryProps {
  showArrows?: boolean;
  arrowPosition?: "side" | "bottom" | "bottom-thumbnails";
  showBullets?: boolean;
  showThumbnails?: boolean;
  thumbnailScale?: number;
  thumbnailsPosition?: "bottom" | "left" | "right";
  thumbnailAutoScroll?: boolean;
  thumbnailGap?: string;
  thumbnailScrollbar?: "auto" | "always" | "never";

  showPrevNextElement?: boolean;
  showPrevNextElementFade?: number;
  prevNextElementClickable?: boolean;

  //   endBehavior?: "jo-jo" | "back-to-start";

  autoPlay?: boolean;
  autoPlaySpeed?: number;
  autoPlayDirection?: "forward" | "backward" | "random";
  autoPlayHoverPause?: boolean;
  autoPlayLoopType?: "jo-jo" | "back-to-start";
  autoPlayProgressBar?: boolean;
  autoPlayProgressBarColor?: string;
  autoPlayProgressBarOpacity?: number;
  autoPlayProgressBarThickness?: string;
  autoPlayProgressBarPosition?: "top" | "bottom" | "thumbnail-top" | "thumbnail-bottom";
}

export interface ImageCompareProps extends CommonGalleryProps {
  borderLine?: boolean;
  borderLineColor?: string;
  borderLineThickness?: string;
  borderLineOpacity?: number;
  style?: string | JSX.CSSProperties;
}

export interface ImageCompareImageProps extends CommonGalleryProps {
  src?: string;
  alt?: string;
}

export interface SquareGalleryProps extends CommonGalleryProps {
  squareSize?: string;
  minSquareSize?: string;
  maxSquareSize?: string;
  squareGap?: string;
}

export interface AutoColumnGalleryProps extends CommonGalleryProps {
  columnGap?: string;
  rowGap?: string;
  columnWidth?: string;
  columnMaxWidth?: string;
  columnMinWidth?: string;
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "stretch"
    | JSX.CSSWideKeyword
    | undefined;
}

export interface ColumnGalleryProps extends CommonGalleryProps {}

export interface RowGalleryProps extends CommonGalleryProps {
  elementHeight?: string;
}

export interface ImageScrollBarProps extends CommonGalleryProps {
  elementWidth?: string;
  elementGap?: string;
  animationSpeed?: string;
  animationDirection?: "left-to-right" | "right-to-left";
  pauseOnHover?: boolean;
  fadeBorders?: boolean;
  fadeBordersPercent?: number;
}

export interface ImageOverlayPorps extends CommonGalleryProps {
  overlayColor?: string;
  overlayOpacityFadeDuration?: number;
}
