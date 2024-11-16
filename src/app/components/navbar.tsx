import Image from "next/image"
import logo from "@/app/assited/Logo.png"

const Navbar = () => {
    return(
        <>
        <div className="w-[1920px]  h-[92px] py-4 px-[220px] bg-[#043873] flex flex-row justify-between items-center">
            <div className="w-[191px] h-[34px]">
                  <Image src={logo} alt="Logo"width={191} height={34} />
            </div>
              <div className="w-[737.5px] h-[60px] flex justify-between items-center">
                <div className="w-[549px] h-[23px]">
                    <ul className="flex flex-row justify-between text-[#FFFFFF]">
                        <li>Product</li>
                        <li>Sulution</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
            </div>

                <div className="w-[126px] h-[60px]">
                    <button className="py-4 px-10 bg-[#FFE492] rounded-lg">Login</button>
                </div>
            </div>

         </div>
        
        </>
    )
}
export default Navbar