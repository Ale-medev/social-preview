import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.WP_URL;

const graphqlQuery = `
{
 page(id: "cG9zdDoyNzY=") {
    cfgallery {
      gallery {
        item_gallery_1 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_2 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_3 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_4 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_5 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_6 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_7 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_8 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_9 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_10 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_11 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_12 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_13 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_14 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        item_gallery_15 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        
        item_gallery_16 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
        
        item_gallery_17 {
          node {
            altText
            mediaItemUrl
            description
          }
        }
      }
    }
  }
}
`;

let responseGallery;

try {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: graphqlQuery }),
  });

  if (!response.ok) {
    throw new Error("Error al obtener los datos");
  }

  responseGallery = await response.json();
} catch (error) {
  console.error("Ocurrió un error:", error);
}

export { responseGallery };