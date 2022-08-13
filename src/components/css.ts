

export function convertSizeToCSS(size: string) {
    if (size === "full") {
        return "100%";
    } else if (size === "min") {
        return "0";
    } else if (size === "max") {
        return "100%";
    } else if (size === "screenW") {
        return "100vw";
    } else if (size === "screenH") {
        return "100vh";
    } else if (size === "xs") {
        return "20rem";
    } else if (size === "sm") {
        return "24rem";
    } else if (size === "md") {
        return "28rem";
    } else if (size === "lg") {
        return "32rem";
    } else if (size === "xl") {
        return "36rem";
    } else if (size === "2xl") {
        return "42rem";
    } else if (size === "3xl") {
        return "48rem";
    } else if (size === "4xl") {
        return "56rem";
    } else if (size === "5xl") {
        return "64rem";
    } else if (size === "6xl") {
        return "72rem";
    } else if (size === "7xl") {
        return "80rem";
    } else if (size === "8xl") {
        return "88rem";
    } else {
        return size;
    }
}