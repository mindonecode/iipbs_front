import React from 'react'

function TableDiv(props: {children: React.ReactNode}) {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
        {props.children}
    </div>
  )
}

export { TableDiv };