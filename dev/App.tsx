import type { Component } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";
import {
  Hello,
  SlideShow,
  SlideShowContent,
  SlideShowBullet,
  SlideShowImage,
  SlideShowNext,
  SlideShowPrev,
  SlideShowThumbnails,
  ImageCompare,
  ImageCompareSlider,
  ImageCompareLeft,
  ImageCompareRight,
} from "../src";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
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
        </ImageCompare>

        <SlideShow
          // Navigation
          showArrows={true}
          arrowPosition="bottom-thumbnails"
          showPrevNextElementFade={0.2}
          showPrevNextElement={false}
          prevNextElementClickable={true}
          showBullets={true}
          // Thumbnails
          showThumbnails={true}
          thumbnailScale={0.2}
          thumbnailAutoScroll={true}
          thumbnailsPosition="bottom"
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
          w="xl"
          h="sm"
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
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <SlideShowImage
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
              alt="Winter"
            ></SlideShowImage>
            <div style="background-color: red; border-radius: 5px;">
              <h1>Hi</h1>
              <span>
                How are ya????????????????????????????????????????????????????????????????
              </span>
            </div>
          </SlideShowContent>
          <SlideShowThumbnails
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
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
            />
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
            />
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
            />
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
            />
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
            />
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
            />
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
            />
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
            />
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
            />
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
            />
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
            />
            <img
              width="100%"
              height="100%"
              src="https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg"
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
        </SlideShow>
        <h1>
          <Hello to="you"></Hello>
        </h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
