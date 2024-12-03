import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { Link } from "@/i18n/routing";
import { useLocale } from 'next-intl'

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function About() {
  const locale = useLocale()

  return (
    <div className={`w-full px-2 py-12 bg-[#F8F9FB] ${inter.className}`}>
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8">
        <div className="flex gap-4 justify-between max-mdx:flex-col w-full">
          <div className="flex-1 flex items-center">
            <h3 className="text-5xl max-mdx:text-3xl font-semibold">
              <span className="text-[#FB6A68]">INTERMED — </span>
              {locale === 'ru' ? 'современный медицинский комплекс в Ташкенте' : 'Toshkentdagi zamonaviy tibbiyot kompleksi'}
            </h3>
          </div>
          <div className="flex-1">
            <p className="w-full max-w-[550px] text-lg text-[#5B5B5B]">
              {locale === 'ru' 
                ? 'Наша клиника предлагает широкий спектр услуг для диагностики, лечения и профилактики заболеваний. Мы гарантируем высокое качество обслуживания, внимательность и заботу о наших пациентах.'
                : 'Klinikamiz kasalliklarni diagnostika qilish, davolash va profilaktika qilish bo‘yicha keng xizmatlar spektrini taklif etadi. Biz yuqori sifatli xizmatni, e’tibor va bemorlarimizga g‘amxo‘rlikni kafolatlaymiz.'}
            </p>
          </div>
        </div>
        <div className="w-full flex mdx:hidden justify-between">
            <Link href={'/about'} className='w-[48%] '>
              <button className="px-[24px] py-3 text-[14px] h-[43px] w-full max-mdx:text-base max-mdx:px-6 max-mdx:py-2 font-semibold text-white bg-[#FB6A68] rounded-full ">
                {locale === 'ru' ? 'Подробнее о нас' : 'Biz haqimizda batafsil'}
              </button>
            </Link>
            <Link href={'/about/licences'} className='w-[48%]'>
              <button className="px-[24px] py-3 w-full  border-2 font-semibold border-[#FB6A68] text-[#FB6A68] rounded-full text-[14px]">
                {locale === 'ru' ? 'Лицензии' : 'Litsenziyalar'}
              </button>
            </Link>
          </div>
        <div className="flex flex-col w-full gap-8">
          <div className="flex flex-col w-full gap-8">
            <Image
              src={"/images/main-about.png"}
              width={2000}
              height={1000}
              quality={100}
              alt="Intermed Banner"
              className="w-full rounded-3xl"
            />
            <div className="grid grid-cols-2 lg:grid-rows-1 grid-rows-2 lg:grid-cols-4 gap-0">
              <div className="max-lg:border-b border-r lg:border-r-2 border-gray-300 flex flex-col lg:items-center items-center justify-center">
                <p className="text-6xl max-mdx:text-5xl max-mdx:leading-5 font-bold leading-6  my-auto">
                  800+ <br />
                  <span className="text-gray-500 text-lg max-mdx:text-sm font-medium">
                    {locale === 'ru' ? 'видов анализов' : 'tahlillar turi'}
                  </span>
                </p>
              </div>
              <div className="max-lg:border-b lg:border-r-2 border-gray-300 flex flex-col items-center justify-center">
                <p className="text-6xl lg:text-center  font-bold max-mdx:text-5xl max-mdx:leading-5 leading-6 my-auto">
                6  {locale === 'ru' ? 'лет' : 'yil'} <br />
                  <span className="text-gray-500 text-lg font-medium max-mdx:text-sm">
                    {locale === 'ru' ? 'бесценного опыта' : 'bebaho tajriba'}
                  </span>
                </p>
              </div>
              <div className="lg:border-r-2 border-r border-gray-300 flex flex-col items-center justify-center">
                <p className="text-6xl lg:text-center font-bold max-mdx:text-5xl max-mdx:leading-5 leading-6 my-auto">
                  20+ <br />
                  <span className="text-gray-500 text-lg font-medium max-mdx:text-sm">
                    {locale === 'ru' ? 'врачей в клинике' : 'klinika shifokorlari'}
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-center justify-center py-6">
                <p className="text-6xl font-bold max-mdx:text-5xl max-mdx:leading-5 leading-6 my-auto">
                  95+ <br />
                  <span className="text-gray-500 text-lg   font-medium max-mdx:text-sm">
                    {locale === 'ru' ? 'пунктов' : 'punktlar'}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full hidden mdx:flex gap-4">
            <Link href={'/about'}>
              <button className="px-8 py-3 text-xl max-mdx:text-base max-mdx:px-6 max-mdx:py-2 font-semibold text-white bg-[#FB6A68] rounded-full">
                {locale === 'ru' ? 'Подробнее о нас' : 'Biz haqimizda batafsil'}
              </button>
            </Link>
            <Link href={'/about/licences'}>
              <button className="px-16 py-3 text-xl max-mdx:text-base max-mdx:px-6 max-mdx:py-2 border-2 font-semibold border-[#FB6A68] text-[#FB6A68] rounded-full">
                {locale === 'ru' ? 'Лицензии' : 'Litsenziyalar'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}