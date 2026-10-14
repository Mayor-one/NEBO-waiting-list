import Image from "next/image";
import NeboLogo from "../images/neboLogo.png";
import MobileApp from "../images/mobileApp.png";




export default function Home() {
  return (
    <div>


    <div className="flex items-center justify-between px-18 py-2 mt-5">
            <div>
        <Image
            src={NeboLogo}
            alt="Nebo logo"
            width={178}
            height={60}
            priority
            className="h-auto w-[7.5rem] md:w-[10rem]"
          />
      </div>

      <div className="flex gap-16">
        <a href="">Features</a>
        <a href="">How it Works</a>
        <a href="">Pricing</a>
      </div>

      <a href="/input" className="bg-[#FE0194] py-3 px-10 rounded-2xl text-white">Join Waitlist</a>
      
   
    </div>


      <div className="flex flex-col gap-5 mt-10">
        <div className="flex justify-center mx-auto">
        <button className="text-[14px] rounded-3xl py-3 px-10 border-2 border-[#00000040]">Join the Waitlist</button>
      </div>

      <div className="flex justify-center mx-auto">
        <h1 className="text-[48px] w-[495px] font-bold text-center">Manage and Live Better in <span className="text-[#FE0194]">Your Estate</span></h1>
      </div>

      <div className="flex justify-center mx-auto">
        <p className="w-[415px] text-center">Nebo brings your estate, community and everyday services together in one simple experience.</p>
      </div>

      <section className="flex justify-center mx-auto">
        <input type="text" placeholder="Enter your email" className="py-4 px-10 border-2 rounded-l-4xl" />

        <button
        className="py-4 px-5 text-white bg-black border-2 border-black rounded-r-full">Join Waitlist
        </button>
      </section>
      </div>

      <div className="mt-5">
         <Image
            src={MobileApp}
            alt="Nebo logo"
            priority
            className="h-auto w-full md:w-full"
          />
      </div>

      
    </div>
  );
}
