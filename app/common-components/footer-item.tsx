import { Link } from "@remix-run/react";
import { Resource } from "~/interfaces/NavType";
export const AccordionItem = ({
  name,
  active,
  onToggle,
  num,
  list,
  showModal
}: {
  name: string;
  active: boolean;
  onToggle: (num: number) => void;
  num: number;
  list?: Resource[];
  showModal: (url: any) => void; 
}) => {
  return (
    <>
      <div className="w-full">
        <button
          onClick={() => onToggle(num)}
          className="capitalize w-full flex flex-row"
        >
          <span className="text-geekblue-2 font-semibold text-base tracking-widest">{name}</span>
          {active ? (
            <svg
              className="my-auto ml-auto"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m5 .551 5 6-.7.7-4.3-4.3-4.3 4.3-.7-.7 5-6Z"
                fill="#fff"
              />
            </svg>
          ) : (
            <svg
              className="my-auto ml-auto"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m5 6.449-5-5 .7-.7 4.3 4.3 4.3-4.3.7.7-5 5Z"
                fill="#fff"
              />
            </svg>
          )}
        </button>
        <ul className={`${active ? "grid" : "hidden"} my-4 gap-4`}>
        {list && name !== null && list.map((item) => (
          item?.name !== undefined && (
            item.attachment?.data?.attributes?.url ? (
              <button
                key={item.id}
                onClick={() => showModal(item.attachment?.data?.attributes?.url)}
                className="text-geekblue-2 text-left text-xs mx-2 hover:text-purple-300"
              >
                {item.name}
              </button>
            ) : (
              <li className="text-geekblue-2 text-xs mx-2 hover:text-purple-300" key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            )
          )
        ))}
            {name === "contact" && !list && (
              <>
                <div className="flex flex-col gap-4 mx-2">
                <div className="flex items-start gap-2">
                  <div className="flex flex-col footer-font justify-center gap-4">
                    <span className="text-sm to-geekblue-2">Mail</span>
                    <a className="text-geekblue-2 text-xs mx-2 hover:text-purple-300" href="mailto:sales@ivoyant.com">sales@ivoyant.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex flex-col footer-font justify-center gap-4">
                    <span className="text-sm to-geekblue-2">Skype</span>
                    <a href="skype:live:.cid.37875f1d394a53b6?chat" className="text-geekblue-2 text-xs mx-2 hover:text-purple-300">live:.cid.37875f1d394a53b6</a>
                    <a href="mailto:ivoyantsales@outlook.com" className="text-geekblue-2 text-xs mx-2 hover:text-purple-300">ivoyantsales@outlook.com </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex flex-col footer-font justify-center gap-4">
                    <span className="text-sm to-geekblue-2">Skype</span>
                    <a href="tel:(+91) 990990999" className="text-geekblue-2 text-xs mx-2 hover:text-purple-300">99999999</a>
                  </div>
                </div>
              </div>
              </>
            )}
            {name === "enquiry" && !list && (
              <>
                <div className="flex flex-col gap-4 mx-2">
                    <div className="flex items-start gap-3">
                    <div className="flex flex-col footer-font justify-center gap-1">
                            <span className="text-sm to-geekblue-2">For Clients</span>
                            <a className="text-geekblue-2 text-xs mx-2 hover:text-purple-300" href="mailto:info@ivoyant.com">info@ivoyant.com</a>
                    </div>
                    </div>
                    <div className="flex items-start gap-3">
                    <div className="flex flex-col footer-font justify-center gap-1">
                    <span className="text-sm to-geekblue-2">For Future developers</span>
                            <a className="text-geekblue-2 text-xs mx-2 hover:text-purple-300" href="mailto:jobs@ivoyant.com">jobs@ivoyant.com</a>
                    </div>
                    </div>
                </div>
              </>
            )}
        </ul>
      </div>
    </>
  );
};
export default AccordionItem;
