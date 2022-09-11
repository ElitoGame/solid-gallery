import { CommonProps } from "../types";
import { useImageCompareContext } from "./image-compare";

export const ImageCompareSlider = (props: CommonProps) => {
  const imageCompareContext = useImageCompareContext();
  if (props.children === undefined) {
    imageCompareContext.setSlider(
      <div
        style={{
          "background-color": "#333",
          "border-radius": "50%",
          width: "3rem",
          height: "3rem",
          cursor: "pointer",
          "font-size": "2rem",
        }}
      >
        &#10094;&#10095;
      </div>,
    );
  } else {
    imageCompareContext.setSlider(props.children);
  }
  return <></>;
};
