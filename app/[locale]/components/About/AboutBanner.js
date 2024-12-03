import aboutBanner from "@/public/images/image_2024-11-01_18-46-51.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function AboutBanner() {
  const t = useTranslations();
  const locale = useLocale()

  return (
    <>
      <div className="w-full h-screen-70 lg:h-screen-90 relative max-slg:gap-5 flex flex-col pt-10">
        <div className="relative w-full lg:absolute lg:top-1/4 lg:left-[7%] flex flex-col px-4 2xl:left-[5%]">
          <h1 className="text-5xl  max-mdx:text-3xl text-rose-400 font-bold w-full lg:max-w-[560px]">
            {t("About.title")}{" "}
            <span className="text-black">{t("About.subtitle")}</span>
          </h1>
          <p className="w-full text-sm lg:max-w-[400px] leading-5 lg:text-[18px]">
            {t("About.description")}
          </p>
          <a
            href="tel:+998971504747"
            className="text-white bg-[#FB6A68] font-semibold self-start rounded-full px-8 py-3"
          >
            
            {locale === 'ru' ? 'Связаться с нами' : "Biz bilan bog'lanish"}
          </a>
        </div>
        <div className="relative slg:mt-[30px] slg:px-[16px]  overflow-hidden w-full lg:absolute h-[500px] max-slg:px-4 lg:w-1/2 top-0 right-0 slg:h-[577px]">
          <Image
            src={aboutBanner}
            width={1500}
            height={1500}
            alt="About Banner"
            className="h-full w-full rounded-[24px]  slg:rounded-[30px]   object-cover"
          />
        </div>
      </div>
    </>
  );
}
