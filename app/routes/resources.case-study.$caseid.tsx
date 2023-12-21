
import { useState } from "react";
import LoadingComponent from "~/common-components/loading";
import Consultation from "~/components/Homepage/section-7/consultation";
import Footer from "~/common-components/footer";
import { MetaFunction, Outlet } from "@remix-run/react";
import Section2 from "~/components/Resources/case-study/section-2";
import Section4 from "~/components/Resources/case-study/section-4";
import Section5 from "~/components/Resources/case-study/section-5";


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
  
  // const componentRes = await fetchData(
  //   "/api/career?populate=s4_cards.bgImage,s2_whyJoinUs.bgImage"
  // );


  // const JoinUsCard = componentRes.s4_cards.map((item: any) => ({
  //   id: item.id,
  //   title: item.title,
  //   description: item.description,
  //   link: item.link,
  //   bgImage: item.bgImage.data?.attributes.url,
  // }));
  // const JobDescription = componentRes.s2_whyJoinUs.map((item: any) => ({
  //   id: item.id,
  //   title: item.title,
  //   description: item.description,
  //   link: item.link,
  //   bgImage: item.bgImage.data?.attributes.url,
  // }));


  // const {
  //   heroTitle,
  //   heroDescription,
  //   s2_title,
  //   s2_description,
  //   s3_title,
  //   s3_description,
  //   s3_email,
  // } = jsonParsed.data?.career.data?.attributes;
  
  return {
    // heroImage:jsonParsed.data?.attributes.url,
    // heroTitle,
    // heroDescription,
    // s2_title,
    // s2_description,
    // s3_title,
    // s3_description,
    // s3_email,
    // JoinUsCard:JoinUsCard,
    // JobDescription:JobDescription,
  };
}

const Index = () => {

  const [loading, setLoading] = useState(true);
 

  return (
    <div style={{ padding: "0px", overflowX: "hidden" }}>
      {/* Video Background */}

      {!loading ? (
        <LoadingComponent />
      ) : (
        <div>
        <Section2/>
        <Section4/>
        <Section5/>
        <Consultation/>
          <Footer />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Index;
