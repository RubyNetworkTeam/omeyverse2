import { Fragment } from "hono/jsx/jsx-runtime";
import type { User } from "../../../database/models/Users";
import { SideMenuItem } from "./side_menu_item";
import { IconE } from "./icons";

export function SideMenu(){
    return <Fragment>
        <aside id="sidemenu">
            <ul>
            <SideMenuItem name="Profile" url="#profile" icon={IconE.Profile}/>            
            <SideMenuItem name="Feed" url="#feed" icon={IconE.Feed}/>
            <SideMenuItem name="Communities" url="#communities" icon={IconE.Community}/>
            <SideMenuItem name="Messages" url="#messages" icon={IconE.MessageFilled}/>
            <SideMenuItem name="Exit" url="#exit" icon={IconE.Wrong}/>
            </ul>
        </aside>
    </Fragment>
}