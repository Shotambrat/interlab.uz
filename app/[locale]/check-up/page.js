import React from 'react'
import List from '../components/Checkup/List'
import Info from '../components/Checkup/Info'
import About from '../components/About'
import Application from '../components/Application'

export default function page({ params }) {
  return (
    <div className='flex flex-col gap-24 w-full pb-24'>
      <List locale={params.locale} />
      <div className='w-full max-w-[1440px] px-2 mx-auto'>
        <Info />
      </div>
      <About />
      <div className='w-full max-w-[1440px] mx-auto px-2'>
        <Application />
      </div>
    </div>
  )
}
