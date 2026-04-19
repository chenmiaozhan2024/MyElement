import React from "react";
import type {CollapseItemProps} from './type'
import classNames from 'classnames'
import {useCallapseContext} from './CollapseContext'
import MyIcon from '../Icon/MyIcon.tsx'
import './style.css'
const MyCollapseItem:React.FC<CollapseItemProps>=(CollapseItemProps)=>{
  const {name,title,disabled, children } =CollapseItemProps
  const {activeNames,handleItemClick}=useCallapseContext()
  const isActive=activeNames.includes(name)
  
  const itemClasses = classNames('my-collapse-item', {
    'is-disabled': disabled
  })
  
  const headerClasses = classNames('my-collapse-item__header', {
    'is-active': isActive
  })
  
  const contentClasses = classNames('my-collapse-item__content', {
    'is-active': isActive
  })

  return (
    <div className={itemClasses}>
      <div className={headerClasses} 
      id={`item-header-${name}`} 
      onClick={()=>!disabled&&handleItemClick(name)}
      >
        <span className="my-collapse-item__title">
          {CollapseItemProps.titleSlot||title}
        </span>
        <span className="my-collapse-item__arrow">
          <MyIcon name="arrow-right" size="16px" />
        </span>
      </div> 
      <div className={contentClasses} 
      id={`item-content-${name}`}
      > 
        {children}
      </div>
    </div>
  )
}
export default MyCollapseItem