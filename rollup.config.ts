import withSolid from "rollup-preset-solid";
import css from "rollup-plugin-import-css";
import copy from "rollup-plugin-copy";

export default withSolid({
  input: "src/index.tsx",
  targets: ["esm", "cjs"],
  plugins: [
    css(),
    copy({
      targets: [
        {
          src: "src/components/SlideShow/slide-show.css",
          dest: "dist/source/components/SlideShow",
        },
        {
          src: "src/components/RowGallery/row-gallery.css",
          dest: "dist/source/components/RowGallery",
        },
        {
          src: "src/components/ImageScrollBar/image-scroll-bar.css",
          dest: "dist/source/components/ImageScrollBar",
        },
      ],
    }),
  ],
});
