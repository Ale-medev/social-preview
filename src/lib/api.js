import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.WP_URL;

const graphqlQuery = `
{
page(id: "cG9zdDo5") {
    cfHome {
    aboutText
    aboutTextBot
    aboutTextBotEn
    aboutTextEn
    aboutTitle
    aboutTitleEn
    aboutVideo
    heroSlider1 {
        sliderText
        sliderTextEn
        sliderImg {
        node {
            altText
            mediaItemUrl
        }
        }
    }
    heroSlider2 {
        sliderText
        sliderTextEn
        sliderImg {
        node {
            altText
            mediaItemUrl
        }
        }
    }
    heroSlider3 {
        sliderText
        sliderTextEn
        sliderImg {
        node {
            mediaItemUrl
            altText
        }
        }
    }
    heroSlider4 {
        sliderText
        sliderTextEn
        sliderImg {
        node {
            mediaItemUrl
            altText
        }
        }
    }
    itemService1 {
        label
        labelEn
        titleEn
        title
        image {
        node {
            mediaItemUrl
        }
        }
    }
    itemService2 {
        label
        labelEn
        title
        titleEn
        image {
        node {
            mediaItemUrl
        }
        }
    }
    itemService3 {
        label
        labelEn
        title
        titleEn
        image {
        node {
            mediaItemUrl
        }
        }
    }
    itemService4 {
        label
        labelEn
        title
        titleEn
        image {
        node {
            mediaItemUrl
        }
        }
    }
    itemService5 {
        label
        labelEn
        title
        titleEn
        image {
        node {
            mediaItemUrl
        }
        }
    }
    itemService6 {
        label
        labelEn
        title
        titleEn
        image {
        node {
            mediaItemUrl
        }
        }
    }
    itemService7 {
        label
        labelEn
        title
        titleEn
        image {
        node {
            mediaItemUrl
        }
        }
    }
    itemService8 {
        label
        labelEn
        title
        titleEn
        image {
        node {
            mediaItemUrl
        }
        }
    }
    itemService9 {
        label
        labelEn
        title
        titleEn
        image {
        node {
            mediaItemUrl
        }
        }
    }
    infoBotText
    infoBotTextEn
    galleryHomeImg1 {
        node {
        altText
        mediaItemUrl
        }
    }
    galleryHomeImg2 {
        node {
        mediaItemUrl
        altText
        }
    }
    galleryHomeImg3 {
        node {
        altText
        mediaItemUrl
        }
    }
    galleryHomeImg4 {
        node {
        altText
        mediaItemUrl
        }
    }
    }
}
}
`;

let responseData;

try {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: graphqlQuery }),
  });

  if (!response.ok) {
    throw new Error("Error al obtener los datos");
  }

  responseData = await response.json();
} catch (error) {
  console.error("Ocurrió un error:", error);
}

export { responseData };
