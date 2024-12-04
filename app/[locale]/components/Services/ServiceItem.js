// import Image from 'next/image';
// import rightIcon from '@/public/svg/right-contact-red.svg';
"use client"
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import ContactWithUs from '../Modals/OnlineReq';

export default function ServiceItems({ title, application }) {
  const [open, setOpen] = useState(false)

  const t = useTranslations();
  const locale = useLocale()

  const handleOpen = () => setOpen(!open)


  return (
    <div className="w-full h-[200px] cursor-pointer slg:h-[200px] rounded-3xl pl-6 py-6 bg-slate-100">
      <div className="flex flex-col h-full justify-between items-start">
        <div className="flex flex-col">
          <h2 className="font-bold text-xl slg:text-2xl break-words">{title}</h2>
          {/* Display the category name */}
          {/* <p className="text-neutral-400">{category}</p> */}
        </div>

        {/* PEREYTI */}
        {application && (
          <div className='w-[93%] flex flex-col  mdl:flex-row gap-[10px]'>
            <Link href={`tel:+998977578822`} className='bg-[#FB6A68] text-center py-[12px] px-[16px] text-white rounded-full mdl:py-[13px] mdl:px-[20px] font-bold'>
              {locale === 'ru' ? 'Позвонить' : 'Telefon qilish'}
            </Link>
            <button onClick={handleOpen} className=' text-[#FB6A68] rounded-full py-[12px] px-[16px] border border-[#FB6A68] mdl:py-[13px] mdl:px-[20px] font-bold'>
              {locale === 'ru' ? 'Оставить заявку' : 'Ariza yuborish'}
            </button>
          </div>
        )}
        {open ? <ContactWithUs setState={setOpen} /> : null}

      </div>
    </div>
  );
}
