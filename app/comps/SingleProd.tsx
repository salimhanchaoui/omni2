import Addtochart from "../comps/Addtochart"
import ProdImage from "../comps/ProdImage"
export default function Single({data}) {
  console.log(data);
  
    return (
      <div className="flex flex-col gap-2">
      <div className="relative">
          <ProdImage img={data.imageUrl} sales={data.sales}/>
          <Addtochart />
      </div>
      <div className="flex flex-col gap-2">
          <h2>{data.productName}</h2>
         <div className=" flex flex-row gap-5">
            <span className="text-red">{Math.floor(data.price-(data.price*data.sales)/100)}Dt</span>
            <span className="line-through">{data.price}Dt</span>
         </div> 
      </div>
  </div>
    )
  }