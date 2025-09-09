import Redis from "ioredis";

export const redis= new Redis({
    host: process.env.HOST_REDIS,
    port: Number(process.env.PORT_REDIS),
    password: process.env.PASS_REDIS
})