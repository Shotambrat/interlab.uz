import Banner from '@/app/[locale]/components/Licenses/Banner'
import List from '@/app/[locale]/components/Licenses/List'
import Info from '../../components/Licenses/Info'
import Blog from '../../components/Blog'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Head from 'next/head'


export const metadata = {
  title: 'Лицензия медицинского центра INTERMED – официальные документы',
  description: `Лицензия медицинского центра INTERMED подтверждает качество и законность предоставляемых медицинских услуг. Ознакомьтесь с лицензией и убедитесь в профессионализме нашей работы!  Лицензия медицинского центра INTERMED – гарантия качества и доверия

Медицинский центр *INTERMED* в Ташкенте предоставляет услуги на основе официальной лицензии, которая подтверждает соответствие нашей работы государственным стандартам и требованиям. Наша лицензия – это не просто документ, а свидетельство профессионализма, высокого уровня обслуживания и безопасности для наших пациентов.

Почему важна лицензия медицинского центра?

Лицензия медицинского учреждения – это документ, который гарантирует, что:

- Услуги центра предоставляются профессионалами с подтвержденной квалификацией.
- Оборудование соответствует современным стандартам и позволяет проводить точную диагностику и лечение.
- Все процедуры, от лабораторных исследований до сложных диагностических мероприятий, проводятся в соответствии с установленными нормами.
- Центр отвечает строгим санитарным и гигиеническим требованиям, что гарантирует безопасность пациентов.

В центре *INTERMED* вы можете быть уверены, что каждое направление нашей деятельности строго лицензировано и подкреплено необходимыми сертификатами.

Лицензия медицинского центра INTERMED: что в ней указано?

Наша лицензия охватывает все основные направления предоставления медицинских услуг:

- Консультации узких специалистов (терапевт, кардиолог, эндокринолог, невролог, педиатр).
- Диагностические исследования, включая УЗИ, ЭКГ и рентген.
- Лабораторные анализы, такие как общий анализ крови, биохимия, исследования на гормоны и инфекции.
- Лечение острых и хронических заболеваний, а также профилактика.

Каждое направление деятельности сертифицировано, что подтверждает наш высокий профессиональный уровень и соблюдение всех государственных нормативов.

Как проверить лицензию медицинского центра?

*INTERMED* предоставляет своим пациентам полный доступ к информации о лицензии. Вы можете ознакомиться с документом на нашем официальном сайте в разделе [Лицензия](https://interlab.uz/ru/about/licences).

В лицензии указаны:

- Регистрационный номер и дата выдачи.
- Полный перечень услуг, которые мы имеем право предоставлять.
- Данные о соответствии всем необходимым стандартам и требованиям.

Мы всегда открыты для наших пациентов и готовы предоставить все необходимые подтверждающие документы по вашему запросу.

Почему стоит выбрать лицензированный медицинский центр?

Выбор медицинского центра с лицензией – это залог вашей безопасности. Лицензия гарантирует:

- Профессионализм врачей и персонала.
- Использование сертифицированного оборудования.
- Соответствие всем нормам медицинской практики.

Центр *INTERMED* гордится своей лицензией, так как это является важным показателем нашего стремления предоставлять медицинские услуги высокого уровня.

Мы следуем высоким стандартам

Лицензия – это основа нашей работы, но мы идем дальше, обеспечивая комфорт и безопасность на каждом этапе взаимодействия с пациентом. Наша команда регулярно проходит обучение и курсы повышения квалификации, а оборудование обновляется в соответствии с последними достижениями медицинской техники.

Мы предлагаем комплексный подход, который включает не только диагностику и лечение, но и профилактические меры для поддержания здоровья.

Медицинский центр *INTERMED* – это не только современное медицинское учреждение, но и надежный партнер в вопросах здоровья. Наша лицензия подтверждает качество и законность предоставляемых услуг. Доверьтесь профессионалам – мы заботимся о вашем здоровье с соблюдением всех стандартов и норм!`,
  keywords: ' Почему стоит выбрать лицензированный медицинский центр?  , Как проверить лицензию медицинского центра?',
};


export default function Page({ params }) {
  const t = useTranslations('Main.Blogs')
  return (
    <>
    <Head>
    <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
      </Head>
    <div className='w-full bg-white flex flex-col gap-24 pb-24'>
      <Banner />
      <List />
      <Info />

      <div className='w-full max-w-[1440px] px-2 mx-auto flex flex-col gap-8'>
        <h2 className='text-4xl font-semibold'>{t('title')}</h2>
        <Blog locale={params.locale} />
        <div className='w-full flex justify-center'>
          <Link
            href={`/${params.locale}/blogs`}
            className='flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5'
          >
            <span className='my-auto'>{t('more')}</span>
          </Link>
        </div>
      </div>
    </div>
    </>
    
  )
}
