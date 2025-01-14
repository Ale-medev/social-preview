import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.WP_URL;

const graphqlQuery = `
{
    page(id: "cG9zdDoyMjA=") {
        cfInfo {
        contact_info {
            contact_email
            contact_facebook
            contact_instagram
            contact_tel
            contact_whatsapp
        }
        imgs_book {
            img_1 {
            node {
                mediaItemUrl
                altText
            }
            }
            img_2 {
            node {
                altText
                mediaItemUrl
            }
            }
            img_3 {
            node {
                altText
                mediaItemUrl
            }
            }
            img_4 {
            node {
                altText
                mediaItemUrl
            }
            }
            img_5 {
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

let responseContact;

try {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: graphqlQuery }),
  });

  if (!response.ok) {
    throw new Error("Error al obtener los datos");
  }

  responseContact = await response.json();
} catch (error) {
  console.error("Ocurrió un error:", error);
}

export { responseContact };