declare const images: {
    readonly logo: any;
    readonly menuBtn: any;
};
type ImageType = keyof typeof images;

declare const fonts: {
    readonly diveiconEot: any;
    readonly diveiconTtf: any;
    readonly diveiconWoff: any;
    readonly diveiconSvg: any;
};
type FontType = keyof typeof fonts;

declare const styles: {
    readonly base: any;
    readonly diveicon: any;
};
type StyleType = keyof typeof styles;

export { type FontType, type ImageType, type StyleType, fonts, images, styles };
