import type { Component } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Hello, SlideShow, SlideShowContent, SlideShowDots, SlideShowImage, SlideShowNext, SlideShowPrev } from "../src";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <SlideShow>
          <SlideShowContent>
            <SlideShowImage src={logo} alt="Logo" class={styles.logo}></SlideShowImage>
            <SlideShowImage src={logo} alt="Logo" class={styles["reverse-logo"]}></SlideShowImage>
            <SlideShowImage src={logo} alt="Logo" class={styles["logo-none"]}></SlideShowImage>
          </SlideShowContent>
          <SlideShowPrev />
          <SlideShowNext />
          <SlideShowDots />
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
