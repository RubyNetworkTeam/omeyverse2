import { Fragment } from "hono/jsx/jsx-runtime";
import { MainLayout } from "./layouts/main.layout";
import {machine} from "node:os"
import { SideMenu } from "./components/sidemenu/side_menu";
import { Communities } from "./components/communities";
// this is just a test page
export function Home(){
    return <MainLayout Lang="en" PageName="Omeyverse2 Test">
        <SideMenu/>
    </MainLayout>
}