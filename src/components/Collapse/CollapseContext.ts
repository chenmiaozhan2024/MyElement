import {createContext,useContext} from 'react'
import type { CollapseContextType } from './type'
export const CollapseContext=createContext<CollapseContextType|undefined>(undefined)
export const useCallapseContext=()=>{
  const context=useContext(CollapseContext)
  if(!context){
      throw new Error('useCallapseContext 必须在MyCollapse组件内使用')
  }
  return context
}