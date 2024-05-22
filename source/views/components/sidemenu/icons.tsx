export enum IconE {
    Feed = "a",
    Share = "b",
    Community = "c",
    Trash = "d",
    Profile = "e",
    Friend = "f",
    List = "g",
    Help = "h",
    Photo = "i",
    Menu = "j",
    Box = "k",
    Options = "l",
    Mail = "m",
    Notification = "n",
    Browser = "o",
    MessageFilled = "p",
    Search = "q",
    Respond = "r",
    Star = "s",
    Tag = "t",
    SinglePerson = "u",
    Check = "v",
    Miiverse = "w",
    Wrong = "x",
    Settings = "y",
    Attachment = "z"

}
export function Icon({icon}: {icon: IconE}){
    return (
        <span class={"miiverse_icon"}>{icon}</span>
    )
}