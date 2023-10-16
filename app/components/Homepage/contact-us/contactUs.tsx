import { Form } from "@remix-run/react";
import { FormData, ActionFunction} from "@remix-run/node";
import { useEffect, useState } from "react";
import { strapiUrl } from "~/utils/urls";

export let action: ActionFunction = async({request}) =>{
    let formdata =  await request.formData();
 
}
const ContactUs = ()=>
{
    const CONTACT_US = `${strapiUrl}/api/contact-uses?populate=%2A`
    const [imageUrl, setImageUrl] = useState(""); // Define the state here

    useEffect(() => {
        fetch(CONTACT_US)
          .then((response) => response.json())
          .then((data) => {
            const imageUrl =
              data.data[0].attributes.bgImage.data[0].attributes.url;
            setImageUrl(imageUrl);
          })
          .catch((error) => {
            console.error("Error fetching data from API:", error);
          });
      }, []);
      
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index:number) => {
        setToggleState(index)
    }
    return (
        <section className="w-full h-[90vh] bg-cover bg-center flex flex-row font-oxygen">
            <img src= {strapiUrl + imageUrl} className="h-full w-2/5 object-cover object-left"></img>
            <div className="w-full h-full dark-gradient flex flex-col text-center  p-10 ">
                <div className="h-fit w-full border-b-[0.2rem] border-b-violet-400 flex gap-8  text-5xl justify-start">
                    <div className={toggleState === 1? 'tab active-tab font-bold' : 'tab font-thin'}
                    onClick={()=>toggleTab(1)}>Contact us</div>
                    <div className={toggleState === 2? 'tab active-tab font-bold' : 'tab font-thin'}
                    onClick={()=>toggleTab(2)}>Hire us</div>
                </div>
                <Form method="post" className={toggleState === 1? 'flex flex-col gap-14 active-content py-10' : 'hidden'}>
                    <input type = "text" name="name" placeholder="Name*" className="focus:outline-none h-11 px-2 py-3 bg-transparent"/>
                    <input type = "email" name="email" placeholder="Email*" className="focus:outline-none h-11 px-2 py-3 bg-transparent"/>
                    <input type = "number" name="phone" placeholder="Phone Number" className="focus:outline-none h-11 px-2 py-3 bg-transparent"/>
                    <input type = "text" name="message" placeholder="Message" className="focus:outline-none h-11 px-2 py-3 bg-transparent"/>
                    
                    <button type = "submit" className="btn-white w-fit text-violet-800">Lets talk</button> 
                </Form>
                <Form className={toggleState === 2? 'flex flex-col gap-16 active-content' : 'hidden'}>
                    HireUs content goes here
                </Form>
            </div>
        </section>
    );
}

export default ContactUs;