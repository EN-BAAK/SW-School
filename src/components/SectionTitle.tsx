import React from 'react'

interface Props {
  title: string
}

const SectionTitle = ({title}: Props):React.JSX.Element => {
  return (
    <h1 className='text-[24px] font-semibold'>{title}</h1>
  )
}

export default SectionTitle
