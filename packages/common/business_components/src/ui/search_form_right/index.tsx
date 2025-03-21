import React from 'react'

function SearchFormRight(props: {children: React.ReactNode}) {
  return (
    <div className="w-1/5 mx-5 flex items-center justify-end space-x-2">
        {props.children}
    </div>
  )
}

export { SearchFormRight };