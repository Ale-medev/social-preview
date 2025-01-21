import { responseMenu } from "../lib/apiMenu";

const data = responseMenu.data
const contentData = data.page.cfMenu;

const HERO_MENU = {
  title: {
    es: contentData.menu_title,
    en: contentData.menu_title_en,
  },
  text: {
    es: contentData.menu_subtitle,
    en: contentData.menu_subtitle_en,
  },
} as const;

const IMAGES_MENU = {
  imageStarter: {
    src: contentData.menu_imgs.menu_img_starters.node.mediaItemUrl,
    alt: contentData.menu_imgs.menu_img_starters.node.altText || "Social Point",
  },
  imageGrilled: {
    src: contentData.menu_imgs.menu_img_grilled.node.mediaItemUrl,
    alt: contentData.menu_imgs.menu_img_grilled.node.altText || "Social Point",
  },
  imageVeggies: {
    src: contentData.menu_imgs.menu_img_veggies.node.mediaItemUrl,
    alt: contentData.menu_imgs.menu_img_veggies.node.altText || "Social Point",
  },
  imageSides: {
    src: contentData.menu_imgs.menu_img_sides.node.mediaItemUrl,
    alt: contentData.menu_imgs.menu_img_sides.node.altText || "Social Point",
  },
  imageDesserts: {
    src: contentData.menu_imgs.menu_img_desserts.node.mediaItemUrl,
    alt: contentData.menu_imgs.menu_img_desserts.node.altText || "Social Point",
  },
  imageWivesWhite: {
    src: contentData.menu_imgs.menu_img_wives_white.node.mediaItemUrl,
    alt: contentData.menu_imgs.menu_img_wives_white.node.altText || "Social Point",
  },
  imageWivesRed: {
    src: contentData.menu_imgs.menu_img_wives_red.node.mediaItemUrl,
    alt: contentData.menu_imgs.menu_img_wives_red.node.altText || "Social Point",
  },
  imageCocktails: {
    src: contentData.menu_imgs.menu_img_cocktails.node.mediaItemUrl,
    alt: contentData.menu_imgs.menu_img_cocktails.node.altText || "Social Point",
  },
} as const;

export { HERO_MENU, IMAGES_MENU };
