// ListItem.js
import React from "react";
import { urlFor } from "@/sanity/lib/image";

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
          right: "1rem",
          bottom: "-1rem",
          shapeOutside: "inset(0)",
          clipPath: "inset(0)",
        }}
        className="flex-shrink-0 max-w-[120px]"
      >
        <img
          src={urlFor(icon).url()}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </a>
  );
}
