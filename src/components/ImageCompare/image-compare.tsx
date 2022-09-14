import { createContext, createSignal, JSX, mergeProps, Show, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { ImageCompareProps } from "../types";
import { ImageCompareSlider } from "./image-compare-slider";

export const ImageCompare = (props: ImageCompareProps) => {
  const merged = mergeProps(
    {
      borderLine: false,
      borderLineColor: "#333",
      borderLineThickness: "2px",
      borderLineOpacity: 1,
      style: {},
    },
    props,
  );

  let overlay: HTMLDivElement | undefined = undefined;

  const [isSliderMoving, setIsSliderMoving] = createSignal(false);
  const [offset, setOffset] = createSignal(0.5);

  window.addEventListener("mousemove", (e) => {
    move(e);
  });

  window.addEventListener("touchmove", (e) => {
    move(e);
  });

  function move(e: MouseEvent | TouchEvent) {
    if (isSliderMoving() && overlay) {
      let a = overlay.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      let x = 0;
      if (e instanceof MouseEvent) {
        x = e.pageX - a.left;
      } else {
        x = e.touches[0].clientX - a.left;
      }
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;

      setOffset(1 - Math.min(Math.max(x / a.width, 0), 1));
    }
  }

  window.addEventListener("mouseup", (e) => {
    if (isSliderMoving()) {
      setIsSliderMoving(false);
    }
  });

  window.addEventListener("touchend", (e) => {
    if (isSliderMoving()) {
      setIsSliderMoving(false);
    }
  });

  // Merge the styles but megerd.style can be a string, undefined or an object
  // convert a string of CSS to an object
  const style = merged.style;
  const styleObject =
    typeof style === "string"
      ? style.split(";").reduce((obj: { [key: string]: string }, s) => {
        const [key, value] = s.split(":");
        if (key && value) {
          obj[key.trim()] = value.trim();
        }
        return obj;
      }, {})
      : style;

  const mergedStyle: JSX.CSSProperties = {
    width: props.width,
    height: props.height,
    margin: "2rem 0",
    "user-select": "none",
    position: "relative",
    overflow: "hidden",
    ...styleObject,
  };

  const [state, setState] = createStore<ImageCompareState>({
    slider: <></>,
    leftImage: <></>,
    rightImage: <></>,
  });

  const setSlider = (el: JSX.Element) => {
    setState({ slider: el });
  };

  const setLeftImage = (el: JSX.Element) => {
    setState({ leftImage: el });
  };

  const setRightImage = (el: JSX.Element) => {
    setState({ rightImage: el });
  };

  const getSlider = () => {
    return state.slider;
  };

  const getLeftImage = () => {
    return state.leftImage;
  };

  const getRightImage = () => {
    return state.rightImage;
  };

  const context: ImageCompareContextValue = {
    state,
    setSlider,
    setLeftImage,
    setRightImage,
    getSlider,
    getLeftImage,
    getRightImage,
  };

  return (
    <ImageCompareContext.Provider value={context}>
      {props.children}
      <div class="image-compare" style={mergedStyle}>
        <div
          class="image-compare-right"
          style={{
            position: "absolute",
            width: merged.width,
            height: merged.height,
          }}
        >
          {getRightImage()}
        </div>
        <div
          class="image-compare-left"
          style={{
            position: "absolute",
            right: `calc(${merged.width} * ${offset()})`,
            width: merged.width,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "relative",
              left: `calc(${merged.width} * ${offset()})`,
              width: merged.width,
              height: merged.height,
            }}
            ref={overlay}
          >
            {getLeftImage()}
          </div>
        </div>
        <Show when={merged.borderLine}>
          <div
            class="slide-border"
            style={{
              position: "absolute",
              right: `calc(${merged.width} * ${offset()})`,
              transform: "translateX(50%)",
              width: merged.borderLineThickness,
              height: merged.height,
              "background-color": merged.borderLineColor,
              opacity: merged.borderLineOpacity,
            }}
          ></div>
        </Show>
        <span
          class="slider-handle"
          style={{
            position: "absolute",
            transform: "translate(50%, -50%)",
            top: "50%",
            right: `calc(${merged.width} * ${offset()})`,
          }}
          onmousedown={(e) => {
            setIsSliderMoving(true);
          }}
          ontouchstart={(e) => {
            setIsSliderMoving(true);
          }}
        >
          {getSlider()}
        </span>
      </div>
    </ImageCompareContext.Provider>
  );
};

interface ImageCompareState {
  slider: JSX.Element;
  leftImage: JSX.Element;
  rightImage: JSX.Element;
}

export interface ImageCompareContextValue {
  state: ImageCompareState;

  setSlider: (el: JSX.Element) => void;

  setLeftImage: (el: JSX.Element) => void;

  setRightImage: (el: JSX.Element) => void;

  getSlider: () => JSX.Element;

  getLeftImage: () => JSX.Element;

  getRightImage: () => JSX.Element;
}

const ImageCompareContext = createContext<ImageCompareContextValue>();

export function useImageCompareContext() {
  const context = useContext(ImageCompareContext);

  if (!context) {
    throw new Error("useImageCompareContext must be used within a ImageCompareContext");
  }

  return context;
}
