import React from 'react'

function SearchFormLeft(props: {children: React.ReactNode}) {
  return (
    <div className="grid grid-cols-12 gap-4 w-4/5 mx-4">
        {props.children}
    </div>
  )
}

export { SearchFormLeft };