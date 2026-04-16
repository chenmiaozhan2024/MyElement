import React from "react";
import type { ReactNode } from 'react';
export interface MessageProps{
    message?:string|React.ReactNode
    during?:number;//message显示的时间
    showClose?:boolean;
    type?:'success'|'info'|'warning'|'error';
    onDestory:()=>void;
    id?:string;
    offset?:number
}
// 实例方法类型
export interface MessageInstance {
    show: () => void
    hide: () => void
    bottomOffset?: number 
}
export interface MessageContext{
    id:string;
    vnode:ReactNode;
    props:MessageProps
    ref:React.RefObject<MessageInstance> //对应vm
}

export type CreateMessageProps=Omit<MessageProps, 'onDestory'|'id'>
