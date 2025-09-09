import { webhookController } from '../controllers/webhook.controller';

export const webhookRouter = async (req: Request): Promise<Response> => {
    const url = new URL(req.url);

    if (req.method === 'POST' && url.pathname === '/webhook/mail') {
        return webhookController(req);
    }

    return new Response("Not Found", {
        status: 404
    });
};
