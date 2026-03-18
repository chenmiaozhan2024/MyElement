import React,{useEffect, useState} from "react";
import type {CollapseProps,nameType} from './type'
import {CollapseContext} from './CollapseContext'
// import MyIcon from "../Icon/MyIcon.tsx";
const MyCollapse:React.FC<CollapseProps>=(CollapseProps)=>{
  const {children,modelValue=[],accordion=false,onChange,onUpdateModelValue}=CollapseProps
  const [activeNames,setActiveNames]=useState<nameType[]>([])
  useEffect(()=>{
    setActiveNames(modelValue)
  },[modelValue])
  const handleItemClick = (item: nameType) => {
    let newActiveNames: nameType[];
    // 手风琴模式：只展开一个
    if (accordion) {
      newActiveNames = activeNames.includes(item) ? [] : [item];
    } 
    // 普通模式：多选
    else {
      const index = activeNames.indexOf(item);
      if (index > -1) {
        newActiveNames = activeNames.filter((name) => name !== item);
      } else {
        newActiveNames = [...activeNames, item];
      }
    }
    setActiveNames(newActiveNames);
  
    onChange?.(newActiveNames);
    onUpdateModelValue?.(newActiveNames);
  };
  return (
    <CollapseContext.Provider value={{activeNames,handleItemClick}}>
      <div className="my-collapse">{children}</div>
    </CollapseContext.Provider>
  )
}
export default MyCollapse