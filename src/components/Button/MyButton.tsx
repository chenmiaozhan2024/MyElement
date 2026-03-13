import './MyButton.css'
import type { ButtonProps } from './MyButton.ts'
import className from 'classnames'
import React from 'react'

const MyButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = 'Default',
    size,
    plain = false,
    round = false,
    circle = false,
    disabled = false,
    loading = false,
    dashed = false,
    children,
    autoFocus,
    NativeType,
    ...rest // 收集其他原生属性
  } = props

  const classes = className('my-button', {
    [`is-plain`]: plain,
    [`is-round`]: round,
    [`is-circle`]: circle,
    [`is-disabled`]: disabled,
    [`is-loging`]: loading,
    [`is-dashed`]: dashed,
    [`my-button--${type}`]: type,
    [`my-button--${size}`]: size,
  })

  return (
    <button 
      ref={ref} // 传递 ref 到底层 button
      className={classes} 
      disabled={disabled} 
      type={NativeType} 
      autoFocus={autoFocus}
      {...rest} // 传递其他原生属性
    >
      {children}
    </button>
  )
})

MyButton.displayName = 'MyButton' // 设置组件名称，便于调试
export default MyButton