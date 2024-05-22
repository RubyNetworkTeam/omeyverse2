import { Fragment } from "hono/jsx/jsx-runtime";

export function Communities(){
    return <Fragment>
        <section id="communities-head">
            <h2>Communities</h2>
            <form action="#" method="post" id="communities-head-search">
                <input type="search" name="Search Communities" id="search" spellcheck={false} minlength={2} maxlength={20} />
                <input type="submit" value={"q"} title="Search" />
            </form>
        </section>
    </Fragment>
}