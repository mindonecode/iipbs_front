import { Tabs, TabsList, TabsTrigger } from '@common/components/ui';
import React from 'react';

interface TabItem {
  value: string;
  label: string;
}

interface UITabProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  tabList: TabItem[];
  children: React.ReactNode;
}

const UITab  = React.forwardRef<
  HTMLDivElement,
  UITabProps
>(({defaultValue, tabList, children}, ref)=>{
    return (
      <Tabs defaultValue={defaultValue || tabList[0]?.value} className={"w-full space-x-1 border-b border-gray-200"}>
        <TabsList className="flex space-x-1">
          {tabList.map((tab) => (
            <TabsTrigger 
              key={tab.value}
              value={tab.value}
              className="py-2 px-4 text-sm font-medium border-b-2 focus:outline-none data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {children}
      </Tabs>
    )
})
export { UITab };
