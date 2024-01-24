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
import ClarityScript from "./clarityScript";

import Nav from "./common-components/nav";
import Footer from "./common-components/footer";
import { fetchGraphQL } from "./graphql/fetchGraphQl";
import { navQuery } from "./graphql/queries";
import ScrollToTopIcon from "./ScrollToTop";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: globalstyle },
  { rel: "stylesheet", href: Navstyle},
  {rel:"stylesheet", href:Sidebarstyle}
];

export function scrollToSection(section: string) {
  const targetElement = document.getElementById(section);

  if (targetElement) {
    const scrollableParent = targetElement.closest('scrollable-element');

    if (scrollableParent) {
      // Declare scrollPosition here, within the if block
      const scrollPosition = targetElement.offsetTop - 94;

      scrollableParent.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    } else {
      // Declare scrollPosition here, within the else block
      const scrollPosition = targetElement.offsetTop - 94;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    }
  } else {
    console.error(`Element with ID '${section}' not found.`);
  }
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
       
      <ClarityScript />
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
        <ScrollToTopIcon/>
      </body>
    </html>
  );
}

