import React from "react";
import {Icon} from '@iconify/react'
import {MyIconProps} from './MyIcon'
const MyIcon:React.FC<MyIconProps>=(MyIconProps)=>{
  const {name,size=16,color,className,...restProps} =MyIconProps
  return (
    <Icon 
    icon={`ep:${name.toLocaleLowerCase()}`}
    // icon={`ep:${name.toLowerCase()}`} 
    width={size} 
    height={size} 
    color={color}
    style={{verticalAlign:'middle'}}
    className={className}
    {...restProps}
    >
   
    </Icon>
  )
}
export default MyIcon















// import React from 'react';
// import { Icon } from '@iconify/react';

// interface MyIconProps {
//   name: string;
//   size?: number | string;
//   color?: string;
// }

// const MyIcon: React.FC<MyIconProps> = ({ name, size = 16, color }) => {
//   return (
//     <Icon
//       icon={`ep:${name}`}
//       width={size}
//       height={size}
//       color={color}
//       style={{ verticalAlign: 'middle' }}
//     />
//   );
// };

// export default MyIcon;