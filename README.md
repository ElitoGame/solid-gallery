<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-gallery&background=tiles&project=%20" alt="solid-gallery">
</p>

# solid-gallery

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

A SolidJS Libaray for displaying images in a gallery.

> **Note** After using this template, you have to search and replace all `solid-gallery` and similar strings
> with appropriate texts.
>
> `solid-gallery` should be a **kebab-case** string representing the name of you monorepo.
>
> `A SolidJS Libaray for displaying images in a gallery.` should be a **Normal case** string with the description of the repository.
>
> `ElitoGame` should be a **kebab-case** string from your profile URL.

## Quick start

Install it:

```bash
npm i solid-gallery
```

## Examples:

### SlideShow

```tsx
import {
  SlideShow,
  SlideShowContent,
  SlideShowBullet,
  SlideShowImage,
  SlideShowNext,
  SlideShowPrev,
  SlideShowThumbnails,
} from "solid-gallery";

<SlideShow
  // Navigation
  showArrows={false}
  arrowPosition="bottom-thumbnails"
  showPrevNextElementFade={0.2}
  showPrevNextElement={false}
  prevNextElementClickable={true}
  showBullets={true}
  // Thumbnails
  showThumbnails={false}
  thumbnailScale={0.2}
  thumbnailAutoScroll={true}
  thumbnailsPosition="right"
  thumbnailGap="1rem"
  thumbnailScrollbar="never"
  // Autoplay
  autoPlay={false}
  autoPlayDirection="forward"
  autoPlayHoverPause={true}
  autoPlayProgressBar={true}
  autoPlayProgressBarPosition="thumbnail-bottom"
  autoPlayProgressBarColor="#20232a"
  autoPlayProgressBarOpacity={0.5}
  autoPlayProgressBarThickness={"100%"}
  autoPlaySpeed={5000}
  // Width/Height
  // w="xl"
  // h="sm"
  width="720px"
  height="405px"
>
  <SlideShowContent>
    <SlideShowImage
      src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
      alt="Pines"
    ></SlideShowImage>
    <SlideShowImage
      src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
      alt="Canyon"
    ></SlideShowImage>
    <SlideShowImage
      src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
      alt="Winter"
    ></SlideShowImage>
    <div style="background-color: red; border-radius: 5px;">
      <h1>Hi</h1>
      <span>How are you doing today? =D</span>
    </div>
  </SlideShowContent>
  <SlideShowThumbnails // Either use the thumbnails Array or this components children for more customization.
  // thumbnails={[
  //   "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
  //   "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  //   "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg",
  // ]}
  >
    <img
      width="100%"
      height="100%"
      src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
    />
    <img
      width="100%"
      height="100%"
      src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
    />
    <img
      width="100%"
      height="100%"
      src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
    />
    <div
      style={{
        width: "100%",
        height: "100%",
        "background-color": "red",
        "border-radius": "10px",
      }}
    >
      <span>Hi</span>
    </div>
  </SlideShowThumbnails>
  <SlideShowPrev />
  <SlideShowNext />
  <SlideShowBullet></SlideShowBullet>
</SlideShow>;
```

### Image Compare

```tsx
import {
  ImageCompare,
  ImageCompareSlider,
  ImageCompareLeft,
  ImageCompareRight,
} from "solid-gallery";

<ImageCompare
  width="720px"
  height="405px"
  borderLine={true}
  borderLineColor="#333"
  borderLineOpacity={1}
  borderLineThickness="2px"
  style="border-radius: 5px;"
>
  <ImageCompareRight>
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <span
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
        }}
      >
        Test
      </span>
      <img
        style={{ width: "100%", height: "100%" }}
        src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
        alt="Image Compare right: Forest"
      />
    </div>
  </ImageCompareRight>
  <ImageCompareLeft
    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
    alt="Image Compare left: Canyon"
  >
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <span
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
        }}
      >
        tesT
      </span>
      <img
        style={{ width: "100%", height: "100%" }}
        src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
        alt="Image Compare left: Canyon"
      />
    </div>
  </ImageCompareLeft>
  <ImageCompareSlider>
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
    </div>
  </ImageCompareSlider>
</ImageCompare>;
```

### Square Gallery

```tsx
import { SquareGallery } from "solid-gallery";

<SquareGallery squareSize="20vw" minSquareSize="200px" maxSquareSize="210px" squareGap="1rem">
  <ImageOverlayProvider overlayColor="rgba(0,0,0,0.5)" overlayOpacityFadeDuration={0.1}>
    <img
      src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
      alt=""
      width={"100%"}
      height={"100%"}
      style={{
        "object-fit": "cover",
      }}
    />
    <ImageOverlay>
      <span>Test</span>
    </ImageOverlay>
  </ImageOverlayProvider>
  <img
    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
    alt=""
    width={"100%"}
    height={"100%"}
  />
  <img
    src="https://images.pexels.com/photos/8581948/pexels-photo-8581948.jpeg?w=1260&h=750"
    alt=""
    width={"100%"}
    height={"100%"}
  />
  <div
    style={{
      width: "100%",
      height: "100%",
    }}
  >
    <img
      src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
      alt=""
      width={"100%"}
      height={"100%"}
      style={{
        "object-fit": "cover",
      }}
    />
  </div>
</SquareGallery>;
```

### Auto Column Gallery

```tsx
import { AutoColumnGallery } from "solid-gallery";
<AutoColumnGallery
  columnGap="1rem"
  rowGap="1rem"
  columnWidth="100%"
  columnMaxWidth="300px"
  columnMinWidth="100px"
  justifyContent="center"
>
  <img
    src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
    alt=""
    width={"100%"}
    height={"100%"}
  />
  <img
    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
    alt=""
    width={"100%"}
    height={"100%"}
  />
  <img
    src="https://images.pexels.com/photos/8581948/pexels-photo-8581948.jpeg?w=1260&h=750"
    alt=""
    width={"100%"}
    height={"100%"}
  />
</AutoColumnGallery>;
```

### Column Gallery

```tsx
import { ColumnGallery, ColumnGalleryColumn } from "solid-gallery";
<ColumnGallery>
  <ColumnGalleryColumn>
    <img
      src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
      alt=""
      width={"100%"}
      height={"100%"}
    />
    <img
      src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
      alt=""
      width={"100%"}
      height={"100%"}
    />
    <img
      src="https://images.pexels.com/photos/8581948/pexels-photo-8581948.jpeg?w=1260&h=750"
      alt=""
      width={"100%"}
      height={"100%"}
    />
    <img
      src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
      alt=""
      width={"100%"}
      height={"100%"}
    />
  </ColumnGalleryColumn>
  <ColumnGalleryColumn>
    <img
      src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
      alt=""
      width={"100%"}
      height={"100%"}
    />
    <img
      src="https://images.pexels.com/photos/8581948/pexels-photo-8581948.jpeg?w=1260&h=750"
      alt=""
      width={"100%"}
      height={"100%"}
    />
    <img
      src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
      alt=""
      width={"100%"}
      height={"100%"}
    />
    <img
      src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
      alt=""
      width={"100%"}
      height={"100%"}
    />
  </ColumnGalleryColumn>
  <ColumnGalleryColumn>
    <img
      src="https://images.pexels.com/photos/8581948/pexels-photo-8581948.jpeg?w=1260&h=750"
      alt=""
      width={"100%"}
      height={"100%"}
    />
    <img
      src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
      alt=""
      width={"100%"}
      height={"100%"}
    />
    <img
      src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
      alt=""
      width={"100%"}
      height={"100%"}
    />
    <img
      src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
      alt=""
      width={"100%"}
      height={"100%"}
    />
  </ColumnGalleryColumn>
</ColumnGallery>;
```

### Image Scrollbar

```tsx
import { ImageScrollBar } from "solid-gallery";
<ImageScrollBar
  // elementWidth="20vw" // fit-content by default
  elementGap="1rem"
  width="90%"
  height="250px"
  animationSpeed="30s"
  animationDirection="right-to-left"
  pauseOnHover
  fadeBorders={false}
  fadeBordersPercent={5}
>
  <img
    src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
    alt=""
    width={"100%"}
    height={"100%"}
  />
  <img
    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
    alt=""
    width={"100%"}
    height={"100%"}
  />
  <img
    src="https://images.pexels.com/photos/8581948/pexels-photo-8581948.jpeg?w=1260&h=750"
    alt=""
    width={"100%"}
    height={"100%"}
  />
  <img
    src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
    alt=""
    width={"100%"}
    height={"100%"}
  />
  <img
    src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
    alt=""
    width={"100%"}
    height={"100%"}
  />
</ImageScrollBar>;
```

### Row Gallery

```tsx
import { RowGallery } from "solid-gallery";
<RowGallery elementHeight="200px">
  <img
    src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
    alt=""
    width={"100%"}
    height={"100%"}
  />
  <img
    src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
    alt=""
    width={"100%"}
    height={"100%"}
  />
  <img
    src="https://images.pexels.com/photos/8581948/pexels-photo-8581948.jpeg?w=1260&h=750"
    alt=""
    width={"100%"}
    height={"100%"}
  />
</RowGallery>;
```

### Image Overlay

```tsx
import { ImageOverlay, ImageOverlayProvider } from "solid-gallery";
<ImageOverlayProvider>
  <img
    src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
    alt=""
    width={"100%"}
    height={"100%"}
  />
  <ImageOverlay>
    <span>Test</span>
  </ImageOverlay>
</ImageOverlayProvider>;
```
