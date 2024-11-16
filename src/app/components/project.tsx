import Image from "next/image"
import logo2 from "@/app/assited/logo2.png"
  {/* Section Two */}
  const Project =() =>{
    return(
        <div className=" w-[1920px] h-[1588x] py-[140px] px-[220px] pt-[200px] bg-white flex flex-col">
            <div className="w-[1480px] h-[547px] flex">
                <div className="w-[672px] h-[411px]">
                    <div className="w-[672px] h-[288px] text-[#212529] ">
                        <h1 className=" w-[672px] h-[174px] font-bold text-[72px] leading-[87.14px] traking-[0.02em]">Project Management</h1>
                        <p className="w=[672px] h-[90px] font-normal text-18px leading-[30px] tradking-[0.02em] mt-5 ">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                     </div>
                    <button className="w-[201px] h-[83px bg-[#4F9CF9] text-[#FFFFFF] py-5 px-10 rounded-lg">Get Started</button>

                   </div>
                          <div className="w-[748px] h-[547px] bg-[#C4DEFD]  gap-5"></div>
                    </div>

            <div className="w-[1480px] h-[661px] flex justify-between items-center  ">
                <div className="w-[710px] h-[661px]">
                 <Image src={logo2 } alt="logo2" />  
                </div>
                <div className="w-[670px] h-[294px] ">
                    <div className="w-[670px] h-[171px]">
                        <h1 className=" w-[670px] h-[87px] font-bold text-[72px] leading-[87.14px] traking-[0.02em]">Work together</h1>
                        <p className=" w-[670px] h-[60px] font-normal text-18px leading-[30px] tradking-[0.02em] text-[#212529]">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                         </p>
                    </div>
                    <button className="w-[186px] h-[63px] font-medium rounded-md  bg-[#4F9CF9] text-[#FFFFFF] py-5 px-10 mt-14">Try it now </button>
                  </div>
                </div>
            </div>
    )
}
export default Project
