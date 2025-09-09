import { webhookRouter } from "./webhook.routes";

export const mainRouter= async (req: Request) : Promise <Response> =>{
    const url = new URL(req.url);

    if(url.pathname.startsWith('/webhook')){
        return webhookRouter(req)
    }
 
    return new Response("Not Found", { status: 404 });
}