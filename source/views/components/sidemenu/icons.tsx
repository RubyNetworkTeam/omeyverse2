export type IconE = "activity-feed" | "communities" | "message" | "notifications" | "exit"
export function Icon({icon}: {icon: IconE}){
    return (
        <img src={'/public/images/icons/'+ icon + '.png'} alt="" />
    )
}