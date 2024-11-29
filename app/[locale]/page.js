import Main from '@/app/[locale]/components/Main'

export default async function HomePage({ params }) {
  return (
    <div>
      <Main params={params} />
    </div>
  )
}
