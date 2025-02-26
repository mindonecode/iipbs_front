declare const images: {
    readonly logo: any;
    readonly menuBtn: any;
};
type ImageType = keyof typeof images;

declare const fonts: {};
type FontType = keyof typeof fonts;

export { type FontType, type ImageType, fonts, images };
