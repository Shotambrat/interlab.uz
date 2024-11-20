// ListItem.js
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';


export default function ListItem({
  index,
  title,
  description,
  slug,
  icon,
  color,
  secondaryColor,
  locale
}) {

  
  return (
    <a
    href={`check-up/${slug}`}
      style={{ backgroundColor: color }}
      className={`relative rounded-3xl p-8 text-black overflow-hidden flex items-center slg:min-h-[320px] ${index === 0 ? "col-span-1 slg:col-span-7" : index === 1 ? "col-span-1 slg:col-span-5" : index === 2 ? "col-span-1 slg:col-span-5" : index === 3 ? "col-span-1 slg:col-span-7" : "col-span-1 slg:col-span-4"}`}
    >
      <div className="flex flex-col justify-between gap-1 h-full max-w-[60%]">
        <div>
          <h2 className="text-2xl uppercase font-bold">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <div
          
          className={`inline-block whitespace-nowrap self-start mt-4 px-12 py-3 bg-white font-semibold rounded-full`}
        >
          Перейти →
        </div>
      </div>

      <div
        style={{
          position: "absolute",
         
          bottom: "-1rem",
        }}
        className="flex-shrink-0 max-w-[220px] h-[210px] right-[-10px]"
      >
        <Image
          src={urlFor(icon).url()}
          alt={title}
          width={300}
          height={210}
          quality={100}
          className='w-full h-full object-cover'
        />
      </div>
    </a>
  );
}
