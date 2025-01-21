import { responseGallery } from "../lib/apiGallery";

const data = responseGallery.data
const contentData = data.page.cfgallery;

const GALLERY_TITLE = {
  title: {
    es: "galería",
    en: "gallery",
  },
} as const;

const GALLERY_ITEMS = [
  {
    image: {
      src: contentData.gallery.item_gallery_1.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_1.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_2.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_2.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_3.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_3.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_4.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_4.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_5.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_5.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_6.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_6.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_7.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_7.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_8.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_8.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_9.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_9.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_10.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_10.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_11.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_11.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_12.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_12.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_13.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_13.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_14.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_14.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_15.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_15.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_16.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_16.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
  {
    image: {
      src: contentData.gallery.item_gallery_17.node.mediaItemUrl,
      alt: contentData.gallery.item_gallery_17.node.altText || "Social Point",
      altEn: "Social Point",
    },
  },
] as const;

export { GALLERY_TITLE, GALLERY_ITEMS };
