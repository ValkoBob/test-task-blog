import * as React from "react";
import Link from 'next/link';
import Head from 'next/head';
import {Button_in_header, Header_Title, Header, Main, NavBar} from "./styles";
import {ILayout} from "../../interfaces/ILayout";

const Layout: React.FC<ILayout>  = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header>
                <NavBar>
                    <Link href="/">
                        <Button_in_header>Home</Button_in_header>
                    </Link>
                    <Header_Title>Blog</Header_Title>
                    <Link href="/posts/new">
                        <Button_in_header>Create Post</Button_in_header>
                    </Link>
                </NavBar>
            </Header>
            <Main>{children}</Main>
        </>
    )
}

export default Layout;
