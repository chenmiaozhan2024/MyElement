import './MyButton.css'
import type { ButtonProps } from './MyButton.ts'
import classNames from 'classnames'
import React from 'react'
import MyIcon from '../Icon/MyIcon.tsx'
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
    NativeType='button',
    className,
    icon,
    ...rest // 收集其他原生属性
  } = props

  const classes = classNames('my-button',className, {
    [`is-plain`]: plain,
    [`is-round`]: round,
    [`is-circle`]: circle,
    [`is-disabled`]: disabled||loading,
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
      {loading&&<MyIcon name="loading" className='my-button__icon'></MyIcon>}
      {!loading&&icon&& <MyIcon name={icon} className='my-button__icon'></MyIcon>}
      {children}
    </button>
  )
})

MyButton.displayName = 'MyButton' // 设置组件名称，便于调试
export default MyButton