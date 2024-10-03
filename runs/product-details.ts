import { pipeline } from "../pipelines/product-details"

pipeline.run(["https://www.thereformation.com/products/astoria-dress/1315028WHT.html?dwvar_1315028WHT_color=WHT"], { models: { extract: "gpt-4o" } }).then(res => console.log(res));