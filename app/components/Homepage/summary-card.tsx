import { Attributes } from "~/interfaces/Homepage";

const SummaryCard = ({attributes}:{attributes:Attributes}) => {
  return (
    <>
    <div className="relative screen-height flex items-center  justify-center font-montserrat p-2 overflow-hidden opacity-95">
      <div className="moving-bg"></div>
        <div className="grid grid-cols-2 aspect-square w-fit m-4">
          <div className="aspect-square inline-flex justify-center items-center col-span-1 grape-shadow">
            <div className="flex w-fit gap-6 p-10">
              <div className="text-7xl font-extrabold ">{attributes.ClientCount}</div>
              <div className="text-xl h-12 aspect-[19/8] my-auto leading-none">Delighted Clients</div>
            </div>
          </div>
          <div className="aspect-square inline-flex justify-center border-container-top items-center col-span-1 grape-shadow">
            <div className="flex w-fit gap-6 p-10">
              <div className="text-7xl font-extrabold ">{attributes.ExperienceCount}</div>
              <div className="text-xl h-12 aspect-[19/8] my-auto leading-none">Years of Experience</div>
            </div>
          </div>
          <div className="aspect-square inline-flex justify-center border-container-left  items-center col-span-1 grape-shadow">
            <div className="flex w-fit gap-6 p-10">
              <div className="text-7xl font-extrabold ">{attributes.ProjectsCount}</div>
              <div className="text-xl h-12 aspect-[19/8] my-auto leading-none">Successful Projects</div>
            </div>
          </div>
          <div className="aspect-square inline-flex justify-center border-container-bottom items-center col-span-1 grape-shadow">
            <div className="flex w-fit gap-6 p-10">
              <div className="text-7xl font-extrabold ">{attributes.InHouseExpertsCount}</div>
              <div className="text-xl h-12 aspect-[19/8] my-auto leading-none">In-House Experts Count</div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};
const Square = ({ num }: { num: string }) => {
  const hasPlus = num.includes('+');

  return (
    <>
      <div className="flex w-fit gap-6 p-4">
        {hasPlus ? (
          <>
            <div className="text-7xl font-extrabold">{num.split('+')[0]}</div>
            <div className="text-xl h-12 aspect-[19/8]">
              <span className="text-7xl font-extrabold">+</span>
              {num.split('+')[1]}
            </div>
          </>
        ) : (
          <div className="text-7xl font-extrabold">{num}</div>
        )}
        <div className="text-xl h-12 aspect-[19/8]">Delighted Clients</div>
      </div>
    </>
  );
};
export default SummaryCard;
{/* <div className="lg:w-1/2 relative w-full aspect-square CardDark opacity-95 flex flex-col screen-height justify-center  items-center">
      <div className='flex flex-1 w-full justify-center'>
          <div className='aspect-square w-fit h-[300px] flex items-center px-12 grape-shadow'>
            <div className='ml-auto flex gap-4 items-center '>
              <span className='lg:text-6xl text-4xl font-bold'>{clientCount}</span>
              <span className=' font-thin h-12 aspect-[19/8]'>Delighted Clients</span>
            </div>
          </div>
          <div className=' aspect-square  w-fit h-[300px] flex  gap-6 items-center border-container-top px-12 grape-shadow'>
            <div className='mr-auto flex gap-4 items-center'>
              <span className='lg:text-6xl font-bold text-4xl'>  {experienceCount} </span>
              <span className=' font-thin h-12 aspect-[19/8]'>Years of Experience</span>
            </div>
          </div>
      </div>
      <div className='flex flex-1 w-full justify-center'>
          <div className='aspect-square  w-fit h-[300px] flex  gap-6 items-center border-container-left px-12 grape-shadow'>
            <div className='ml-auto flex gap-4  items-center'>
              <span className='lg:text-6xl text-4xl font-bold'> {projectsCount} </span>
              <span className=' font-thin h-12 aspect-[19/8]'>Successful Projects</span>
            </div>
          </div>
          <div className='w-fit aspect-square  h-[300px] flex  gap-6 items-center border-container-bottom px-12 grape-shadow'>
            <div className='mr-auto flex gap-4  items-center'>
              <span className='lg:text-6xl text-3xl font-bold'>{inHouseExpertsCount} </span>
              <span className='font-thin h-12 aspect-[19/8]'>Delighted Clients</span>
            </div>
          </div>
      </div>
      
    </div> */}