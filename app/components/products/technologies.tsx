import { Technology } from "~/interfaces/ProductsPage"
export const Technologies =({title,pairs}:{title:string, pairs:Technology[]})=>{
    return (
        <>
        <div className="bg-white py-5">
        <h1 className="text-PurpBlue flex items-center justify-center text-4xl lg:text-5xl font-montserrat p-6">
          {title}
        </h1>
        <div className="w-full flex justify-around flex-wrap text-black p-10 border-t-2">
          {pairs.map((pair,index) => (
            <div key={index} className="flex flex-col items-center m-4">
              <img src={pair?.pic.data.attributes.url} alt={pair.text} className="w-16 h-16"  />
              <figcaption className="text-black mt-2">{pair.text}</figcaption>
            </div>
          ))}
        </div>
      </div>
        </>
    )
}