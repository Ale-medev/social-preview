import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.WP_URL;

const graphqlQuery = `
{
   page(id: "cG9zdDoyNDc=") {
    cfMenu {
      menu_subtitle
      menu_subtitle_en
      menu_title
      menu_title_en
      menu_imgs {
        menu_img_cocktails {
          node {
            altText
            mediaItemUrl
          }
        }
        menu_img_desserts {
          node {
            altText
            mediaItemUrl
          }
        }
        menu_img_grilled {
          node {
            altText
            mediaItemUrl
          }
        }
        menu_img_sides {
          node {
            altText
            mediaItemUrl
          }
        }
        menu_img_starters {
          node {
            altText
            mediaItemUrl
          }
        }
        menu_img_veggies {
          node {
            altText
            mediaItemUrl
          }
        }
        menu_img_wives_white {
          node {
            altText
            mediaItemUrl
          }
        }
        menu_img_wives_red {
          node {
            altText
            mediaItemUrl
          }
        }
      }
    }
  }
}
`;

let responseMenu;

try {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: graphqlQuery }),
  });

  if (!response.ok) {
    throw new Error("Error al obtener los datos");
  }

  responseMenu = await response.json();
} catch (error) {
  console.error("Ocurrió un error:", error);
}

export { responseMenu };
