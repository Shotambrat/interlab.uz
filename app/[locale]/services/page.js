import { client } from '@/sanity/lib/client'
import ServiceBanner from '@/app/[locale]/components/Services/ServiceBanner'
import ServiceList from '@/app/[locale]/components/Services/ServiceList'

export default async function ServicePage({ params }) {
  const { locale } = params

  // Fetch services with their category info
  const services = await client.fetch(
    `*[_type == "servicepage"]{
      title,
      category->{
        _id,
        title
      }
    }`,
    { cache: 'no-store' }
  )
  // Fetch only categories that have at least one service
  const categories = await client.fetch(
    `*[_type == "categorypage"]`
  )

  return (
    <div>
      <ServiceBanner locale={locale} />
      <ServiceList
        services={services}
        categoriesProps={categories}
        locale={locale}
      />
    </div>
  )
}
