import { useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';

const BlobContent = () => {
    const [open, setOpen] = useState(false);
const { Option } = Select;
    const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };
    
    return (
        <div className="justify-center items-center self-stretch bg-slate-50 flex flex-col px-16 py-12 max-md:px-5">
        <div className="flex ml-0 justify-between gap-5 items-end max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="items-stretch flex grow basis-[0%] flex-col mt-10 max-md:max-w-full">
            <div className="text-black text-3xl font-semibold max-md:max-w-full">
              Ai robot using cyber security to <br />
              protect information privacy
            </div>
            <div className="text-black text-base leading-5 mt-4 max-md:max-w-full">
              Artificial intelligence (AI) allows machines to learn directly from
              their experiences and problem-solve. Combine this with the rapid
              rise of robotics in the workplace, and both the business world and
              society in general are potentially facing problems.
              <br />
              In a recent series of interviews conducted in the UK by the The
              Royal Society – the venerable body for the promotion of science –
              people shared their worries about depersonalisation; the fear that
              machines with artificial intelligence (AI) will replace human
              one-to-one experience. This is of greatest concern in the
              care-giving services due to the personalisation and empathy desired.
              <br />
              Despite these concerns, UK researchers from Middlesex University and
              the University of Bedfordshire are seeing the rise of robotics as
              the future of healthcare, as they assist in the development of
              ‘pepper robots’, a humanoid robot unveiled three years ago with the
              ability to read emotions. Robotics and AI in the healthcare industry
              can already been seen in action, in the way of medical apps and
              their ability to monitor health and the advancements of medical
              robots and their delivery of intricate operations.
              <br />
              Global employment agency Randstad agree that social care robots that
              can perform tasks such as reminding patients to take medication and
              detecting illness, could be the solution to filling the predicted
              staff shortages in the future. However, they also highlight their
              design to coexist, rather than becoming a sole care-giver. Bringing
              robots into the workplace might not be a replacement for human
              carers, but the support they are able to provide could lead to
              improved quality of care due to the time they would save.
              <br />
              As with the healthcare industry, the financial sector is also seeing
              a rise in robotics – more specifically, robotics process automation
              (RPA). Currently in the research phase, RPA will further provide the
              financial services industry with a robotic workforce. The purpose of
              these robots is to enhance productivity by reducing the need for
              human involvement in dull, repetitive tasks. Additionally, with
              robotics not having a need for rest, 24-hour trading is a nearing
              possibility.
              <br />
              The cyberattack risk
              <br />W
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9affd75fe968fb9bda3a1fbfd277003ae8e81694c4f0f68a7dbc582ad15a120?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9affd75fe968fb9bda3a1fbfd277003ae8e81694c4f0f68a7dbc582ad15a120?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9affd75fe968fb9bda3a1fbfd277003ae8e81694c4f0f68a7dbc582ad15a120?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9affd75fe968fb9bda3a1fbfd277003ae8e81694c4f0f68a7dbc582ad15a120?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9affd75fe968fb9bda3a1fbfd277003ae8e81694c4f0f68a7dbc582ad15a120?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9affd75fe968fb9bda3a1fbfd277003ae8e81694c4f0f68a7dbc582ad15a120?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9affd75fe968fb9bda3a1fbfd277003ae8e81694c4f0f68a7dbc582ad15a120?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9affd75fe968fb9bda3a1fbfd277003ae8e81694c4f0f68a7dbc582ad15a120?apiKey=9e16588387084fb2a9a51a1b99489136&"
              className="aspect-[2.33] object-contain object-center w-full overflow-hidden mt-4 max-md:max-w-full"
            />
            <div className="text-black text-base leading-5 mt-4 max-md:max-w-full">
              Artificial intelligence (AI) allows machines to learn directly from
              their experiences and problem-solve. Combine this with the rapid
              rise of robotics in the workplace, and both the business world and
              society in general are potentially facing problems.
              <br />
              In a recent series of interviews conducted in the UK by the The
              Royal Society – the venerable body for the promotion of science –
              people shared their worries about depersonalisation; the fear that
              machines with artificial intelligence (AI) will replace human
              one-to-one experience. This is of greatest concern in the
              care-giving services due to the personalisation and empathy desired.
              <br />
              Despite these concerns, UK researchers from Middlesex University and
              the University of Bedfordshire are seeing the rise of robotics as
              the future of healthcare, as they assist in the development of
              ‘pepper robots’, a humanoid robot unveiled three years ago with the
              ability to read emotions. Robotics and AI in the healthcare industry
              can already been seen in action, in the way of medical apps and
              their ability to monitor health and the advancements of medical
              robots and their delivery of intricate operations.
              <br />
              Global employment agency Randstad agree that social care robots that
              can perform tasks such as reminding patients to take medication and
              detecting illness, could be the solution to filling the predicted
              staff shortages in the future. However, they also highlight their
              design to coexist, rather than becoming a sole care-giver. Bringing
              robots into the workplace might not be a replacement for human
              carers, but the support they are able to provide could lead to
              improved quality of care due to the time they would save.
              <br />
              As with the healthcare industry, the financial sector is also seeing
              a rise in robotics – more specifically, robotics process automation
              (RPA). Currently in the research phase, RPA will further provide the
              financial services industry with a robotic workforce. The purpose of
              these robots is to enhance productivity by reducing the need for
              human involvement in dull, repetitive tasks. Additionally, with
              robotics not having a need for rest, 24-hour trading is a nearing
              possibility.
              <br />
              The cyberattack risk
              <br />W
            </div>
          </div>
          <div className="bg-gray-200 self-stretch flex w-px shrink-0 h-[1653px] flex-col" />
          <div className="flex grow basis-[0%] flex-col items-stretch self-start">
            <div className="shadow-sm bg-white flex flex-col pl-8 pr-10 py-7 rounded-sm items-start max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94d207e8f31729d2cb45338e77c7a82ba82d576da97fc7dad07daba97ca68b26?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94d207e8f31729d2cb45338e77c7a82ba82d576da97fc7dad07daba97ca68b26?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94d207e8f31729d2cb45338e77c7a82ba82d576da97fc7dad07daba97ca68b26?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94d207e8f31729d2cb45338e77c7a82ba82d576da97fc7dad07daba97ca68b26?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94d207e8f31729d2cb45338e77c7a82ba82d576da97fc7dad07daba97ca68b26?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94d207e8f31729d2cb45338e77c7a82ba82d576da97fc7dad07daba97ca68b26?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94d207e8f31729d2cb45338e77c7a82ba82d576da97fc7dad07daba97ca68b26?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94d207e8f31729d2cb45338e77c7a82ba82d576da97fc7dad07daba97ca68b26?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="aspect-square object-contain object-center w-[84px] overflow-hidden max-w-full rounded-[50%]"
              />
              <div className="text-black text-xl font-medium self-stretch whitespace-nowrap mt-8 max-md:mr-1.5">
                Amada Smith
              </div>
              <div className="text-neutral-800 text-base leading-5 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin pulvinar a sit{" "}
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/083b40140470c1700a75afc412425e8262670b696f60aea263de690145e852f1?apiKey=9e16588387084fb2a9a51a1b99489136&"
                className="aspect-[6.92] object-contain object-center w-[173px] items-center overflow-hidden max-w-full mt-7"
              />
            </div>
            <div className="shadow-sm bg-white flex w-full flex-col items-stretch mt-5 pl-9 pr-16 pt-11 pb-5 max-md:px-5">
              <div className="text-black text-2xl font-medium leading-9">
                Related post
              </div>
              <div className="flex items-stretch justify-between gap-3.5 mt-11 max-md:mt-10">
                <div className="flex basis-[0%] flex-col items-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&"
                    className="aspect-[0.93] object-contain object-center w-[83px] shadow-sm overflow-hidden"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&"
                    className="aspect-[0.93] object-contain object-center w-[83px] shadow-sm overflow-hidden mt-8"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/162be867793f4880649a43990085cd3a7579b8fcaa6273dd22f42c52acafe2f4?apiKey=9e16588387084fb2a9a51a1b99489136&"
                    className="aspect-[0.93] object-contain object-center w-[83px] shadow-sm overflow-hidden mt-8"
                  />
                </div>
                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                  <div className="text-black text-base font-medium leading-6">
                    Thoughtful man using laptop pondering
                  </div>
                  <div className="flex justify-between gap-2 mt-4 pr-20 items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0dd2fc64c155e12482eb7cd121feec82e5c671f8eed5d61895d85fbb38da91c?apiKey=9e16588387084fb2a9a51a1b99489136&"
                      className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-600 text-sm font-medium self-stretch grow whitespace-nowrap">
                      31 May 2022
                    </div>
                  </div>
                  <div className="text-black text-base font-medium leading-6 mt-11 max-md:mt-10">
                    Thoughtful man using laptop pondering
                  </div>
                  <div className="flex justify-between gap-2 mt-4 pr-20 items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0dd2fc64c155e12482eb7cd121feec82e5c671f8eed5d61895d85fbb38da91c?apiKey=9e16588387084fb2a9a51a1b99489136&"
                      className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-600 text-sm font-medium self-stretch grow whitespace-nowrap">
                      31 May 2022
                    </div>
                  </div>
                  <div className="text-black text-base font-medium leading-6 mt-11 max-md:mt-10">
                    Thoughtful man using laptop pondering
                  </div>
                  <div className="flex justify-between gap-2 mt-4 pr-20 items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0dd2fc64c155e12482eb7cd121feec82e5c671f8eed5d61895d85fbb38da91c?apiKey=9e16588387084fb2a9a51a1b99489136&"
                      className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-600 text-sm font-medium self-stretch grow whitespace-nowrap">
                      31 May 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-sm bg-white flex w-full flex-col items-stretch mt-5 pl-7 pr-9 py-10 max-md:px-5">
              <div className="text-black text-2xl font-medium whitespace-nowrap">
                Categories
              </div>
              <div className="bg-zinc-300 flex shrink-0 h-px flex-col mt-6" />
              <div className="flex items-stretch justify-between gap-5 mt-16 pr-3 max-md:mt-10">
                <div className="flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap">
                    Guide
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-8">
                    Inspiration
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-6">
                    Latest News
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-7">
                    Revenue
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-7">
                    Start Up
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-7">
                    Technology
                  </div>
                </div>
                <div className="flex basis-[0%] flex-col items-stretch self-start max-md:hidden">
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap">
                    (6)
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-7">
                    (4)
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-6">
                    (7)
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-6">
                    (3)
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-6">
                    (3)
                  </div>
                  <div className="text-neutral-800 text-base font-medium whitespace-nowrap mt-7">
                    (3)
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-sm bg-white flex w-full flex-col items-stretch mt-5 pl-7 pr-9 pt-11 pb-6 max-md:px-5">
              <div className="text-black text-2xl font-medium whitespace-nowrap">
                Popular Tags
              </div>
              <div className="bg-zinc-300 flex shrink-0 h-px flex-col mt-6" />
              <div className="items-stretch flex gap-1 mt-6 pr-12 max-md:pr-5">
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] aspect-[1.8717948717948718] px-2.5 py-2.5 border-[0.5px] border-solid">
                  Agency
                </div>
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] grow pl-3 pr-2 py-2.5 border-[0.5px] border-solid">
                  Creative
                </div>
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] aspect-[1.2564102564102564] px-2 py-2.5 border-[0.5px] border-solid">
                  Data
                </div>
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] aspect-[1.4615384615384615] px-3.5 py-2.5 border-[0.5px] border-solid">
                  Idea
                </div>
              </div>
              <div className="items-stretch flex gap-1 pr-8 max-md:justify-center max-md:pr-5">
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] grow pl-3 pr-1.5 py-2.5 border-[0.5px] border-solid">
                  Technology
                </div>
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] grow pl-2.5 pr-1 py-2.5 border-[0.5px] border-solid">
                  Development
                </div>
                <div className="text-neutral-800 text-sm whitespace-nowrap justify-center items-stretch border-[color:var(--gray-gray-6,#BFBFBF)] grow px-2.5 py-2.5 border-[0.5px] border-solid">
                  Generic
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );  
};
export default BlobContent;