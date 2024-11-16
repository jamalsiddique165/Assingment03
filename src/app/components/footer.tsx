 import Image from "next/image"
 import logo from "@/app/assited/Logo.png"
 { /* Section Footer */}
  const Footer =() =>{
    return(
        <div className=" w-[1920px] h-[461px] bg-[#043873] py-[140px] px-[220px] flex flex-col">
            <div className=" w-[1480px] h-[289px] text-[#FFFFFF] mt-5">
                <div className="w-[1480] h-[169px] flex justify-between ">
                <div className="w-[295px] h-[169px]">
                <div className="w-[191px] h-[34px] pb-[45px]">
                <Image src={logo} alt="Logo" />
                </div>
                <div className="w-[240px] h-[120px] font-bold text-[28px] leading-[33.89px]">
                <p className="w-[240px] h-[120px] font-normal text-[18px] leading-[30px] tracking-[0.025em]  ">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </div>

                </div>
                               
                <div className="w-[295px] h-[127px] items-center justify-between ">
                    <div className="w-[68px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[0.025em] pb-[35px]">
                    <p >Product</p>
                    </div>
                   <div className=" w-[70px] h-5 font-normal text-[16px] leading-5 tracking-[0.025em] text-[#FFE492] pb-[35px] ">
                    <p>Overview</p>
                    </div>
                    <div className=" w-[50px] h-5 font-normal text-[16px] leading-5 tracking-[0.025em] pb-[35px] ">
                    <p >Pricing</p>
                    </div>
                    <div className="w-[177px] h-5 font-normal text-[16px] leading-5 tracking-[0.025em]  ">
                    <p >Customer stories</p>
                    </div>
                    </div>
                   
                    <div className="w-[295px] h-[130px]">
                        <div className="w-[91px] h-[22px] pb-[35px]">
                       <p className="font-bold text-[18px] leading-[21.78px] tracking-[0.02em]">Resources</p>
                       </div>
                       <div className="w-[33px] h-5 pb-[35px]">
                       <p className="font-normal text-[18px] leading-5 tracking-[0.025em]">Blog</p>
                       </div>
                       <div className="w-[128px] h-5 pb-[35px]">
                       <p className="font-normal text-[16px] leading-5 tracking-[0.025em]">Guides & tutorials</p>
                       </div>
                       <div className="w-[130px] h-5">
                       <p className="font-normal text-[16px] leading-5 tracking-[0.025em]">Help center</p>
                       </div>
                       </div>

                       <div className="w-[295px] h-[130px] ">
                        <div className="w-[83px] h-[22px] pb-[35px]">
                        <p className="font-bold text-[18px] leading-[21.78px] tracking-[0.02em] ">Company</p>
                        </div>
                        <div className="w-[66px] h-5 pb-[35px]">
                        <p className="font-normal text-[18px] leading-5 tracking-[0.025em]">About us</p>
                        </div>
                        <div className="w-[62px] h-5 pb-[35px]">
                        <p className="font-normal text-[18px] leading-5 tracking-[0.025em]">Careers </p>
                        </div>
                        <div className="w-[99px] h-5">
                        <p className="font-normal text-[18px] leading-5 tracking-[0.025em]">Media kit</p>
                        </div>
                     </div>
                    

                </div>
                <div className="w-[1480px] h-[1px] bg-[#2E4E73] mt-10"></div>
               
                <div className="w-[1480px] h-5 justify-between place-items-center mt-12">
                    <div className="w-[169px] h-5 items-">
                       <button className="font-normal text-[16px] leading-5 tracking-tight  ">©2021 Whitepace LLC.</button>
                       </div>
                </div>      
                       
                   </div>
            </div>
    )
}
export default Footer