import {Icon, IconE} from "./icons"

type SideMenuItemProps = {
    name: string;
    icon?: IconE;
    url: string;
}
export function SideMenuItem(item: SideMenuItemProps) {
    return <li id={"button-" + item.name}>
        {(item.icon) ? (<Icon icon={item.icon}/>) : <></>}
        <a href={item.url}>
            <p>{item.name}</p>
        </a>
    </li>
}