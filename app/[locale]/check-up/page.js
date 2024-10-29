import React from "react";
import List from "../_components/checkup/List";
import Info from "../_components/checkup/Info";
import About from "../_components/About";
import Application from "../_components/Application";

export default function page({ params }) {
  return (
    <div className="flex flex-col gap-24 w-full pb-24">
      <List locale={params.locale} />
      <div className="w-full max-w-[1440px] px-2 mx-auto">
        <Info />
      </div>
      <About />
      <div className="w-full max-w-[1440px] mx-auto px-2">
        <Application />
      </div>
    </div>
  );
}
