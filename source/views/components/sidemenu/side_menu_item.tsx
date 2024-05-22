import {Icon, type IconE} from "./icons"

type SideMenuItemProps = {
    name: string;
    icon?: IconE;
    url: string;
}
export function SideMenuItem(item: SideMenuItemProps) {
    return <li id={"button-" + item.name}>
        <a href={item.url}>
            {(item.icon) ? (<Icon icon={item.icon}/>) : <></>}
            <p>{item.name}</p>
        </a>
            <img src="/public/images/icons/icon-arrow-right.png" alt="" className="arrow" />
    </li>
}