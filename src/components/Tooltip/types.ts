import type { Placement,Options  } from "@popperjs/core";
//TooltipProps 类型
export interface TooltipProps{
   content?: React.ReactNode;
  trigger?:'hover'|'click'//事件触发的类型
  placement?:Placement,
  tootipTrigger?:React.ReactNode
  children?:React.ReactNode,
  visibleChange?: (e:'visible-change',value:boolean)=>void;
  manual?:boolean//true 手动控制，false 自动控制
  popperOptionsType?:Partial<Options>
}
// Tooltip 方法
export interface TooltipInstance{
  show:()=>void
  hide:()=>void
}

// 添加 ForwardRef 类型支持
import type { ForwardedRef } from 'react';
export interface TooltipPropsWithRef extends TooltipProps {
  ref?: ForwardedRef<TooltipInstance>
}