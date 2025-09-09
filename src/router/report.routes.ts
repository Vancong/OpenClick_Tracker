import { reportController } from "../controllers/report.controller";

export const reportRouter= async (req:Request):Promise<Response> =>{
     const url = new URL(req.url);
    
        if (req.method === 'GET') {
            return reportController(req);
        }
    
        return new Response("Not Found", {
            status: 404
        });
}