import IntegrationBuilder, { CHAINS, LANGS } from "./src/lib/integration-builder/index";
import files from "./files";
const res = IntegrationBuilder.build({ chain: CHAINS[0].key, lang: LANGS[0].key }, files);
console.log(res);
