import React from 'react'
import { TooltipProps } from '../Tooltip/types'

export interface MenuOption {
  label: string | React.ReactNode
  key: string | number
  disabled?: boolean
  divided?: boolean
  children?: React.ReactNode
}

export interface DropdownProps extends TooltipProps {
  menuOptions: MenuOption[]
  // 事件定义在props上
  visibleChange?: (e: 'visible-change', value: boolean) => void
  onselect?: (e: 'select', value: MenuOption) => void
  hideAfterClick?: boolean
}

export interface DropdownInstance {
  show: () => void
  hide: () => void
}