import { Form, useLoaderData, useLocation, useMatch } from "@remix-run/react";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { fetchGraphQL } from "~/graphql/fetchGraphQl";
import { blogQuery, whitepaperQuery } from "~/graphql/queries";
import { dateFormatTxt } from "~/utils/date-format-util";
import { errorMessage, success } from "~/utils/notifications";
const Blog_WhitepaperContent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneerror, setPhoneError] = useState('');
  const [personname, setPersonName] = useState('');
  const [nameerror, setNameError] = useState('');

  const [email, setEmail] =useState("");
  const [emailerror, setEmailError] = useState('');

  const [tagsData, setTagsData] = useState([]);
  const location = useLocation();
  const { blogData, whitePaperData } = location.state || [];
  const Blogmatched = useMatch("/resources/blog/:id");
  const isBlogRoute = Blogmatched !== null;
  const [blogCategoryData, setBlogCategoryData] = useState([]);
  const [blogData1, setBlogData] = useState([]);
  const [whitePaperData1, setWhitePaperData] = useState([]);

  const handleNameChange = (e: any) => {
    const personName = e.target.value;
    setPersonName(personName);
    setNameError("");
    const noNumbersPattern = /\d/;
    const noSpecialCharsPattern = /[^\w\s]/;
    const noConsecutiveCharsPattern = /(\w)\1{3}/;

    if (!personName) {
        setNameError("Full name is required");
    } else if (personName.length < 3) {
        setNameError("Name must be at least 3 characters long");
    } else if (personName.length > 35) {
        setNameError("Name must be less than 36 characters");
    } else if (noNumbersPattern.test(personName)) {
        setNameError("Name cannot contain numbers");
    } else if (noSpecialCharsPattern.test(personName)) {
        setNameError("Name cannot contain special characters");
    } else if (noConsecutiveCharsPattern.test(personName)) {
        setNameError("Name cannot contain repeating consecutive characters four times");
    }
};
const handlePhoneNumberChange = (e: any) => {
  const phone = e.target.value;
  setPhoneNumber(phone);
  setPhoneError("");
  const phoneRegex = /^(?:[0-9]{3})[-. ]*(?:[0-9]{3})[-. ]*(?:[0-9]{4})(?: *[x/#]{1}[0-9]+)?$/;
  if (!phone) {
      setPhoneError("Phone number is required");
  } else if (!phoneRegex.test(phone)) {
      setPhoneError("Invalid phone number format");
  }
};
const handleEmailChange = (e: any) => {
  const emailValue = e.target.value;
  setEmail(emailValue);
  // Reset email error
  setEmailError("");
  // Validate email
  if (!emailValue.trim()) {
    setEmailError("Email is required");
} else if (!/^[a-z0-9+_.-]+([.-]?[a-z0-9+_.-]+)*@[a-z0-9+_.-]+([.-]?[a-z0-9+_.-]+)*(\.[a-z]{2,3})+$/.test(emailValue)) {
    setEmailError("Invalid email address");
}
};


  useEffect(() => {
    const fetchData = async () => {
      if (blogData) {
        setBlogData(blogData);
      } else if (whitePaperData) {
        setWhitePaperData(whitePaperData);
      } else {
        try {
          if (isBlogRoute) {
            const blogGql = await fetchGraphQL(blogQuery);
            setBlogData(
              blogGql.data?.blogs.data?.map((item: any) => ({
                id: item.id,
                title: item.attributes.title,
                description1: item.attributes.description1,
                date: item.attributes.date,
                maxReadTime: item.attributes.maxReadTime,
                bannerImage: {
                  name: item.attributes.bannerImage.data?.attributes.name ?? "",
                  url: item.attributes.bannerImage.data?.attributes.url ?? "",
                },
                author: {
                  name: item.attributes.author.data?.attributes.name,
                  avatar:
                    item.attributes.author.data?.attributes.avatar.data
                      ?.attributes?.url,
                },
                topic_tags:
                  item.attributes.topic_tags.data?.map(
                    (tag: any) => tag.attributes.name
                  ) ?? [],
                category: {
                  name: item.attributes.category.data?.attributes.name,
                },
              }))
            );
          } else {
            const whitepaperGql = await fetchGraphQL(whitepaperQuery);
            setWhitePaperData(
              whitepaperGql.data?.whitePapers.data?.map((item: any) => ({
                id: item.id,
                title: item.attributes.title,
                description1: item.attributes.description1,
                date: item.attributes.date,
                maxReadTime: item.attributes.maxReadTime,
                bannerImage: {
                  name: item.attributes.bannerImage.data?.attributes.name ?? "",
                  url: item.attributes.bannerImage.data?.attributes.url ?? "",
                },
                author: {
                  name: item.attributes.author.data?.attributes.name,
                  avatar:
                    item.attributes.author.data?.attributes.avatar.data
                      ?.attributes?.url,
                },
              }))
            );
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [blogData, whitePaperData]);
  // Check the route type and use the corresponding data
  const LatestData = isBlogRoute ? blogData1 : whitePaperData1;
  const loaderData = useLoaderData() as any;
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  const match = useMatch("/resources/whitepaper/:id");
  const isResourcesRoute = match !== null;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setBtnLoading(true);
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      formData.append("action", "whitepaper");
      const response = await fetch(
        "https://forms.hubspot.com/uploads/form/v2/39872873/c4e42171-a7d2-4ce1-b0dc-c7adeba7c46d",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        success("Thank you for showing interest in us!", 2);
        handleDownload();
      } else {
        errorMessage("Error occured, please retry", 2);
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
    setBtnLoading(false);
  };
  const handleDownload = () => {
    const whitepaperURL = loaderData.whitepaper;
    setOpen(false);
    window.open(whitepaperURL, "_blank");
  };
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  function findcount(name: string): number {
    const count = loaderData.BlogCategory.filter(
      (category: any) => category.category.name === name
    ).length;
    return count;
  }
  return (
    <div className="blog-whitepaper-content-section justify-center items-center self-stretch bg-[#F9F8FC] flex flex-col px-16 max-md:px-5">
      <div className="blog-content-container flex ml-0 justify-between  max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="left-content-blog markdown-container items-stretch flex  flex-col ">
          <div className=" author-links flex flex-row items-start justify-start gap-4 ">
            {loaderData.authorData?.map((item: any, index: any) => (
              <a
                href={item.link}
                className="text-black h-fit text-base leading-5 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="icon"
                  loading="eager"
                  src={item.logo}
                  className=" grayscale hover:grayscale-0 object-contain object-center w-full h-fit items-center overflow-hidden max-w-full mt-7"
                />
              </a>
            ))}
          </div>
          <div className="text-black text-3xl font-semibold max-md:max-w-full blog-para-title">
            {loaderData.title}
          </div>
          <div className="text-black  leading-5 mt-4 max-md:max-w-full">
            <ReactMarkdown>{loaderData.description1}</ReactMarkdown>
          </div>
          {isResourcesRoute ? (
            <button className="btn hue-btn-download mt-8" onClick={showModal}>
              Download whitepaper Now
            </button>
          ) : (
            <div>
              {loaderData.descriptionImage1 && (
                <img
                  alt="icon"
                  src={`${loaderData.descriptionImage1}`}
                  className="aspect-[2.33]  object-center w-full overflow-hidden mt-4 max-md:max-w-full"
                />
              )}
              <div className="text-black text-base leading-5 mt-4 max-md:max-w-full">
                <ReactMarkdown>{loaderData.description2}</ReactMarkdown>
              </div>
              {loaderData.descriptionImage2 && (
                <img
                  loading="eager"
                  alt="icon"
                  src={`${loaderData.descriptionImage2}`}
                  className="aspect-[2.33]  object-center w-full overflow-hidden mt-4 max-md:max-w-full"
                />
              )}
              <div className="text-black text-base leading-5 mt-4 max-md:max-w-full">
                <ReactMarkdown>{loaderData.description3}</ReactMarkdown>
              </div>
              {loaderData.descriptionImage3 && (
                <img
                  alt="icon"
                  loading="lazy"
                  src={`${loaderData.descriptionImage3}`}
                  className="aspect-[2.33]  object-center w-full overflow-hidden mt-4 max-md:max-w-full"
                />
              )}
            </div>
          )}
        </div>
        <div className="separator-line bg-gray-200 self-stretch flex w-px shrink-0 h-[800px] flex-col" />
        <div className=" flex grow basis-[0%] flex-col items-stretch self-start">
          <div className="shadow-sm author-card flex flex-col px-7 pr-10 py-7  rounded-sm items-start max-md:px-5">
            <img
              alt="icon"
              src={loaderData.avatar}
              className="aspect-square object-contain object-center w-[84px] overflow-hidden max-w-full rounded-[50%]"
            />
            <div className="text-black text-xl font-medium self-stretch whitespace-nowrap mt-8 max-md:mr-1.5">
              {loaderData.authorName}
            </div>
            <div className="text-neutral-800 text-base leading-5 mt-5">
              {loaderData.authorSummary}
            </div>
            <div className="flex flex-row gap-4">
              {loaderData.authorData?.map((item: any, index: any) => (
                <a
                  href={item.link}
                  className="text-black h-fit text-base leading-5 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="icon"
                    loading="eager"
                    src={item.logo}
                    className=" grayscale hover:grayscale-0 object-contain object-center w-full h-fit items-center overflow-hidden max-w-full mt-7"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="shadow-sm bg-white flex w-full flex-col items-stretch mt-5 pl-4 pr-4 pt-11 pb-5 ">
            <div className="text-black text-2xl font-medium leading-9">
              Related post
            </div>
            {LatestData?.slice(0, 3).map((item: any, index: any) => (
              <div
                key={index}
                className="flex justify-between gap-3.5 mt-11 max-md:mt-10"
              >
                <div className="flex flex-col items-center ">
                  <img
                    alt={`Related post ${index + 1}`}
                    src={item.bannerImage.url}
                    className="object-cover object-center min-w-[5rem] h-full rounded-sm"
                  />
                </div>
                <div className="flex  flex-col flex-1">
                  <div className="text-black text-base font-medium leading-6 line-clamp-2 overflow-hidden">
                    {item.title}
                  </div>
                  <div className="flex justify-between gap-2 mt-4 pr-20 items-start max-md:pr-5">
                    <img
                      alt="icon"
                      loading="lazy"
                      src="../../assets/calendericon.svg"
                      className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-600 text-sm font-medium self-stretch grow whitespace-nowrap">
                      { dateFormatTxt(item?.date as string) }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!isResourcesRoute ? (
            <div className="shadow-sm bg-white flex w-full flex-col items-stretch mt-5 gap-5 pl-7 pr-9 py-10 max-md:px-5">
              <div className="text-black text-2xl font-medium whitespace-nowrap">
                Categories
              </div>
              <div className="bg-zinc-300 flex shrink-0 h-px flex-col" />
              {loaderData?.categoriesList?.map((item: any, index: any) => (
                <div className="flex items-stretch justify-between gap-5 max-md:mt-10">
                  <div className="flex grow basis-[0%] flex-col items-stretch">
                    <div className="text-neutral-800 text-base font-medium whitespace-nowrap">
                      {item.label}
                    </div>
                  </div>
                  <div className="flex basis-[0%] flex-col items-stretch self-start max-md:hidden">
                    <div className="text-neutral-800 text-base font-medium whitespace-nowrap">
                      ({findcount(item.label)})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
          {!isResourcesRoute ? (
            <div className="shadow-sm bg-white flex w-full flex-col items-stretch mt-5 pl-7 pr-9 pt-11 pb-6 max-md:px-5">
              <div className="text-black text-2xl font-medium whitespace-nowrap">
                Popular Tags
              </div>
              <div className="bg-zinc-300 flex shrink-0 h-px flex-col mt-6" />
              <div className="items-stretch flex gap-1 mt-6">
                {loaderData.tags.slice(0, 3).map((item: any, index: any) => (
                  <div className="text-neutral-800 text-sm flex flex-row items-center whitespace-nowrap  justify-center w-full border-[color:var(--gray-gray-6,#BFBFBF)]  px-2.5 py-1.5 border-[0.5px] border-solid">
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="items-stretch mt-2 flex gap-1  max-md:justify-center ">
                {loaderData.tags.slice(3, 5).map((item: any, index: any) => (
                  <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] grow pl-3 pr-1.5 py-1.5 border-[0.5px] border-solid">
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Modal
        open={open}
        title="Download WhitePaper"
        onCancel={handleCancel}
      >
   <Form className="form" onSubmit={handleSubmit}>
    <div className="items-stretch bg-white flex  flex-col py-2">
      <div className="text-black  text-sm font-semibold  max-md:max-w-full max-md:mt-10">
        Please provide required information to view the Pitch deck
      </div>
      <div className="text-box-form-label mt-4 max-md:max-w-full">
        Full Name*
      </div>
      <div className="relative w-full flex flex-col">
      <input
        type="text"
        className=" flex shrink-0 h-[29px] flex-col mt-1 text-box-form  max-md:max-w-full"
        name="firstName"
        value={personname}
        onChange={handleNameChange}
        required
      />
       {nameerror &&(
          <span className="absolute mb-[-1rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{nameerror}</span>
          )}
        </div>
      <div className="text-box-form-label mt-4 max-md:max-w-full">
        Email*
      </div>
      <div className="relative w-full flex flex-col">
      <input
        type="email"
        value={email}
        style={{textTransform:"none"}}
        onChange={handleEmailChange}
        className=" flex shrink-0 h-[29px] flex-col mt-1 text-box-form max-md:max-w-full"
        name="email"
        required
      />
        {emailerror &&(
          <span className="mb-[-1rem] absolute text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{emailerror}</span>
          )}
        </div>
      <div className="text-box-form-label mt-4 max-md:max-w-full">
        Phone Number*
      </div>
      <div className="relative w-full flex flex-col">
      <input
        type="tel"
        className="flex shrink-0 h-[29px] flex-col mt-1 text-box-form max-md:max-w-full"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        required
      />
       {phoneerror &&(
          <span className="absolute mb-[-1.15rem] text-red-500 text-[0.6rem] error-msg bottom-0 left-0">{phoneerror}</span>
          )}
          </div>
      <button type="submit" className=" hue-btn-primary mt-6 btn w-full" disabled={btnLoading ||  personname==='' || email==='' || phoneNumber==='' || !!phoneerror || !!emailerror || !!nameerror }
>
        Get the Copy
      </button>
    </div>
  </Form>

      </Modal>
    </div>
  );
};
export default Blog_WhitepaperContent;
