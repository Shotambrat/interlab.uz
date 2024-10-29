"use client"

import UpRedIcon from "@/public/svg/arrow-right-up.svg";
import DownBlckIcon from "@/public/svg/arrow-right-down-blck.svg";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-t border-b border-solid border-neutral-200">
      <summary
        onClick={onClick}
        className={`flex gap-5 justify-center items-center py-7 ${isOpen ? "text-red-400" : "text-black"} text-xl max-md:flex-wrap max-md:max-w-full cursor-pointer`}
      >
        <span className="flex-auto">{title}</span>
        {isOpen ? (
          <Image
            src={'/svg/arrow-up-red.svg'}
            alt={`Up icon red`}
            priority
            width={30}
            height={30}
            quality={100}
            className="h-4 w-4"
          />
        ) : (
          <Image
            src={'/svg/arrow-down-blck.svg'}
            alt={`Down icon black`}
            priority
            width={30}
            height={30}
            quality={100}
            className="h-4 w-4"
          />
        )}
      </summary>
      <Transition
        show={isOpen}
        enter="transition-all duration-500 ease-in-out"
        enterFrom="max-h-0 opacity-0"
        enterTo="max-h-screen opacity-100"
        leave="transition-all duration-500 ease-in-out"
        leaveFrom="max-h-screen opacity-100"
        leaveTo="max-h-0 opacity-0"
      >
        <div className="overflow-hidden">{children}</div>
      </Transition>
    </div>
  );
};

const AccordionContent = ({ children }) => {
  return <div className="py-5 px-4">{children}</div>;
};

export default function Info({locale}) {
  const [houseCall, setHouseCall] = useState(false);
  const [openSection, setOpenSection] = useState("general");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <section className="flex gap-14 justify-between slg:flex-nowrap max-slg:flex-col flex-wrap max-md:max-w-full">
      <div className="flex flex-1 flex-col w-full">
        <div className="pb-8 flex flex-col gap-4">
            <h2 className="text-4xl font-semibold w-full max-w-[400px]">
                Комплексная забота о вашем здоровье
            </h2>
            <p className="text-lg w-full max-w-[500px]">
                Чек-апы - это комплексные программы обследований, которые помогают оценить состояние здоровья
            </p>
        </div>
        <AccordionItem
          title="Раннее выявление проблем"
          isOpen={openSection === "blood"}
          onClick={() => toggleSection("blood")}
        >
          <AccordionContent>
            {/* Add your content for blood analysis here */}
            <div className="flex flex-col text-base  text-[#5B5B5B] max-md:max-w-full">
              <div className="flex gap-3 max-md:flex-wrap">
                Чек-апы помогают обнаружить скрытые болезни на ранней стадии, когда лечение наиболее эфективно
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          title="Индивидуальный подход к здоровью"
          isOpen={openSection === "urine"}
          onClick={() => toggleSection("urine")}
        >
          <AccordionContent>
            {/* Add your content for urine analysis here */}
            <div className="flex flex-col text-base  text-[#5B5B5B] max-md:max-w-full">
              <div className="flex gap-3 max-md:flex-wrap">
              Ваша программа медицинского обследования будет адаптирована под ваши индивидуальные потребности и особенности организма. Это позволяет учитывать все нюансы вашего состояния здоровья и получать наиболее точные результаты, на основе которых можно разработать эффективный план лечения и профилактики.
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          title="Экономия времени и средств"
          isOpen={openSection === "feces"}
          onClick={() => toggleSection("feces")}
        >
          <AccordionContent>
            {/* Add your content for feces analysis here */}
            <div className="flex flex-col text-base  text-[#5B5B5B] max-md:max-w-full">
              <div className="flex gap-3 max-md:flex-wrap">
              Чек-апы помогают сэкономить время и ресурсы, предотвращая развитие серьезных заболеваний, требующих длительного и дорогостоящего лечения. Регулярное обследование позволяет своевременно выявить проблемы и избежать высоких затрат на лечение в будущем.
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          title="Повышение качества жизни"
          isOpen={openSection === "biochemical"}
          onClick={() => toggleSection("biochemical")}
        >
          <AccordionContent>
            {/* Add your content for biochemical analysis here */}
            <div className="flex flex-col text-base  text-[#5B5B5B] max-md:max-w-full">
              <div className="flex gap-3 max-md:flex-wrap">
              Регулярные проверки здоровья позволяют поддерживать оптимальное самочувствие и жизненный тонус. Вы будете более уверены в своем здоровье и сможете вести активный образ жизни, минимизируя риски возникновения хронических заболеваний и улучшая общее качество жизни.
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        {/* <Link href={`/${locale}/instructions`} className="flex flex-col justify-center py-px text-2xl text-red-400 border-т border-б border-solid border-neutral-200 max-md:max-w-full">
          <div className="flex gap-3.5 py-7 pr-20 max-md:flex-wrap max-md:pr-5">
            <span>Посмотреть все</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/df01962f1b2f9e82d103d70313443681fbb58f620a1804fe139f6fa84420e8e6?apiKey=e791e0f42eab4556ac944da69358f29b&"
              className="shrink-0 aspect-square w-[30px]"
              alt="View all icon"
            />
          </div>
        </Link> */}
      </div>
      <div className="flex flex-1 flex-col self-start max-md:max-w-full">
            <Image
            src={'/images/checkap.png'}
            width={1000}
            height={1000}
            alt="Advantages photo"
            className="object-cover rounded-3xl"
            />
</div>
    </section>
  );
}
