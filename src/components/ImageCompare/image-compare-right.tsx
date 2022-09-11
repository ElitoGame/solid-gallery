import { ImageCompareImageProps } from "../types";
import { useImageCompareContext } from "./image-compare";

export const ImageCompareRight = (props: ImageCompareImageProps) => {
  const imageCompareContext = useImageCompareContext();
  if (props.children === undefined) {
    imageCompareContext.setRightImage(
      <img src={props.src} alt={props.alt} width="100%" height="100%" />,
    );
  } else {
    imageCompareContext.setRightImage(props.children);
  }
  return <></>;
};
