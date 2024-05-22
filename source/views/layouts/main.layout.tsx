import { html } from "hono/html";
import { Fragment } from "hono/jsx/jsx-runtime";

type MainLayoutProps = {
    children: JSX.Element | JSX.Element[];
    PageName: string;
    Lang: string;
}
export function MainLayout(props: MainLayoutProps) {
    return (
        <Fragment>
            <html lang={props.Lang}>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>{props.PageName}</title>
                    <link rel="stylesheet" href="/public/styles/style.css" />
                    <link rel="stylesheet" href="/public/styles/common.css" />
                </head>
                <body>
                    {props.children}
                </body>
            </html>
        </Fragment>)
}