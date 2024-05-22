import { Hono } from "hono";
import { FrontendRouter } from "./frontend";

export const Router = new Hono();
Router.route('/', FrontendRouter);
