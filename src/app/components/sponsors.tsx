  import Image from "next/image"
  
 
  import logobar from "@/app/assited/logobar.png"
  {/* Section Six */}
  const Sponsors =() =>{
    return(
        <div className=" w-[1920px] h-[538px] py-[140px] px-[220px]  bg-white text-[#212529] justify-between items-center flex flex-col ">

          <div className="w-[1482px] h-[87px] mt-10  ">          
            <h1 className=" items-center font-bold text-[72px] leading-[87.14px] tracking-[0.025em] mb-10 justify-between text-center ">Our sponsors</h1>
            </div>

        <div className="w-[1482px] h-[]71px] mt-5">
       <p className="justify-between ">
        <Image src={logobar} alt="logo" />
       </p>
       </div>
           
             </div>
    )
}
export default Sponsors