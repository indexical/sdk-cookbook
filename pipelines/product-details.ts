import { extract } from "indexical/dist/web"

export const pipeline = extract({
    goal: "Extract the following product information from the product detail page",
    schema: {
        title: {
            type: "string",
            description: "The title or name of the product"
        },
        price: {
            type: "string",
            description: "The current price of the product"
        },
        description: {
            type: "string",
            description: "A detailed description of the product"
        },
        available: {
            type: "boolean",
            description: "Indicates whether the product is currently available for purchase"
        }
    }
});