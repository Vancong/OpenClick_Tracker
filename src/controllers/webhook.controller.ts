import {redis} from '../config/redis';

export const webhookController= async (req:Request): Promise <Response> =>{

    const body:any= await req.json(); 
    const {email,event,campaignId}= body;
    console.log(body)
    if(!email||!event||!campaignId) {
        return new Response(JSON.stringify({
            status:'ERR',
            message: 'Thieu thong tin'
        }),{
            status:400,
            headers:{"Content-Type": "application/json"}
        })
    }

    await redis.rpush(`campaign:${campaignId}:events`,
        JSON.stringify({
            email,
            event,
            timestamp: Date.now()
        })
    )
  return new Response(
    JSON.stringify({ status: "OK", message: "Da ghi nhan su kien" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}