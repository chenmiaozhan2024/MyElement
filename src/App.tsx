import MyButton from "./components/Button/MyButton.tsx"
import MyIcon from './components/Icon/MyIcon.tsx'
import MyCollapse from "./components/Collapse/Collapse.tsx"
import MyCollapseItem from "./components/Collapse/MyCollapseItem.tsx"
import {useEffect, useRef, useState,} from "react"
import {  createPopper } from "@popperjs/core"
import type { nameType } from "./components/Collapse/type.ts";
// import Tooltip from "./components/Tooltip/Tooltip.tsx"
import Dropdown from "./components/Dropdown/Dropdown.tsx"
function App() {
 const buttonRef=useRef<HTMLButtonElement>(null)
 const imgRef = useRef<HTMLImageElement>(null)
 const h1Ref = useRef<HTMLHeadingElement>(null)

 const handleClick=()=>{
  console.log('我被点击了');
 }

//  const handleManualShow = () => {
//   // 手动显示 Tooltip
//   tooltipRef.current?.show()
//  }

//  const handleManualHide = () => {
//   // 手动隐藏 Tooltip
//   tooltipRef.current?.hide()
//  }

useEffect(()=>{
  // ✅ 必须判断存在
  if (!imgRef.current || !h1Ref.current) return

  // ✅ 必须用 .current
  const poper= createPopper(imgRef.current, h1Ref.current, {
    placement: 'right',
  })
  const timer= setTimeout(() => {
    poper.setOptions({placement:'left'}).then(()=>{poper.update()})
  }, 1000);
  return()=>{
    clearTimeout(timer)
    poper.destroy()
  }
},[])
const menuOptions=[ {
  label: '选项一',
  key: '1',
}, {
  label: '选项二',
  key: '2',
  divided: true,
}, {
  label: '选项三',
  key: '3',
  disabled: true,
}, {
  label: '选项四',
  key: '4',
}, {
  label: '选项五',
  key: '5',
}];
 const [openValue,setOpenValue]=useState<nameType[]>(["a"])
  return (
    <>
   <div style={{ 
    position: 'relative', 
    display: 'inline-block',
    margin: '0 auto',    /* 水平居中 */
    textAlign: 'center', /* 文字/图片居中 */
    width: '100%',      /* 占满父容器宽度 */
  }}>
<Dropdown menuOptions={menuOptions} trigger="click" placement="bottom">
  <img src="../src/static/1.jpg" alt="" ref={imgRef} />
</Dropdown>

{/* 添加两个按钮来演示手动控制 */}

    
  </div>

    <h1>MyElement组件演练</h1>
    <h2>MyButton组件演练</h2>
    <MyButton type="Default" onClick={handleClick}   ref={buttonRef}>Default</MyButton>
    <MyButton type="primary">primary</MyButton>
    <MyButton type="success">success</MyButton>
    <MyButton type="info">info</MyButton>
    <MyButton type="warning">warning</MyButton>
    <MyButton type="danger">danger</MyButton>
    <div style={{ height: '20px' }}></div>
    <MyButton type="Default" plain={true}>Default</MyButton>
    <MyButton type="primary" plain={true}>primary</MyButton>
    <MyButton type="success" plain={true}>success</MyButton>
    <MyButton type="info" plain={true}>info</MyButton>
    <MyButton type="warning" plain={true}>warning</MyButton>
    <MyButton type="danger" plain={true}>danger</MyButton>
      <div style={{ height: '20px' }}></div>
    <MyButton type="Default"  round={true}>Default</MyButton>
    <MyButton type="primary"  round={true}>primary</MyButton>
    <MyButton type="success"  round={true}>success</MyButton>
    <MyButton type="info"     round={true}>info</MyButton>
    <MyButton type="warning"  round={true}>warning</MyButton>
    <MyButton type="danger"   round={true}>danger</MyButton>
      <div style={{ height: '20px' }}></div>
    <MyButton type="Default"  dashed={true} >Default</MyButton>
    <MyButton type="primary"  dashed={true} >primary</MyButton>
    <MyButton type="success"  dashed={true} >success</MyButton>
    <MyButton type="info"     dashed={true} >info</MyButton>
    <MyButton type="warning"  dashed={true} >warning</MyButton>
    <MyButton type="danger"   dashed={true} >danger</MyButton>
    <div style={{ height: '20px' }}></div>
    <MyButton icon="search"  circle={true}></MyButton>
    <MyButton type="primary" icon="Edit"  circle={true}></MyButton>
    <MyButton type="success" icon="Check"  circle={true}></MyButton>
    <MyButton type="info" icon="Message"  circle={true}></MyButton>
    <MyButton type="warning" icon="Star"  circle={true}></MyButton>
    <MyButton type="danger" icon="Delete"  circle={true}></MyButton>
    <h2 style={{ height: '50px' }}>MyIcon组件测试</h2>
    <MyIcon name="search" size="30px"></MyIcon>
    <MyIcon name="plus" color="#409eff" size="30px" />
    <h2 style={{ height: '50px' }}>MyCollapse组件测试</h2>
    <MyCollapse modelValue={openValue}  onUpdateModelValue={setOpenValue} accordion={true}>
      <MyCollapseItem name="a" titleSlot={<h1>nice title</h1>}>
       <h1>headline title</h1>
       <div>this is content a aaa</div>
      </MyCollapseItem>
      <MyCollapseItem name="b" title="nice title b item b">
        <div>this is bbbb test</div>
      </MyCollapseItem>
      <MyCollapseItem 
      name="c" 
      title="nice cccc" 
      disabled
      >
      <div>this is cccc test</div>
    </MyCollapseItem>
    </MyCollapse>

    </>
    
  )
}

export default App
