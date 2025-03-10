function SearchDiv ({children}:{ children: React.ReactNode; }) {
   return (
      <div className="flex border border-black m-4 rounded-lg min-h-[80px]">
        {children}   
      </div>
    )
}
 
export { SearchDiv };
