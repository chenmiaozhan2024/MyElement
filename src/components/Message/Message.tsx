import {MessageProps,MessageInstance} from './type.ts'
import {forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState} from "react";
import classNames from 'classnames'
import MyIcon from "../Icon/MyIcon.tsx";
import './style.css'
import {getLastBottomOffset, instances} from './method.ts'
const Message=forwardRef<MessageInstance,MessageProps>((props,ref)=>{
    const {message,during=3000,showClose,type='info',onDestory,id,offset=20}=props
    const classes=classNames('vk-message',{[`vk-message--${type}`]:type,[`is-close`]:showClose})
    useEffect(() => {
      const timer=  setTimeout(()=>{
            const all=instances
           const index=all.findIndex(item=>item.id===id)
          const prevInstance=index>0?all[index-1]:null
          console.log('pre',prevInstance)

        },0)
        return  ()=>clearTimeout(timer)
    }, []);

    //控制message组件是否显示
    const [visible,setVisible]=useState<boolean>(true)
    //设置到时间会取消自动关闭
    function startTimer(){
       if(during===0) return
       const timer=  setTimeout(()=>{
            setVisible(false)
        },during)
        return ()=>clearTimeout(timer)
    }
    const onChangeVisible=()=>{
        console.log('onChangeVisible')
       setVisible(false)
    }

    useEffect(() => {
        const clearTimer = startTimer()
        return clearTimer
        }, [during])
    useEffect(() => {
        if (!visible) {
            // 等动画结束（可选）再真正销毁
            const timer = setTimeout(() => {
                onDestory?.(); // 调用你传过来的 destroy()
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [visible, onDestory]);
    const messageRef=useRef<HTMLDivElement>(null)
    //这个div的高度
    const [height,setHeight]=useState<number>(0)
    //上一个实例的最下面的坐标数字，第一个是0
    const lastOffset=useMemo(()=>{
        return getLastBottomOffset(id!)
    },[])
    //这个元素应该使用的顶部top
    const topOffset=useMemo(()=>{
       return offset+lastOffset!
    },[offset,lastOffset,height])
    //这个元素为下一个元素预留的offset，也就是这个元素最低端的bottom的值
    const bottomOffset=useMemo(()=>{
       return  height+topOffset
    },[height,topOffset])
    const cssStyle=useMemo(()=>{
        return {
            top:topOffset+'px'
        }
    },[topOffset])
    useEffect(() => {
        const updateHeight = () => {
            const h = messageRef.current?.offsetHeight || 0
            setHeight(h)
        }
        updateHeight()
        const observer = new ResizeObserver(updateHeight)
        observer.observe(messageRef.current!)
    }, [])
    useImperativeHandle(ref, () => ({
        setVisible,
        height,
        bottomOffset: bottomOffset,
        show: () => setVisible(true),
        hide: () => setVisible(false),
    }))
    return (
        <>
            {visible&&<div className={classes} role={'alert'} ref={messageRef} style={cssStyle}>
                <div className="vk-message_content">
                    {message}
                </div>
                {showClose&&<div className="vk-message__close" onClick={onChangeVisible}>
                    <MyIcon name="xmark"  ></MyIcon>
                </div>
                }
            </div>}
        </>

    )
})
export default  Message