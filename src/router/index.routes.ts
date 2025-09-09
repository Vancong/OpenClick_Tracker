import { webhookRouter } from "./webhook.routes";
import { reportRouter } from "./report.routes";
export const mainRouter= async (req: Request) : Promise <Response> =>{
    const url = new URL(req.url);

    if(url.pathname.startsWith('/webhook')){
        return webhookRouter(req)
    }

    if(url.pathname.startsWith('/report')) {
        return reportRouter(req)
    }
 
    return new Response("Not Found", { status: 404 });
}