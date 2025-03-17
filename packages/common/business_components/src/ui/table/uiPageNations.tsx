'use client'


import { useEffect, useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "./lib/pagination";


interface CommonPageNationsProps {
    total: number;
    cur: number;
    pageSize: number;
}

export default function UiPageNations(commonPageNationsProps: CommonPageNationsProps) {
    
    const [pageProps, setPageProps] = useState(commonPageNationsProps);


    useEffect(() => {  
        setPageProps(commonPageNationsProps);
    }  ,[commonPageNationsProps]);


    return(
        <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
        {
                Array.from({length:Math.ceil(commonPageNationsProps.total/commonPageNationsProps.pageSize)},(_,i)=>i+1).map((el,index)=>(
                <PaginationItem key={index}>
                    <PaginationLink href= '#'>{el}</PaginationLink>
                </PaginationItem>
                ))
         }
            <PaginationItem>
                <PaginationNext href="#" />
            </PaginationItem>
         
   
       
        </PaginationContent>
      </Pagination>
    );
}