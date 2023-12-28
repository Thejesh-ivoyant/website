import LoadingComponent from "~/common-components/loading";
import Consultation from "~/components/Homepage/consultation";
import Footer from "~/common-components/footer";
import { MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { strapiUrl } from "~/utils/urls";
import Cookies from "~/components/policy-terms-cookies/cookies";
import PTCHero from "~/components/policy-terms-cookies/ptc-hero";
import LoadingTest from "~/common-components/loading-test";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | Mobile App Development" },
    {
      property: "og:title",
      content: "Services Page",
    },
    {
      name: "description",
      content: "Ivoyant Services section describing all services offered",
    },
  ];
};

export async function loader() {
  const url = strapiUrl + `/api/cookies?populate=%2A`;
  try {
    const res = await fetch(url);
    let jsonParsed = await res.json();

    const {
      heroTitle,
      heroDescription,
      last_reviewed,
      cookies,
      use,
      disabling,
      forms_cookies,
      third_party_cookies,
      more_info,
    } = jsonParsed.data[0]?.attributes;

    return {
      heroTitle,
      heroDescription,
      last_reviewed,
      cookies,
      use,
      disabling,
      forms_cookies,
      third_party_cookies,
      more_info,
    };
  } catch (error: any) {
    console.error(`Error fetching data hggfrom ${url}: ${error.message}`);
  }
}

const Index = () => {
  const data = useLoaderData() as any;

  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {/* Video Background */}

      {!data ? (
        <LoadingTest />
      ) : (
        <div>
          <PTCHero />
          <Cookies />
          <Consultation />
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
