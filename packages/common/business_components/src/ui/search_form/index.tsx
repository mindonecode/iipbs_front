/**
 *  검색영역 스타일 
 */
const styles = {
    divStyle : {
      border: '1px solid black',
      margin: '1rem',
      display: 'flex',
      borderRadius: '1rem'
    } as React.CSSProperties
}

function SearchDiv ({children}:{ children: React.ReactNode; }) {
   return (
      <div style={styles.divStyle}>
        {children}   
      </div>
    )
}
 
export { SearchDiv };