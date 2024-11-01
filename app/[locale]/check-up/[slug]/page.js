// app/[locale]/check-up/[slug]/page.js
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Banner from "../../_components/checkup/Banner";
import WhyWe from "../../_components/ckdl/WhyWe";
import Instuction from "../../_components/Instuction";
import Application from "../../_components/Application";

export default async function CheckupPage({ params }) {
  const { slug } = params;

  // Fetch данных из Sanity
  const checkup = await client.fetch(
    `*[_type == "checkup" && slug.current == $slug][0]`,
    { slug }
  );

  // Проверка, если данные отсутствуют
  if (!checkup) {
    return <div>Чекап не найден</div>;
  }

  const { title, description, icon, color } = checkup;

  return (
    <div className="w-full flex flex-col gap-24 pb-24">
      <Banner
        title={title}
        description={description}
        icon={icon}
        color={color}
      />
      <WhyWe />
      <div className="w-full max-w-[1440px] px-2 mx-auto">
      <Instuction />

      </div>
      <div className="w-full max-w-[1440px] px-2 mx-auto">
        <Application />
      </div>
    </div>
  );
}
