import { redis } from "../config/redis";

export const reportController = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  const campaignId = url.searchParams.get('campaignId');

  if (!campaignId) {
    return new Response(JSON.stringify({
      status: 'ERR',
      message: 'Thieu thong tin'
    }), { status: 400, headers: { "Content-Type": "application/json" } });
  }


  const events = await redis.lrange(`campaign:${campaignId}:events`, 0, -1);
  const parsedEvents = events.map(e => JSON.parse(e));

  const summary = parsedEvents.reduce((acc, event) => {
    if (event.event === 'clicked') acc.clicked++;
    if (event.event === 'opened') acc.opened++;
    return acc;
  }, { opened: 0, clicked: 0 });

  return new Response(JSON.stringify({
    status: 'OK',
    campaignId,
    summary,
    events: parsedEvents
  }), { status: 200, headers: { "Content-Type": "application/json" } });
};
