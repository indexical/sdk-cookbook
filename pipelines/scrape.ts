import { extract } from "indexical/dist/web"

export const pipeline = extract({
    goal: "Extract the following information from the page",
    schema: {
        value: "$mainContent",
        title: {
            type: "string",
            description: "the title of the page"
        }
    }
});
