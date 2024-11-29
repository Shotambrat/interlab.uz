import { useTranslations } from "next-intl";
import Image from "next/image";
import aboutBanner from "@/public/images/about-banner.png";
import forPartnersBanner from '@/public/images/forPartnerBanner.jpg'
export default function Banner() {
  const t = useTranslations("Partners.banner");

  return (
    <div className="w-full h-screen relative max-slg:gap-5 flex flex-col lg:flex-row pt-10 lg:pt-0">
      <div className=" flex flex-col relative z-[999] bg-white items-start gap-4 lg:w-[50%] lg:flex-col lg:items-center lg:justify-center">
        <div className='px-[16px] lg:w-[80%]'>
        <h1 className=" text-[35px] lg:text-5xl font-bold w-full ">
        <br className='block mdx:hidden'/>

          {t("title")}
          <span className="text-rose-400">INTERMED INNOVATION</span>
        </h1>
        <p className="w-full max-w-[400px] leading-5">
          {t("subtitle")}
        </p>
        <button className="mt-4 py-3 px-4 rounded-full text-white bg-red-400 font-semibold">
          {t("button")}
        </button>
          </div>
       
      </div>
      <div className="h-[477px] mdx:h-[577px] lg:w-[50%] lg:h-[750px] ">
        <Image
          src={forPartnersBanner}
          width={1500}
          height={1500}
          alt="About Banner"
          className="h-full w-full  object-cover"
        />
      </div>
    </div>
  );
}
