import { useTranslations } from "next-intl"


export default function InstructionBody({steps , description , locale}) {
    const t = useTranslations('Instructions')


  return (
    <div className="w-full max-w-[1440px] lg:mt-[200px] px-2 mx-auto flex flex-col gap-6">
        <h2 className="text-4xl font-semibold">
            {t('instruction')}
        </h2>
        <p className='lg:text-[20px]  text-[16px] mt-[40px] mdx:mt-[60px] lg:mt-0 text-[#5B5B5B] leading-[#5B5B5B] mdx:leading-[23px] lg:leading-[23px]'>
        {description[locale]}
        </p>
        {
            steps.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">{item.title[locale]}</h3>
                    <p>{item.description[locale]}</p>
                </div>
            ))
        }
    </div>
  )
}
