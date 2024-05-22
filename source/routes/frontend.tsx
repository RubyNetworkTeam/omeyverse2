import { Hono } from "hono";
import { Home } from "../views";
export const FrontendRouter = new Hono();

FrontendRouter.get('/', c => {
    return c.html(<Home/>)
});
