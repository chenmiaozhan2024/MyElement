import React from "react";

export interface InputProps{
    type:string,
    size?:'large'|'small',
    disabled?:boolean,
    clearable?:boolean,
    showPassword?:boolean,
    prepend?:React.ReactNode,
    append?:React.ReactNode,
    prefix?:React.ReactNode,
    suffix?:React.ReactNode
}