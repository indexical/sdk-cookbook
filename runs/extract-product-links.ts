import { pipeline } from "../pipelines/extract-product-links"

pipeline.run(["https://www.thereformation.com/tops"], { models: { extract: "gpt-4o" } }).then(res => console.log(res));