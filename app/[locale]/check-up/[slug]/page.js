import React from "react";
import { client } from "@/sanity/lib/client";
import Banner from "../../_components/checkup/Banner";
import WhyWe from "../../_components/ckdl/WhyWe";
import Instuction from "../../_components/Instuction";
import Application from "../../_components/Application";
import Steps from '../../_components/checkup/steps'
import PriceCheckup from '../../_components/checkup/price'
import CheckupOverview from '../../_components/checkup/CheckupOverview'
import Similar from '../../_components/checkup/Similar'

export default async function CheckupPage({ params }) {
  const { slug } = params;

  // Fetch данных из Sanity
  const checkup = await client.fetch(
    `*[_type == "checkup" && slug.current == $slug][0]{
        _id,
        title,
        description,
        slug,
        icon{
          asset->{
            _id,
            url
          }
        },
        color,
        secondaryColor,
        price,
        hasDiscount,
        discountPercentage,
        checkupComposition,
        stages
      }`,
    { slug },
    { cache: 'no-store' } // Disable caching
  );
  
  

  // Проверка, если данные отсутствуют
  if (!checkup) {
    return <div>Чекап не найден</div>;
  }

  const { title, description, icon, color , checkupComposition , price , discountPercentage , stages } = checkup;


  return (
    <div className="w-full flex flex-col gap-24 pb-24">
      <Banner
        title={title}
        description={description}
        icon={icon}
        color={color}
      />
       {checkupComposition && checkupComposition.length > 0 && (
        <Steps checkupComposition={checkupComposition} />
      )}
      <PriceCheckup price={price} discountPercentage={discountPercentage} />
      {stages && stages.length > 0 && <CheckupOverview stages={stages} />}
      <WhyWe />
      <div className="w-full max-w-[1440px] px-2 mx-auto">
      <Instuction />

      </div>
      <div className="w-full max-w-[1440px] px-2 mx-auto">
        <Application />
      </div>

      <Similar />
    </div>
  );
}
