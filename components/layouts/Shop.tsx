import { FC, Fragment, ReactNode } from "react";
import Head from "next/head"
import {Navbar} from "@components/ui";


type Props = {
    children: ReactNode;
    description: string;
    title?:string;
    fullUrl?: string;
}

export const ShopLayout: FC<Props> = ({children , description, title='Tesla-Shop', fullUrl}) => {
  return (
    <Fragment>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="og:title" content={title}/>
            <meta name="og:description" content={description}/>
            {fullUrl && <meta name="og:image" content={fullUrl}/>}
        </Head>
        <Navbar/>
        <main style={{margin: '5rem auto', maxWidth: 1440, padding: '0 2rem'}}>{children}</main>
        <footer>footer</footer>
    </Fragment>
  )
}