import { JSX } from "solid-js";



export const SlideShowImage = (props: { src: string, alt: string, children?: JSX.Element | JSX.Element[], title?: string, class?: string }) => {
    return (
        <img src={props.src} alt={props.alt} title={props.title} class={props.class} />
    );
}