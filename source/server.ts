import { Hono } from "hono"
import { serveStatic } from "@hono/node-server/serve-static"
import { serveStatic as BunServeStatic } from "hono/bun";
import { serve } from "@hono/node-server"

// use database
import "./database/database_connection.js";
import { Router } from "./routes/router.js";
import { logger } from "hono/logger";
import { CssOffdevice } from "./utils/off_device.js";


export class Server {
    private app: Hono = new Hono();
    private port: number | string;
    constructor(port: number | string = process.env.PORT || 3000){
        this.port = port;
        this.middlewares()
        this.routers()

        console.log("Server in port: ", this.port);
        
    }

    addStatic = () => {
        if(process.isBun){
            this.app.use('/public/*', BunServeStatic({
                root: "./"
            }));
        }else {
            this.app.use('/public/*', serveStatic({
                root: "./"
            }))
        }
    }

    middlewares = () => {
        this.app.use('/public/styles/style.css', CssOffdevice)
        this.addStatic()
        this.app.use(logger())
    }

    routers = () => {
        this.app.route('/', Router)
    }
    listen = () => {
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