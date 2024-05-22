import type { Context, Next } from "hono";
import { readFileSync } from "fs";
import { resolve } from "path";

export async function CssOffdevice(c: Context, next: Next) {

    if (c.req.raw.headers.get("user-agent")!.toLowerCase().includes("wiiu")) {
        return next();
    }

    // Bun file
    if (process.isBun) {
        return new Response(Bun.file("public/styles/off-device/style.css"));
    }

    return new Response(readFileSync(resolve(process.cwd(), 'public', 'style', 'off-device', 'style.css')))
}