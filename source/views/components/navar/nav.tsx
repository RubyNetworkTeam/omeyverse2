import { Fragment } from "hono/jsx/jsx-runtime";
import type { User } from "../../../database/models/Users";

export function Navar({user, title}: {user?: User, title?: string}){
    return <Fragment>
        <nav>
            <img src="https://omeyverse.com/img/menu-logo.png" alt="omeyverseLogo" className="omeyLogo" width={128} />
            <h1>{title ?? "Omeyverse"}</h1>
        </nav>
    </Fragment>
}