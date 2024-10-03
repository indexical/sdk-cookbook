import { extractMany } from "indexical/dist/web"

/* This assumes that you are on a product list page like https://www.thereformation.com/collections/balletcore
 and are looking to extract the links to each product detail page  */

export const pipeline = extractMany({
    goal: "extract the product detail listing links", schema: {
        product_url: {
            type: "string",
            description: "the link to the product detail listing"
        },
        url: "$url"
    },
    scroll: true
}, "ecommerce-links");