function SearchDiv ({children}:{ children: React.ReactNode; }) {
   return (
      <div className="flex border border-black m-4 rounded-lg">
        {children}   
      </div>
    )
}
 
export { SearchDiv };