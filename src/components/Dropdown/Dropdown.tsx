import React, { forwardRef, useMemo, useCallback } from 'react'
import { DropdownProps, DropdownInstance, MenuOption } from './type'
import Tooltip from '../Tooltip/Tooltip' // 修复拼写错误
import './style.css'

const Dropdown = forwardRef<DropdownInstance, DropdownProps>((props, ref) => {
  const {
    menuOptions,
    children,
    trigger,
    placement,
    popperOptionsType,
    openDelay,
    closeDelay,
    visibleChange,
    manual,
    onselect, // 你定义的事件名
    hideAfterClick = true, // 默认值为true
  } = props

  // 菜单项点击
  const itemClick = useCallback((option: MenuOption) => {
    if (option.disabled) return
    // 完全匹配你的类型定义
    onselect?.('select', option)

    // 点击后关闭下拉（和Vue逻辑一致）
    if (hideAfterClick && ref && 'current' in ref) {
      ref.current?.hide()
    }
  }, [onselect, ref, hideAfterClick])

  // 渲染菜单
  const menuList = useMemo(() => {
    if (!menuOptions) return null

    return menuOptions.map((item) => (
      <React.Fragment key={item.key}>
        {/* 分割线占位符 */}
        {item.divided && <li role="separator" className="divided-placeholder" />}
        {/* 菜单项   */}
        <li
          id={`dropdown-item-${item.key}`}
          className={[
            'vk-dropdown__item',
            item.disabled ? 'is-disabled' : '',
            item.divided ? 'is-divided' : ''
          ].filter(Boolean).join(' ')}
          onClick={() => itemClick(item)}
        >
          {item.label}
        </li>
      </React.Fragment>
    ))
  }, [menuOptions, itemClick])

  // 下拉内容
  const content = (
    <ul className="vk-dropdown__menu">
      {menuList}
    </ul>
  )

  return (
    <div className="vk-dropdown">
      <Tooltip
        ref={ref}
        trigger={trigger}
        placement={placement}
        popperOptionsType={popperOptionsType}
        openDelay={openDelay}
        closeDelay={closeDelay}
        content={content}
        visibleChange={visibleChange}
        manual={manual}
      >
        {children}
      </Tooltip>
    </div>
  )
})

export default Dropdown