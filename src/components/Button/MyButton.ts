import type React from "react"

// 按钮的属性
export type ButtonType='primary'|'success'|'info'|'warning'|'danger'|'Default'
// 按钮的大小
export type ButtonSize='large'|'small'
// 原生的type属性
export type NativeType='button'|'submit'|'reset'

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type?: ButtonType,
    size?: ButtonSize,
    plain?: boolean,
    round?: boolean,
    circle?: boolean,
    disabled?: boolean,
    NativeType?: NativeType,
    autoFocus?: boolean,
    icon?: string,
    loading?: boolean,
    dashed?: boolean,
    children: React.ReactNode
}