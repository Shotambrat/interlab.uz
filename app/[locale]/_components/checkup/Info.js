'use client'

import UpRedIcon from '@/public/svg/arrow-right-up.svg'
import DownBlckIcon from '@/public/svg/arrow-right-down-blck.svg'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { useLocale } from 'next-intl'

const data = [
  {
    id: '1',
    title: {
      ru: 'Раннее выявление проблем',
      uz: 'Muammolarni erta aniqlash'
    },
    description: {
      ru: 'Чек-апы помогают обнаружить скрытые болезни на ранней стадии, когда лечение наиболее эфективно',
      uz: 'Check-up’lar yashirin kasalliklarni erta bosqichda aniqlashga yordam beradi, bu davolash eng samarali yo`l bo‘ladi'
    }
  },
  {
    id: '2',
    title: {
      ru: 'Индивидуальный подход к здоровью',
      uz: 'Salomatlikka individual yondashuv'
    },
    description: {
      ru: 'Ваша программа медицинского обследования будет адаптирована под ваши индивидуальные потребности и особенности организма.',
      uz: 'Sizning tibbiy tekshiruv dasturingiz individual ehtiyojlaringiz va tanangizning xususiyatlariga moslashtiriladi.'
    }
  },
  {
    id: '3',
    title: {
      ru: 'Экономия времени и средств',
      uz: 'Vaqt va mablag‘larni tejash'
    },
    description: {
      ru: 'Чек-апы помогают сэкономить время и ресурсы, предотвращая развитие серьезных заболеваний, требующих длительного и дорогостоящего лечения.',
      uz: 'Check-up’lar vaqt va resurslarni tejashga yordam beradi, jiddiy kasalliklarning rivojlanishini oldini oladi, bu kasalliklar uzoq va qimmat davolanishni talab qiladi.'
    }
  },
  {
    id: '4',
    title: {
      ru: 'Повышение качества жизни',
      uz: 'Hayot sifatini oshirish'
    },
    description: {
      ru: 'Регулярные проверки здоровья позволяют поддерживать оптимальное самочувствие и жизненный тонус.',
      uz: 'Sog‘liqni muntazam tekshirish optimal farovonlikni va hayotiy tonusni saqlashga yordam beradi.'
    }
  }
]

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className='border-t border-b border-solid border-neutral-200'>
      <summary
        onClick={onClick}
        className={`flex gap-5 justify-center items-center py-7 ${isOpen ? 'text-red-400' : 'text-black'} text-xl max-md:flex-wrap max-md:max-w-full cursor-pointer`}
      >
        <span className='flex-auto'>{title}</span>
        {isOpen ? (
          <Image
            src={'/svg/arrow-up-red.svg'}
            alt={`Up icon red`}
            priority
            width={30}
            height={30}
            quality={100}
            className='h-4 w-4'
          />
        ) : (
          <Image
            src={'/svg/arrow-down-blck.svg'}
            alt={`Down icon black`}
            priority
            width={30}
            height={30}
            quality={100}
            className='h-4 w-4'
          />
        )}
      </summary>
      <Transition
        show={isOpen}
        enter='transition-all duration-500 ease-in-out'
        enterFrom='max-h-0 opacity-0'
        enterTo='max-h-screen opacity-100'
        leave='transition-all duration-500 ease-in-out'
        leaveFrom='max-h-screen opacity-100'
        leaveTo='max-h-0 opacity-0'
      >
        <div className='overflow-hidden'>{children}</div>
      </Transition>
    </div>
  )
}

const AccordionContent = ({ children }) => {
  return <div className='py-5 px-4'>{children}</div>
}

export default function Info() {
  const locale = useLocale()
  const [houseCall, setHouseCall] = useState(false)
  const [openSection, setOpenSection] = useState('1')

  const toggleSection = section => {
    setOpenSection(openSection === section ? '' : section)
  }

  const getTitle = (id) => {
    // locale bo'yicha to'g'ri tarjimani olish, agar bo'lmasa, ruscha variantni ko'rsatish
    return data.find(item => item.id === id)?.title[locale] || data.find(item => item.id === id)?.title['ru']
  }

  const getDescription = (id) => {
    // locale bo'yicha to'g'ri tarjimani olish, agar bo'lmasa, ruscha variantni ko'rsatish
    return data.find(item => item.id === id)?.description[locale] || data.find(item => item.id === id)?.description['ru']
  }

  return (
    <section className='flex gap-14 justify-between slg:flex-nowrap max-slg:flex-col flex-wrap max-md:max-w-full'>
      <div className='flex flex-1 flex-col w-full'>
        <div className='pb-8 flex flex-col gap-4'>
          <h2 className='text-4xl font-semibold w-full max-w-[400px]'>
            {locale === 'ru'
              ? 'Комплексная забота о вашем здоровье'
              : 'Sizning salomatligingizni kompleks parvarishlash'}
          </h2>
          <p className='text-lg w-full max-w-[500px]'>
            {locale === 'ru'
              ? 'Чек-апы - это комплексные программы обследований, которые помогают оценить состояние здоровья'
              : 'Check-up’lar – bu salomatlikni baholashga yordam beradigan kompleks tekshiruv dasturlari'}
          </p>
        </div>
        {data.map((item , index) => (
          <AccordionItem
            key={index}
            title={getTitle(item.id)}
            isOpen={openSection === item.id}
            onClick={() => toggleSection(item.id)}
          >
            <AccordionContent>
              {/* Add your content for blood analysis here */}
              <div className='flex flex-col text-base  text-[#5B5B5B] max-md:max-w-full'>
                <div className='flex gap-3 max-md:flex-wrap'>
                {getDescription(item.id)}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}

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
      <div className='flex flex-1 flex-col self-start max-md:max-w-full'>
        <Image
          src={'/images/checkap.png'}
          width={1000}
          height={1000}
          alt='Advantages photo'
          className='object-cover rounded-3xl'
        />
      </div>
    </section>
  )
}
