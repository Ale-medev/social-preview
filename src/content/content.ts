import { responseData } from "../lib/api";
import { responseContact } from "../lib/apiContact"

const data = responseData.data
const contentData = data.page.cfHome;
const dataContact = responseContact.data
const contactData = dataContact.page.cfInfo

const HERO_SLIDER = [
  {
    title: {
      es: contentData.heroSlider1.sliderText,
      en: contentData.heroSlider1.sliderTextEn,
    },
    img: {
        url: contentData.heroSlider1.sliderImg.node.mediaItemUrl,
        alt: contentData.heroSlider1.sliderImg.node.altText || "Social Point",
    },
    label: {
      es: "Reservar",
      en: "Book Now",
    },
    link: {
      es: "/reservas/",
      en: "en/booking/",
    },
  },
  {
    title: {
      es: contentData.heroSlider2.sliderText,
      en: contentData.heroSlider2.sliderTextEn,
    },
    img: {
        url: contentData.heroSlider2.sliderImg.node.mediaItemUrl,
        alt: contentData.heroSlider2.sliderImg.node.altText || "Social Point",
    },
    label: {
      es: "Descubre más",
      en: "More info",
    },
    link: {
      es: "/experiencias/cenaempresas/",
      en: "/en/experiences/corporatedinner/",
    },
  },
  {
    title: {
      es: contentData.heroSlider3.sliderText,
      en: contentData.heroSlider3.sliderTextEn,
    },
    img: {
        url: contentData.heroSlider3.sliderImg.node.mediaItemUrl,
        alt: contentData.heroSlider3.sliderImg.node.altText || "Social Point",
    },
    label: {
      es: "Descubre más",
      en: "More info",
    },
    link: {
      es: "/experiencias/cumpleaños/",
      en: "/en/experiences/birthday/",
    },
  },
  {
    title: {
      es: contentData.heroSlider4.sliderText,
      en: contentData.heroSlider4.sliderTextEn,
    },
    img: {
        url: contentData.heroSlider4.sliderImg.node.mediaItemUrl,
        alt: contentData.heroSlider4.sliderImg.node.altText || "Social Point",
    },
    label: {
      es: "Descubre más",
      en: "More info",
    },
    link: {
      es: "/experiencias/catering-privado/",
      en: "/en/experiences/private-catering/",
    },
  },
] as const;

const ABOUT = {
  title: {
    es: contentData.aboutTitle,
    en: contentData.aboutTitleEn,
  },
  text: {
    es: contentData.aboutText,
    en: contentData.aboutTextEn,
  },
  TextMayus: {
    es: contentData.aboutTextBot,
    en: contentData.aboutTextBotEn,
  },
  videoID: contentData.aboutVideo,
} as const;

const GRID_SERVICE = [
    {
        title: {
          es: contentData.itemService1.title,
          en: contentData.itemService1.titleEn
        },
        service: {
          es: contentData.itemService1.label,
          en: contentData.itemService1.labelEn
        },
        img: contentData.itemService1.image.node.mediaItemUrl,
        link: {
          es: "/experiencias/local/",
          en: "/en/experiences/establishment/"
        },
      },
      {
        title: {
          es: contentData.itemService2.title,
          en: contentData.itemService2.titleEn
        },
        service: {
          es: contentData.itemService2.label,
          en: contentData.itemService2.labelEn
        },
        img: contentData.itemService2.image.node.mediaItemUrl,
        link: {
          es: "/menu/",
          en: "/en/menu/"
        },
      }, {
        title: {
          es: contentData.itemService3.title,
          en: contentData.itemService3.titleEn
        },
        service: {
          es: contentData.itemService3.label,
          en: contentData.itemService3.labelEn
        },
        img: contentData.itemService3.image.node.mediaItemUrl,
        link: {
          es: "/experiencias/bebidas/",
          en: "/en/experiences/drinks/"
        },
      },
      {
        title: {
          es: contentData.itemService6.title,
          en: contentData.itemService6.titleEn
        },
        service: {
          es: contentData.itemService6.label,
          en: contentData.itemService6.labelEn
        },
        img: contentData.itemService6.image.node.mediaItemUrl,
        link: {
          es: "/experiencias/cenaempresas/",
          en: "/en/experiences/corporatedinner/"
        },
      },
      {
        title: {
          es: contentData.itemService4.title,
          en: contentData.itemService4.titleEn
        },
        service: {
          es: contentData.itemService4.label,
          en: contentData.itemService4.labelEn
        },
        img: contentData.itemService4.image.node.mediaItemUrl,
        link: {
          es: "/experiencias/catering-privado/",
          en: "/en/experiences/private-catering/"
        },
      },
      {
        title: {
          es: contentData.itemService5.title,
          en: contentData.itemService5.titleEn
        },
        service: {
          es: contentData.itemService5.label,
          en: contentData.itemService5.labelEn
        },
        img: contentData.itemService5.image.node.mediaItemUrl,
        link: {
          es: "/experiencias/cumpleaños/",
          en: "/en/experiences/birthday/"
        },
      },
      {
        title: {
          es: contentData.itemService7.title,
          en: contentData.itemService7.titleEn
        },
        service: {
          es: contentData.itemService7.label,
          en: contentData.itemService7.labelEn
        },
        img: contentData.itemService7.image.node.mediaItemUrl,
        link: {
          es: "/experiencias/life-style/",
          en: "/en/experiences/life-style/"
        },
      },
      {
        title: {
          es: contentData.itemService8.title,
          en: contentData.itemService8.titleEn
        },
        service: {
          es: contentData.itemService8.label,
          en: contentData.itemService8.labelEn
        },
        img: contentData.itemService8.image.node.mediaItemUrl,
        link: {
          es: "/experiencias/arte/",
          en: "/en/experiences/art/"
        },
      },
      {
        title: {
          es: contentData.itemService9.title,
          en: contentData.itemService9.titleEn
        },
        service: {
          es: contentData.itemService9.label,
          en: contentData.itemService9.labelEn
        },
        img: contentData.itemService9.image.node.mediaItemUrl,
        link: {
          es: "/experiencias/musica/",
          en: "/en/experiences/music/"
        },
      },
  ] as const

  const INFO_BOT = {
    textMayus: {
      es: contentData.infoBotText,
      en: contentData.infoBotTextEn,
    },
    image1:{
        url: contentData.galleryHomeImg1.node.mediaItemUrl,
        alt: contentData.galleryHomeImg1.node.alt || "Social Point"
    },
    image2:{
        url: contentData.galleryHomeImg2.node.mediaItemUrl,
        alt: contentData.galleryHomeImg2.node.alt || "Social Point"
    },
    image3:{
        url: contentData.galleryHomeImg3.node.mediaItemUrl,
        alt: contentData.galleryHomeImg3.node.alt || "Social Point"
    },
    image4:{
        url: contentData.galleryHomeImg4.node.mediaItemUrl,
        alt: contentData.galleryHomeImg4.node.alt || "Social Point"
    },
  } as const;

  const CONTACT_INFO = {
    email: contactData.contact_info.contact_email,
    tel: contactData.contact_info.contact_tel,
    wsp: contactData.contact_info.contact_whatsapp,
    instagram: contactData.contact_info.contact_instagram,
    facebook: contactData.contact_info.contact_facebook,
  } as const;

  const PREFOOTER_IMGS = {
    image1:{
        url: contactData.imgs_book.img_1.node.mediaItemUrl,
        alt: contactData.imgs_book.img_1.node.alt || "Social Point"
    },
    image2:{
        url: contactData.imgs_book.img_2.node.mediaItemUrl,
        alt: contactData.imgs_book.img_2.node.alt || "Social Point"
    },
    image3:{
        url: contactData.imgs_book.img_3.node.mediaItemUrl,
        alt: contactData.imgs_book.img_3.node.alt || "Social Point"
    },
    image4:{
        url: contactData.imgs_book.img_4.node.mediaItemUrl,
        alt: contactData.imgs_book.img_4.node.alt || "Social Point"
    },
    image5:{
        url: contactData.imgs_book.img_5.node.mediaItemUrl,
        alt: contactData.imgs_book.img_5.node.alt || "Social Point"
    } 
  } as const;

export {HERO_SLIDER, ABOUT, GRID_SERVICE, INFO_BOT, CONTACT_INFO, PREFOOTER_IMGS };