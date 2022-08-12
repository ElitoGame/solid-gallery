import { Accessor, Component, createComputed, createSignal } from 'solid-js';

export function createHello(): [Accessor<string>, (to: string) => void] {
  const [hello, setHello] = createSignal('Hello World!');

  return [hello, (to: string) => setHello(`Hello ${to}!`)];
}

export const Hello: Component<{ to?: string }> = (props) => {
  const [hello, setHello] = createHello();

  createComputed(() => {
    if (typeof props.to === 'string') setHello(props.to);
  });

  return <div>{hello()}</div>;
};

export { SlideShow } from './components/SlideShow/slide-show';
export { SlideShowContent } from './components/SlideShow/slide-show-content';
export { SlideShowNext } from './components/SlideShow/slide-show-next';
export { SlideShowPrev } from './components/SlideShow/slide-show-prev';
export { SlideShowDots } from './components/SlideShow/slide-show-dots';
export { SlideShowImage } from './components/SlideShow/slide-show-image';
