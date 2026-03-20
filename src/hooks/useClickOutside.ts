import { RefObject, useEffect } from "react"
type useClickOutsideType = (
  elementRef: RefObject<HTMLElement | null>,
  callback: (e: MouseEvent) => void
) => void
// elementRef是绑定的那个元素，看看有没有在这个元素里面，在里面点击才会calback
const useClickOutside:useClickOutsideType=(elementRef,callback)=>{
  useEffect(()=>{
    const handler=(e:MouseEvent)=>{
      if(elementRef.current&&!elementRef.current.contains(e.target as HTMLElement)){
        callback(e)
      }
    }
    document.addEventListener('click',handler)
    return ()=>{
      document.removeEventListener('click',handler)
    }
  },[elementRef,callback])
}
export default useClickOutside