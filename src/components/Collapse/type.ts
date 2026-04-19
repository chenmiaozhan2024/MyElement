export type nameType=string|number

export interface CollapseItemProps{
  name: nameType
  title?:string
  disabled?:boolean
  titleSlot?:React.ReactNode
  children?:React.ReactNode
}
export interface CollapseProps{
  children?: React.ReactNode,
  modelValue?:nameType[]//默认打开,记录那个是打开的
  accordion?:boolean//是否打开手风琴模式
  onUpdateModelValue?: (values: nameType[]) => void;
  onChange?: (values: nameType[]) => void;
} 
export interface CollapseContextType{
  activeNames:nameType[]
  handleItemClick:(name:nameType)=>void
}
