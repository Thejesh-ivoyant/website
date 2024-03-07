import SummaryCard from '../Homepage/summary-card';
import { useLoaderData } from '@remix-run/react';
import { loader } from '~/routes/about-us';
const AboutCard = () => {
  const loaderData = useLoaderData<typeof loader>()
  const data =  loaderData?.aboutUsData.data?.aboutus.data.attributes
  return (
    <div className = "flex flex-col w-full max-h-fit lg:flex-row CardDark">
      <div className='flex lg:w-1/2  bg-white'>
        <p className='text-black lg:text-xl text-base md:text-lg font-normal md:leading-7 lg:leading-9 lg:tracking-wider md:tracking-wide font-poppins my-auto py-6 px-4 lg:w-[30rem] xl:w-[33rem] mx-auto'>
          {data.aboutus}
        </p>
      </div>
        <SummaryCard attributes={data} />
    </div>
  );
};
export default AboutCard;