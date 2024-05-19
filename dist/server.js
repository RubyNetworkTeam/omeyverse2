import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { serve } from "@hono/node-server";
// use database
import "./database/database_connection.js";
export class Server {
    app = new Hono();
    port;
    constructor(port = process.env.PORT || 3000) {
        this.port = port;
    }
    listen() {
        if (process.isBun) {
            Bun.serve({
                fetch: this.app.fetch,
                port: Number(this.port)
            });
        }
        else {
            serve({
                fetch: this.app.fetch,
                port: Number(this.port)
            });
        }
    }
}
