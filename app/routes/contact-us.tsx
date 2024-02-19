import ContactCard from "~/components/contact-us/contact-card";
import ContactUs from "~/common-components/contactUs";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ivoyant | contact us" },
    {
      property: "og:title",
      content: "About Ivoyant",
    },
    {
      name: "description",
      content: "Your achievement reflects our performance",
    },
  ];
};

export default function Index() {
  return (
    <>
      <div className="lg:mt-[4.7rem] mt-16">
        <ContactUs />
      </div>
      <ContactCard/>
     

    </>
  );
}
