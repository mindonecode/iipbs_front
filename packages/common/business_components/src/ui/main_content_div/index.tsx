import React from 'react'

export default function MainContentDiv(props: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
        {props.children}
    </div>
  )
}

export { MainContentDiv };