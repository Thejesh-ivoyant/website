import { cssBundleHref } from "@remix-run/css-bundle";
import { defer, type LinksFunction } from "@remix-run/node";
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

import Sidebar from "./common-components/sidebar";
import Nav from "./common-components/nav";
import Footer from "./common-components/footer";
import { strapiUrl } from "./utils/urls";
import { fetchData } from "./utils/fetchdata";
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
  const navdata = await fetchData("/api/navbar?populate=*");
  const navGraphql = await fetchGraphQL(navQuery)
  
  return {
    navres: navdata,
    navGraphql : navGraphql
  }
};
export default function App() {
 
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title className="heading"><h1>ivoyant systems pvt ltd</h1></title>
        <meta name="description" content="Crafting Customer-Driven Digital Experiences" /> 

        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
