import { type LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import globalstyle from "~/styles/main.css";
import Navstyle from "~/common-components/nav.css";
import Sidebarstyle from "~/common-components/sidebar.css"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Nav from "./common-components/nav";
import Footer from "./common-components/footer";
import { fetchGraphQL } from "./graphql/fetchGraphQl";
import { navQuery } from "./graphql/queries";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: globalstyle },
  { rel: "stylesheet", href: Navstyle},
  {rel:"stylesheet", href:Sidebarstyle}
];

export function scrollTo(section: string) {
  (document.getElementById(section)!).scrollIntoView({ behavior: "smooth" });
}
export async function loader() {
  const navGraphql = await fetchGraphQL(navQuery)
  
  return {
    navGraphql : navGraphql
  }
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title className="title">iVoyant Systems</title>
        <meta name="description" content="Crafting Customer-Driven Digital Experiences" /> 
        <link rel="stylesheet"  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <Outlet />
        <ScrollRestoration/>
        <Scripts />
        <LiveReload />
        <Footer  />
      </body>
    </html>
  );
}

