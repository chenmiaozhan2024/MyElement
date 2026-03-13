import MyButton from "./components/Button/MyButton.tsx"
import {useRef} from "react"
function App() {
 const buttonRef=useRef<HTMLButtonElement>(null)
 const handleClick=()=>{
  console.log('我被点击了');
 }
  return (
   
    <>
    <h1>MyElement组件演练</h1>
    <MyButton type="Default" onClick={handleClick}   ref={buttonRef} >Default</MyButton>
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
    </>
  )
}

export default App
