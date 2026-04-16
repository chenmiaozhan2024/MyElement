import React, {createElement} from 'react'
import { createRoot } from 'react-dom/client'
import {CreateMessageProps, MessageContext,MessageInstance} from './type.ts'
import MessageConstructor from './Message.tsx'
let seed=1
export const instances: MessageContext[] = []
export const createMessage = (props: CreateMessageProps) => {
    // 1. 创建容器 div
    const container = document.createElement('div')
    const id=`message_${seed++}`

    const destory=()=>{
        //销毁，同时需要删除instances数组项
        const index=instances.findIndex((item)=>item.id===id)
        if(index===-1) return
        //删除数组中对应的项
        instances.splice(index,1)
        //销毁组件
        root.render(null)
        //把外层的div也移除
        container.remove()
    }
    const newProps={
        ...props,
        onDestory:destory,
        id
    }
    // 2. 创建组件
    const vnode = createElement(MessageConstructor, newProps)
    console.log('vnode',vnode)
    // 3. React 18/19 标准渲染写法
    const root = createRoot(container)
    root.render(vnode)

    // 4. 挂载到 body
    const messageRef = React.createRef<MessageInstance>()
    document.body.appendChild(container)
    const instance={
        id,
        vnode,
        props:newProps,
        ref:messageRef
    }
    instances.push(instance)
    return instance
}
//获取数组中最后一个元素
export const getLastInstance=()=>{
    return instances.at(-1)
}
//获取上一个元素的offset
export const getLastBottomOffset=(id:string)=>{
    const idx=instances.findIndex((item)=>item.id===id)
    if(idx<=0){
        return
    }else{
        const prev= instances[idx-1]
        return prev.ref.current?.bottomOffset || 0
    }
    // return 0
}
