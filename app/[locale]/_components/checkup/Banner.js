"use client"
import React, { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import OnlineReq from "@/app/[locale]/_components/Modals/OnlineReq";

export default function Banner({ title, icon, description, color }) {
  const [onlineReq, setOnlineReq] = useState(false);


  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full overflow-hidden"
    >
      {onlineReq && <OnlineReq setState={setOnlineReq} />}
      <div className="w-full px-2 flex justify-between items-center max-w-[1440px] mx-auto">
        <div className="text-left py-16 max-w-md">
          <h1 className="text-5xl font-bold">{title?.ru || title?.uz}</h1>
          <p className="mt-4 text-lg">{description?.ru || description?.uz}</p>
          <button onClick={() => setOnlineReq(true)} className="mt-6 px-16 py-3 bg-white text-xl  text-black rounded-full">
            Записаться
          </button>
        </div>
        <div className="relative -bottom-8 lg:h-[376px]">
          <img
            src={urlFor(icon).url()}
            alt={title?.ru || title?.uz}
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}
