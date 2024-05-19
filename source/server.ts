import { Hono } from "hono"
import { serveStatic } from "@hono/node-server/serve-static"
import { serve } from "@hono/node-server"

// use database
import "./database/database_connection.js";

export class Server {
    private app: Hono = new Hono();
    private port: number | string;
    constructor(port: number | string = process.env.PORT || 3000){
        this.port = port;
    }

    listen(){
        if(process.isBun){
            Bun.serve({
                fetch: this.app.fetch,
                port: Number(this.port)
            });
        }else {
            serve({
                fetch: this.app.fetch,
                port: Number(this.port)
            })
        }
    }
}