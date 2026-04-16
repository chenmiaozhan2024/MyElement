import type {SwitchProps} from  './type.ts'
import './style.css'
import classNames from "classnames";
import {useEffect, useMemo, useRef, useState} from "react";

const MySwitch=(props:SwitchProps)=>{
    const {modelValue,disabled,activeText,inactiveText,name,size,onChange,onUpdateModelValue,activeValue=true,inactiveValue=false}=props


    const [innerValue,setInnerValue]=useState(modelValue)
    const checked=useMemo(()=>{
        return innerValue===activeValue
    },[activeValue,innerValue])
    const switchValue=()=>{
        if(disabled) return
        const newInnerValue=checked?inactiveValue:activeValue
        setInnerValue(newInnerValue)
        onUpdateModelValue?.(newInnerValue)
        onChange?.(newInnerValue)

    }
    const handleKeyDown=(e:React.KeyboardEvent)=>{
        if(e.key==='Enter'){
            console.log('e.key',e.key)
            e.preventDefault()
            switchValue()
        }
    }
    const classes=classNames('my-switch',{
        [`my-switch--${size}`]:size,
        'is-disabled':disabled,
        'is-checked':checked
    })
    const inputRef=useRef<HTMLInputElement>(null)
    // 初始化时同步 input.checked
    // useEffect(() => {
    //     if (inputRef.current) {
    //         inputRef.current.checked = checked;
    //     }
    // }, []);
    // (checked)：状态变了同步 DOM
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.checked = checked ;
        }
    }, [checked]);
    // props.modelValue)：外部值变化同步内部
    useEffect(() => {
        setInnerValue(modelValue);
    }, [modelValue]);
    return (
        <div className={classes} onClick={switchValue}>
            <input type="checkbox"  className={"my-switch_input"} role={"switch"} name={name} disabled={disabled} onKeyDown={handleKeyDown} ref={inputRef}/>
            <div className={"my-switch_core"}>
                <div className={"my-switch_core-inner"}>
                    {(activeText||inactiveText)&&(<span className={"my-switch_core-inner-text"}>{checked?activeText:inactiveText}</span>)
                    }
                </div>
                <div className={"my-switch_core-active"}>

                </div>
            </div>
        </div>
    )
}
export default  MySwitch