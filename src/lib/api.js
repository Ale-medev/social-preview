// import dotenv from "dotenv";

// dotenv.config();

// const API_URL = process.env.WP_URL;

// async function fetchGraphQL(query) {
//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ query }),
//     });

//     if (!response.ok) {
//       throw new Error("Error al obtener los datos");
//     }

//     const result = await response.json();
//     return result.data;
//   } catch (error) {
//     console.error("Ocurrió un error al realizar la consulta:", error);
//     return null;
//   }
// }

// // Define tus consultas GraphQL
// const homeQuery = `
//     {
//         page(id: "cG9zdDo5") {
//             cfHome {
//             aboutText
//             aboutTextBot
//             aboutTextBotEn
//             aboutTextEn
//             aboutTitle
//             aboutTitleEn
//             aboutVideo
//             heroSlider1 {
//                 sliderText
//                 sliderTextEn
//                 sliderImg {
//                 node {
//                     altText
//                     mediaItemUrl
//                 }
//                 }
//             }
//             heroSlider2 {
//                 sliderText
//                 sliderTextEn
//                 sliderImg {
//                 node {
//                     altText
//                     mediaItemUrl
//                 }
//                 }
//             }
//             heroSlider3 {
//                 sliderText
//                 sliderTextEn
//                 sliderImg {
//                 node {
//                     mediaItemUrl
//                     altText
//                 }
//                 }
//             }
//             heroSlider4 {
//                 sliderText
//                 sliderTextEn
//                 sliderImg {
//                 node {
//                     mediaItemUrl
//                     altText
//                 }
//                 }
//             }
//             itemService1 {
//                 label
//                 labelEn
//                 titleEn
//                 title
//                 image {
//                 node {
//                     mediaItemUrl
//                 }
//                 }
//             }
//             itemService2 {
//                 label
//                 labelEn
//                 title
//                 titleEn
//                 image {
//                 node {
//                     mediaItemUrl
//                 }
//                 }
//             }
//             itemService3 {
//                 label
//                 labelEn
//                 title
//                 titleEn
//                 image {
//                 node {
//                     mediaItemUrl
//                 }
//                 }
//             }
//             itemService4 {
//                 label
//                 labelEn
//                 title
//                 titleEn
//                 image {
//                 node {
//                     mediaItemUrl
//                 }
//                 }
//             }
//             itemService5 {
//                 label
//                 labelEn
//                 title
//                 titleEn
//                 image {
//                 node {
//                     mediaItemUrl
//                 }
//                 }
//             }
//             itemService6 {
//                 label
//                 labelEn
//                 title
//                 titleEn
//                 image {
//                 node {
//                     mediaItemUrl
//                 }
//                 }
//             }
//             itemService7 {
//                 label
//                 labelEn
//                 title
//                 titleEn
//                 image {
//                 node {
//                     mediaItemUrl
//                 }
//                 }
//             }
//             itemService8 {
//                 label
//                 labelEn
//                 title
//                 titleEn
//                 image {
//                 node {
//                     mediaItemUrl
//                 }
//                 }
//             }
//             itemService9 {
//                 label
//                 labelEn
//                 title
//                 titleEn
//                 image {
//                 node {
//                     mediaItemUrl
//                 }
//                 }
//             }
//             infoBotText
//             infoBotTextEn
//             galleryHomeImg1 {
//                 node {
//                 altText
//                 mediaItemUrl
//                 }
//             }
//             galleryHomeImg2 {
//                 node {
//                 mediaItemUrl
//                 altText
//                 }
//             }
//             galleryHomeImg3 {
//                 node {
//                 altText
//                 mediaItemUrl
//                 }
//             }
//             galleryHomeImg4 {
//                 node {
//                 altText
//                 mediaItemUrl
//                 }
//             }
//             }
//         }
//     }
// `;

// const contactQuery = `
//   {
//     page(id: "cG9zdDoyMjA=") {
//         cfInfo {
//         contact_info {
//             contact_email
//             contact_facebook
//             contact_instagram
//             contact_tel
//             contact_whatsapp
//         }
//         imgs_book {
//             img_1 {
//             node {
//                 mediaItemUrl
//                 altText
//             }
//             }
//             img_2 {
//             node {
//                 altText
//                 mediaItemUrl
//             }
//             }
//             img_3 {
//             node {
//                 altText
//                 mediaItemUrl
//             }
//             }
//             img_4 {
//             node {
//                 altText
//                 mediaItemUrl
//             }
//             }
//             img_5 {
//             node {
//                 altText
//                 mediaItemUrl
//             }
//             }
//         }
//         }
//     }
//   }
// `;

// // Ejecuta las consultas de forma anticipada y exporta los resultados
// let resHome = null;
// let resContact = null;

// (async function fetchData() {
//   resHome = await fetchGraphQL(homeQuery);
//   resContact = await fetchGraphQL(contactQuery);

//   if (!resHome || !resContact) {
//     console.error("Hubo un problema al cargar los datos");
//   }
// })();

// export { resHome, resContact };





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
