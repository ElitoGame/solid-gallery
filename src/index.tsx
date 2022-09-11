import { Accessor, Component, createComputed, createSignal } from "solid-js";

export function createHello(): [Accessor<string>, (to: string) => void] {
  const [hello, setHello] = createSignal("Hello World!");

  return [hello, (to: string) => setHello(`Hello ${to}!`)];
}

export const Hello: Component<{ to?: string }> = (props) => {
  const [hello, setHello] = createHello();

  createComputed(() => {
    if (typeof props.to === "string") setHello(props.to);
  });

  return <div>{hello()}</div>;
};

// SlideShow
export { SlideShow } from "./components/SlideShow/slide-show";
export { SlideShowContent } from "./components/SlideShow/slide-show-content";
export { SlideShowNext, SlideShowPrev } from "./components/SlideShow/slide-show-navigation-select";
export { SlideShowBullet } from "./components/SlideShow/slide-show-bullets";
export { SlideShowImage } from "./components/SlideShow/slide-show-image";
export { SlideShowThumbnails } from "./components/SlideShow/slide-show-thumbnails";
// ImageOverlay -> A customizable overlay for any component. title, description, buttons, etc.

// ImageModal -> View any component in a modal. If inside a GridGallery or SlideShow, there will be arrows to navigate.

// GridGallery -> A grid gallery for any component.
export { GridGallery } from "./components/GridGallery/grid-gallery";
// ImageScrollBar -> A side scroll gallery for any component.

// ImageCompare -> A component to compare two components (images or videos suggested). Use a Slider to control the images. RTX on or off?
export { ImageCompare } from "./components/ImageCompare/image-compare";
export { ImageCompareSlider } from "./components/ImageCompare/image-compare-slider";
export { ImageCompareLeft } from "./components/ImageCompare/image-compare-left";
export { ImageCompareRight } from "./components/ImageCompare/image-compare-right";
