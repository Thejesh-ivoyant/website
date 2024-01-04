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
      <div className="mt-16">
        <ContactUs />
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex w-full">
          <ContactCard />
        </div>
        {/* <div className="flex w-1/2">
    <GoogleMapComponent/>
  </div> */}
      </div>

    </>
  );
}
