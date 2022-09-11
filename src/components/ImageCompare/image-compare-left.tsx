import { ImageCompareImageProps } from "../types";
import { useImageCompareContext } from "./image-compare";

export const ImageCompareLeft = (props: ImageCompareImageProps) => {
  const imageCompareContext = useImageCompareContext();
  if (props.children === undefined) {
    imageCompareContext.setLeftImage(
      <img src={props.src} alt={props.alt} width="100%" height="100%" />,
    );
  } else {
    imageCompareContext.setLeftImage(props.children);
  }
  return <></>;
};
