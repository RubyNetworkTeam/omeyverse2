import { Fragment } from "hono/jsx/jsx-runtime";
import type { User } from "../../../database/models/Users";
import { SideMenuItem } from "./side_menu_item";
import { type IconE } from "./icons";
import { Navar } from "../navar/nav";

export function SideMenu(){
    return <Fragment>
        <aside id="sidemenu">
            <Navar/>
            <ul>
            <SideMenuItem name="Profile" url="#profile" icon="activity-feed" />            
            <SideMenuItem name="Feed" url="#feed" icon="activity-feed"/>
            <SideMenuItem name="Communities" url="#communities" icon="communities"/>
            <SideMenuItem name="Messages" url="#messages" icon="message"/>
            <SideMenuItem name="Exit" url="#exit" icon="exit"/>
            </ul>
        </aside>
    </Fragment>
}