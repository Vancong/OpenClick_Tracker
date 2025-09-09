import { serve } from "bun";
import { mainRouter } from "./router/index.routes";
const PORT=process.env.PORT||3001;

serve({
    port:PORT,
    fetch: mainRouter
})

console.log(`dang chay tai cong ${PORT}`);