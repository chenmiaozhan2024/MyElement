export type SwitchValueType=boolean | string |number
export interface SwitchProps{
    modelValue?:SwitchValueType,//记录switch组件是开还是关
    disabled?:boolean,
    activeText?:string,
    inactiveText?:string,
    name?:string,
    id?:string,
    size?:'small'|'large',
    activeValue?:SwitchValueType,
    inactiveValue?:SwitchValueType,
    onChange?:(value:SwitchValueType)=>void
    onUpdateModelValue?:(value:SwitchValueType)=>void
}