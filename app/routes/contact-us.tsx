import Footer from "~/common-components/footer";
import ContactCard from "~/components/contact-us/contact-card";
import ContactUs from "~/common-components/contactUs";
import { MetaFunction } from "@remix-run/react";
import { ActionFunction } from "@remix-run/node";

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
export let action: ActionFunction = async ({ request }) => {
  try {
    let formData: FormData = await request.formData();
    let {_action, ...values}= Object.fromEntries(formData);
    if(_action === "contact"){

      const response = await fetch('https://forms.hubspot.com/uploads/form/v2/39872873/52d6bea6-d664-4d5c-a3e9-81a21ba79d3b', {
        method: 'POST',
        body: formData,
      });
      console.log('Form Data:', values);
      console.warn("/////////////////////////////// contact" ,JSON.stringify(response.json))

      if (response.ok) {
        console.warn('Form submitted successfully');
        return null;
      } else {
        console.warn('Form submission failed');
        throw new Error('Form submission failed');
      }
    }
    if(_action === "hire"){
      
    const response = await fetch('https://forms.hubspot.com/uploads/form/v2/39872873/28d8b167-abb4-44db-b4a3-19758d09a360',{
      method: 'POST',
      body: formData,
    });
    console.log('Form Data:', values);
console.warn("/////////////////////////////// hire" ,response.json)
    if (response.ok) {
      console.warn('Form submitted successfully');
      return null;
    } else {
      console.warn('Form submission failed');
      throw new Error('Form submission failed');
    }
    }

  } catch (error) {
    console.warn('Error during form submission error :', error);
    throw error; 
  }
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

      <Footer />
    </>
  );
}
