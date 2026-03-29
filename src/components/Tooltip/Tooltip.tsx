import type {TooltipProps} from './types'
import { useState,useRef, useEffect, forwardRef,useImperativeHandle, useMemo } from 'react'
import type{Instance} from '@popperjs/core'
import { createPopper} from '@popperjs/core'
import useClickOutside from '../../hooks/useClickOutside'
import type {TooltipInstance} from './types'
import classNames from 'classnames'
import './style.css'
import {debounce} from 'lodash-es'

const Tooltip = forwardRef<TooltipInstance, TooltipProps>((props, ref) => {
  const {
    content,
    trigger="hover",
    placement='bottom',
    children, 
    tootipTrigger,
    visibleChange,
    manual=false,
    popperOptionsType,
    openDelay=0,
    closeDelay=0
  } =props
  const [isOpen,setIsOpen]=useState<boolean>(false)
  //弹出区
  const popperNode=useRef<HTMLDivElement|null>(null)
  //触发区域
  const triggerNode=useRef<HTMLDivElement|null>(null)
  const poperInstance = useRef<Instance | null>(null)
  // 整个 Tooltip
  const poperContainerNode=useRef<HTMLDivElement|null>(null)
  let openTime=0
  let closeTime=0
  //支持popper原来配置项
  const popperOptions=useMemo(()=>{
    return {
      ...popperOptionsType,
      placement: placement,
    }
  },[placement,popperOptionsType])
  
 
  const open=()=>{
    openTime++
    console.log(`open Time${openTime}`);
    
      setIsOpen(true)
      visibleChange?.('visible-change',true)
 
  }
  const close=()=>{
    closeTime++
    console.log(`closeTime${closeTime}`);
      setIsOpen(false)
      visibleChange?.('visible-change',false)

  }
 
  const openDeBounce=debounce(open,openDelay)
  const closeDeBounce=debounce(close,closeDelay)
const openFinal=()=>{
  closeDeBounce.cancel()  // 取消 closeDeBounce
  openDeBounce.cancel()   // 取消之前的 openDeBounce
  openDeBounce()
}

const closeFinal=()=>{
  openDeBounce.cancel()   // 取消 openDeBounce
  closeDeBounce.cancel()  // 取消之前的 closeDeBounce
  closeDeBounce()
}
  const togglePopper=()=>{
    if(isOpen){
       closeFinal()
      
    }else{
     openFinal()
    }
  }
  // 直接定义事件处理属性
  const eventHandlers = {
    onMouseEnter: trigger === 'hover'&&!manual ? openFinal : undefined,
    onMouseLeave: trigger === 'hover'&&!manual ? closeFinal : undefined,
    onClick: trigger === 'click'&&!manual ? togglePopper : undefined
  }
  useClickOutside(poperContainerNode,()=>{
    if(trigger==='click'&&isOpen&&!manual){
      closeFinal()
    }
  })
  useImperativeHandle(ref,()=>({
    show:openFinal,
    hide:closeFinal
  }))
  // useEffect(()=>{
  //   if(isOpen&&triggerNode.current&&popperNode.current){
  //     poperInstance.current=createPopper(triggerNode.current,popperNode.current,popperOptions)   
  //   }
   
  //   return ()=>{
  //     poperInstance.current?.destroy()
  //   }
  // },[isOpen,popperOptions])
  useEffect(()=>{
  // 组件挂载时创建 Popper 实例
  if(triggerNode.current&&popperNode.current){
    poperInstance.current=createPopper(triggerNode.current,popperNode.current,popperOptions)   
  }
 
  return ()=>{
    poperInstance.current?.destroy()
  }
},[]) // 只在挂载时执行

// 如果需要更新位置，可以添加另一个 useEffect
useEffect(()=>{
  if(poperInstance.current){
    poperInstance.current.update()
  }
},[isOpen])
  // 弹出层类名
  const popperClassNames = classNames('my-tooltip__popper', {
    'is-active': isOpen,
  })
  
  return (
    <div className={'my-tooltip'} {...eventHandlers} ref={poperContainerNode}>
      <div className={'my-tooltip__trigger'} ref={triggerNode} >
        {children}
      </div>
      <div className={popperClassNames} ref={popperNode}>
         {tootipTrigger||content}
      </div>
    </div>
  )
}) 
export default Tooltip