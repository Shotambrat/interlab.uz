import React from "react";
import Banner from "../_components/Partners/Banner";
import Profits from "../_components/Partners/Profits";
import PriceCut from "../_components/Partners/PriceCut";
import Calculator from "../_components/Partners/Calculator";
import Application from "../_components/Application";
import { useTranslations } from "next-intl";
import Image from "next/image";
import About from "../_components/About";

export default function Page({ params }) {
  const t = useTranslations("");
  return (
    <div className="w-full flex flex-col gap-48 bg-white pb-48">
      <Banner />
      <About />

      <Profits />
      <PriceCut />
      {/* <Calculator /> */}
      <div className="w-full max-w-[1440px] mx-auto">
        <Application />
      </div>
    </div>
  );
}
