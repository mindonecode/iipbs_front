import React from 'react'

function Title(props: {title: string}) {
  return (
    <h1 className="text-2xl font-bold mb-6">{props.title}</h1>
  )
}

export { Title };